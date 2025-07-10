<script setup lang="ts">
import { useTableFunctions } from '@/utils/tableFunction'
import CommonDropdown from '../shared/CommonDropdown.vue'
import { IconSelector } from '@tabler/icons-vue'
import { IconSearch } from '@tabler/icons-vue'
import SearchBar from '../shared/SearchBar.vue'
import TableActions from '../shared/TableActions.vue'
import Pagination from '../shared/Pagination.vue'
import { listOne } from '@/data/fakedata'

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
} = useTableFunctions(listOne, 10)

const handleDelete = (id: number) => {
  if (confirm('Are you sure?')) {
    deleteItem(id)
  }
}
</script>

<template>
  <div class="box">
    <div class="flex flex-wrap gap-4 justify-between items-center bb-dashed mb-6 pb-6">
      <p class="font-medium">List View</p>
      <div class="flex items-center gap-4 lg:gap-8 xl:gap-10">
        <SearchBar :search="search" />
        <div class="flex items-center gap-2 shrink-0">
          <p class="text-xs sm:text-sm">Sort By :</p>
          <CommonDropdown />
        </div>
      </div>
    </div>
    <div class="overflow-x-auto pb-6 mb-6 bb-dashed">
      <table class="w-full whitespace-nowrap">
        <thead>
          <tr class="bg-primary/5 dark:bg-bg3">
            <th @click="sortData('title')" class="text-start p-3 ltr:pl-8 rtl:pr-8 w-[20%]">
              <div class="flex items-center gap-1 cursor-pointer select-none">
                User
                <IconSelector :size="18" />
              </div>
            </th>
            <th @click="sortData('designation')" class="text-start p-3 w-[25%]">
              <div class="flex items-center gap-1 cursor-pointer select-none">
                Designation
                <IconSelector :size="18" />
              </div>
            </th>
            <th @click="sortData('projects')" class="text-start p-3 w-[25%]">
              <div class="flex items-center gap-1 cursor-pointer select-none">
                Info
                <IconSelector :size="18" />
              </div>
            </th>
            <th class="text-start p-3">Team</th>
            <th class="p-3 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(
              { country, id, img, title, projects, designation, team }, index
            ) in paginatedData" :key="id" class="even:bg-primary/5 dark:even:bg-bg3">
            <td class="py-2 pl-8 px-3">
              <div class="flex items-center gap-3 pr-5">
                <img :width="32" :height="32" class="rounded-full shrink-0" :src="img" alt="img" />
                <div>
                  <p class="font-medium mb-1">{{ title }}</p>
                  <span class="text-xs">{{ country }}</span>
                </div>
              </div>
            </td>
            <td class="py-2 px-3 pr-7">
              <div class="flex justify-start">
                <span
                  class="flex justify-center min-w-[200px] lg:min-w-[250px] text-xs rounded-3xl bg-primary/5 dark:bg-bg3 border border-n40 dark:border-n500 text-primary p-3">
                  {{ designation }}
                </span>
              </div>
            </td>
            <td class="py-2 px-3">
              <div class="flex flex-col gap-1">
                <p class="font-medium">{{ projects }}</p>
                <p class="text-xs">Projects</p>
              </div>
            </td>
            <td class="py-2 px-5">
              <div class="flex">
                <img v-for="(item, i) in team" :key="i" :src="item" :width="32" :height="32"
                  class="border border-n0 dark:border-n500 -mr-4 rounded-full" alt="img" />
              </div>
            </td>
            <td class="my-5 px-5 mx-3 flex justify-center">
              <TableActions :from-bottom="index == paginatedData.length - 1 || index == paginatedData.length - 2
                " :on-delete="() => handleDelete(id)" />
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
