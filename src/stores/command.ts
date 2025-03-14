import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useRouter, type RouteRecordRaw } from 'vue-router'
import { readDataJson, writeDataJson } from '@/utils/storage'
import { extractLeafRoutes } from '@/router'
import { useMenuStore } from '@/stores/menu'

export const useCommandPalattesStore = defineStore('command_palettes', () => {
    const open = ref(false)
    const route = useRouter()
    const menu = useMenuStore()
    const controlStatus = ref(false)
    const keyFStatus = ref(false)

    const showCommandPalettes = () => {
        open.value = true
    }

    const onKeyPressed = (event: KeyboardEvent) => {
        if (event.key === 'Control') {
            console.log('control pressed');
            controlStatus.value = true
        }

        if (event.key === 'f') {
            console.log('f pressed');
            keyFStatus.value = true
        }

        if (controlStatus.value && keyFStatus.value) {
            showCommandPalettes()
        }
    }

    const onKeyUp = (event: KeyboardEvent) => {
        if (event.key === 'Control') {
            console.log('control released');
            controlStatus.value = false
        }

        if (event.key === 'f') {
            console.log('f released');
            keyFStatus.value = false
        }
    }

    const readRecent = (): RouteRecordRaw[] => {
        const recent = readDataJson('recentmenu')
        if (recent) {
            try {
                JSON.parse(recent)
            } catch (error) {
                return recent as RouteRecordRaw[]
            }
        }
        return [] as RouteRecordRaw[]
    }

    const addRecent = (menu: RouteRecordRaw) => {
        const lastRecent = readRecent()
        const index = lastRecent.findIndex((item: RouteRecordRaw) => item.path === menu.path)
        if (index > -1) {
            lastRecent.splice(index, 1)
        }
        lastRecent.unshift(menu)
        if (lastRecent.length > 5) {
            lastRecent.pop()
        }

        writeDataJson('recentmenu', lastRecent)
    }

    const searchRoutesByName = (routes: RouteRecordRaw[], query: string): RouteRecordRaw[] => {
        const matchingRoutes = extractLeafRoutes(routes, '').filter((item: RouteRecordRaw) => item.path.includes('home/') && item.name?.toString().toLocaleLowerCase().includes(query.toLocaleLowerCase()))
        return matchingRoutes
    }

    const searchRoutesPath = (routes: RouteRecordRaw[], query: string): RouteRecordRaw[] => {
        const matchingRoutes = extractLeafRoutes(routes, '').filter((item: RouteRecordRaw) => item.path.includes('home/') && item.path === query)
        return matchingRoutes
    }

    const openMenu = (routeTarget: RouteRecordRaw) => {
        addRecent(routeTarget)
        route.push(routeTarget.path)
        closeCommand()
        setTimeout(() => {
            menu.expandCurrentActiveMenu()
        }, 200);
    }

    const closeCommand = () => {
        open.value = false
    }

    return {
        open,
        showCommandPalettes,
        onKeyPressed,
        onKeyUp,
        addRecent,
        readRecent,
        searchRoutesByName,
        searchRoutesPath,
        openMenu,
        closeCommand
    }
})