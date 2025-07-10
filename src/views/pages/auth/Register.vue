<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import axios from 'axios'
import { IconEye, IconEyeOff } from '@tabler/icons-vue'

const router = useRouter();

const username = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const nomor = ref("");
const errorMessage = ref("");
const successMessage = ref("");
const showPass = ref(false);
const showConfirmPass = ref(false);

const handleRegister = async () => {
  errorMessage.value = "";
  // Validasi kesamaan password dan konfirmasi password
  if (password.value !== confirmPassword.value) {
    errorMessage.value = "Password dan konfirmasi password tidak cocok";
    return;
  }
  try {
    const response = await axios.post(`${import.meta.env.VITE_API_URL}api/auth/register`, {
      username: username.value,
      email: email.value,
      password: password.value,
      nomor: nomor.value,
    });
    console.log(response);
    
    successMessage.value = "Pendaftaran berhasil! Silahkan login.";
    // Redirect ke halaman login (atau ke halaman lain jika diperlukan)
    router.push("/login");
  } catch (error: any) {
    errorMessage.value = error.response?.data?.message || "Pendaftaran gagal";
  }
};
</script>

<template>
  <div class="h-full w-full bg-cover bg-center bg-[url('/images/background/bg-login&register.png')]">
    <div class="container">
      <div class="flex min-h-screen items-center justify-center">
        <div class="grid grid-cols-1 md:grid-cols-2 overflow-hidden">
          <!-- Left Section -->
          <div class="flex flex-col text-white px-8 py-12 md:px-16">
            <RouterLink to="/">
              <img src="/public/logo.png" class="w-40 mb-4 lg:mb-20" alt="Logo" />
            </RouterLink>
            <div class="mb-8">
              <div class="text-4xl font-bold mb-4">Start your journey now!</div>
              <p class="text-lg">
                Let’s get everything ready so you can verify your personal account details and start setting up your
                profile.
              </p>
            </div>
          </div>
          <!-- Right Section -->
          <div class="p-8 md:p-16 flex flex-col justify-center box w-full max-w-[550px] mb-5 lg:ms-10">
            <h2 class="text-2xl font-semibold mb-3 text-center">Create an account</h2>
            <p class="mb-6 text-center text-sm flex justify-center">
              Have an account?
              <RouterLink to="/login">
                <div class="ms-2 text-blue-500 hover:underline">Login</div>
              </RouterLink>
            </p>
            <form @submit.prevent="handleRegister">
              <div class="space-y-2">
                <div>
                  <label class="block mb-1 text-xs">Name</label>
                  <input required v-model="username" type="text" placeholder="Insert your username"
                    class="w-full px-4 py-2 placeholder:text-xs text-gray-900 border border-gray-200 rounded-lg text-base focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                  <label class="block mb-1 text-xs">Email Address</label>
                  <input required v-model="email" type="email" placeholder="Insert your e-mail"
                    class="w-full px-4 py-2 placeholder:text-xs text-gray-900 border border-gray-200 rounded-lg text-base focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                  <label class="block mb-1 text-xs">WhatsApp</label>
                  <input required v-model="nomor" type="text" placeholder="Masukkan nomor WhatsApp Anda"
                    class="w-full px-4 py-2 placeholder:text-xs text-gray-900 border border-gray-200 rounded-lg text-base focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                  <label class="block mb-1 text-xs">Password</label>
                  <div class="relative">
                    <input required v-model="password" :type="showPass ? 'text' : 'password'"
                      placeholder="Enter your password"
                      class="w-full px-4 py-2 pr-10 placeholder:text-xs text-gray-900 border border-gray-200 rounded-lg text-base focus:ring-blue-500 focus:border-blue-500" />
                    <button type="button" @click="showPass = !showPass"
                      class="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500">
                      <IconEyeOff v-if="showPass" class="w-5 h-5" />
                      <IconEye v-else class="w-5 h-5" />
                    </button>
                  </div>
                </div>
                <div>
                  <label class="block mb-1 text-xs">Konfirmasi Password</label>
                  <div class="relative">
                    <input required v-model="confirmPassword" :type="showConfirmPass ? 'text' : 'password'"
                      placeholder="Konfirmasi password Anda"
                      class="w-full px-4 py-2 pr-10 placeholder:text-xs text-gray-900 border border-gray-200 rounded-lg text-base focus:ring-blue-500 focus:border-blue-500" />
                    <button type="button" @click="showConfirmPass = !showConfirmPass"
                      class="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500">
                      <IconEyeOff v-if="showConfirmPass" class="w-5 h-5" />
                      <IconEye v-else class="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
              <!-- Pesan Error dan Sukses -->
              <p v-if="errorMessage" class="text-red-500 text-sm mt-2">{{ errorMessage }}</p>
              <p v-if="successMessage" class="text-green-500 text-sm mt-2">{{ successMessage }}</p>
              <button type="submit"
                class="w-full bg-gradient-to-r from-blue-700 to-cyan-400 text-white py-2 rounded-full mt-6 hover:shadow-lg transition-shadow">
                Create an Account
              </button>
              <!-- <div class="flex items-center my-6">
                <div class="flex-grow h-px bg-gray-300"></div>
                <span class="px-4 text-xs">Or Signup With</span>
                <div class="flex-grow h-px bg-gray-300"></div>
              </div>
              <div class="flex flex-col sm:flex-row items-center justify-between mt-4">
                <button type="button"
                  class="flex items-center border border-gray-200 rounded-lg px-5 py-3 text-sm hover:shadow-md transition-shadow mb-2">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/800px-Google_%22G%22_logo.svg.png"
                    alt="Google" class="h-5 mr-2" />
                  Continue with Google
                </button>
                <button type="button"
                  class="border border-gray-200 rounded-lg px-5 py-3 text-sm hover:shadow-md transition-shadow mb-2">
                  <div class="flex items-center">
                    <span class="text-sm">See other option</span>
                    <i class="fa-solid fa-ellipsis ms-2 text-sm"></i>
                  </div>
                </button>
              </div> -->
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
