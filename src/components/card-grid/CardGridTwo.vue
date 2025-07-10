<script setup lang="ts">
import { gridCardTwo } from '@/data/fakedata'
import { useTableFunctions } from '@/utils/tableFunction'
import Pagination from '../shared/Pagination.vue'
import { RouterLink } from 'vue-router'
import { timeAgo } from '@/utils/timeAgo'
import OptionsVertical from '../shared/OptionsVertical.vue'

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
} = useTableFunctions(gridCardTwo, 9)
</script>

<template>
  <div class="grid grid-cols-12 gap-4 xxxl:gap-6 pb-6">
    <div v-for="{ id, title, img, date } in paginatedData" :key="id"
      class="col-span-12 md:col-span-6 xl:col-span-4 box p-3">
      <div class="">
        <img :src="img" :width="472" :height="306" class="rounded-xl" alt="user img" />
      </div>
      <div
        class="mt-6 lg:mt-8 flex justify-between items-center pb-4 mb-4 md:mb-6 md:pb-6 bb-dashed px-2 sm:px-4 xl:px-6">
        <RouterLink to="#">
          <h4 class="h4 mb-2 md:mb-3">{{ title }}</h4>
          <span>{{ timeAgo(date) }}</span>
        </RouterLink>
        <OptionsVertical />
      </div>
      <div class="flex justify-center gap-4 lg:gap-6 pb-3 md:pb-5 px-2 sm:px-4 xl:px-6">
        <RouterLink to="#" class="btn md:py-3 w-full flex justify-center"> Tasks </RouterLink>
        <RouterLink to="#" class="btn-outline md:py-3 w-full flex justify-center">
          Activity
        </RouterLink>
      </div>
    </div>
  </div>
  <Pagination :current-page="currentPage" :end-index="endIndex" :next-page="nextPage" :paginate="paginate"
    :prev-page="prevPage" :start-index="startIndex" :total-data="totalData" :total-pages="totalPages" />
</template>
