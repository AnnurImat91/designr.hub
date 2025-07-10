<script setup lang="ts">
import { userGridOneData } from '@/data/fakedata'
import { useTableFunctions } from '@/utils/tableFunction'
import { IconCheck } from '@tabler/icons-vue'
import SocialLinks from '../shared/SocialLinks.vue'
import { IconCirclePlus } from '@tabler/icons-vue'
import { IconMessageDots } from '@tabler/icons-vue'
import Pagination from '../shared/Pagination.vue'

const { currentPage, endIndex, nextPage, paginate, paginatedData, prevPage, startIndex, totalData, totalPages } = useTableFunctions(userGridOneData, 9)
</script>

<template>
  <div class="grid grid-cols-12 gap-4 xxxl:gap-6">
    <div v-for="{ id, name, designation, img } in paginatedData" :key="id" class="box p-2 sm:p-3 xxxl:p-6 col-span-12 min-[650px]:col-span-6 lg:col-span-4">
      <div class="bg-primary/5 dark:bg-bg3 flex flex-col items-center justify-center rounded-2xl h-full py-5 px-4 xl:py-8 xl:px-6">
        <div class="p-3 bg-n0 dark:bg-bg4 rounded-full relative">
          <img :width="120" :height="120" class="rounded-full" :src="img" alt="img" />
          <div class="p-1 absolute right-1 border border-n0 dark:border-bg4 bottom-5 bg-primary rounded-full text-n0">
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
          <RouterLink to="#" class="btn px-3 xxxl:px-5 border border-primary font-semibold flex justify-center w-full"> <IconCirclePlus /> <span>Follow</span> </RouterLink>
          <RouterLink to="#" class="btn-outline px-3 xxxl:px-5 flex justify-center w-full"> <IconMessageDots /> <span>Message</span> </RouterLink>
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
