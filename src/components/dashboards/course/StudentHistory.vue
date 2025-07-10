<script setup lang="ts">
import Checkbox from '@/components/shared/Checkbox.vue'
import OptionsVertical from '@/components/shared/OptionsVertical.vue'
import { useTableFunctions } from '@/utils/tableFunction'
import { IconSelector } from '@tabler/icons-vue'
import { IconDotsVertical } from '@tabler/icons-vue'
import { onClickOutside } from '@vueuse/core'
import { ref } from 'vue'

const studentsHistory = [
  {
    id: 1,
    location: '8558 Green Rd.',
    name: 'Dustin',
    img: '/images/user-6.png',
    status: 'Online'
  },
  {
    id: 2,
    location: '8080 Railroad Rd.',
    name: 'Angel',
    img: '/images/user.png',
    status: 'Offline'
  },
  {
    id: 3,
    location: '775 Rolling Green Rd.',
    name: 'Shane',
    img: '/images/user-2.png',
    status: 'Online'
  },
  {
    id: 4,
    location: '3605 Parker Rd.',
    name: 'Max',
    img: '/images/user-3.png',
    status: 'Offline'
  },
  {
    id: 5,
    location: '8558 E. Pecan St.',
    name: 'Philip',
    img: '/images/user-4.png',
    status: 'Online'
  },
  {
    id: 6,
    location: '3605 Parker Rd.',
    name: 'Milan Hey',
    img: '/images/user-3.png',
    status: 'Offline'
  },
  {
    id: 7,
    location: '8558 E. Pecan St.',
    name: 'Rinald',
    img: '/images/user-4.png',
    status: 'Online'
  },
  {
    id: 8,
    location: '8558 Poplar Rd.',
    name: 'Gladys',
    img: '/images/user-5.png',
    status: 'Offline'
  },
  {
    id: 9,
    location: '8558 Parker Rd.',
    name: 'Victoria',
    img: '/images/user-6.png',
    status: 'Online'
  },
  {
    id: 10,
    location: '8558 Green Rd.',
    name: 'Greg',
    img: '/images/user-7.png',
    status: 'Offline'
  }
]
const openDropdown = ref<number | null>(null)
const target = ref(null)
onClickOutside(target, () => (openDropdown.value = null))
const toggleOpen = (id: number) => {
  openDropdown.value = openDropdown.value === id ? null : id
}
const { tableData, sortData, deleteItem } = useTableFunctions(studentsHistory)
const handleDelete = (id: number) => {
  if (confirm('Are you sure?')) {
    deleteItem(id)
  }
}
</script>

<template>
  <div class="box mt-6 col-span-12 lg:col-span-7">
    <div
      class="flex flex-wrap justify-between items-center gap-3 pb-4 lg:pb-6 mb-4 lg:mb-6 bb-dashed"
    >
      <p class="font-medium">Student History</p>
      <OptionsVertical />
    </div>
    <div class="w-full overflow-x-auto">
      <table class="w-full whitespace-nowrap">
        <thead>
          <tr class="bg-primary/5 dark:bg-bg3 text-n500 dark:text-n30">
            <th class="py-3 font-semibold px-4 text-start">Mark</th>
            <th @click="() => sortData('associate')" class="py-3 font-semibold px-4 text-start">
              <div class="flex items-center gap-1 cursor-pointer select-none">
                Associate
                <IconSelector :size="18" />
              </div>
            </th>
            <th @click="() => sortData('location')" class="py-3 font-semibold px-4 text-start">
              <div class="flex items-center gap-1 cursor-pointer select-none">
                Location
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
            v-for="({ img, name, location, status, id }, index) in tableData"
            :key="id"
            class="even:bg-primary/5 dark:even:bg-bg3"
          >
            <td class="px-4 py-2">
              <div class="flex pl-3">
                <Checkbox />
              </div>
            </td>
            <td class="px-4 py-2">
              <span class="flex items-center gap-3">
                <img class="rounded-full" :src="img" :width="32" :height="32" alt="lead img" />
                {{ name }}
              </span>
            </td>
            <td class="px-4 py-2">{{ location }}</td>
            <td class="px-4 py-2">
              <span
                :class="{
                  'bg-primary/5 text-primary': status == 'Online',
                  'bg-secondary1/5 text-secondary1': status == 'Offline'
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
                  class="absolute ltr:right-16 rtl:left-16 text-sm border z-30 dark:border-n500 min-w-[160px] p-1.5 rounded-md bg-n0 dark:bg-bg4"
                  :class="{
                    'bottom-0': tableData.length - 1 == index || tableData.length - 2 == index
                  }"
                  ref="target"
                >
                  <li>
                    <button
                      class="py-2 w-full text-left hover:bg-primary/20 rounded-md hover:text-primary duration-300 block px-3"
                    >
                      Edit
                    </button>
                  </li>
                  <li>
                    <button
                      @click="handleDelete(id)"
                      class="py-2 w-full text-left hover:bg-primary/20 rounded-md hover:text-primary duration-300 block px-3"
                    >
                      Delete
                    </button>
                  </li>
                  <li>
                    <button
                      class="py-2 w-full text-left hover:bg-primary/20 rounded-md hover:text-primary duration-300 block px-3"
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
