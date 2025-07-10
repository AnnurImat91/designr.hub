import { defineStore } from 'pinia'
import axios from 'axios'
import { useAuthStore } from '@/stores/auth'

export interface Package {
  _id: string | null
  durationName: string | null
  price: number | null
  onDiscount: boolean | null
  endDiscountDate: string | null
}

export const usePackageStore = defineStore('packages', {
  actions: {
    async getAll(params: any) {
      try {
        const authStore = useAuthStore()
        const token = authStore.token

        const response = await axios.get(`${import.meta.env.VITE_API_URL}api/packages/list`, {
          params,
          // headers: {
          //   Authorization: `Bearer ${token}`
          // }
        })
        return response.data
      } catch (error: any) {
        console.error('Gagal mengambil data:', error)
        throw error // agar error bisa ditangani di komponen pemanggil
      }
    },
    async getById(id: any) {
      try {
        const authStore = useAuthStore()
        const token = authStore.token

        const response = await axios.get(`${import.meta.env.VITE_API_URL}api/packages/list`, {
          params: { id },
          headers: {
            Authorization: `Bearer ${token}`
          }
        })

        return Array.isArray(response.data.packages) ? response.data.packages[0] : response.data
      } catch (error: any) {
        console.error('Gagal mengambil data paket berdasarkan ID:', error)
        throw error
      }
    }
  }
})
