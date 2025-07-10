<script setup lang="ts">
import { gridCardOne } from '@/data/fakedata'
import Pagination from '../shared/Pagination.vue'
import { useTableFunctions } from '@/utils/tableFunction'
import CountUp from 'vue-countup-v3'
import ProgressBarSingle from '../shared/ProgressBarSingle.vue'
import SocialLinks from '../shared/SocialLinks.vue'
import { RouterLink } from 'vue-router'
const { currentPage, endIndex, nextPage, paginate, paginatedData, prevPage, startIndex, totalData, totalPages } = useTableFunctions(gridCardOne, 10)
</script>

<template>
  <div class="grid grid-cols-2 gap-4 xxxl:gap-6 bb-dashed mb-6 pb-6">
    <div v-for="{ name, designation, img, percent } in paginatedData" :key="name" class="col-span-2 lg:col-span-1 box xxl:p-8">
      <div class="bb-dashed mb-4 pb-4 lg:mb-6 lg:pb-6 flex justify-between flex-wrap gap-4 items-center">
        <div class="flex items-center gap-3 sm:gap-4">
          <img :src="img" :width="60" :height="60" class="rounded-full w-10 h-10 md:w-[60px] md:h-[60px]" alt="user img" />
          <RouterLink to="#">
            <h6 class="text-lg sm:text-xl font-medium mb-1 sm:mb-2">
              {{ name }}
            </h6>
            <span class="text-xs sm:text-sm">{{ designation }}</span>
          </RouterLink>
        </div>
        <RouterLink to="#" class="btn-outline px-2 lg:py-3 lg:px-6 max-[356px]:ml-[70px]"> View Profile </RouterLink>
      </div>
      <div class="flex flex-wrap justify-between items-center gap-4">
        <div class="w-full md:w-1/2">
          <div class="flex justify-between items-center mb-3 lg:mb-4">
            <span>Progress</span>
            <span class="text-primary flex"> <CountUp :end-val="percent" enableScrollSpy="{true}" />% </span>
          </div>
          <ProgressBarSingle bg="bg-primary" :width="percent" />
        </div>
        <SocialLinks />
      </div>
    </div>
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
</template>
