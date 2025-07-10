<script setup lang="ts">
import CommonDropdown from '@/components/shared/CommonDropdown.vue';
import { faker } from '@faker-js/faker';
import { useTableFunctions } from '@/utils/tableFunction';
import { IconSelector } from '@tabler/icons-vue';
import { ref, onMounted } from "vue";
import axios from 'axios';

const status = ref("");

const tableData = ref<{ id: number; createdAt: Date; action: string; ip: string; device: string }[]>([]);

// Fungsi untuk mengambil data
const fetchActivityLog = async () => {
  status.value = "loading";
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}api/log/user`, {
      withCredentials: true
    });
    console.log(response);
    tableData.value = response.data;
    status.value = "success";
  } catch (error: any) {
    console.error("Gagal mengambil data activity log:", error);
    if (error?.response?.data?.message === "No logs found for this user") {
      status.value = "no data";
    } else {
      status.value = "error";
    }
  }
};

// jalankan fungsi fetch
onMounted(() => {
  fetchActivityLog();
});

// Sorting and table data functions
const { sortData } = useTableFunctions(tableData)

</script>
<template>
  <div class="box">
    <div class="gap-3 pb-4 lg:pb-6 mb-4 lg:mb-4 bb-dashed">
      <div class="flex flex-wrap justify-between items-center">
        <p class="font-medium"><i class="fa fa-chart-simple me-2"></i> Activity Log</p>
        <div class="flex items-center gap-2">
          <RouterLink to="" class="text-blue-500 text-xs">See More</RouterLink>
        </div>
      </div>
      <div class="text-xs mt-1">Quick review on your account usage past 7 days</div>
    </div>
    <div class="w-full overflow-x-auto">
      <table class="w-full whitespace-nowrap">
        <thead>
          <tr class="border-b text-sm dark:bg-bg3 text-n500 dark:text-n30">
            <th @click="sortData('title')" class="py-3 font-semibold px-4 text-start">
              <div class="flex items-center gap-1 cursor-pointer select-none">Date & Time</div>
            </th>
            <th @click="sortData('name')" class="py-3 font-semibold px-4 text-start">
              <div class="flex items-center gap-1 cursor-pointer select-none">Activity</div>
            </th>
            <th @click="sortData('percent')" class="py-3 font-semibold px-4 text-start">
              <div class="flex items-center gap-1 cursor-pointer select-none">IP Address</div>
            </th>
            <th @click="sortData('status')" class="py-3 font-semibold px-4 text-start">
              <div class="flex items-center gap-1 cursor-pointer select-none">Device</div>
            </th>
          </tr>
        </thead>
        <tbody>
          <!-- Loading -->
          <tr v-if="status === 'loading'">
            <td colspan="4" class="text-center py-4">
              <div class="inline-block h-6 w-6 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
            </td>
          </tr>

          <!-- Tidak ada data -->
          <tr v-if="status === 'no data'">
            <td colspan="4" class="text-center py-4">No Data Available</td>
          </tr>

          <!-- error -->
          <tr v-if="status === 'error'">
            <td colspan="4" class="text-center py-4">An error occurred while fetching the activity log.</td>
          </tr>

          <!-- success -->
          <tr v-if="status === 'success'" v-for="{ id, createdAt, action, ip, device } in tableData" :key="id">
            <td class="px-4 py-3 text-sm">{{ new Date(createdAt).toLocaleString() }}</td> <!-- Format date -->
            <td class="px-4 py-3 text-sm">{{ action }}</td>
            <td class="px-4 py-3 text-sm">{{ ip }}</td>
            <td class="px-4 py-3 text-sm">{{ device }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
