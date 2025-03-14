import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
    const user_name = computed(() => localStorage.getItem('user_name') || 'Demo User')
    const user_access = computed(() => localStorage.getItem('user_access') || 'Super Admin')
    const user_image = computed(() => localStorage.getItem('user_image') || 'https://iidamidamerica.org/wp-content/uploads/2020/12/male-placeholder-image.jpeg')
    const user_role = computed(() => localStorage.getItem('user_role') || '0')

    return { user_name, user_access, user_image, user_role }
})