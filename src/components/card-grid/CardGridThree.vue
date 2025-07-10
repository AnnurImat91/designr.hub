<script setup lang="ts">
import { cardGridThree } from '@/data/fakedata'
import { useTableFunctions } from '@/utils/tableFunction'
import SocialLinks from '../shared/SocialLinks.vue'
import { RouterLink } from 'vue-router'
import { IconCheck } from '@tabler/icons-vue'
import Pagination from '../shared/Pagination.vue'

const { currentPage, endIndex, nextPage, paginate, paginatedData, prevPage, startIndex, totalData, totalPages } = useTableFunctions(cardGridThree, 9)
</script>

<template>
  <div class="grid grid-cols-12 gap-4 xxxl:gap-6">
    <div v-for="{ name, designation, img } in paginatedData" :key="name" class="box p-3 xxxl:p-6 col-span-12 min-[650px]:col-span-6 lg:col-span-4">
      <div class="bg-primary/5 dark:bg-bg3 flex flex-col items-center justify-center rounded-2xl h-full p-4 xxxl:py-8 xxxl:px-6">
        <div class="p-3 bg-n0 dark:bg-bg4 rounded-full relative">
          <div>
            <img :width="120" :height="120" :src="img" class="rounded-full" alt="img" />
          </div>
          <div class="p-1 absolute right-2 bottom-10 bg-primary rounded-full text-n0">
            <IconCheck :size="18" />
          </div>
        </div>
        <RouterLink to="#" class="text-center">
          <h4 class="mt-6 lg:mt-8 h4 mb-3">{{ name }}</h4>
          <p class="mb-4 lg:mb-6">{{ designation }}</p>
        </RouterLink>
        <div class="flex justify-center bb-dashed pb-6 mb-6 w-full">
          <SocialLinks />
        </div>
        <div class="flex gap-3 xxxl:gap-6 justify-center w-full">
          <RouterLink to="#" class="btn px-8 py-2.5"> Tasks </RouterLink>
          <RouterLink to="#" class="btn-outline px-8 py-2.5"> Activity </RouterLink>
        </div>
      </div>
    </div>
  </div>
  <div class="mt-6 lg:mt-8">
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
  </div>
</template>
