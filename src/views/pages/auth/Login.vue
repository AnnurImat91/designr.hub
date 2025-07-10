<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth';
import { IconEye, IconEyeOff } from '@tabler/icons-vue';

const router = useRouter();
const authStore = useAuthStore();

onMounted(() => {
  if (authStore.isLoggedIn) {
    router.push('/home');
  }
});

const email = ref("");
const password = ref("");
const showPass = ref(false);
const errorMessage = ref("");
const status = ref("");

// Handle login logic
const handleLogin = async () => {
  try {
    status.value = "loading";
    errorMessage.value = ""; 
    await authStore.login({ email: email.value, password: password.value });
    status.value = "success"; 
    router.push("/home");
  } catch (error: any) {
    console.error(error);
    errorMessage.value = error?.response?.data?.message || "Login failed.";
    status.value = "error"; 
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
              <div class="text-4xl font-bold mb-4">Welcome back!</div>
              <p class="text-lg">
                Let’s get everything ready so you can verify your personal account details and start setting up your
                profile.
              </p>
            </div>
          </div>
          <!-- Right Section -->
          <div class="p-8 md:p-16 flex flex-col justify-center box w-full max-w-[550px] lg:ms-10">
            <h2 class="text-2xl font-semibold mb-3 text-center">Login</h2>
            <p class="mb-6 text-center text-sm flex justify-center">
              Don’t have an account?
              <RouterLink to="/register">
                <div class="ms-2 text-blue-500 hover:underline">Create account</div>
              </RouterLink>
            </p>
            <form @submit.prevent="handleLogin">
              <div class="space-y-2">
                <div>
                  <label class="block mb-1 text-xs">Email Address</label>
                  <input required v-model="email" type="email" placeholder="Insert your e-mail"
                    class="w-full px-4 py-2 placeholder:text-xs text-gray-900 border border-gray-200 rounded-lg text-base focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div class="relative">
                  <label class="block mb-1 text-xs">Password</label>
                  <input required v-model="password" :type="showPass ? 'text' : 'password'"
                    placeholder="Enter your password"
                    class="w-full px-4 py-2 pr-10 placeholder:text-xs text-gray-900 border border-gray-200 rounded-lg text-base focus:ring-blue-500 focus:border-blue-500" />
                  <!-- Show/Hide Password -->
                  <button type="button" @click="showPass = !showPass" class="absolute top-1/2 right-3 text-gray-500">
                    <IconEyeOff v-if="showPass" class="w-5 h-5" />
                    <IconEye v-else class="w-5 h-5" />
                  </button>
                </div>
              </div>
              <!-- error -->
              <p v-if="errorMessage" class="text-red-500 text-sm mt-2">{{ errorMessage }}</p>
              <!-- button login / loading -->
              <button type="submit"
                class="w-full bg-gradient-to-r from-blue-700 to-cyan-400 text-white py-2 rounded-full mt-6 hover:shadow-lg transition-shadow"
                :disabled="status === 'loading'">
                <span v-if="status !== 'loading'">Login</span>
                <span v-if="status === 'loading'"><div class="inline-block h-6 w-6 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div></span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
