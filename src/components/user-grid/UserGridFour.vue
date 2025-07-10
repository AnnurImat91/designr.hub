<script setup lang="ts">
import { userGridFourData } from '@/data/fakedata'
import { useTableFunctions } from '@/utils/tableFunction'
import Pagination from '../shared/Pagination.vue'
import SocialLinks from '../shared/SocialLinks.vue'
import { RouterLink } from 'vue-router'
import { IconCirclePlus } from '@tabler/icons-vue'
import { IconMessageDots } from '@tabler/icons-vue'

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
} = useTableFunctions(userGridFourData, 8)
</script>

<template>
  <div class="grid grid-cols-12 gap-4 xxxl:gap-6">
    <div
      v-for="{ id, name, designation, img } in paginatedData"
      :key="id"
      class="box p-2 xxxl:p-3 col-span-12 sm:col-span-6 md:col-span-12 min-[1150px]:col-span-6"
    >
      <div
        class="bg-primary/5 dark:bg-bg3 flex items-start flex-col md:flex-row rounded-2xl h-full gap-3 xxxl:gap-6 4xl:gap-8 p-2 xxxl:p-3"
      >
        <div class="rounded-xl max-md:w-full shrink-0 bg-secondary3dark">
          <img :width="268" :height="240" class="rounded-2xl max-md:w-full" :src="img" alt="img" />
        </div>
        <div class="grow pt-3">
          <RouterLink to="#">
            <h4 class="h4 mb-3">{{ name }}</h4>
            <p class="mb-4 lg:mb-6">{{ designation }}</p>
          </RouterLink>
          <div class="flex bb-dashed pb-5 mb-5 w-full">
            <SocialLinks />
          </div>

          <div class="flex gap-2 4xl:gap-6 justify-start">
            <RouterLink to="#" class="btn md:px-2 4xl:px-6 xxxl:px-4 xxxl:py-3 py-2">
              <IconCirclePlus /> <span>Follow</span>
            </RouterLink>
            <RouterLink to="#" class="btn-outline md:px-2 4xl:px-6 xxxl:px-4 xxxl:py-3 py-2">
              <IconMessageDots /> <span>Message</span>
            </RouterLink>
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
