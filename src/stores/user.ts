import { defineStore } from 'pinia'
import axios from 'axios'
import { useAuthStore } from '@/stores/auth'

export interface User {
  _id: string | null
  username: string | null
  email: string | null
  nomor: string | null
}

export const useUserStore = defineStore('user', {
  actions: {
    async updateUser(payload: User) {
      try {
        const authStore = useAuthStore()
        const token = authStore.token
        console.log('token', token)

        const response = await axios.patch(`${import.meta.env.VITE_API_URL}api/user/${payload._id}`, payload, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        return response
      } catch (error: any) {
        console.error('Gagal mengambil data:', error)
        throw error // agar error bisa ditangani di komponen pemanggil
      }
    },
  }
})
