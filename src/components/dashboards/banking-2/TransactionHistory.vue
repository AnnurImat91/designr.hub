<script setup lang="ts">
import CommonDropdownVue from '@/components/shared/CommonDropdown.vue'
import { useTableFunctions } from '@/utils/tableFunction'
import { IconSelector } from '@tabler/icons-vue'
const transactions = [
  {
    payouts: '$475.25',
    date: '22/07/23',
    name: 'Maliha',
    img: '/images/user.png',
    status: 'Complete',
    id: 1
  },
  {
    payouts: '$475.25',
    date: '22/07/23',
    name: 'Babul',
    img: '/images/user-2.png',
    status: 'Inprogress',
    id: 2
  },
  {
    payouts: '$475.25',
    date: '22/07/23',
    name: 'Karim',
    img: '/images/user-3.png',
    status: 'Complete',
    id: 3
  },
  {
    payouts: '$475.25',
    date: '22/07/23',
    name: 'Duke',
    img: '/images/user-6.png',
    status: 'Inprogress',
    id: 4
  },
  {
    payouts: '$475.25',
    date: '22/07/23',
    name: 'Dustin',
    img: '/images/user-4.png',
    status: 'Pending',
    id: 5
  },
  {
    payouts: '$475.25',
    date: '22/07/23',
    name: 'Danvar',
    img: '/images/user-5.png',
    status: 'Complete',
    id: 6
  },
  {
    payouts: '$475.25',
    date: '22/07/23',
    name: 'Mahfuz',
    img: '/images/user-6.png',
    status: 'Inprogress',
    id: 7
  }
]
const { deleteItem, sortData, tableData } = useTableFunctions(transactions)
</script>

<template>
  <div class="box col-span-12 xl:col-span-6">
    <div
      class="flex flex-wrap justify-between items-center gap-3 pb-4 lg:pb-6 mb-4 lg:mb-6 bb-dashed"
    >
      <p class="font-medium">Transactions History</p>
      <div class="flex items-center gap-2">
        <p class="text-xs sm:text-sm">Sort By :</p>
        <CommonDropdownVue />
      </div>
    </div>
    <div class="w-full overflow-x-auto">
      <table class="w-full whitespace-nowrap">
        <thead>
          <tr class="bg-primary/5 dark:bg-bg3 text-n500 dark:text-n30">
            <th @click="() => sortData('name')" class="py-3 font-semibold px-4 text-start w-[20%]">
              <div class="flex items-center gap-1 cursor-pointer select-none">
                Name
                <IconSelector :size="18" />
              </div>
            </th>
            <th
              @click="() => sortData('payouts')"
              class="py-3 font-semibold px-4 text-start w-[20%]"
            >
              <div class="flex items-center gap-1 cursor-pointer select-none">
                Payouts
                <IconSelector :size="18" />
              </div>
            </th>
            <th @click="() => sortData('date')" class="py-3 font-semibold px-4 text-start w-[20%]">
              <div class="flex items-center gap-1 cursor-pointer select-none">
                Date
                <IconSelector :size="18" />
              </div>
            </th>
            <th @click="() => sortData('status')" class="py-3 font-semibold px-4 text-start">
              <div class="flex items-center gap-1 cursor-pointer select-none">
                Status
                <IconSelector :size="18" />
              </div>
            </th>
            <th class="py-3 font-semibold px-4 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="{ date, id, img, name, payouts, status } in tableData" :key="name">
            <td class="px-4 py-2">
              <span class="flex items-center gap-3">
                <img class="rounded-full" :src="img" :width="32" :height="32" alt="lead img" />
                {{ name }}
              </span>
            </td>
            <td class="px-4 py-2">{{ payouts }}</td>
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
            <td class="py-3">
              <div class="flex justify-center">
                <!-- <TableActions
                        onDelete={() => deleteItem(id)}
                        fromBottom={
                          index == tableData.length - 1 ||
                          index == tableData.length - 2
                        }
                      /> -->
                <button @click="deleteItem(id)">Delete</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
