<script setup lang="ts">
import CommonDropdown from '@/components/shared/CommonDropdown.vue'
import { IconSelector } from '@tabler/icons-vue'
import { useTableFunctions } from '@/utils/tableFunction'

const tickets = [
  {
    id: '556261',
    date: '22/07/23',
    status: 'Inprogress'
  },
  {
    id: '123456',
    date: '15/09/23',
    status: 'Complete'
  },
  {
    id: '789012',
    date: '30/05/23',
    status: 'Pending'
  },
  {
    id: '345678',
    date: '18/12/23',
    status: 'Inprogress'
  },
  {
    id: '987654',
    date: '05/11/23',
    status: 'Complete'
  },
  {
    id: '654321',
    date: '08/08/23',
    status: 'Pending'
  },
  {
    id: '210987',
    date: '12/04/23',
    status: 'Inprogress'
  }
]
const { tableData, sortData } = useTableFunctions(tickets)
</script>
<template>
  <div class="box col-span-12 lg:col-span-6 mb-4 xxxl:mb-6">
    <div
      class="flex flex-wrap justify-between items-center gap-3 pb-4 lg:pb-6 mb-4 lg:mb-6 bb-dashed"
    >
      <p class="font-medium">Recent Tickets</p>
      <div class="flex items-center gap-2">
        <p class="text-xs sm:text-sm">Sort By :</p>
        <CommonDropdown />
      </div>
    </div>
    <div class="w-full overflow-x-auto">
      <table class="w-full whitespace-nowrap">
        <thead>
          <tr class="bg-primary/5 dark:bg-bg3 text-n500 dark:text-n30">
            <th @click="sortData('id')" class="py-3 font-semibold px-4 text-start">
              <div class="flex items-center gap-1 cursor-pointer select-none">
                ID
                <IconSelector :size="18" />
              </div>
            </th>
            <th @click="sortData('date')" class="py-3 font-semibold px-4 text-start">
              <div class="flex items-center gap-1 cursor-pointer select-none">
                Date
                <IconSelector :size="18" />
              </div>
            </th>
            <th @click="sortData('status')" class="py-3 font-semibold px-4 text-start">
              <div class="flex items-center gap-1 cursor-pointer select-none">
                Status
                <IconSelector :size="18" />
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="{ id, date, status } in tableData"
            :key="id"
            class="even:bg-primary/5 dark:even:bg-bg3"
          >
            <td class="px-4 py-2">{{ id }}</td>
            <td class="px-4 py-2">{{ date }}</td>
            <td class="px-4 py-2">
              <span
                :class="{
                  'bg-secondary4/5 text-secondary4': status == 'Complete',
                  'bg-secondary2/5 text-secondary2': status == 'Pending',
                  'bg-secondary1/5 text-secondary1': status == 'Inprogress'
                }"
                class="block text-xs w-28 text-center rounded-[30px] dark:border-n500 border border-n30 py-2"
              >
                {{ status }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <RouterLink to="#" class="btn-outline mt-7 lg:mt-10"> View All </RouterLink>
  </div>
</template>
