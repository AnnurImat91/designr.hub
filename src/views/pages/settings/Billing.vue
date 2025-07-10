<script setup lang="ts">
import { RouterLink } from 'vue-router'
import MenuSetting from './components/MenuSetting.vue'
import { faker } from '@faker-js/faker'
import { useTableFunctions } from '@/utils/tableFunction'

const tableData = Array.from({ length: 5 }).map((_, i) => {
  return {
    id: i + 1,
    date: '22/02/2025', // Random date and time
    type: '1 Month Premium' // Random activity
  }
})

// Sorting and table data functions
const { sortData } = useTableFunctions(tableData)

const { currentPage, deleteItem, endIndex, nextPage, paginate, paginatedData, prevPage, startIndex, totalData, totalPages } = useTableFunctions(tableData, 3)
</script>
<template>
  <h2 class="mb-3">Settings</h2>
  <div class="text-sm mb-3">Update your profile details to reflect your latest information and preferences.</div>
  <div class="box">
    <div class="gap-3 pb-4 lg:pb-6">
      <div class="flex flex-wrap justify-between items-center">
        <p class="font-medium"><i class="fa fa-gear me-2"></i>Settings</p>
      </div>
    </div>
    <div class="flex flex-col md:flex-row lg:h-[60vh]">
      <MenuSetting />
      <div class="w-full p-4">
        <div class="flex flex-col sm:flex-row">
          <div class="flex-1 p-2">
            <div class="font-medium">Purchase History</div>
            <div class="text-xs mb-2">Manage billing Information and view recipt</div>
            <div class="w-full overflow-x-auto">
              <table class="w-full whitespace-nowrap">
                <thead>
                  <tr class="text-sm dark:bg-bg3 text-n500 dark:text-n30">
                    <th @click="sortData('title')" class="py-3 font-semibold px-0 text-start">
                      <div class="flex items-center gap-1 cursor-pointer select-none">Date</div>
                    </th>
                    <th @click="sortData('name')" class="py-3 font-semibold px-0 text-start">
                      <div class="flex items-center gap-1 cursor-pointer select-none">Type</div>
                    </th>
                    <th @click="sortData('percent')" class="py-3 font-semibold px-0 text-start">
                      <div class="flex items-center gap-1 cursor-pointer select-none">Recipt</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="{ id, date, type } in tableData" :key="id">
                    <td class="px-0 text-sm">{{ date }}</td>
                    <td class="px-0 text-sm">
                      {{ type }}
                    </td>
                    <td class="px-0 text-sm">
                      <a
                        href=""
                        type="button"
                        class="border hover:bg-gray-200 mt-2 transition rounded-lg text-sm px-8 py-1.5 me-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                        >Download
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="flex-1 p-2">
            <div class="flex justify-between mb-3">
              <div>
                <div class="font-medium">Purchase History</div>
                <div class="text-xs mb-2">Manage billing Information and view recipt</div>
              </div>
              <button class="text-xs">Add payment method <i class="fa-solid fa-circle-plus text-xs ms-1"></i></button>
            </div>
            <div class="flex justify-between items-center mb-2">
              <div class="flex gap-3 items-center xxxl:gap-5">
                <img src="/public/images/visa2.png" class="w-20" alt="img" />
                <div>
                  <span class="text-xs md:text-sm ms-1">Visa ending in 2050</span>
                </div>
              </div>
              <button class="dark:bg-bg3 rounded-lg text-sm px-4 p-2 border border-n30 dark:border-n500">Remove</button>
            </div>
            <div class="flex justify-between items-center">
              <div class="flex gap-3 items-center xxxl:gap-5">
                <img src="/public/images/visa2.png" class="w-20" alt="img" />
                <div>
                  <span class="text-xs md:text-sm ms-1">Visa ending in 2050</span>
                </div>
              </div>
              <button class="dark:bg-bg3 rounded-lg text-sm px-4 p-2 border border-n30 dark:border-n500">Remove</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br />
  </div>
</template>
