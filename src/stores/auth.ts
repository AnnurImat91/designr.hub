// src/stores/auth.ts
import { defineStore } from 'pinia';
import axios from 'axios';

interface AuthState {
  token: string | null;
  user: object | null
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    token: null,
    user: {}
  }),
  // getter untuk mengambil nilai isLoogedIn
  getters: {
    isLoggedIn: (state): boolean => !!state.token,
  },
  actions: {
    async login(payload: { email: string; password: string }) {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_API_URL}api/auth/login`,
          {
            email: payload.email,
            password: payload.password,
          },
          { withCredentials: true }
        );
        // console.log("Response:", response);
        // console.log("Token dari response:", response?.data?.token);
        // console.log("Apakah token ada:", !!response?.data?.token);
        const token = response.data.token;
        if (!token) {
          throw new Error("Token tidak ditemukan dalam response");
        }
        
        // Perbarui state dengan menggunakan $patch
        this.$patch({ token });
        // console.log("Token setelah patch:", this.$state.token);
        this.userProfile();
        return response;
      } catch (error: any) {
        console.error("Error saat login:", error);
        throw error;
      }
    },

    async userProfile() {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}api/user/profile/dashboard`, 
          {
            headers: {
              Authorization: `Bearer ${this.token}`,
            }
          }
        );
        const user = response;
        this.$patch({ user })
        return response;
      } catch (error: any) {
        console.error("Error get profile", error)
      }
    },
    
    // merubah status isLoggedIn dan menghapus token
    logout() {
      this.$patch({ token: null });
    },
  },
  persist: true,
});
