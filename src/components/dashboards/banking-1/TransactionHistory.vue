<script setup lang="ts">
import OptionsVertical from '@/components/shared/OptionsVertical.vue'
import { useTableFunctions } from '@/utils/tableFunction'
import { IconSelector } from '@tabler/icons-vue'
import TableActions from '@/components/shared/TableActions.vue'

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
  },
  {
    id: '543210',
    bank: 'Actinver',
    name: 'William Wilson',
    date: '25/02/23',
    payouts: '$325.75',
    status: 'Complete'
  }
]

const { tableData, sortData, deleteItem } = useTableFunctions(projects)
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
      <p class="font-medium">Transaction History</p>
      <OptionsVertical />
    </div>
    <div class="w-full overflow-x-auto">
      <table class="w-full whitespace-nowrap">
        <thead>
          <tr class="bg-primary/5 dark:bg-bg3 text-n500 dark:text-n30">
            <th @click="() => sortData('id')" class="py-3 font-semibold px-4 text-start w-[15%]">
              <div class="flex items-center gap-1 cursor-pointer select-none">
                ID
                <IconSelector :size="18" />
              </div>
            </th>
            <th @click="() => sortData('name')" class="py-3 font-semibold px-4 text-start w-[20%]">
              <div class="flex items-center gap-1 cursor-pointer select-none">
                Name
                <IconSelector :size="18" />
              </div>
            </th>
            <th @click="() => sortData('bank')" class="py-3 font-semibold px-4 text-start w-[15%]">
              <div class="flex items-center gap-1 cursor-pointer select-none">
                Bank
                <IconSelector :size="18" />
              </div>
            </th>
            <th
              @click="() => sortData('payouts')"
              class="py-3 font-semibold px-4 text-start w-[14%]"
            >
              <div class="flex items-center gap-1 cursor-pointer select-none">
                Payouts
                <IconSelector :size="18" />
              </div>
            </th>
            <th @click="() => sortData('date')" class="py-3 font-semibold px-4 text-start w-[14%]">
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
            <td class="px-4 py-2">{{ id }}</td>
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
