<script setup lang="ts">
import OptionsVertical from '@/components/shared/OptionsVertical.vue'
import TableActions from '@/components/shared/TableActions.vue'
import { useTableFunctions } from '@/utils/tableFunction'
import { IconSelector } from '@tabler/icons-vue'

const orders = [
  {
    id: '556261',
    product: 'Easy Cheese',
    date: '22/07/23',
    amount: '$475.22',
    status: 'Paid'
  },
  {
    id: '123456',
    product: 'Nutella',
    date: '15/09/23',
    amount: '$350.50',
    status: 'Pending'
  },
  {
    id: '789012',
    product: 'Sesame Oil',
    date: '30/05/23',
    amount: '$620.75',
    status: 'Paid'
  },
  {
    id: '345678',
    product: 'Doritos',
    date: '18/12/23',
    amount: '$280.90',
    status: 'Cancel'
  },
  {
    id: '987654',
    product: 'Nutella',
    date: '05/11/23',
    amount: '$510.30',
    status: 'Pending'
  },
  {
    id: '980154',
    product: 'Nutella',
    date: '05/11/23',
    amount: '$510.30',
    status: 'Pending'
  },
  {
    id: '654321',
    product: 'White Paper',
    date: '08/08/23',
    amount: '$420.10',
    status: 'Paid'
  },
  {
    id: '210987',
    product: 'Ruffles',
    date: '12/04/23',
    amount: '$580.60',
    status: 'Unpaid'
  },
  {
    id: '543210',
    product: 'Easy Cheese',
    date: '25/02/23',
    amount: '$325.75',
    status: 'Paid'
  }
]

const handleDelete = (id: number) => {
  if (confirm('Are you sure?')) {
    deleteItem(id)
  }
}

const { tableData, sortData, deleteItem } = useTableFunctions(orders)
</script>
<template>
  <div class="col-span-12 lg:col-span-7 xl:col-span-8 box">
    <div
      class="flex flex-wrap justify-between items-center gap-3 pb-4 lg:pb-6 mb-4 lg:mb-6 bb-dashed"
    >
      <p class="font-medium">Recent Orders</p>
      <OptionsVertical />
    </div>
    <div class="w-full overflow-x-auto">
      <table class="w-full whitespace-nowrap">
        <thead>
          <tr class="bg-primary/5 dark:bg-bg3 text-n500 dark:text-n30">
            <th @click="() => sortData('id')" class="py-3 font-semibold px-4 text-start w-[16%]">
              <div class="flex items-center gap-1 cursor-pointer select-none">
                ID
                <IconSelector :size="18" />
              </div>
            </th>
            <th @click="sortData('product')" class="py-3 font-semibold px-4 text-start w-[20%]">
              <div class="flex items-center gap-1 cursor-pointer select-none">
                Product
                <IconSelector :size="18" />
              </div>
            </th>
            <th @click="sortData('amount')" class="py-3 font-semibold px-4 text-start w-[18%]">
              <div class="flex items-center gap-1 cursor-pointer select-none">
                Amount
                <IconSelector :size="18" />
              </div>
            </th>
            <th @click="sortData('date')" class="py-3 font-semibold px-4 text-start w-[18%]">
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
            <th class="py-3 font-semibold px-4 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="({ id, amount, date, product, status }, index) in tableData"
            :key="id"
            class="even:bg-primary/5 dark:even:bg-bg3"
          >
            <td class="px-4 py-2">{{ id }}</td>
            <td class="px-4 py-2">{{ product }}</td>
            <td class="px-4 py-2">{{ amount }}</td>
            <td class="px-4 py-2">{{ date }}</td>
            <td class="px-4 py-2">
              <div class="flex justify-center">
                <span
                  :class="{
                    'bg-secondary4/5 text-secondary4': status == 'Paid',
                    'bg-secondary2/5 text-secondary2': status == 'Pending',
                    'bg-secondary1/5 text-secondary1': status == 'Unpaid',
                    'bg-secondary1/5 text-secondary3dark': status == 'Cancel'
                  }"
                  class="block text-xs w-28 text-center rounded-[30px] dark:border-n500 border border-n30 py-2"
                >
                  {{ status }}
                </span>
              </div>
            </td>
            <td>
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
