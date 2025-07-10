<script setup lang="ts">
import CommonDropdown from '@/components/shared/CommonDropdown.vue'
import TableActions from '@/components/shared/TableActions.vue'
import { useTableFunctions } from '@/utils/tableFunction'
import { IconSelector } from '@tabler/icons-vue'

const tasks = [
  {
    id: 1,
    name: 'Alice Johnson',
    deadline: '11/15/23',
    status: 'Inprogress'
  },
  {
    id: 2,
    name: 'Bob Smith',
    deadline: '01/20/24',
    status: 'Pending'
  },
  {
    id: 3,
    name: 'Eva Davis',
    deadline: '03/05/23',
    status: 'Complete'
  },
  {
    id: 4,
    name: 'Michael Lee',
    deadline: '09/12/23',
    status: 'Pending'
  },
  {
    id: 5,
    name: 'Sophia White',
    deadline: '07/30/24',
    status: 'Pending'
  },
  {
    id: 6,
    name: 'David Garcia',
    deadline: '02/18/23',
    status: 'Complete'
  },
  {
    id: 7,
    name: 'Olivia Brown',
    deadline: '06/09/24',
    status: 'Complete'
  },
  {
    id: 8,
    name: 'Samuel Wilson',
    deadline: '10/25/23',
    status: 'Inprogress'
  }
]
const { tableData, sortData, deleteItem } = useTableFunctions(tasks)
const handleDelete = (id: number) => {
  if (confirm('Are you sure?')) {
    deleteItem(id)
  }
}
</script>
<template>
  <div class="col-span-12 lg:col-span-6">
    <div class="box">
      <div
        class="flex flex-wrap justify-between items-center gap-3 pb-4 lg:pb-6 mb-4 lg:mb-6 bb-dashed"
      >
        <p class="font-medium">My Tasks</p>
        <div class="flex items-center gap-2">
          <p class="text-xs sm:text-sm">Sort By :</p>
          <CommonDropdown />
        </div>
      </div>
      <div>
        <div class="w-full overflow-x-auto relative">
          <table class="w-full whitespace-nowrap">
            <thead>
              <tr class="bg-primary/5 dark:bg-bg3 text-n500 dark:text-n30">
                <th @click="sortData('name')" class="py-3 font-semibold px-4 text-start w-[30%]">
                  <div class="flex items-center gap-1 cursor-pointer select-none">
                    Name
                    <IconSelector :size="18" />
                  </div>
                </th>
                <th
                  @click="sortData('deadline')"
                  class="py-3 font-semibold px-4 text-start w-[30%]"
                >
                  <div class="flex items-center gap-1 cursor-pointer select-none">
                    Deadline
                    <IconSelector :size="18" />
                  </div>
                </th>
                <th @click="sortData('status')" class="py-3 font-semibold px-4 text-start">
                  <div class="flex items-center gap-1 cursor-pointer select-none">
                    Status
                    <IconSelector :size="18" />
                  </div>
                </th>
                <th class="py-3 font-semibold px-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="({ id, deadline, name, status }, index) in tableData" :key="id">
                <td class="px-4 py-2">{{ name }}</td>
                <td class="px-4 py-2">{{ deadline }}</td>
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
                    <TableActions
                      :from-bottom="index == tableData.length - 1 || index == tableData.length - 2"
                      :on-delete="() => handleDelete(id)"
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
