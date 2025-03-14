import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { dispatchNotification } from '@/components/Notification'
import { readData, removeData, writeData } from '@/utils/storage'
import router from '@/router'

export const useAuthStore = defineStore('auth', () => {
    // token from localStorage
    const token = ref(readData('token') || '')
    // create a shared state
    const username = ref('')
    const password = ref('')
    const isLoading = ref(false)
    const isLoggedIn = computed(() => token.value !== '')

    // define your actions
    const login = () => {
        if (username.value == '' || password.value == '') {
            dispatchNotification({ title: 'Perhatian', content: 'Username atau password tidak boleh kosong', type: 'warning' })
        } else {
            isLoading.value = true
            setTimeout(() => {
                isLoading.value = false
                if (username.value == 'demo' && password.value == 'demo') {
                    // store token in localStorage
                    writeData('token', 'secret-token')
                    dispatchNotification({ title: 'Berhasil', content: 'Login berhasil, selamat datang kembali!', type: 'success' })
                    // redirect to home page after login
                    window.location.reload()
                }else if (username.value == 'admin_regional' && password.value == 'demo') {
                    // store token in localStorage
                    writeData('token', 'secret-token')
                    dispatchNotification({ title: 'Berhasil', content: 'Login berhasil, selamat datang kembali!', type: 'success' })
                    localStorage.setItem('user_name','Admin Regional')
                    localStorage.setItem('user_role', '0')
                    // redirect to home page after login
                    window.location.reload()
                }else if (username.value == 'admin_uid' && password.value == 'demo') {
                    // store token in localStorage
                    writeData('token', 'secret-token')
                    dispatchNotification({ title: 'Berhasil', content: 'Login berhasil, selamat datang kembali!', type: 'success' })
                    localStorage.setItem('user_name','Admin Uid')
                    localStorage.setItem('user_role', '1')
                    // redirect to home page after login
                    window.location.reload()
                } else if (username.value == 'admin_up3' && password.value == 'demo') {
                    // store token in localStorage
                    writeData('token', 'secret-token')
                    dispatchNotification({ title: 'Berhasil', content: 'Login berhasil, selamat datang kembali!', type: 'success' })
                    localStorage.setItem('user_name','Admin Up3')
                    localStorage.setItem('user_role', '2')
                    // redirect to home page after login
                    window.location.reload()
                } else if (username.value == 'admin_ulp' && password.value == 'demo') {
                    // store token in localStorage
                    writeData('token', 'secret-token')
                    dispatchNotification({ title: 'Berhasil', content: 'Login berhasil, selamat datang kembali!', type: 'success' })
                    localStorage.setItem('user_name','Admin Ulp')
                    localStorage.setItem('user_role', '3')
                    // redirect to home page after login
                    window.location.reload()
                }else if (username.value == 'admin_posko' && password.value == 'demo') {
                    // store token in localStorage
                    writeData('token', 'secret-token')
                    dispatchNotification({ title: 'Berhasil', content: 'Login berhasil, selamat datang kembali!', type: 'success' })
                    localStorage.setItem('user_name','Admin Posko')
                    localStorage.setItem('user_role', '4')
                    // redirect to home page after login
                    window.location.reload()
                }else {
                    dispatchNotification({ title: 'Login Gagal', content: 'Username atau password salah', type: 'error' })
                }
            }, 3000)
        }
    }

    const logout = () => removeData('token')

    return {
        token,
        username,
        password,
        isLoggedIn,
        isLoading,
        login,
        logout,
    }
})