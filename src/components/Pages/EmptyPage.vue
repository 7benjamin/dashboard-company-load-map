<template>
    <div class="flex flex-col items-center justify-center w-full min-h-full">
        <component :is="icon" class="w-16 h-16 mb-3 fill-primary-300" />
        <dt class="text-lg font-medium text-center text-gray-800">
            {{ title }}
        </dt>
        <dd class="text-sm text-center text-gray-800">
            {{ desc }}
        </dd>
        <button v-if="props.type !== 'no_filter' && props.type !== 'not_found'"
            class="px-3 py-2 mt-4 text-white rounded-lg bg-primary-500" @click="action">
            {{ actionTitle }}
        </button>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import {
    IconFilter,
    IconFileX,
    IconNetworkDisconnected,
    IconNetworkChange,
    IconLinkBreak,
    IconLockKey,
    IconDatabase,
    IconSmileySad
} from '@/utils/icons'
import { useRouter } from 'vue-router';

const router = useRouter()
const props = defineProps({
    type: {
        type: String as () => "no_filter" | "not_found" | "disconnect" | "connection_change" | "error_404" | "error_403" | "error_500",
        default: 'error_404',
        required: true
    },
    action: {
        type: Function as () => void,
        default: () => { }
    }
})

const title = computed(() => {
    switch (props.type) {
        case 'no_filter':
            return 'Pilih Filter'
        case 'not_found':
            return 'Tidak ditemukan'
        case 'disconnect':
            return 'Koneksi Terputus'
        case 'connection_change':
            return 'Perubahan Koneksi'
        case 'error_404':
            return 'Error 404'
        case 'error_403':
            return 'Error 403'
        case 'error_500':
            return 'Error 500'
        default:
            return 'Tidak ditemukan'
    }
})

const desc = computed(() => {
    switch (props.type) {
        case 'no_filter':
            return 'Silahkan terapkan filter di atas untuk mulai menampilkan data'
        case 'not_found':
            return 'Data yang kamu cari tidak ditemukan'
        case 'disconnect':
            return 'Harap hubungkan perangkat ke jaringan internet'
        case 'connection_change':
            return 'Terjadinya perubahan koneksi, harap muat ulang halaman'
        case 'error_404':
            return 'Halaman yang kamu tuju tidak ditemukan'
        case 'error_403':
            return 'Kamu tidak punya akses ke halaman ini'
        case 'error_500':
            return 'Terjadi kesalahan, silahkan coba beberapa saat lagi'
        default:
            return 'Terjadi kesalahan, silahkan coba beberapa saat lagi'
    }
})

const icon = computed(() => {
    switch (props.type) {
        case 'no_filter':
            return IconFilter
        case 'not_found':
            return IconFileX
        case 'disconnect':
            return IconNetworkDisconnected
        case 'connection_change':
            return IconNetworkChange
        case 'error_404':
            return IconLinkBreak
        case 'error_403':
            return IconLockKey
        case 'error_500':
            return IconDatabase
        default:
            return IconSmileySad
    }
})

const actionTitle = computed(() => {
    switch (props.type) {
        case 'disconnect':
            return 'Coba Lagi'
        case 'connection_change':
            return 'Muat Ulang'
        case 'error_404':
            return 'Kembali'
        case 'error_403':
            return 'Kembali'
        case 'error_500':
            return 'Kembali'
        default:
            return 'Kembali'
    }
})

const action = () => {
    switch (props.type) {
        case 'disconnect':
            return props.action
        case 'connection_change':
            return props.action
        case 'error_404':
            if (window.history.length > 1) {
                return window.history.back()
            } else {
                return router.push('/home')
            }
        case 'error_403':
            if (window.history.length > 1) {
                return window.history.back()
            } else {
                return router.push('/home')
            }
        case 'error_500':
            return props.action
        default:
            if (window.history.length > 1) {
                return window.history.back()
            } else {
                return router.push('/home')
            }
    }
}
</script>