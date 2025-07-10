<script setup lang="ts">

import { ref, onMounted } from "vue";
import { useAuthStore } from '@/stores/auth';
import { useRouter } from 'vue-router';

const router = useRouter();
const authStore = useAuthStore();
const isLoggedIn = authStore.isLoggedIn;
const token = authStore.token;

// memastikan jika belum login maka akan dialihkan ke login
onMounted(() => {
  if (!isLoggedIn){
    authStore.logout();
    router.push("/login");
  }
});
</script>

<template>
  <h2 class="mb-3">Extention Download</h2>
  <div class="text-sm mb-3">
    Don’t miss out on the latest tools and features from our extension, <br />
    designed to give you the best experience possible.
  </div>
  <div class="box mt-3 mb-3 lg:w-[700px] w-full">
    <div class="mb-4">
      <div class="flex flex-wrap justify-between items-center">
        <p class="font-medium"><i class="fa fa-download me-2"></i> Download extension</p>
      </div>
    </div>
    <div class="flex items-center justify-between">
      <div>
        <div class="text-3xl">Let's Get Started!</div>
        <div class="text-md mt-2 mb-5">Only premium users can access the extension.</div>
      </div>
      <img src="/public/images/space rocket.png" class="w-[150px] ms-3 me-12" alt="" />
    </div>
    <br />
    <a
      href=""
      type="button"
      class="text-white bg-primary hover:bg-primary/80 rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
    >
      <i class="fa-solid fa-file-arrow-down me-2 text-sm"></i>Extension Download
    </a>
    <a href="" type="button" class="hover:bg-gray-100 border rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-dark-600 dark:hover:bg-dark-700 focus:outline-none dark:focus:ring-primary-800">
      <i class="fa-solid fa-book me-2 text-sm"></i>User installation guide
    </a>
  </div>
</template>
