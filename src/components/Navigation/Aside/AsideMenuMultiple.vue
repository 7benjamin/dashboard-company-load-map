<script setup lang="ts">
import { computed } from 'vue'
import type { MenuItemModel } from '@/types/menu'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { useMenuStore } from '@/stores/menu'
import { IconDotOutline } from '@/utils/icons'
import AsideMenuSingle from '@/components/Navigation/Aside/AsideMenuSingle.vue'
const menu = useMenuStore()

const props = defineProps({
    item: {
        type: Object as () => MenuItemModel,
        required: true
    },
    selected: {
        type: Boolean,
        required: true
    },
    isChildren: {
        type: Boolean,
        default: false
    }
})

const isMenu = (name: string) => {
    return menu.menuSelected === name
}

const isMenuSelected = computed(() => {
    return props.item.children.find((d) => d.path === menu.menuSelected) || props.item.children.find((d) => d.children.find((e) => e.path === menu.menuSelected))
})
</script>

<template>
    <div :class="[isChildren ? 'ml-2 mt-1 bg-primary-100 rounded-xl' : '']">
        <Disclosure :defaultOpen="item.expanded">
            <DisclosureButton @click="menu.toggleSidebarMenu(item.path, !item.expanded)"
                :class="[(isMenuSelected || item.expanded || isChildren) ? 'bg-primary-100 font-bold' : 'font-semibold text-aside hover:bg-primary-100 hover:text-primary-500', isMenuSelected ? 'text-primary-500' : 'text-gray-600', isChildren ? 'pl-1 pr-2' : 'px-2', 'group w-full flex items-center py-2 text-left text-xs rounded-lg focus:outline-none focus:ring-0']">
                <component v-if="isChildren" :is="IconDotOutline"
                    :class="[(isMenuSelected || item.expanded) ? ' fill-primary-500' : 'text-aside group-hover:fill-primary-500', 'mr-2 flex-shrink-0 h-6 w-6']"
                    aria-hidden="true" />
                <component v-else :is="item.icon"
                    :class="[(isMenuSelected || item.expanded || isChildren || selected) ? ' fill-primary-500' : 'text-aside group-hover:fill-primary-500', 'mr-2 flex-shrink-0 h-6 w-6']"
                    aria-hidden="true" />
                <span
                    :class="[(isMenuSelected || item.expanded || selected) ? 'text-primary-500' : 'group-hover:text-primary-500', 'flex-1']">
                    {{ item.name }}
                </span>

                <svg :class="[isMenuSelected ? 'text-primary-500' : 'text-gray-300 group-hover:text-gray-500', item.expanded ? 'rotate-180' : '', 'ml-3 flex-shrink-0 transform transition-colors duration-150 ease-in-out ']"
                    width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                        d="M4.44002 8.9399C4.72127 8.659 5.10252 8.50122 5.50002 8.50122C5.89752 8.50122 6.27877 8.659 6.56002 8.9399L12 14.3799L17.44 8.9399C17.7244 8.67494 18.1005 8.53069 18.4891 8.53755C18.8777 8.54441 19.2484 8.70183 19.5233 8.97666C19.7981 9.25148 19.9555 9.62225 19.9624 10.0109C19.9692 10.3995 19.825 10.7756 19.56 11.0599L13.06 17.5599C12.7788 17.8408 12.3975 17.9986 12 17.9986C11.6025 17.9986 11.2213 17.8408 10.94 17.5599L4.44002 11.0599C4.15912 10.7787 4.00134 10.3974 4.00134 9.9999C4.00134 9.6024 4.15912 9.22115 4.44002 8.9399Z"
                        :fill="isMenuSelected ? '#14A2BA' : '#647375'" />
                </svg>
            </DisclosureButton>
            <transition enter-active-class="overflow-hidden transition-all duration-300"
                enter-from-class="transform scale-95 max-h-0" enter-to-class="transform scale-100  max-h-[1000px]"
                leave-active-class="overflow-hidden transition-all duration-300"
                leave-from-class="transform scale-100  max-h-[1000px]" leave-to-class="transform scale-95 max-h-0">
                <div v-show="item.expanded">
                    <DisclosurePanel :class="['bg-primary-100 rounded-xl ml-4', 'space-y-1']" static>
                        <!-- Nested children -->
                        <template v-for="(subItem, index) in item.children" :key="subItem.path">
                            <!-- Single-level child -->
                            <AsideMenuSingle v-if="subItem.children.length === 0" :item="subItem" :is-children="true"
                                :selected="isMenu(subItem.path)" />
                            <!-- Multiple-level child -->
                            <AsideMenuMultiple v-else :item="subItem" :selected="subItem.path === menu.menuSelected"
                                :is-children="true" />
                        </template>
                    </DisclosurePanel>
                </div>

            </transition>

        </Disclosure>
    </div>
</template>