import { defineStore } from 'pinia'
import axios from 'axios'
import { useAuthStore } from '@/stores/auth'

export interface Type {
  name: string | null
  logo: string | null
}

export const useTypeStore = defineStore('types', {
  actions: {
    async getAll(params: any) {
      try {
        const authStore = useAuthStore()
        const token = authStore.token

        const response = await axios.get(`${import.meta.env.VITE_API_URL}api/type`, {
          params,
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        return response.data
      } catch (error: any) {
        console.error('Gagal mengambil data:', error)
        throw error // agar error bisa ditangani di komponen pemanggil
      }
    }
  }
})
