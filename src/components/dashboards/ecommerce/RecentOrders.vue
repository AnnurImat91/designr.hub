<script setup lang="ts">
import OptionsVertical from '@/components/shared/OptionsVertical.vue'
import { useTableFunctions } from '@/utils/tableFunction'
import { faker } from '@faker-js/faker'
import { IconDotsVertical } from '@tabler/icons-vue'
import { IconSelector } from '@tabler/icons-vue'
import { onClickOutside } from '@vueuse/core'
import { ref } from 'vue'

const orders = Array.from({ length: 8 }).map(() => {
  return {
    id: faker.number.int({ max: 999999, min: 111111 }),
    name: faker.helpers.arrayElement(['Easy Cheese', 'Nutella', 'Easy Cheese', 'Sesame Oil', 'Doritos', 'Mashra', 'Nutella', 'White Pepper']),
    date: faker.date.recent(),
    amount: faker.number.float({ min: 200, max: 900, precision: 0.01 }),
    status: faker.helpers.arrayElement(['Paid', 'Pending'])
  }
})
const { tableData, sortData, deleteItem } = useTableFunctions(orders)
const openDropdown = ref<number | null>(null)
const target = ref(null)
onClickOutside(target, () => (openDropdown.value = null))
const toggleOpen = (id: number) => {
  openDropdown.value = openDropdown.value === id ? null : id
}
const handleDelete = (id: number) => {
  if (confirm('Are you sure?')) {
    deleteItem(id)
  }
}
</script>

<template>
  <div class="col-span-12 lg:col-span-6 box">
    <div class="flex flex-wrap justify-between items-center gap-3 pb-4 lg:pb-6 mb-4 lg:mb-6 bb-dashed">
      <p class="font-medium">Recent Orders</p>
      <OptionsVertical />
    </div>
    <div class="w-full overflow-x-auto">
      <table class="w-full whitespace-nowrap">
        <thead>
          <tr class="bg-primary/5 dark:bg-bg3 text-n500 dark:text-n30">
            <th @click="() => sortData('id')" class="py-3 font-semibold px-4 text-start w-[14]">
              <div class="flex items-center gap-1 cursor-pointer select-none">
                ID
                <IconSelector :size="18" />
              </div>
            </th>
            <th @click="() => sortData('name')" class="py-3 font-semibold px-4 text-start w-[20%]">
              <div class="flex items-center gap-1 cursor-pointer select-none">
                Product
                <IconSelector :size="18" />
              </div>
            </th>
            <th @click="() => sortData('payouts')" class="py-3 font-semibold px-4 text-start w-[16%]">
              <div class="flex items-center gap-1 cursor-pointer select-none">
                Amount
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
          <tr v-for="({ date, id, name, amount, status }, index) in tableData" :key="id" class="even:bg-primary/5 dark:even:bg-bg3">
            <td class="px-4 py-3">{{ id }}</td>
            <td class="px-4 py-3">{{ name }}</td>
            <td class="px-4 py-3">${{ amount }}</td>
            <td class="px-4 py-3">{{ date.toLocaleDateString() }}</td>
            <td class="px-4 py-3">
              <span
                :class="{
                  'bg-secondary4/5 text-secondary4': status == 'Pending',
                  'bg-secondary1/5 text-secondary1': status == 'Paid'
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
                  class="absolute ltr:right-16 rtl:left-16 border text-sm z-30 dark:border-n500 min-w-[160px] p-1.5 rounded-md bg-n0 dark:bg-bg4"
                  :class="{
                    'bottom-0': tableData.length - 1 == index || tableData.length - 2 == index
                  }"
                  ref="target"
                >
                  <li>
                    <button class="py-2 w-full text-left hover:bg-primary/10 rounded-md hover:text-primary duration-300 block px-3">Edit</button>
                  </li>
                  <li>
                    <button @click="handleDelete(id)" class="py-2 w-full text-left hover:bg-primary/10 rounded-md hover:text-primary duration-300 block px-3">Delete</button>
                  </li>
                  <li>
                    <button class="py-2 w-full text-left hover:bg-primary/10 rounded-md hover:text-primary duration-300 block px-3">Block</button>
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
