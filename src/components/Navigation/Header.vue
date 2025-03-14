
<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'
import { useUserStore } from '@/stores/user'
import { useCommandPalattesStore } from '@/stores/command'
import { useMenuStore } from '@/stores/menu'
import {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
} from '@headlessui/vue'
import { MagnifyingGlassIcon } from '@heroicons/vue/24/solid'
import PictureInitial from '@/components/PictureInitial.vue'
import { useDialogStore } from '@/stores/dialog'
import { IconApp, IconBars3 } from '@/utils/icons'
import { RouterLink, useRoute } from 'vue-router'
import { computed } from 'vue'

const auth = useAuthStore()
const user = useUserStore()
const command = useCommandPalattesStore()
const menu = useMenuStore()
const dialog = useDialogStore()
const route = useRoute()
const pageTitle = computed(() => route.name)


const openSideBar = () => menu.toggleSidebar()

const showDialogLogout = () => {
    dialog.type = 'error'
    dialog.title = 'Logout dari akun?'
    dialog.content = 'Apakah Anda sudah yakin akan logout dari akun ini?'
    dialog.cancelText = 'Batalkan'
    dialog.confirmText = 'Ya, logout'
    dialog.showCancelButton = true
    dialog.onConfirm = () => {
        auth.logout()
        window.location.href = '/login'
    }
    dialog.open = true
}
</script>


<template>
    <div class="sticky top-0 z-10 flex flex-shrink-0 h-16 bg-primary-50 md:ml-80">
        <button type="button" class="px-4 text-gray-500 focus:outline-none focus:ring-0 md:hidden" @click="openSideBar">
            <span class="sr-only">Open sidebar</span>
            <IconBars3 class="w-6 h-6 fill-gray-600" />
        </button>
        <RouterLink to="/home" class="flex items-center flex-shrink-0 my-auto ml-2 md:hidden">
            <img class="w-auto h-11" :src="IconApp" alt="PLN" />
        </RouterLink>
        <div class="flex-grow w-full justify-center mt-3">
            <h1 class="text-xl font-medium md:text-3xl text-dark text-center">{{ pageTitle }}</h1>
        </div>
        <div class="flex justify-end w-auto px-4">
            <div class="flex items-center ml-4 md:ml-6">
                <!-- <button @click="command.showCommandPalettes" type="button"
                    class="flex flex-row items-center md:w-[300px] p-2 mr-2 text-gray-400 bg-white rounded-full hover:text-primary-500 focus:outline-none focus:ring-0">
                    <span class="sr-only">Search</span>
                    <MagnifyingGlassIcon class="w-6 h-6 text-primary-500" aria-hidden="true" />
                    <span class="hidden px-3 text-sm font-medium text-gray-500 md:block text-md">Cari menu</span>
                </button> -->

                <!-- Profile dropdown -->
                <Menu as="div" class="relative ml-1 w-36">
                    <div>
                        <MenuButton
                            class="flex items-center max-w-xs px-1 py-1 text-sm rounded-full bg-secondary-100 md:bg-primary-500 focus:outline-none focus:ring-0 line-clamp-1">
                            <span class="sr-only">Open user menu</span>
                            <PictureInitial size-class="w-8 h-8" background-class="bg-secondary-100"
                                font-class="text-xs font-bold text-primary-500" :name="user.user_name" />
                            <span class="hidden px-3 text-xs font-medium md:block text-primary-50 line-clamp-1">
                                {{ user.user_name }}
                            </span>
                        </MenuButton>
                    </div>
                    <transition enter-active-class="transition duration-100 ease-out"
                        enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
                        leave-active-class="transition duration-75 ease-in"
                        leave-from-class="transform scale-100 opacity-100" leave-to-class="transform scale-95 opacity-0">

                        <MenuItems class="container-menu-item">
                            <div class="container-menu-profile group">
                                <div class="flex items-center">
                                    <div>
                                        <PictureInitial class-name="inline-block" size-class="w-9 h-9"
                                            background-class="bg-secondary-100"
                                            font-class="text-xs font-normal font-semibold text-primary-500"
                                            :name="user.user_name" />
                                    </div>
                                    <div class="ml-3 space-y-1">
                                        <p class="text-sm font-medium text-primary-50 ">
                                            {{ user.user_name }}
                                        </p>
                                        <p class="text-xs font-normal text-primary-50">
                                            {{ user.user_access }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <MenuItem v-slot="{ active }">
                            <button @click="showDialogLogout" :class="[active ? 'menu-item-active' : 'menu-item']">
                                Log out
                            </button>
                            </MenuItem>
                        </MenuItems>
                    </transition>
                </Menu>
            </div>
        </div>
    </div>
</template>