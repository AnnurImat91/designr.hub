<script setup lang="ts">
import OptionsVertical from '@/components/shared/OptionsVertical.vue'
import TableActions from '@/components/shared/TableActions.vue'
import { useTableFunctions } from '@/utils/tableFunction'
import { IconSelector } from '@tabler/icons-vue'
import { onClickOutside } from '@vueuse/core'
import { ref } from 'vue'

const hobbies = [
  {
    id: 556261,
    Hobbies: 'Vie nocturne',
    location: 'Portland, Illinois',
    date: '22/07/23',
    cost: '$475.22',
    status: 'Complete'
  },
  {
    id: 556262,
    Hobbies: 'Theatre',
    location: 'Corona, Michigan',
    date: '22/07/23',
    cost: '$475.22',
    status: 'In Travels'
  },
  {
    id: 556263,
    Hobbies: 'Lecture',
    location: 'Lansing, Illinois',
    date: '22/07/23',
    cost: '$475.22',
    status: 'Complete'
  },
  {
    id: 556264,
    Hobbies: 'Voyages',
    location: 'Syracuse, Connecticut',
    date: '22/07/23',
    cost: '$475.22',
    status: 'Cancel'
  },
  {
    id: 556265,
    Hobbies: 'Technologies',
    location: 'Kent, Utah',
    date: '22/07/23',
    cost: '$475.22',
    status: 'Complete'
  },
  {
    id: 556266,
    Hobbies: 'Photography',
    location: 'Pasadena, Oklahoma',
    date: '22/07/23',
    cost: '$475.22',
    status: 'Cancel'
  },
  {
    id: 556267,
    Hobbies: 'Cinema',
    location: 'Stockton, New Hampshire',
    date: '22/07/23',
    cost: '$475.22',
    status: 'Complete'
  },
  {
    id: 556268,
    Hobbies: 'Cuisine',
    location: 'Great Falls, Maryland',
    date: '22/07/23',
    cost: '$475.22',
    status: 'In Travels'
  }
]
const { tableData, deleteItem, sortData } = useTableFunctions(hobbies)
const openDropdown = ref<number | null>(null)
const target = ref(null)
onClickOutside(target, () => (openDropdown.value = null))

const handleDelete = (id: number) => {
  if (confirm('Are you sure?')) {
    deleteItem(id)
  }
}
</script>

<template>
  <div class="col-span-12 box">
    <div
      class="flex flex-wrap justify-between items-center gap-3 pb-4 lg:pb-6 mb-4 lg:mb-6 bb-dashed"
    >
      <p class="font-medium">Hobbies List</p>
      <OptionsVertical />
    </div>
    <div class="w-full overflow-x-auto">
      <table class="w-full whitespace-nowrap">
        <thead>
          <tr class="bg-primary/5 dark:bg-bg3 text-n500 dark:text-n30">
            <th @click="() => sortData('id')" class="py-3 font-semibold px-4 text-start w-[12%]">
              <div class="flex items-center gap-1 cursor-pointer select-none">
                Code
                <IconSelector :size="18" />
              </div>
            </th>
            <th
              @click="() => sortData('Hobbies')"
              class="py-3 font-semibold px-4 text-start w-[18%]"
            >
              <div class="flex items-center gap-1 cursor-pointer select-none">
                Hobbies
                <IconSelector :size="18" />
              </div>
            </th>
            <th
              @click="() => sortData('location')"
              class="py-3 font-semibold px-4 text-start w-[22%]"
            >
              <div class="flex items-center gap-1 cursor-pointer select-none">
                Location
                <IconSelector :size="18" />
              </div>
            </th>
            <th @click="() => sortData('date')" class="py-3 font-semibold px-4 text-start w-[16%]">
              <div class="flex items-center gap-1 cursor-pointer select-none">
                Date
                <IconSelector :size="18" />
              </div>
            </th>
            <th @click="() => sortData('cost')" class="py-3 font-semibold px-4 text-start w-[15%]">
              <div class="flex items-center gap-1 cursor-pointer select-none">
                Cost
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
            v-for="({ Hobbies, id, cost, date, location, status }, index) in tableData"
            :key="id"
            class="even:bg-primary/5 dark:even:bg-bg3"
          >
            <td class="px-4 py-2 w-8">{{ id }}</td>
            <td class="px-4 py-2">{{ Hobbies }}</td>
            <td class="px-4 py-2">{{ location }}</td>
            <td class="px-4 py-2">{{ date }}</td>
            <td class="px-4 py-2">{{ cost }}</td>
            <td class="px-4 py-2">
              <span
                :class="{
                  'bg-secondary4/5 text-secondary4': status == 'Complete',
                  'bg-secondary2/5 text-secondary2': status == 'In Travels',
                  'bg-secondary1/5 text-secondary1': status == 'Cancel'
                }"
                class="block text-xs w-28 text-center rounded-[30px] dark:border-n500 border border-n30 py-2"
              >
                {{ status }}
              </span>
            </td>
            <td class="py-3">
              <TableActions
                :from-bottom="index == tableData.length - 1 || index == tableData.length - 2"
                :on-delete="() => handleDelete(id)"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
