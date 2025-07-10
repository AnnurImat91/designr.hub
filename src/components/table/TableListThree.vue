<script setup lang="ts">
import { tableListThree } from '@/data/fakedata'
import { useTableFunctions } from '@/utils/tableFunction'
import Pagination from '../shared/Pagination.vue'
import { IconSearch } from '@tabler/icons-vue'
import Checkbox from '../shared/Checkbox.vue'
import { IconSelector } from '@tabler/icons-vue'
import SearchBar from '../shared/SearchBar.vue'
import TableActions from '../shared/TableActions.vue'
import CommonDropdown from '../shared/CommonDropdown.vue'
import { timeAgo } from '@/utils/timeAgo'

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
} = useTableFunctions(tableListThree, 10)

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
            <td class="p-5">#</td>
            <td @click="sortData('type')" class="p-5 w-[30%]">
              <div class="flex items-center gap-1 cursor-pointer select-none">
                Type
                <IconSelector :size="18" />
              </div>
            </td>
            <td @click="sortData('size')" class="p-5 w-[20%]">
              <div class="flex items-center gap-1 cursor-pointer select-none">
                Size
                <IconSelector :size="18" />
              </div>
            </td>
            <td class="p-5 w-[20%]">Version</td>
            <td @click="sortData('name')" class="p-5">
              <div class="flex items-center gap-1 cursor-pointer select-none">
                Last Updated
                <IconSelector :size="18" />
              </div>
            </td>
            <td class="p-5 text-center">Action</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="({ id, img, name, icon, size, time, type, version }, index) in paginatedData" :key="id"
            class="even:bg-primary/5 dark:even:bg-bg3">
            <td class="py-2 px-3">
              <Checkbox />
            </td>
            <td class="py-1 px-3">
              <div class="flex items-center gap-3">
                <img :width="32" :height="32" class="rounded-full shrink-0" :src="icon" alt="img" />
                <span class="font-medium inline-block">{{ type }}</span>
              </div>
            </td>
            <td class="py-2 px-3">{{ size }}</td>
            <td class="py-2 px-3">{{ version }}</td>
            <td class="py-2 px-3">
              <div class="flex items-center gap-3">
                <img :width="32" :height="32" class="rounded-full" :src="img" alt="img" />
                <div class="flex flex-col">
                  <span class="font-medium inline-block mb-1"> {{ name }} </span>
                  <span class="text-xs">{{ timeAgo(time) }}</span>
                </div>
              </div>
            </td>

            <td class="py-2 px-3">
              <div class="flex justify-center items-center h-full">
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
