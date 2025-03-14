<template>
    <div class="flex flex-col items-center justify-between px-4 text-center whitespace-pre-wrap h-[calc(90vh-24px)]">
        <div class="w-full flex-1 md:w-[440px] justify-center py-4 md:py-0 flex flex-col items-center">
            <img :src="IconApp" alt="pln" class="h-[66px] object-contain mx-auto mb-4">
            <button @click="command.showCommandPalettes" type="button"
                class="flex flex-row items-center w-full p-2 text-gray-400 rounded-full bg-gray-50 hover:text-primary-500 focus:outline-none focus:ring-0">
                <span class="sr-only">Search</span>
                <MagnifyingGlassIcon class="w-6 h-6 text-primary-500" aria-hidden="true" />
                <span class="px-3 text-sm font-medium text-gray-500 text-md">Cari menu</span>
            </button>

            <div class="flex mt-3.5" v-if="filteredMenus.length === 0 && recent.length === 0">
                <h1 class="text-sm text-center text-gray-800">
                    Silahkan cari menu atau buka menu di samping kiri untuk memulai
                </h1>
            </div>

            <div v-if="query === '' || filteredMenus.length > 0" static class="w-full mt-6 md:mt-8 lg:mt-12">
                <div class="flex flex-col items-start w-full p-2" v-if="filteredMenus.length > 0 || recent.length > 0">
                    <h2 v-if="query === '' && recent.length > 0" class="mb-2 text-xs font-semibold text-gray-900 ">
                        Terakhir Diakses
                    </h2>
                    <div class="flex flex-col w-full space-y-3" v-for="menu in query === '' ? recent : filteredMenus"
                        :key="menu.path">
                        <div @click="command.openMenu(menu)" class="group">
                            <div
                                class="flex flex-row items-center justify-between px-3 py-2 rounded-md cursor-pointer select-none group-hover:bg-primary-500 group-hover:text-white group-hover:bg-opacity-80">
                                <component v-if="menu.path.includes('/regu-tracking')" :is="navigationIcon[0]" alt="icon"
                                    :class="['w-8 h-8 fill-gray-600 group-hover:fill-white flex']" />
                                <component v-else-if="menu.path.includes('/regu-history-track')" :is="navigationIcon[1]" alt="icon"
                                    :class="['w-8 h-8 fill-gray-600 group-hover:fill-white flex']" />
                                <component v-else-if="menu.path.includes('/draw-area-layanan-yantek')" :is="navigationIcon[2]" alt="icon"
                                    :class="['w-8 h-8 fill-gray-600 group-hover:fill-white flex']" />
                                <component v-else-if="menu.path.includes('/info-pelanggan-padam')" :is="navigationIcon[3]"
                                    alt="icon" :class="['w-8 h-8 fill-gray-600 group-hover:fill-white flex']" />
                                <component v-else-if="menu.path.includes('/dashboard-eis-management')" :is="navigationIcon[4]"
                                    alt="icon" :class="['w-8 h-8 fill-gray-600 group-hover:fill-white flex']" />
                                <component v-else-if="menu.path.includes('/dashboard-monitoring-wo')" :is="navigationIcon[5]"
                                    alt="icon" :class="['w-8 h-8 fill-gray-600 group-hover:fill-white flex']" />

                                <div class="flex flex-col items-start flex-1 w-full pl-3 space-y-1">
                                    <span
                                        class="w-full text-sm font-medium text-gray-800 text-start group-hover:text-white line-clamp-1">
                                        {{ menu.name }}
                                    </span>
                                    <span
                                        class="w-full text-xs text-gray-500 text-start group-hover:text-white line-clamp-1">
                                        {{ menu.path.replace('/home/', '') }}
                                    </span>
                                </div>
                                <span class="hidden ml-3 text-sm text-gray-500 group-hover:block group-hover:text-white">
                                    Buka
                                </span>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { MagnifyingGlassIcon } from '@heroicons/vue/20/solid';
import { computed, ref } from 'vue'
import { useCommandPalattesStore } from '@/stores/command'
import IconApp from '@/assets/images/logo.png'
import { type RouteRecordRaw } from 'vue-router'
import { routes, extractLeafRoutes } from '@/router'
import { navigationIcon } from '@/utils/route';

const command = useCommandPalattesStore()
const recent = computed(() => query.value === '' ? command.readRecent() : [])
const query = ref('')

const searchRoutesByName = (routes: RouteRecordRaw[], query: string): RouteRecordRaw[] => {
    const matchingRoutes = extractLeafRoutes(routes, '').filter((item: RouteRecordRaw) => item.path.includes('home/') && item.name?.toString().toLocaleLowerCase().includes(query.toLocaleLowerCase()))
    return matchingRoutes
}

const filteredMenus = computed(() =>
    query.value === ''
        ? []
        : searchRoutesByName(routes, query.value)
)

</script>