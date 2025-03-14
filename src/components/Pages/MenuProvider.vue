<template>
    <main
        class="flex flex-col justify-between flex-1 overflow-y-auto bg-white rounded-t-2xl rounded-b-2xl md:rounded-t-3xl no-scroll-bar mx-3 my-3">
        <div v-if="route.path !== '/home'" class="w-full">
        </div>
        <div class="flex-1 dx-viewport">
            <Filters :report-button="filters.config.reportButton" class="mb-4" v-if="filters.config.component">
                <component :is="filters.config.component" />
            </Filters>

            <slot></slot>
        </div>
    </main>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useFiltersStore } from '@/stores/filters';

import Filters from '../Form/Filters.vue'

// Dapatkan objek route dari vue-router
const route = useRoute()

// Dapatkan nama rute menggunakan computed property
const pageTitle = computed(() => route.name)
const filters = useFiltersStore()
</script>