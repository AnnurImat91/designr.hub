<script setup lang="ts">
import { useTableFunctions } from '@/utils/tableFunction'
import Pagination from '../shared/Pagination.vue'
import { flexListOne } from '@/data/fakedata'
import TableActions from '../shared/TableActions.vue'
import SearchBar from '../shared/SearchBar.vue'
import { IconSelector } from '@tabler/icons-vue'
import CommonDropdown from '../shared/CommonDropdown.vue'
import { IconSearch } from '@tabler/icons-vue'

const { currentPage, deleteItem, endIndex, nextPage, paginate, paginatedData, prevPage, search, sortData, startIndex, tableData, totalData, totalPages } = useTableFunctions(flexListOne, 10)

const handleDelete = (id: number) => {
  if (confirm('Are you sure?')) {
    deleteItem(id)
  }
}
</script>

<template>
  <div class="box">
    <div class="flex flex-wrap justify-between gap-3 items-center bb-dashed mb-6 pb-6">
      <p class="font-medium">Flex List View</p>
      <div class="flex items-center gap-4 lg:gap-8 xl:gap-10">
        <SearchBar :search="search" />
        <div class="flex items-center gap-2">
          <p class="whitespace-nowrap">Sort By :</p>
          <CommonDropdown />
        </div>
      </div>
    </div>
    <div class="overflow-x-auto mb-6 pb-6 bb-dashed">
      <table class="w-full whitespace-nowrap">
        <thead>
          <tr class="bg-primary/5 dark:bg-bg3">
            <th @click="sortData('id')" class="p-5 font-semibold w-12">
              <div class="flex items-center gap-1 cursor-pointer select-none">
                Serial No
                <IconSelector :size="18" />
              </div>
            </th>
            <th @click="sortData('name')" class="p-5 text-start font-semibold w-[25%]">
              <div class="flex items-center gap-1 cursor-pointer select-none">
                User
                <IconSelector :size="18" />
              </div>
            </th>
            <th @click="sortData('country')" class="p-5 text-start font-semibold w-[18%]">
              <div class="flex items-center gap-1 cursor-pointer select-none">
                Location
                <IconSelector :size="18" />
              </div>
            </th>
            <th @click="sortData('industry')" class="p-5 text-start font-semibold w-[18%]">
              <div class="flex items-center gap-1 cursor-pointer select-none">
                Industry
                <IconSelector :size="18" />
              </div>
            </th>
            <th @click="sortData('status')" class="p-5 text-start font-semibold">
              <div class="flex items-center gap-1 cursor-pointer select-none">
                Status
                <IconSelector :size="18" />
              </div>
            </th>
            <th class="p-5 text-start font-semibold">Relations</th>
            <th class="p-5 font-semibold text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="({ country, id, img, name, industry, status, designation }, index) in paginatedData" :key="id">
            <td class="py-2 px-3 text-center">
              {{ id < 10 ? '0' + id : id }}
            </td>
            <td class="py-1 px-3">
              <div class="flex items-center gap-3 mr-4">
                <img :width="32" :height="32" class="rounded-full shrink-0" :src="img" alt="img" />
                <div class="flex flex-col">
                  <span class="font-medium inline-block mb-1"> {{ name }} </span>
                  <span class="text-xs">{{ designation }}</span>
                </div>
              </div>
            </td>
            <td class="py-2 px-3">{{ country.slice(0, 15) }}</td>
            <td class="py-2 px-3">{{ industry }}</td>
            <td class="py-2 px-3">
              <span
                :class="{
                  'bg-primary/5 text-primary': status == 'Online',
                  'bg-secondary2/5 text-secondary2': status == 'Suspended',
                  'bg-secondary1/5 text-secondary1': status == 'Offline'
                }"
                class="block text-xs w-28 text-center rounded-[30px] dark:border-n500 border border-n30 py-2"
              >
                {{ status }}
              </span>
            </td>
            <td class="py-2 px-3">
              <div class="flex">
                <img src="/images/user-2.png" :width="32" :height="32" class="border border-n0 dark:border-n500 -mr-4 rounded-full" alt="img" />
                <img src="/images/user-3.png" :width="32" :height="32" class="border border-n0 dark:border-n500 -mr-4 rounded-full" alt="img" />
                <img src="/images/user-4.png" :width="32" :height="32" class="border border-n0 dark:border-n500 -mr-4 rounded-full" alt="img" />
                <img src="/images/user-5.png" :width="32" :height="32" class="border border-n0 dark:border-n500 -mr-4 rounded-full" alt="img" />
              </div>
            </td>
            <td class="py-3 px-3">
              <div class="flex justify-center">
                <TableActions :from-bottom="index == paginatedData.length - 1 || index == paginatedData.length - 2" :on-delete="() => handleDelete(id)" />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <Pagination
      :current-page="currentPage"
      :end-index="endIndex"
      :next-page="nextPage"
      :paginate="paginate"
      :prev-page="prevPage"
      :start-index="startIndex"
      :total-data="totalData"
      :total-pages="totalPages"
    />

    <div v-show="!tableData.length" class="text-center py-10">
      <div class="text-center mx-auto max-w-[500px] max-md:flex flex-col items-center">
        <div class="flex justify-center mb-5">
          <IconSearch :size="60" class="text-primary" />
        </div>
        <h3 class="h3 mb-3 lg:mb-6">No matching results</h3>
        <p>Looks like we couldn&nbsp;t find any matching results for your search terms. Try other search terms.</p>
      </div>
    </div>
  </div>
</template>
