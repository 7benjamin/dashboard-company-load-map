<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'
import Icon from '@/assets/images/logo.png'
import Hero from '@/assets/images/hero.png'
import Button from '@/components/Buttons/ButtonPrimary.vue'
import InputText from '@/components/InputText.vue'
import { onMounted } from 'vue'

const authStore = useAuthStore()

onMounted(() => {
    window.document.title = `Login - ${import.meta.env.VITE_APP_NAME}`
})
</script>

<template>
    <div class="flex flex-col items-center justify-center min-h-screen py-2 bg-layout">
        <div class="flex flex-col px-6 py-6 bg-white shadow rounded-xl shadow-gray-50">
            <div class="flex flex-row">
                <div class="flex-grow flex-col md:mr-6 w-96">
                    <img :src="Icon" alt="logo" class="w-36 mb-8" />
                    <h1 class="mb-2 font-semibold text-3xl text-dark">Login</h1>
                    <p class="mb-6 font-medium text-gray-400">Selamat datang kembali</p>

                    <form @submit.prevent="authStore.login" class="flex flex-col">
                        <label for="username" class="mb-2 text-xs font-medium text-dark">Username</label>
                        <InputText class-name="mb-3 text-sm placeholder:text-sm" placeholder="Masukan Username"
                            :value="authStore.username" @update:value="authStore.username = $event" />

                        <label for="password" class="mb-2 text-xs font-medium text-dark">Password</label>
                        <InputText class-name="mb-3 text-sm placeholder:text-sm" type="password"
                            placeholder="Masukan Password" :value="authStore.password"
                            @update:value="authStore.password = $event" />

                        <Button type="submit" label="Login" :disabled="authStore.isLoading"
                            :is-loading="authStore.isLoading" />
                    </form>
                </div>
                <div class="hidden grow md:block">
                    <img :src="Hero" alt="logo" class="h-full" />
                </div>
            </div>
        </div>
    </div>
</template>

