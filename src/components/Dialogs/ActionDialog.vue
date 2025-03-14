<script setup lang="ts">
import { useDialogStore } from '@/stores/dialog'
import {
    Dialog,
    DialogPanel,
    DialogTitle,
    TransitionChild,
    TransitionRoot
} from '@headlessui/vue'
import { computed, ref } from 'vue'

const props = defineProps({
    open: Boolean,
    title: String,
    message: String,
    cancelText: {
        type: String,
        default: 'Batal',
    },
    confirmText: {
        type: String,
        default: 'Oke',
    },
    type: {
        type: String,
        default: 'normal',
    },
    dismissOnAction: {
        type: Boolean,
        default: true,
    },
    showCancelButton: {
        type: Boolean,
        default: true,
    },
})

const emits = defineEmits(['onClose', 'onCancel', 'onConfirm'])
const open = ref(computed(() => props.open))
const title = ref(computed(() => props.title))
const message = ref(computed(() => props.message))
const cancelText = ref(computed(() => props.cancelText))
const confirmText = ref(computed(() => props.confirmText))
const type = ref(computed(() => props.type))
const dismissOnAction = ref(computed(() => props.dismissOnAction))
const showCancelButton = ref(computed(() => props.showCancelButton))
const dialog = useDialogStore()

const close = () => {
    dialog.open = false
    emits('onClose')
}

const handleOnCancel = () => {
    emits('onCancel')
    if (dismissOnAction) {
        close()
    }
}

const handleOnConfirm = () => {
    emits('onConfirm')
    if (props.dismissOnAction) {
        close()
    }
}

const handleOnClose = () => {
    if (props.dismissOnAction) {
        close()
    }
}

</script>

