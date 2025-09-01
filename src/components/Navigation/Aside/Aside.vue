<script setup lang="ts">
import { onMounted, watch } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import {
    Dialog,
    DialogPanel,
    TransitionChild,
    TransitionRoot,
} from '@headlessui/vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'
import { useMenuStore } from '@/stores/menu'
import { IconBars3 } from '@/utils/icons'
import IconApp from '@/assets/images/brandlogo.png'
import AsideMenuSingle from '@/components/Navigation/Aside/AsideMenuSingle.vue'
import AsideMenuMultiple from '@/components/Navigation/Aside/AsideMenuMultiple.vue'

const menu = useMenuStore()
const route = useRoute()

watch(route, (to, _) => {
    menu.menuSelected = to.fullPath
    closeSideBar()
})

onMounted(() => {
    menu.expandCurrentActiveMenu()
})

const isMenu = (name: string) => {
    return menu.menuSelected === name
}

const closeSideBar = () => menu.toggleSidebar()

</script>

<template>
    <TransitionRoot as="template" :show="menu.sidebarOpen">
        <Dialog as="div" class="relative z-40 md:hidden" @close="closeSideBar">
            <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0"
                enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100"
                leave-to="opacity-0">
                <div class="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </TransitionChild>

            <div class="fixed inset-0 z-40 flex">
                <TransitionChild as="template" enter="transition ease-in-out duration-300 transform"
                    enter-from="-translate-x-full" enter-to="translate-x-0"
                    leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0"
                    leave-to="-translate-x-full">
                    <DialogPanel class="relative flex flex-col flex-1 w-full max-w-xs pt-5 pb-4 bg-primary-50">
                        <TransitionChild as="template" enter="ease-in-out duration-300" enter-from="opacity-0"
                            enter-to="opacity-100" leave="ease-in-out duration-300" leave-from="opacity-100"
                            leave-to="opacity-0">
                            <div class="absolute top-0 right-0 pt-2 -mr-12">
                                <button type="button"
                                    class="flex items-center justify-center w-10 h-10 ml-1 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                    @click="closeSideBar">
                                    <span class="sr-only">Close sidebar</span>
                                    <XMarkIcon class="w-6 h-6 text-white" aria-hidden="true" />
                                </button>
                            </div>
                        </TransitionChild>
                        <!-- <div class="flex items-center flex-shrink-0 px-4">
                            <RouterLink to="/">
                                <img class="w-auto h-12 md:h-16" :src="IconApp" alt="listrik" />
                            </RouterLink>
                        </div> -->
                        <div class="flex-1 h-0 mt-5 overflow-y-auto">
                            <nav class="px-2 space-y-1">
                                <template v-for="item in menu.navigation" :key="item.name">
                                    <!-- Single-level item -->
                                    <AsideMenuSingle v-if="item.children.length === 0" :item="item"
                                        :selected="isMenu(item.path)" />

                                    <!-- Nested item with children -->
                                    <AsideMenuMultiple v-else :item="item" :selected="isMenu(item.path)" />
                                </template>
                            </nav>
                        </div>
                    </DialogPanel>
                </TransitionChild>
                <div class="flex-shrink-0 w-14" aria-hidden="true">
                    <!-- Dummy element to force sidebar to shrink to fit close icon -->
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
    <!-- Static sidebar for desktop -->
    <div class="z-10 hidden md:fixed md:inset-y-0 md:flex md:w-80 md:flex-col">
        <!-- Sidebar component, swap this element with another sidebar if you like -->
        <div class="flex flex-row items-center flex-shrink-0 h-16 px-2 bg-primary-50">
            <button type="button"
                class="px-4 py-4 text-gray-500 rounded-full hover:bg-primary-100 focus:outline-none focus:ring-0"
                @click="menu.toggleSidebarDesktop()">
                <span class="sr-only">Open sidebar</span>
                <IconBars3 class="w-6 h-6 fill-gray-600" />

            </button>
            <!-- <RouterLink to="/home">
                <img class="w-auto h-11" :src="IconApp" alt="listrik" />
            </RouterLink> -->
        </div>
        <span v-if="menu.sidebarShowed" class="px-4 mt-4 text-sm font-semibold text-primary-800">
            Menu
        </span>
        <div :class="[menu.sidebarShowed ? 'flex flex-col flex-grow overflow-y-auto' : 'hidden']">
            <div class="flex flex-col flex-grow mt-3">
                <nav class="flex-1 px-2 pb-4 space-y-1">
                    <template v-for="item in menu.navigation" :key="item.name">
                        <!-- Single-level item -->
                        <AsideMenuSingle v-if="item.children.length === 0" :item="item" :selected="isMenu(item.path)" />

                        <!-- Nested item with children -->
                        <AsideMenuMultiple v-else :item="item" :selected="isMenu(item.path)" />
                    </template>
                </nav>
            </div>
        </div>
    </div>
</template>