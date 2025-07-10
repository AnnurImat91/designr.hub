<script setup lang="ts">
import { tableListTwo } from '@/data/fakedata'
import { useTableFunctions } from '@/utils/tableFunction'
import { IconSearch } from '@tabler/icons-vue'
import Pagination from '../shared/Pagination.vue'
import TableActions from '../shared/TableActions.vue'
import { IconSelector } from '@tabler/icons-vue'
import SearchBar from '../shared/SearchBar.vue'
import CommonDropdown from '../shared/CommonDropdown.vue'

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
} = useTableFunctions(tableListTwo, 10)

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
            <td @click="sortData('id')" class="p-5 text-start w-10">
              <div class="flex items-center gap-1 cursor-pointer select-none">
                Serial
                <IconSelector :size="18" />
              </div>
            </td>
            <td class="p-5 text-start">Products</td>
            <td @click="sortData('name')" class="p-5 text-start">
              <div class="flex items-center gap-1 cursor-pointer select-none">
                Name
                <IconSelector :size="18" />
              </div>
            </td>
            <td @click="sortData('sku')" class="p-5 text-start">
              <div class="flex items-center gap-1 cursor-pointer select-none">
                SKU
                <IconSelector :size="18" />
              </div>
            </td>
            <td @click="sortData('price')" class="p-5 text-start">
              <div class="flex items-center gap-1 cursor-pointer select-none">
                Price
                <IconSelector :size="18" />
              </div>
            </td>
            <td @click="sortData('stock')" class="p-5 text-start">
              <div class="flex items-center gap-1 cursor-pointer select-none">
                Stock
                <IconSelector :size="18" />
              </div>
            </td>
            <td @click="sortData('category')" class="p-5 text-start">
              <div class="flex items-center gap-1 cursor-pointer select-none">
                Category
                <IconSelector :size="18" />
              </div>
            </td>
            <td class="p-5 text-center">Action</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="({ id, category, price, sku, stock, img, name }, i) in paginatedData" :key="id"
            class="even:bg-primary/5 dark:even:bg-bg3">
            <td class="py-2 px-3 text-center">
              {{ id < 10 ? '0' + id : id }} </td>
            <td class="py-2 px-3">
              <div
                class="flex w-16 h-10 md:w-32 md:h-20 p-2 rounded-md border border-n30 dark:border-n500 items-center justify-center"
                :class="{ 'bg-primary/5 dark:bg-bg3': i % 2 == 0, 'bg-secondary3/5': i % 2 != 0 }">
                <img class="rounded-full" :src="img" alt="img" />
              </div>
            </td>
            <td class="py-2 px-3">{{ name }}</td>
            <td class="py-2 px-3">{{ sku }}</td>
            <td class="py-2 px-3">{{ price }}</td>
            <td class="py-2 px-3">{{ stock }}</td>
            <td class="py-2 px-3">{{ category }}</td>
            <td class="py-3 px-3">
              <div class="flex justify-center">
                <TableActions :from-bottom="i == paginatedData.length - 1 || i == paginatedData.length - 2"
                  :on-delete="() => handleDelete(id)" />
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