<template>
    <TransitionRoot as="template" :show="open">
        <Dialog as="div" class="relative z-20" @close="handleOnClose">
            <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100"
                leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
            </TransitionChild>

            <div class="fixed inset-0 z-10 overflow-y-auto">
                <div class="flex items-center justify-center min-h-full p-4 text-center sm:p-0">
                    <TransitionChild as="template" enter="ease-out duration-300"
                        enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200"
                        leave-from="opacity-100 translate-y-0 sm:scale-100"
                        leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                        <DialogPanel
                            :class="[type === 'error' || type === 'warning' ? 'sm:max-w-lg' : 'sm:max-w-sm sm:p-6', 'relative overflow-hidden text-left transition-all transform bg-white rounded-xl sm:my-8 sm:w-full']">
                            <!-- Body Section -->
                            <div v-if="type === 'error'" class="px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4">
                                <div class="sm:flex sm:items-start">
                                    <div
                                        class="flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto bg-red-100 rounded-full sm:mx-0 sm:h-10 sm:w-10">
                                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none"
                                            class="w-6 h-6 text-red-600 fill-red-600">
                                            <path
                                                d="M13 0C10.4288 0 7.91543 0.762437 5.77759 2.1909C3.63975 3.61935 1.97351 5.64968 0.989572 8.02512C0.0056327 10.4006 -0.251811 13.0144 0.249797 15.5362C0.751405 18.0579 1.98953 20.3743 3.80762 22.1924C5.6257 24.0105 7.94208 25.2486 10.4638 25.7502C12.9856 26.2518 15.5995 25.9944 17.9749 25.0104C20.3503 24.0265 22.3807 22.3603 23.8091 20.2224C25.2376 18.0846 26 15.5712 26 13C25.9964 9.5533 24.6256 6.24882 22.1884 3.81163C19.7512 1.37445 16.4467 0.00363977 13 0ZM13 24C10.8244 24 8.69767 23.3549 6.88873 22.1462C5.07979 20.9375 3.66989 19.2195 2.83733 17.2095C2.00477 15.1995 1.78693 12.9878 2.21137 10.854C2.63581 8.72022 3.68345 6.7602 5.22183 5.22183C6.76021 3.68345 8.72022 2.6358 10.854 2.21136C12.9878 1.78692 15.1995 2.00476 17.2095 2.83733C19.2195 3.66989 20.9375 5.07979 22.1462 6.88873C23.3549 8.69767 24 10.8244 24 13C23.9967 15.9164 22.8367 18.7123 20.7745 20.7745C18.7123 22.8367 15.9164 23.9967 13 24ZM12 14V7C12 6.73478 12.1054 6.48043 12.2929 6.29289C12.4804 6.10536 12.7348 6 13 6C13.2652 6 13.5196 6.10536 13.7071 6.29289C13.8946 6.48043 14 6.73478 14 7V14C14 14.2652 13.8946 14.5196 13.7071 14.7071C13.5196 14.8946 13.2652 15 13 15C12.7348 15 12.4804 14.8946 12.2929 14.7071C12.1054 14.5196 12 14.2652 12 14ZM14.5 18.5C14.5 18.7967 14.412 19.0867 14.2472 19.3334C14.0824 19.58 13.8481 19.7723 13.574 19.8858C13.2999 19.9993 12.9983 20.0291 12.7074 19.9712C12.4164 19.9133 12.1491 19.7704 11.9393 19.5607C11.7296 19.3509 11.5867 19.0836 11.5288 18.7926C11.471 18.5017 11.5007 18.2001 11.6142 17.926C11.7277 17.6519 11.92 17.4176 12.1667 17.2528C12.4133 17.088 12.7033 17 13 17C13.3978 17 13.7794 17.158 14.0607 17.4393C14.342 17.7206 14.5 18.1022 14.5 18.5Z"
                                                fill="#CC0000" />
                                        </svg>
                                    </div>
                                    <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                        <DialogTitle as="h3" class="text-base font-semibold leading-6 text-gray-900">
                                            {{ title }}
                                        </DialogTitle>
                                        <div class="mt-2">
                                            <p class="text-sm text-gray-500">
                                                {{ message }}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div v-else-if="type === 'warning'" class="px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4">
                                <div class="sm:flex sm:items-start">
                                    <div
                                        class="flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto bg-yellow-100 rounded-full sm:mx-0 sm:h-10 sm:w-10">
                                        <!-- <QuestionMarkCircleIcon class="w-6 h-6 text-orange-600" aria-hidden="true" /> -->
                                        <svg width="32" height="32" viewBox="0 0 32 32" class="w-6 h-6 text-yellow-700">
                                            <path opacity="0.2"
                                                d="M27 6V11H5V6C5 5.73478 5.10536 5.48043 5.29289 5.29289C5.48043 5.10536 5.73478 5 6 5H26C26.2652 5 26.5196 5.10536 26.7071 5.29289C26.8946 5.48043 27 5.73478 27 6Z"
                                                fill="#999900" />
                                            <path
                                                d="M26 4H23V3C23 2.73478 22.8946 2.48043 22.7071 2.29289C22.5196 2.10536 22.2652 2 22 2C21.7348 2 21.4804 2.10536 21.2929 2.29289C21.1054 2.48043 21 2.73478 21 3V4H11V3C11 2.73478 10.8946 2.48043 10.7071 2.29289C10.5196 2.10536 10.2652 2 10 2C9.73478 2 9.48043 2.10536 9.29289 2.29289C9.10536 2.48043 9 2.73478 9 3V4H6C5.46957 4 4.96086 4.21071 4.58579 4.58579C4.21071 4.96086 4 5.46957 4 6V26C4 26.5304 4.21071 27.0391 4.58579 27.4142C4.96086 27.7893 5.46957 28 6 28H26C26.5304 28 27.0391 27.7893 27.4142 27.4142C27.7893 27.0391 28 26.5304 28 26V6C28 5.46957 27.7893 4.96086 27.4142 4.58579C27.0391 4.21071 26.5304 4 26 4ZM9 6V7C9 7.26522 9.10536 7.51957 9.29289 7.70711C9.48043 7.89464 9.73478 8 10 8C10.2652 8 10.5196 7.89464 10.7071 7.70711C10.8946 7.51957 11 7.26522 11 7V6H21V7C21 7.26522 21.1054 7.51957 21.2929 7.70711C21.4804 7.89464 21.7348 8 22 8C22.2652 8 22.5196 7.89464 22.7071 7.70711C22.8946 7.51957 23 7.26522 23 7V6H26V10H6V6H9ZM26 26H6V12H26V26ZM19.7075 16.7075L17.4137 19L19.7075 21.2925C19.8004 21.3854 19.8741 21.4957 19.9244 21.6171C19.9747 21.7385 20.0006 21.8686 20.0006 22C20.0006 22.1314 19.9747 22.2615 19.9244 22.3829C19.8741 22.5043 19.8004 22.6146 19.7075 22.7075C19.6146 22.8004 19.5043 22.8741 19.3829 22.9244C19.2615 22.9747 19.1314 23.0006 19 23.0006C18.8686 23.0006 18.7385 22.9747 18.6171 22.9244C18.4957 22.8741 18.3854 22.8004 18.2925 22.7075L16 20.4137L13.7075 22.7075C13.6146 22.8004 13.5043 22.8741 13.3829 22.9244C13.2615 22.9747 13.1314 23.0006 13 23.0006C12.8686 23.0006 12.7385 22.9747 12.6171 22.9244C12.4957 22.8741 12.3854 22.8004 12.2925 22.7075C12.1996 22.6146 12.1259 22.5043 12.0756 22.3829C12.0253 22.2615 11.9994 22.1314 11.9994 22C11.9994 21.8686 12.0253 21.7385 12.0756 21.6171C12.1259 21.4957 12.1996 21.3854 12.2925 21.2925L14.5863 19L12.2925 16.7075C12.1049 16.5199 11.9994 16.2654 11.9994 16C11.9994 15.7346 12.1049 15.4801 12.2925 15.2925C12.4801 15.1049 12.7346 14.9994 13 14.9994C13.2654 14.9994 13.5199 15.1049 13.7075 15.2925L16 17.5863L18.2925 15.2925C18.3854 15.1996 18.4957 15.1259 18.6171 15.0756C18.7385 15.0253 18.8686 14.9994 19 14.9994C19.1314 14.9994 19.2615 15.0253 19.3829 15.0756C19.5043 15.1259 19.6146 15.1996 19.7075 15.2925C19.8004 15.3854 19.8741 15.4957 19.9244 15.6171C19.9747 15.7385 20.0006 15.8686 20.0006 16C20.0006 16.1314 19.9747 16.2615 19.9244 16.3829C19.8741 16.5043 19.8004 16.6146 19.7075 16.7075Z"
                                                fill="#999900" />
                                        </svg>
                                    </div>
                                    <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                        <DialogTitle as="h3" class="text-base font-semibold leading-6 text-gray-900">
                                            {{ title }}
                                        </DialogTitle>
                                        <div class="mt-2">
                                            <p class="text-sm text-gray-500">
                                                {{ message }}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div v-else-if="type === 'success'">
                                <div
                                    class="flex items-center justify-center w-12 h-12 mx-auto rounded-full bg-secondary-100">
                                    <!-- <CheckIcon class="w-6 h-6 text-green-600" aria-hidden="true" /> -->
                                    <svg width="32" height="32" viewBox="0 0 32 32"
                                        class="w-6 h-6 text-green-600 fill-green-600">
                                        <path opacity="0.2"
                                            d="M28 16C28 18.3734 27.2962 20.6935 25.9776 22.6668C24.6591 24.6402 22.7849 26.1783 20.5922 27.0866C18.3995 27.9948 15.9867 28.2324 13.6589 27.7694C11.3312 27.3064 9.19295 26.1635 7.51472 24.4853C5.83649 22.8071 4.6936 20.6689 4.23058 18.3411C3.76756 16.0133 4.0052 13.6005 4.91345 11.4078C5.8217 9.21509 7.35977 7.34094 9.33316 6.02236C11.3066 4.70379 13.6266 4 16 4C19.1826 4 22.2348 5.26428 24.4853 7.51472C26.7357 9.76515 28 12.8174 28 16Z"
                                            fill="#007B8D" />
                                        <path
                                            d="M21.7075 12.2925C21.8005 12.3854 21.8742 12.4957 21.9246 12.6171C21.9749 12.7385 22.0008 12.8686 22.0008 13C22.0008 13.1314 21.9749 13.2615 21.9246 13.3829C21.8742 13.5043 21.8005 13.6146 21.7075 13.7075L14.7075 20.7075C14.6146 20.8005 14.5043 20.8742 14.3829 20.9246C14.2615 20.9749 14.1314 21.0008 14 21.0008C13.8686 21.0008 13.7385 20.9749 13.6171 20.9246C13.4957 20.8742 13.3854 20.8005 13.2925 20.7075L10.2925 17.7075C10.1049 17.5199 9.99945 17.2654 9.99945 17C9.99945 16.7346 10.1049 16.4801 10.2925 16.2925C10.4801 16.1049 10.7346 15.9994 11 15.9994C11.2654 15.9994 11.5199 16.1049 11.7075 16.2925L14 18.5863L20.2925 12.2925C20.3854 12.1995 20.4957 12.1258 20.6171 12.0754C20.7385 12.0251 20.8686 11.9992 21 11.9992C21.1314 11.9992 21.2615 12.0251 21.3829 12.0754C21.5043 12.1258 21.6146 12.1995 21.7075 12.2925ZM29 16C29 18.5712 28.2376 21.0846 26.8091 23.2224C25.3807 25.3603 23.3503 27.0265 20.9749 28.0104C18.5995 28.9944 15.9856 29.2518 13.4638 28.7502C10.9421 28.2486 8.6257 27.0105 6.80762 25.1924C4.98953 23.3743 3.75141 21.0579 3.2498 18.5362C2.74819 16.0144 3.00563 13.4006 3.98957 11.0251C4.97351 8.64968 6.63975 6.61935 8.77759 5.1909C10.9154 3.76244 13.4288 3 16 3C19.4467 3.00364 22.7512 4.37445 25.1884 6.81163C27.6256 9.24882 28.9964 12.5533 29 16ZM27 16C27 13.8244 26.3549 11.6977 25.1462 9.88873C23.9375 8.07979 22.2195 6.66989 20.2095 5.83733C18.1995 5.00476 15.9878 4.78692 13.854 5.21136C11.7202 5.6358 9.76021 6.68345 8.22183 8.22183C6.68345 9.7602 5.63581 11.7202 5.21137 13.854C4.78693 15.9878 5.00477 18.1995 5.83733 20.2095C6.66989 22.2195 8.07979 23.9375 9.88873 25.1462C11.6977 26.3549 13.8244 27 16 27C18.9164 26.9967 21.7123 25.8367 23.7745 23.7745C25.8367 21.7123 26.9967 18.9164 27 16Z"
                                            fill="#007B8D" />
                                    </svg>
                                </div>
                                <div class="mt-3 text-center sm:mt-5">
                                    <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">
                                        {{ title }}
                                    </DialogTitle>
                                    <div class="mt-2">
                                        <p class="text-sm text-gray-500">
                                            {{ message }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div v-else>
                                <div class="mt-3 text-center sm:mt-5">
                                    <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">
                                        {{ title }}
                                    </DialogTitle>
                                    <div class="mt-2">
                                        <p class="text-sm text-gray-500">
                                            {{ message }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <!-- Footer Section -->
                            <div v-if="type === 'error'"
                                class="justify-between px-4 pt-2 pb-4 bg-white sm:flex sm:justify-start sm:space-x-4 sm:space-x-reverse sm:flex-row-reverse">
                                <button type="button"
                                    class="inline-flex justify-center w-full px-3 py-2 text-sm font-semibold text-white bg-red-600 rounded-md shadow-sm sm:flex-1 hover:bg-red-500 sm:w-auto"
                                    @click="handleOnConfirm()">
                                    {{ confirmText }}
                                </button>
                                <button v-if="showCancelButton" type="button"
                                    class="inline-flex justify-center w-full px-3 py-2 mt-3 text-sm font-semibold text-gray-900 bg-white rounded-md shadow-sm sm:flex-1 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                    @click="handleOnCancel()" ref="cancelButtonRef">
                                    {{ cancelText }}
                                </button>
                            </div>
                            <div v-else-if="type === 'warning'"
                                class="justify-start px-4 pt-2 pb-4 bg-white sm:justify-between sm:space-x-4 sm:space-x-reverse sm:flex sm:flex-row-reverse">
                                <button type="button"
                                    class="inline-flex justify-center w-full px-3 py-2 text-sm font-semibold text-white bg-yellow-600 rounded-md shadow-sm sm:flex-1 hover:bg-yellow-500 sm:w-auto"
                                    @click="handleOnConfirm()">{{ confirmText }}</button>
                                <button v-if="showCancelButton" type="button"
                                    class="inline-flex justify-center w-full px-3 py-2 mt-3 text-sm font-semibold text-gray-900 bg-white rounded-md shadow-sm sm:flex-1 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                    @click="handleOnCancel()" ref="cancelButtonRef">
                                    {{ cancelText }}
                                </button>
                            </div>
                            <div v-else-if="type === 'success'" class="mt-5 sm:mt-6">
                                <button type="button"
                                    class="inline-flex justify-center w-full px-4 py-2 text-base font-medium border border-transparent rounded-md shadow-sm text-primary-500 bg-primary-50 hover:bg-primary-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 sm:text-sm"
                                    @click="handleOnConfirm()">
                                    {{ confirmText }}
                                </button>
                            </div>
                            <div v-else class="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                                <button type="button"
                                    class="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-2 sm:text-sm"
                                    @click="handleOnConfirm()">{{ confirmText }}</button>
                                <button type="button"
                                    class="inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-1 sm:mt-0 sm:text-sm"
                                    @click="handleOnCancel()" ref="cancelButtonRef">{{ cancelText }}</button>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>