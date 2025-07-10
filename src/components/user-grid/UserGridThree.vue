<script setup lang="ts">
import { userGridThreeData } from '@/data/fakedata'
import { useTableFunctions } from '@/utils/tableFunction'
import { IconCheck } from '@tabler/icons-vue'
import SocialLinks from '../shared/SocialLinks.vue'
import { IconCirclePlus } from '@tabler/icons-vue'
import { IconMessageDots } from '@tabler/icons-vue'
import { RouterLink } from 'vue-router'
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
} = useTableFunctions(userGridThreeData, 9)
</script>

<template>
  <div class="grid grid-cols-12 gap-4 xxxl:gap-6">
    <div
      v-for="{ id, name, designation, img } in paginatedData"
      :key="id"
      class="box shadow-[0px_6px_30px_0px_rgba(0,0,0,0.06)] border-none p-3 col-span-12 md:col-span-6 xl:col-span-4"
    >
      <div class="bg-primary/5 box dark:bg-bg3 rounded-2xl h-full p-3">
        <div class="bg-secondary3dark flex justify-center rounded-xl relative w-full">
          <img :width="448" :height="600" :src="img" class="rounded-xl" alt="img" />
          <div
            class="p-1 absolute right-8 -bottom-4 border border-n0 dark:border-bg4 bg-primary rounded-full text-n0"
          >
            <IconCheck :size="28" />
          </div>
        </div>
        <div class="flex flex-col items-center justify-center p-4 md:p-6 xl:p-8">
          <RouterLink to="#" class="text-center">
            <h4 class="h4 mb-3">{{ name }}</h4>
            <p class="mb-4 lg:mb-6">{{ designation }}</p>
          </RouterLink>
          <div class="flex justify-center bb-dashed pb-6 mb-6 w-full">
            <SocialLinks />
          </div>
          <div class="flex gap-3 xxxl:gap-6 justify-center w-full">
            <RouterLink to="#" class="btn md:px-3 xxxl:px-6">
              <IconCirclePlus /> <span>Follow</span>
            </RouterLink>
            <RouterLink to="#" class="btn-outline md:px-3 xxxl:px-6">
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
