<script setup lang="ts">
import CommonDropdown from '@/components/shared/CommonDropdown.vue';
import { faker } from '@faker-js/faker';
import { ref, onMounted } from "vue";
import { IconSelector, IconMenu2, IconSearch, IconFilter } from '@tabler/icons-vue';
import { tileOneData } from '@/data/fakedata';
import { useTableFunctions } from '@/utils/tableFunction';
import Pagination from '@/components/shared/Pagination.vue';
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

// Data untuk dropdown
const dropdownItems = [
  { name: 'Popular', value: 'popular' },
  { name: 'Latest', value: 'latest' },
  { name: 'Trending', value: 'trending' }
]

// Data untuk tab
const tabs = [
  { name: 'templates', label: 'Templates' },
  { name: 'lr-presets', label: 'Lr Presets' },
  { name: 'mockups', label: 'Mockups' },
  { name: 'graphic-assets', label: 'Graphic Assets' }
]

// State aktif untuk tab
const activeTab = ref('templates')

const { currentPage, deleteItem, endIndex, nextPage, paginate, paginatedData, prevPage, startIndex, totalData, totalPages } = useTableFunctions(tileOneData, 16)
</script>
<template>
  <h2 class="mb-3">Items</h2>
  <div class="text-sm mb-3">The place to purchase various items for your design needs</div>
  <div class="box">
    <div class="gap-3 pb-4 lg:pb-6">
      <div class="flex flex-wrap justify-between items-center">
        <p class="font-medium mb-2"><i class="fa fa-gift me-2"></i>Buy Items</p>
        <form
          class="bg-primary/5 dark:bg-bg3 flex gap-3 rounded-full border border-transparent focus-within:border-primary px-3 xxl:px-3 items-center justify-between max-w-[293px] w-full">
          <button>
            <IconSearch :size="20" />
          </button>
          <input type="text" placeholder="Search Items" class="bg-transparent py-2 focus:outline-none w-full" />
        </form>
      </div>
    </div>
    <div class="w-full overflow-x-auto">
      <div class="text-2xl text-center mb-2">Templates</div>
      <div class="text-sm text-center">The best Template design designs, illustrations, and graphic elements</div>
      <div class="flex flex-col md:flex-row md:items-center md:justify-between px-4 py-2 mt-4 space-y-4 md:space-y-0">
        <!-- Dropdown Menu -->
        <div class="w-full md:w-auto">
          <CommonDropdown :items="dropdownItems" class="flex items-center gap-1 px-4 py-2 bg-white rounded-full">
            <template #trigger>
              <button class="flex items-center gap-1">
                Popular
                <IconSelector class="w-4 h-4" />
              </button>
            </template>
          </CommonDropdown>
        </div>

        <!-- Tab Bar -->
        <div class="flex flex-wrap gap-4 justify-center md:justify-start w-full md:w-auto">
          <button v-for="tab in tabs" :key="tab.name" @click="activeTab = tab.name"
            :class="['px-4 py-2 text-xs rounded-full', activeTab === tab.name ? 'text-black bg-gray-100' : 'text-gray-500']">
            {{ tab.label }}
          </button>
        </div>

        <!-- Filter Button -->
        <div class="w-full md:w-auto flex justify-center md:justify-end">
          <button class="flex items-center gap-1 px-4 py-1.5 text-sm border rounded-full">
            <IconFilter class="w-4 h-4" />
            Filters
          </button>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-5">
        <!-- Card Item -->
        <div v-for="({ id, designation, img, name }, index) in paginatedData" :key="id" class="rounded-full">
          <!-- Placeholder for image -->
          <div class="h-48 bg-gray-200 rounded-xl"></div>
          <!-- <img src="/public/images/contoh-items.png" class="h-48 rounded-xl" alt="" /> -->
          <!-- Card Footer -->
          <div class="flex items-center justify-between p-4">
            <!-- Author / Source -->
            <div class="flex items-center space-x-2">
              <div class="w-5 h-5 bg-gray-300 rounded-full"></div>
              <!-- <img :src="img" class="rounded-full w-11 w-8 h-8" alt="author" /> -->
              <span class="text-xs">Author / Source</span>
            </div>
            <!-- Stats -->
            <div class="flex items-center space-x-4">
              <div class="flex items-center space-x-1">
                <i class="fa-solid fa-heart text-sm ms-2 text-gray-400"></i>
                <span class="text-xs">123</span>
              </div>
              <div class="flex items-center space-x-1">
                <i class="fa-solid fa-eye text-sm ms-2 text-gray-400"></i>
                <span class="text-xs">12k</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-6 lg:mt-8">
      <Pagination :current-page="currentPage" :end-index="endIndex" :next-page="nextPage" :paginate="paginate"
        :prev-page="prevPage" :start-index="startIndex" :total-data="totalData" :total-pages="totalPages" />
    </div>
  </div>
  <br />
</template>
