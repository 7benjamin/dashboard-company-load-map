import { ref, shallowRef, watch } from 'vue'
import { defineStore } from 'pinia'
import { useRoute, useRouter } from 'vue-router'
import { convertRouteToMenu } from '@/utils/route'
import { routes } from '@/router'
import type { MenuItemModel } from '@/types/menu'
import { splitRoutePath } from '@/utils/texts'
import { useCommandPalattesStore } from '@/stores/command'
import { useFiltersStore } from './filters'

export const useMenuStore = defineStore('menu', () => {
    const filters = useFiltersStore()
    const route = useRoute()
    const navigation = ref<MenuItemModel[]>([])
    const sidebarOpen = ref(false)
    const sidebarShowed = ref(true)
    const router = useRouter()
    const command = useCommandPalattesStore()
    const menuSelected = ref(route.fullPath)
    const toggleSidebar = () => (sidebarOpen.value = !sidebarOpen.value)
    const toggleSidebarMenu = (path: string, newExpanded: boolean): void => {
        const toggleItemExpanded = (items: MenuItemModel[]): void => {
            for (const item of items) {
                if (item.path === path) {
                    item.expanded = newExpanded
                } else {
                    if (newExpanded) {
                        if (!path.includes(item.path)) {
                            item.expanded = !newExpanded;
                        }
                    }
                }
                if (item.children && item.children.length > 0) {
                    toggleItemExpanded(item.children)
                }
            }
        }

        toggleItemExpanded(navigation.value)
    }
    const toggleSidebarDesktop = () => (sidebarShowed.value = !sidebarShowed.value)
    const collapseAllMenu = (): void => {
        for (const item of navigation.value) {
            item.expanded = false
        }
    }

    watch(menuSelected, (value) => {
        if (value !== '/login' && value !== '/404' && value !== '/home' && value !== '/') {
            const result = command.searchRoutesPath(routes, value)
            if (result.length > 0) {
                const route = result.find((item) => item.path === value)
                if (route) {
                    command.addRecent(route)
                }
            }
        } else {
            collapseAllMenu()

            filters.setConfig({
                type: '',
                reportButton: false
            })
        }
    })

    const expandCurrentActiveMenu = (): void => {
        const menuData = convertRouteToMenu(routes[0]?.children || [])
        navigation.value = menuData
        menuSelected.value = router.currentRoute.value.fullPath

        if (menuSelected.value !== '/' && menuSelected.value !== '/home' && menuSelected.value.includes('/home')) {
            const result = splitRoutePath(menuSelected.value)

            for (const route of result) {
                if (route !== '/home') {
                    toggleSidebarMenu(route, true)
                }
            }
        }
    }

    return {
        collapseAllMenu,
        expandCurrentActiveMenu,
        navigation,
        toggleSidebar,
        sidebarOpen,
        menuSelected,
        toggleSidebarMenu,
        sidebarShowed,
        toggleSidebarDesktop
    }
})