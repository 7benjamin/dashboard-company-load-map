<template>
    <TransitionRoot :show="command.open" @after-leave="onQueryChange('')" appear>
        <Dialog as="div" class="relative z-10" @close="command.closeCommand">
            <TransitionChild enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100"
                leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-25 backdrop-blur" />
            </TransitionChild>

            <div class="fixed inset-0 z-10 p-4 overflow-y-auto sm:p-6 md:p-20">
                <TransitionChild enter="ease-out duration-300" enter-from="opacity-0 scale-95"
                    enter-to="opacity-100 scale-100" leave="ease-in duration-200" leave-from="opacity-100 scale-100"
                    leave-to="opacity-0 scale-95">
                    <!-- max-w-2xl mx-auto overflow-hidden transition-all transform bg-white bg-opacity-80 divide-y divide-gray-500 shadow-2xl divide-opacity-10 rounded-xl ring-0 ring-black ring-opacity-5 -->
                    <DialogPanel
                        class="max-w-2xl mx-auto overflow-hidden transition-all transform bg-white bg-opacity-100 divide-y divide-gray-500 shadow-2xl divide-opacity-10 rounded-xl ring-0 ring-black ring-opacity-5">
                        <Combobox>
                            <div class="relative">
                                <MagnifyingGlassIcon
                                    class="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-900 text-opacity-40"
                                    aria-hidden="true" />
                                <ComboboxInput :autofocus="false"
                                    class="w-full h-12 pr-4 text-gray-900 placeholder-gray-500 bg-white border-0 pl-11 focus:ring-0 sm:text-sm"
                                    placeholder="Cari menu..." @change="onQueryChange($event.target.value)" />
                            </div>

                            <ComboboxOptions v-if="query === '' || filteredMenus.length > 0" static
                                class="overflow-y-auto divide-y divide-gray-500 scroll-py-2 divide-opacity-10">
                                <li class="p-2" v-if="filteredMenus.length > 0 || recent.length > 0">
                                    <h2 v-if="query === '' && recent.length > 0"
                                        class="px-3 mt-4 mb-2 text-xs font-semibold text-gray-900">
                                        Terakhir Diakses
                                    </h2>
                                    <ul class="text-sm text-gray-700">
                                        <ComboboxOption as="template" v-for="menu in query === '' ? recent : filteredMenus"
                                            :key="menu.path" v-slot="{ active }">
                                            <li @click="command.openMenu(menu)"
                                                :class="['flex flex-row cursor-pointer select-none items-center rounded-md px-3 py-2', active && 'bg-gray-900 bg-opacity-5 text-gray-900']">
                                                <component v-if="menu.path.includes('/regu-tracking')" :is="navigationIcon[0]"
                                                    alt="icon"
                                                    :class="['h-6 w-6 flex-none', active ? 'opacity-100' : 'opacity-40']" />
                                                <component v-else-if="menu.path.includes('/regu-history-track')"
                                                    :is="navigationIcon[1]" alt="icon"
                                                    :class="['h-6 w-6 flex-none', active ? 'opacity-100' : 'opacity-40']" />
                                                <component v-else-if="menu.path.includes('/draw-area-layanan-yantek')"
                                                    :is="navigationIcon[2]" alt="icon"
                                                    :class="['h-6 w-6 flex-none', active ? 'opacity-100' : 'opacity-40']" />
                                                <component v-else-if="menu.path.includes('/info-pelanggan-padam')"
                                                    :is="navigationIcon[3]" alt="icon"
                                                    :class="['h-6 w-6 flex-none', active ? 'opacity-100' : 'opacity-40']" />
                                                <component v-else-if="menu.path.includes('/dashboard-eis-management')"
                                                    :is="navigationIcon[4]" alt="icon"
                                                    :class="['h-6 w-6 flex-none', active ? 'opacity-100' : 'opacity-40']" />
                                                <component v-else-if="menu.path.includes('/dashboard-monitoring-wo')"
                                                    :is="navigationIcon[5]" alt="icon"
                                                    :class="['h-6 w-6 flex-none', active ? 'opacity-100' : 'opacity-40']" />

                                                <div class="flex flex-col flex-1 ml-3 space-y-1">
                                                    <span class="text-sm font-medium text-gray-800 line-clamp-1">
                                                        {{ menu.name }}
                                                    </span>
                                                    <span class="text-xs text-gray-500 line-clamp-1">
                                                        {{ menu.path.replace('/home/', '') }}
                                                    </span>
                                                </div>
                                                <span v-if="active" class="flex-none ml-3 text-gray-500">
                                                    Buka
                                                </span>

                                            </li>
                                        </ComboboxOption>
                                    </ul>
                                    <ul class="text-sm text-gray-700">
                                        <ComboboxOption as="template" v-for="menu in query === '' ? recent : filteredMenus"
                                            :key="menu.path" v-slot="{ active }">
                                            <li @click="command.openMenu(menu)"
                                                :class="['flex flex-row cursor-pointer select-none items-center rounded-md px-3 py-2', active && 'bg-primary-500 text-white']">
                                                <component v-if="menu.path.includes('/info-pelanggan-padam/')" :is="navigationIcon[0]"
                                                    alt="icon"
                                                    :class="['h-6 w-6 flex-none', active ? 'fill-white' : 'fill-gray-600']" />
                                                <component v-else-if="menu.path.includes('/keluhan/')"
                                                    :is="navigationIcon[1]" alt="icon"
                                                    :class="['h-6 w-6 flex-none', active ? 'fill-white' : 'fill-gray-600']" />
                                                <component v-else-if="menu.path.includes('/dashboard-eis-management/')"
                                                    :is="navigationIcon[2]" alt="icon"
                                                    :class="['h-6 w-6 flex-none', active ? 'fill-white' : 'fill-gray-600']" />
                                                <component v-else-if="menu.path.includes('/check-in-out/')"
                                                    :is="navigationIcon[3]" alt="icon"
                                                    :class="['h-6 w-6 flex-none', active ? 'fill-white' : 'fill-gray-600']" />
                                                <component v-else-if="menu.path.includes('/anomali-pengaduan/')"
                                                    :is="navigationIcon[4]" alt="icon"
                                                    :class="['h-6 w-6 flex-none', active ? 'fill-white' : 'fill-gray-600']" />
                                                <component v-else-if="menu.path.includes('/ctt-kwh-periksa/')"
                                                    :is="navigationIcon[5]" alt="icon"
                                                    :class="['h-6 w-6 flex-none', active ? 'fill-white' : 'fill-gray-600']" />
                                                <component v-else-if="menu.path.includes('/material/')"
                                                    :is="navigationIcon[6]" alt="icon"
                                                    :class="['h-6 w-6 flex-none', active ? 'fill-white' : 'fill-gray-600']" />
                                                <component v-else-if="menu.path.includes('/transaksi/')"
                                                    :is="navigationIcon[7]" alt="icon"
                                                    :class="['h-6 w-6 flex-none', active ? 'fill-white' : 'fill-gray-600']" />
                                                <component v-else :is="navigationIcon[8]" alt="icon"
                                                    :class="['h-6 w-6 flex-none', active ? 'fill-white' : 'fill-gray-600']" />

                                                <div class="flex flex-col flex-1 ml-3 space-y-1">
                                                    <span
                                                        :class="[active ? 'text-white' : 'text-gray-800', 'text-sm font-medium line-clamp-1']">
                                                        {{ menu.name }}
                                                    </span>
                                                    <span
                                                        :class="[active ? 'text-white' : 'text-gray-500', 'text-xs line-clamp-1']">
                                                        {{ menu.path.replace('/home/', '') }}
                                                    </span>
                                                </div>
                                                <span v-if="active" class="flex-none ml-3 text-gray-200">
                                                    Buka
                                                </span>

                                            </li>
                                        </ComboboxOption>
                                    </ul>
                                </li>
                            </ComboboxOptions>

                            <div v-if="query !== '' && filteredMenus.length === 0" class="px-6 text-center py-14 sm:px-14">
                                <h2 class="font-semibold text-slate-900">Tidak ada hasil</h2>

                                <p class="mt-2 text-sm leading-6 text-slate-600">
                                    Kami tidak dapat menemukan menu apa pun dengan istilah itu saat ini, silahkan gunakan
                                    kata kunci lainnya.
                                </p>
                            </div>
                        </Combobox>
                    </DialogPanel>
                </TransitionChild>
            </div>
        </Dialog>
    </TransitionRoot>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { MagnifyingGlassIcon } from '@heroicons/vue/20/solid'
import {
    Combobox,
    ComboboxInput,
    ComboboxOptions,
    ComboboxOption,
    Dialog,
    DialogPanel,
    TransitionChild,
    TransitionRoot,
} from '@headlessui/vue'
import { routes } from '@/router'
import { useCommandPalattesStore } from '@/stores/command'
import { navigationIcon } from '@/utils/route'

const command = useCommandPalattesStore()
const recent = computed(() => command.open ? command.readRecent() : [])
const query = ref('')
const filteredMenus = computed(() =>
    query.value === ''
        ? []
        : command.searchRoutesByName(routes, query.value)
)

let debounceTimeout: ReturnType<typeof setTimeout> | null = null;
const onQueryChange = (value: string) => {
    if (debounceTimeout) {
        clearTimeout(debounceTimeout);
    }
    debounceTimeout = setTimeout(() => {
        // check if value is empty or only spaces
        if (value.trim() === '') {
            query.value = ''
            return
        }
        query.value = value
    }, 300);
}

</script>