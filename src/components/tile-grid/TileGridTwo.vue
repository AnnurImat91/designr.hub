<script setup lang="ts">
import { tileTwoData } from '@/data/fakedata'
import { useTableFunctions } from '@/utils/tableFunction'
import { IconDownload } from '@tabler/icons-vue'
import Pagination from '../shared/Pagination.vue'

const {
  currentPage,
  endIndex,
  nextPage,
  paginate,
  paginatedData,
  prevPage,
  startIndex,
  totalData,
  totalPages
} = useTableFunctions(tileTwoData, 27)
</script>

<template>
  <div class="grid grid-cols-12 gap-4 xxxl:gap-6 box xl:p-4">
    <div v-for="{ id, img, name, size, version } in paginatedData" :key="id"
      class="col-span-12 md:col-span-6 xl:col-span-4 box bg-primary/5 dark:bg-bg3 p-2 sm:p-3 xxl:p-5 xxxl:p-6 flex justify-between items-center">
      <div class="flex gap-2 sm:gap-3 lg:gap-5 items-center">
        <img :src="img" :width="60" :height="60" class="rounded-lg lg:rounded-2xl w-10 h-10 lg:w-14 lg:h-14" alt="img" />
        <div>
          <p class="font-medium text-sm sm:text-base md:text-lg lg:text-xl mb-2">{{ name }}</p>
          <span class="flex text-sm items-center gap-2">
            <span>{{ size }}</span>
            <span class="text-xs">•</span>
            <span>{{ version }}</span>
          </span>
        </div>
      </div>
      <button class="bg-primary/5 dark:bg-bg3 rounded-full p-2 md:p-3 border border-n30 dark:border-n500">
        <IconDownload />
      </button>
    </div>
  </div>
  <div class="mt-6 lg:mt-8">
    <Pagination :current-page="currentPage" :end-index="endIndex" :next-page="nextPage" :paginate="paginate"
      :prev-page="prevPage" :start-index="startIndex" :total-data="totalData" :total-pages="totalPages" />
  </div>
</template>
