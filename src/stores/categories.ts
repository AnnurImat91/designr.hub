import { defineStore } from 'pinia'
import axios from 'axios'

export interface Category {
  _id: string
  name: string
  description: string
}

export const useCategoryStore = defineStore('categories', {
  actions: {
    async getAll(params: any) {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}api/category/getAll`, {
          params
        })
        return response.data
      } catch (error: any) {
        console.error('Gagal mengambil data:', error)
        throw error // agar error bisa ditangani di komponen pemanggil
      }
    }
  }
})
