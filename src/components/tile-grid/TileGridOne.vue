<script setup lang="ts">
import { tileOneData } from '@/data/fakedata'
import { useTableFunctions } from '@/utils/tableFunction'
import TableActions from '../shared/TableActions.vue'
import Pagination from '../shared/Pagination.vue'

const {
  currentPage,
  deleteItem,
  endIndex,
  nextPage,
  paginate,
  paginatedData,
  prevPage,
  startIndex,
  totalData,
  totalPages
} = useTableFunctions(tileOneData, 24)

const handleDelete = (id: number) => {
  if (confirm('Are you sure?')) {
    deleteItem(id)
  }
}
</script>

<template>
  <div class="min-h-[60vh]">
    <div class="grid grid-cols-12 gap-4 xxxl:gap-6">
      <div v-for="({ id, designation, img, name }, index) in paginatedData" :key="id"
        class="col-span-12 md:col-span-6 xl:col-span-4 box xl:p-4 xxxl:p-6 flex justify-between items-center">
        <div class="flex gap-3 items-center xxxl:gap-5">
          <img :src="img" :width="60" :height="60" class="rounded-full w-11 md:w-14 h-11 md:h-14" alt="img" />
          <div>
            <p class="font-medium text-base md:text-xl mb-1 md:mb-2">{{ name }}</p>
            <span class="text-xs md:text-sm">{{ designation }}</span>
          </div>
        </div>
        <button class="bg-primary/5 dark:bg-bg3 rounded-full text-start p-2 border border-n30 dark:border-n500">
          <TableActions :from-bottom="index == paginatedData.length - 1 || index == paginatedData.length - 2"
            :on-delete="() => handleDelete(id)" />
        </button>
      </div>
    </div>
  </div>
  <div class="mt-6 lg:mt-8">
    <Pagination :current-page="currentPage" :end-index="endIndex" :next-page="nextPage" :paginate="paginate"
      :prev-page="prevPage" :start-index="startIndex" :total-data="totalData" :total-pages="totalPages" />
  </div>
</template>
