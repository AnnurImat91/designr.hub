<script setup lang="ts">
import { tableListOne } from '@/data/fakedata'
import { useTableFunctions } from '@/utils/tableFunction'
import CommonDropdown from '../shared/CommonDropdown.vue'
import SearchBar from '../shared/SearchBar.vue'
import TableActions from '../shared/TableActions.vue'
import Pagination from '../shared/Pagination.vue'
import { IconSearch, IconSelector } from '@tabler/icons-vue'

const {
  currentPage,
  deleteItem,
  endIndex,
  nextPage,
  paginate,
  paginatedData,
  prevPage,
  search,
  sortData,
  startIndex,
  tableData,
  totalData,
  totalPages
} = useTableFunctions(tableListOne, 10)

const handleDelete = (id: number) => {
  if (confirm('Are you sure?')) {
    deleteItem(id)
  }
}
</script>

<template>
  <div class="box">
    <div class="flex flex-wrap gap-3 justify-between items-center bb-dashed mb-6 pb-6">
      <p class="font-medium">Table List View</p>
      <div class="flex items-center gap-4 lg:gap-8 xl:gap-10">
        <SearchBar :search="search" />
        <div class="flex items-center shrink-0 gap-2">
          <p class="text-xs sm:text-sm">Sort By :</p>
          <CommonDropdown :options="[{ name: 'Name' }, { name: 'Price' }, { name: 'Rating' }]" />
        </div>
      </div>
    </div>
    <div class="overflow-x-auto mb-6 pb-6 bb-dashed">
      <table class="w-full whitespace-nowrap">
        <thead>
          <tr class="bg-primary/5 dark:bg-bg3 font-semibold">
            <td @click="sortData('id')" class="p-5 pl-6 w-[8%]">
              <div class="flex items-center gap-1 cursor-pointer select-none">
                Serial No
                <IconSelector :size="18" />
              </div>
            </td>
            <td @click="sortData('name')" class="p-5">
              <div class="flex items-center gap-1 cursor-pointer select-none">
                User
                <IconSelector :size="18" />
              </div>
            </td>
            <td @click="sortData('country')" class="p-5">
              <div class="flex items-center gap-1 cursor-pointer select-none">
                Country
                <IconSelector :size="18" />
              </div>
            </td>
            <td @click="sortData('date')" class="p-5">
              <div class="flex items-center gap-1 cursor-pointer select-none">
                Date
                <IconSelector :size="18" />
              </div>
            </td>
            <td @click="sortData('status')" class="p-5">
              <div class="flex items-center gap-1 cursor-pointer select-none">
                Status
                <IconSelector :size="18" />
              </div>
            </td>
            <td @click="sortData('percent')" class="p-5">
              <div class="flex items-center gap-1 cursor-pointer select-none">
                Difficulty
                <IconSelector :size="18" />
              </div>
            </td>
            <td class="p-5 text-center">Action</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(
              { country, id, img, name, date, status, designation, percent }, index
            ) in paginatedData" :key="id" class="even:bg-primary/5 even:dark:bg-bg3">
            <td class="py-2 px-3 pl-6">{{ id }}</td>
            <td class="py-1 px-3">
              <div class="flex items-center gap-3 mr-6">
                <img :width="32" :height="32" class="rounded-full shrink-0" :src="img" alt="img" />
                <div class="flex flex-col">
                  <span class="font-medium inline-block mb-1">
                    {{ name }}
                  </span>
                  <span class="text-xs">{{ designation }}</span>
                </div>
              </div>
            </td>
            <td class="py-2 px-3">{{ country.slice(0, 14) }}</td>
            <td class="py-2 px-3">{{ date.toLocaleDateString() }}</td>
            <td class="py-2 px-3">
              <span
                class="block text-xs w-28 xxl:w-36 text-center rounded-[30px] dark:border-n500 border border-n30 py-2.5"
                :class="{
                  'bg-primary/10 dark:bg-bg3 text-primary': status == 'Available',
                  'bg-secondary1/10 dark:bg-bg3 text-secondary1': status == 'New',
                  'bg-secondary2/10 dark:bg-bg3 text-secondary2': status == 'Busy'
                }">
                {{ status }}
              </span>
            </td>
            <td class="py-2 px-3 min-w-[200px]">
              <span class="flex items-center gap-2">
                {{ percent }}%
                <span class="block h-1 w-full rounded-sm bg-primary/10">
                  <span :style="{ width: `${percent}%` }" class="block h-1 rounded-sm bg-primary"></span>
                </span>
              </span>
            </td>
            <td class="py-2">
              <div class="flex justify-center">
                <TableActions :from-bottom="index == paginatedData.length - 1 || index == paginatedData.length - 2
                  " :on-delete="() => handleDelete(id)" />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <Pagination :current-page="currentPage" :end-index="endIndex" :next-page="nextPage" :paginate="paginate"
      :prev-page="prevPage" :start-index="startIndex" :total-data="totalData" :total-pages="totalPages" />

    <div v-show="!tableData.length" class="text-center py-10">
      <div class="text-center mx-auto max-w-[500px] max-md:flex flex-col items-center">
        <div class="flex justify-center mb-5">
          <IconSearch :size="60" class="text-primary" />
        </div>
        <h3 class="h3 mb-3 lg:mb-6">No matching results</h3>
        <p>
          Looks like we couldn&nbsp;t find any matching results for your search terms. Try other
          search terms.
        </p>
      </div>
    </div>
  </div>
</template>
