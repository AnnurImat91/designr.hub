<script setup lang="ts">
import CommonDropdown from '@/components/shared/CommonDropdown.vue';
import { faker } from '@faker-js/faker';
import { useTableFunctions } from '@/utils/tableFunction';
import { IconSelector } from '@tabler/icons-vue';
import Pagination from '@/components/shared/Pagination.vue';
import { ref, onMounted } from "vue";
import { useAuthStore } from '@/stores/auth';
import { useRouter } from 'vue-router';
import axios from 'axios';

const router = useRouter();
const authStore = useAuthStore();
const isLoggedIn = authStore.isLoggedIn;
const token = authStore.token;

// memastikan jika belum login maka akan dialihkan ke login
onMounted(() => {
  if (!isLoggedIn){
    authStore.logout();
    router.push("/login");
  }else{
    // Memanggil fetchPurchaseHistory saat komponen dimuat
    fetchPurchaseHistory();
  }
});

// State untuk menyimpan data tabel
const tableData = ref<{ id: number; createdAt: Date; invoice : string; total: number; method: string; payment_status: string }[]>([]);

// Fungsi untuk mengambil data
const fetchPurchaseHistory = async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}api/payments/history`, {
      withCredentials: true
    });
    console.log(response);

    tableData.value = response.data;

  } catch (error: any) {
    console.error("Gagal mengambil data purchase history:", error);
  }
};

// Generating sample data for the table
// const tableData = Array.from({ length: 10 }).map((_, i) => {
//   return {
//     id: i + 1,
//     dateTime: faker.date.recent().toLocaleString(), // Random date and time
//     invoice: 'INV1234567', // Random activity
//     total: '300.000', // Random IP address
//     paymentMethod: 'BRIVA', // Random device type
//     status: 'Expired' // Random device type
//   }
// })

// Sorting and table data functions
const { sortData } = useTableFunctions(tableData)

const { currentPage, deleteItem, endIndex, nextPage, paginate, paginatedData, prevPage, startIndex, totalData, totalPages } = useTableFunctions(tableData, 3)
</script>
<template>
  <h2 class="mb-3">Purchase History</h2>
  <div class="text-sm mb-3">Your order history displays all your transactions in full detail.</div>
  <div class="box">
    <div class="gap-3 pb-4 lg:pb-6">
      <div class="flex flex-wrap justify-between items-center">
        <p class="font-medium"><i class="fa fa-clock-rotate-left me-2"></i> Purchase History</p>
      </div>
    </div>
    <div class="w-full overflow-x-auto">
      <table class="w-full whitespace-nowrap">
        <thead>
          <tr class="border-b text-sm dark:bg-bg3 text-n500 dark:text-n30">
            <th @click="sortData('title')" class="py-3 font-semibold px-4 text-start">
              <div class="flex items-center gap-1 cursor-pointer select-none">Date & Time</div>
            </th>
            <th @click="sortData('name')" class="py-3 font-semibold px-4 text-start">
              <div class="flex items-center gap-1 cursor-pointer select-none">Invoice ID</div>
            </th>
            <th @click="sortData('percent')" class="py-3 font-semibold px-4 text-start">
              <div class="flex items-center gap-1 cursor-pointer select-none">Total</div>
            </th>
            <th @click="sortData('status')" class="py-3 font-semibold px-4 text-start">
              <div class="flex items-center gap-1 cursor-pointer select-none">Payment Method</div>
            </th>
            <th @click="sortData('status')" class="py-3 font-semibold px-4 text-start">
              <div class="flex items-center gap-1 cursor-pointer select-none">Status</div>
            </th>
            <th @click="sortData('status')" class="py-3 font-semibold px-4 text-start">
              <div class="flex items-center gap-1 cursor-pointer select-none">Action</div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="{ id, createdAt, invoice, total, method, payment_status } in tableData" :key="id">
            <td class="px-4 py-1 text-sm">{{ createdAt }}</td>
            <td class="px-4 py-1 text-sm">
              {{ invoice }}
            </td>
            <td class="px-4 py-1 text-sm">Rp. {{ total }}</td>
            <td class="px-4 py-1 text-sm">
              {{ method }}
            </td>
            <td class="px-4 py-1 text-sm">
              {{ payment_status }}
            </td>
            <td class="px-4 py-1 text-sm">
              <a
                href=""
                type="button"
                class="bg-gray-100 hover:bg-gray-200 dark:text-gray-700 mt-1 transition rounded-lg text-sm px-8 py-1.5 me-2 mb-2 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                >Go
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="mt-6 lg:mt-8">
      <Pagination
        :current-page="currentPage"
        :end-index="endIndex"
        :next-page="nextPage"
        :paginate="paginate"
        :prev-page="prevPage"
        :start-index="startIndex"
        :total-data="totalData"
        :total-pages="totalPages"
      />
    </div>
  </div>
  <br />
</template>
