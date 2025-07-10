<script setup lang="ts">
import CommonDropdown from '@/components/shared/CommonDropdown.vue'
import TableActions from '@/components/shared/TableActions.vue'
import { useTableFunctions } from '@/utils/tableFunction'
import {
  IconArchive,
  IconBroadcast,
  IconChecklist,
  IconHourglassOff,
  IconMessage,
  IconRefresh,
  IconSelector,
  IconTimeline,
  IconTools
} from '@tabler/icons-vue'
import { onClickOutside } from '@vueuse/core'
import { ref } from 'vue'
const projects = [
  {
    id: 1,
    type: 'Messages',
    date: '23/08/23',
    time: '01:09 am',
    count: 883,
    status: 'Complete',
    icon: IconMessage
  },
  {
    id: 2,
    type: 'Tasks',
    date: '23/08/23',
    time: '08:20 pm',
    count: 429,
    status: 'Inprogress',
    icon: IconChecklist
  },
  {
    id: 3,
    type: 'Deadlines',
    date: '23/08/23',
    time: '07:38 am',
    count: 453,
    status: 'Complete',
    icon: IconTimeline
  },
  {
    id: 4,
    type: 'Management Tools',
    date: '23/08/23',
    time: '10:41 pm',
    count: 922,
    status: 'Cancel',
    icon: IconTools
  },
  {
    id: 5,
    type: 'Time Blocking',
    date: '23/08/23',
    time: '11:27 am',
    count: 196,
    status: 'Inprogress',
    icon: IconHourglassOff
  },
  {
    id: 6,
    type: 'Review and Update',
    date: '23/08/23',
    time: '01:09 am',
    count: 583,
    status: 'Complete',
    icon: IconRefresh
  },
  {
    id: 7,
    type: 'Communication',
    date: '23/08/23',
    time: '01:09 am',
    count: 130,
    status: 'Cancel',
    icon: IconBroadcast
  },
  {
    id: 8,
    type: 'Archive or Delete',
    date: '23/08/23',
    time: '01:09 am',
    count: 426,
    status: 'Complete',
    icon: IconArchive
  }
]
const { tableData, sortData, deleteItem } = useTableFunctions(projects)
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
  <div class="box mt-4 xxxl:mt-6">
    <div
      class="flex flex-wrap justify-between items-center gap-3 pb-4 lg:pb-6 mb-4 lg:mb-6 bb-dashed"
    >
      <p class="font-medium">Feed Settings</p>
      <div class="flex items-center gap-2">
        <p class="text-xs sm:text-sm">Sort By :</p>
        <CommonDropdown />
      </div>
    </div>
    <div class="w-full overflow-x-auto">
      <table class="w-full whitespace-nowrap">
        <thead>
          <tr class="bg-primary/5 dark:bg-bg3 text-n500 dark:text-n30">
            <th class="py-3 font-semibold px-4 text-start">Mark</th>
            <th @click="() => sortData('type')" class="py-3 font-semibold px-4 text-start w-[25%]">
              <div class="flex items-center gap-1 cursor-pointer select-none">
                Type
                <IconSelector :size="18" />
              </div>
            </th>
            <th @click="() => sortData('date')" class="py-3 font-semibold px-4 text-start w-[16%]">
              <div class="flex items-center gap-1 cursor-pointer select-none">
                Date
                <IconSelector :size="18" />
              </div>
            </th>
            <th @click="() => sortData('time')" class="py-3 font-semibold px-4 text-start w-[16%]">
              <div class="flex items-center gap-1 cursor-pointer select-none">
                Time
                <IconSelector :size="18" />
              </div>
            </th>
            <th @click="() => sortData('count')" class="py-3 font-semibold px-4 text-start w-[16%]">
              <div class="flex items-center gap-1 cursor-pointer select-none">
                Count
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
            v-for="({ date, type, icon, count, time, status, id }, index) in tableData"
            :key="id"
            class="even:bg-primary/5 dark:even:bg-bg3"
          >
            <td class="py-2 pl-7">
              <div class="flex">
                <input type="checkbox" class="scale-125 accent-primary" />
              </div>
            </td>
            <td class="px-4 py-2">
              <div class="flex items-center gap-3">
                <div class="bg-primary/5 dark:bg-bg3 p-2 rounded-xl text-primary">
                  <component :is="icon"></component>
                </div>
                <span>{{ type }}</span>
              </div>
            </td>
            <td class="px-4 py-2">{{ date }}</td>
            <td class="px-4 py-2">{{ time }}</td>
            <td class="px-4 py-2">{{ count }}</td>
            <td class="px-4 py-2">
              <span
                :class="{
                  'bg-secondary4/5 text-secondary4': status == 'Complete',
                  'bg-secondary2/5 text-secondary2': status == 'Cancel',
                  'bg-secondary1/5 text-secondary1': status == 'Inprogress'
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
