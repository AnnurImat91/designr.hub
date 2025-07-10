<script setup lang="ts">
import OptionsVertical from '@/components/shared/OptionsVertical.vue'
import { useTableFunctions } from '@/utils/tableFunction'
import { IconDotsVertical } from '@tabler/icons-vue'
import { IconSelector } from '@tabler/icons-vue'
import { onClickOutside } from '@vueuse/core'
import { ref } from 'vue'

const projects = [
  {
    id: '556261',
    bank: 'Banorte',
    name: 'Arlene McCoy',
    date: '22/07/23',
    payouts: '$475.22',
    status: 'Inprogress'
  },
  {
    id: '123456',
    bank: 'UBS Bank',
    name: 'John Doe',
    date: '15/09/23',
    payouts: '$350.50',
    status: 'Complete'
  },
  {
    id: '789012',
    bank: 'Banco J.P. Morgan',
    name: 'Jane Smith',
    date: '30/05/23',
    payouts: '$620.75',
    status: 'Pending'
  },
  {
    id: '345678',
    bank: 'Volkswagen Bank',
    name: 'Robert Johnson',
    date: '18/12/23',
    payouts: '$280.90',
    status: 'Inprogress'
  },
  {
    id: '987654',
    bank: 'Autofin',
    name: 'Emily White',
    date: '05/11/23',
    payouts: '$510.30',
    status: 'Complete'
  },
  {
    id: '654321',
    bank: 'Bank of America',
    name: 'Michael Brown',
    date: '08/08/23',
    payouts: '$420.10',
    status: 'Pending'
  },
  {
    id: '210987',
    bank: 'Banorte',
    name: 'Sarah Davis',
    date: '12/04/23',
    payouts: '$580.60',
    status: 'Inprogress'
  }
]
const openDropdown = ref<number | null>(null)
const target = ref(null)
onClickOutside(target, () => (openDropdown.value = null))
const toggleOpen = (id: number) => {
  openDropdown.value = openDropdown.value === id ? null : id
}
const { tableData, sortData, deleteItem } = useTableFunctions(projects)
const handleDelete = (id: number) => {
  if (confirm('Are you sure?')) {
    deleteItem(id)
  }
}
</script>

<template>
  <div class="col-span-12 lg:col-span-8 xxl:col-span-9 box">
    <div
      class="flex flex-wrap justify-between items-center gap-3 pb-4 lg:pb-6 mb-4 lg:mb-6 bb-dashed"
    >
      <p class="font-medium">Transaction History</p>
      <OptionsVertical />
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
            <th @click="() => sortData('bank')" class="py-3 font-semibold px-4 text-start w-[22%]">
              <div class="flex items-center gap-1 cursor-pointer select-none">
                Bank
                <IconSelector :size="18" />
              </div>
            </th>
            <th
              @click="() => sortData('payouts')"
              class="py-3 font-semibold px-4 text-start w-[18%]"
            >
              <div class="flex items-center gap-1 cursor-pointer select-none">
                Payouts
                <IconSelector :size="18" />
              </div>
            </th>
            <th @click="() => sortData('date')" class="py-3 font-semibold px-4 text-start w-[16%]">
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
          <tr
            v-for="({ bank, date, id, name, payouts, status }, index) in tableData"
            :key="id"
            class="even:bg-primary/5 dark:even:bg-bg3"
          >
            <td class="px-4 py-2">{{ name }}</td>
            <td class="px-4 py-2">{{ bank }}</td>
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
              <div class="relative top-0 dropdown flex justify-center">
                <IconDotsVertical :size="20" @click="toggleOpen(id)" class="cursor-pointer" />
                <ul
                  v-show="openDropdown == id"
                  class="absolute ltr:right-16 rtl:left-16 border z-30 dark:border-n500 min-w-[160px] text-sm p-1.5 rounded-md bg-n0 dark:bg-bg4"
                  :class="{
                    'bottom-0': tableData.length - 1 == index || tableData.length - 2 == index
                  }"
                  ref="target"
                >
                  <li>
                    <button
                      class="py-2 w-full text-left hover:bg-primary/10 rounded-md hover:text-primary duration-300 block px-3"
                    >
                      Edit
                    </button>
                  </li>
                  <li>
                    <button
                      @click="handleDelete(id)"
                      class="py-2 w-full text-left hover:bg-primary/10 rounded-md hover:text-primary duration-300 block px-3"
                    >
                      Delete
                    </button>
                  </li>
                  <li>
                    <button
                      class="py-2 w-full text-left hover:bg-primary/10 rounded-md hover:text-primary duration-300 block px-3"
                    >
                      Block
                    </button>
                  </li>
                </ul>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
