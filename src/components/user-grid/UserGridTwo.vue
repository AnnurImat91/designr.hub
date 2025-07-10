<script setup lang="ts">
import { userGridTwoData } from '@/data/fakedata'
import { useTableFunctions } from '@/utils/tableFunction'
import SocialLinks from '../shared/SocialLinks.vue'
import { IconCirclePlus } from '@tabler/icons-vue'
import { IconMessageDots } from '@tabler/icons-vue'
import { IconCheck } from '@tabler/icons-vue'
import { RouterLink } from 'vue-router'
import Pagination from '../shared/Pagination.vue'

const { currentPage, endIndex, nextPage, paginate, paginatedData, prevPage, startIndex, totalData, totalPages } = useTableFunctions(userGridTwoData, 8)
</script>

<template>
  <div class="grid grid-cols-12 gap-4 xxxl:gap-6">
    <div v-for="{ name, designation, img } in paginatedData" :key="name" class="box p-2 sm:p-3 xxxl:p-6 col-span-12 lg:col-span-6">
      <div class="bg-primary/5 dark:bg-bg3 flex min-[480px]:items-start items-center p-3 flex-col min-[480px]:flex-row rounded-2xl h-full xl:p-6 gap-4 xxxl:gap-8 4xl:gap-12 xxxl:p-8">
        <div class="p-3 bg-n0 dark:bg-bg4 rounded-full relative shrink-0">
          <img :width="120" :height="120" :src="img" class="rounded-full" alt="img" />
          <div class="p-1 absolute right-1 border border-n0 dark:border-bg4 bottom-6 bg-primary rounded-full text-n0">
            <IconCheck :size="18" />
          </div>
        </div>
        <div class="grow max-[479px]:text-center">
          <RouterLink to="#">
            <h4 class="h4 mb-3">{{ name }}</h4>
            <p class="mb-4 lg:mb-6">{{ designation }}</p>
          </RouterLink>
          <div class="flex max-[479px]:justify-center bb-dashed pb-6 mb-6 w-full">
            <SocialLinks />
          </div>
          <div class="flex gap-3 xxxl:gap-6 justify-start">
            <RouterLink to="#" class="btn lg:px-4 xxxl:px-6 border"> <IconCirclePlus /> <span>Follow</span> </RouterLink>
            <RouterLink to="#" class="btn-outline lg:px-4 xxxl:px-6"> <IconMessageDots /> <span>Message</span> </RouterLink>
          </div>
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
