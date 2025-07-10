<script setup lang="ts">
import OptionsVertical from '@/components/shared/OptionsVertical.vue'
import { useTableFunctions } from '@/utils/tableFunction'
import { IconDotsVertical, IconSelector } from '@tabler/icons-vue'
import { onClickOutside } from '@vueuse/core'
import { ref } from 'vue'

const history = [
  {
    rate: '$475.25',
    expertise: 'Software Developer',
    name: 'Dustin',
    img: '/images/user.png',
    status: 'Complete',
    id: 1
  },
  {
    rate: '$475.25',
    expertise: 'Team Leader',
    name: 'Jakir',
    img: '/images/user-2.png',
    status: 'Inprogress',
    id: 2
  },
  {
    rate: '$475.25',
    expertise: 'Project Manager',
    name: 'Ragib',
    img: '/images/user-3.png',
    status: 'Complete',
    id: 3
  },
  {
    rate: '$475.25',
    expertise: 'Project Manager',
    name: 'Badhan',
    img: '/images/user-6.png',
    status: 'Complete',
    id: 4
  },
  {
    rate: '$475.25',
    expertise: 'Software Tester',
    name: 'Kamal',
    img: '/images/user-4.png',
    status: 'Pending',
    id: 5
  },
  {
    rate: '$475.25',
    expertise: 'UI/UX Designer',
    name: 'Danvar',
    img: '/images/user-5.png',
    status: 'Complete',
    id: 6
  },
  {
    rate: '$475.25',
    expertise: 'Scrum Master',
    name: 'Mahfuz',
    img: '/images/user-6.png',
    status: 'Pending',
    id: 7
  },
  {
    rate: '$475.25',
    expertise: 'Project Manager',
    name: 'Salem',
    img: '/images/user-3.png',
    status: 'Complete',
    id: 8
  },
  {
    rate: '$475.25',
    expertise: 'Ethical Hacker',
    name: 'Mamun',
    img: '/images/user-4.png',
    status: 'Inprogress',
    id: 9
  }
]
const { tableData, deleteItem, sortData } = useTableFunctions(history)
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
  <div class="box">
    <div
      class="flex flex-wrap justify-between items-center gap-3 pb-4 lg:pb-6 mb-4 lg:mb-6 bb-dashed"
    >
      <p class="font-medium">Company History</p>
      <OptionsVertical />
    </div>
    <div class="w-full overflow-x-auto">
      <table class="w-full whitespace-nowrap">
        <thead>
          <tr class="bg-primary/5 dark:bg-bg3 text-n500 dark:text-n30">
            <th class="py-3 font-semibold px-4 text-start">Mark</th>
            <th @click="() => sortData('name')" class="py-3 font-semibold px-4 text-start w-[26%]">
              <div class="flex items-center gap-1 cursor-pointer select-none">
                Associate
                <IconSelector :size="18" />
              </div>
            </th>
            <th
              @click="() => sortData('expertise')"
              class="py-3 font-semibold px-4 text-start w-[25%]"
            >
              <div class="flex items-center gap-1 cursor-pointer select-none">
                Expertise
                <IconSelector :size="18" />
              </div>
            </th>
            <th @click="() => sortData('rate')" class="py-3 font-semibold px-4 text-start w-[22%]">
              <div class="flex items-center gap-1 cursor-pointer select-none">
                Rate
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
            :key="name"
            v-for="({ name, expertise, rate, status, id, img }, index) in tableData"
            class="even:bg-primary/5 dark:even:bg-bg3"
          >
            <td class="px-4 py-2">
              <div class="flex justify-center">
                <input type="checkbox" class="scale-125 accent-primary" />
              </div>
            </td>
            <td class="px-4 py-2">
              <span class="flex items-center gap-3">
                <img class="rounded-full" :src="img" :width="32" :height="32" alt="lead img" />
                {{ name }}
              </span>
            </td>
            <td class="px-4 py-2">{{ expertise }}</td>
            <td class="px-4 py-2">{{ rate }}</td>
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
                  class="absolute ltr:right-16 rtl:left-16 border z-30 dark:border-n500 text-sm min-w-[160px] p-1.5 rounded-md bg-n0 dark:bg-bg4"
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
