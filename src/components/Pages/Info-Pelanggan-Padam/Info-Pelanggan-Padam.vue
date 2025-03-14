<template>
    <div class="flex w-full">
            <ShowMap :datamap="mapUrl" />
    </div>

</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/user'
import ShowMap from '@/components/ShowMap.vue'

const user = useUserStore()
const mapUrl = import.meta.env.VITE_MAP_URL + 'pelangganpadam?token=' + user.user_role


</script>