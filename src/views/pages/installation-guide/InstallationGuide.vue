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
  if (!isLoggedIn) {
    authStore.logout();
    router.push("/login");
  }
});

// Tabs data
const tabs = ref([
  { id: 1, label: 'Installation on Kiwi Browser (Android)' },
  { id: 2, label: 'Installation on Orion Browser (IOS)' },
  { id: 3, label: 'Laptop/PC Windows (Chrome)' }
])

// Active tab state
const activeTab = ref(1) // Default active tab
</script>

<template>
  <h2 class="mb-3">Installation Guide</h2>
  <div class="text-sm mb-3">We’ll guide you through the steps to successfully install the extension so you can start
    enjoying our features.</div>
  <div class="box mt-3 mb-3 lg:w-[900px] w-full">
    <div class="mb-4">
      <div class="flex flex-wrap justify-between items-center">
        <p class="font-medium"><i class="fa fa-video me-2"></i> Installation Guide</p>
      </div>
    </div>
    <div class="flex justify-center">
      <div class="bg-gray-200 rounded-full flex items-center justify-between p-1.5 w-full lg:w-[700px] mt-5 mb-5">
        <!-- Tabs -->
        <button v-for="tab in tabs" :key="tab.id" class="text-xs"
          :class="['px-4 py-2 rounded-full transition', activeTab === tab.id ? 'bg-white text-black' : 'text-gray-500']"
          @click="activeTab = tab.id">
          {{ tab.label }}
        </button>
      </div>
    </div>

    <!-- Pages -->
    <div class="mt-6">
      <div v-for="tab in tabs" :key="tab.id" v-show="activeTab === tab.id" class="tab-content">
        <div class="flex justify-center">
          <iframe class="rounded-xl w-full lg:w-[90%] h-[400px] mb-5"
            src="https://www.youtube.com/embed/MCVkMmYL-aY?si=1WbdjpX0gEK552it" title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  </div>
</template>
