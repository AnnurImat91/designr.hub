<script setup lang="ts">
import { projectsDataOne } from '@/data/fakedata'
import { useTableFunctions } from '@/utils/tableFunction'
import Pagination from '../shared/Pagination.vue'
import { IconThumbUp } from '@tabler/icons-vue'
import { IconMessageDots } from '@tabler/icons-vue'
import { RouterLink } from 'vue-router'

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
} = useTableFunctions(projectsDataOne, 10)
</script>

<template>
  <div class="grid grid-cols-12 gap-4 xxxl:gap-6">
    <div v-for="{
      id,
      category,
      comments,
      companyImg,
      desc,
      img,
      likes,
      remainingTasks,
      title
    } in paginatedData" :key="id"
      class="col-span-12 sm:col-span-6 min-[880px]:col-span-4 xl:col-span-6 box p-3 grid grid-cols-2 gap-4 xxxl:gap-6 4xl:gap-8 items-center">
      <div class="col-span-2 xl:col-span-1">
        <img :src="img" :width="347" :height="260" class="rounded-xl w-full" alt="project thumb" />
      </div>
      <div class="py-3 col-span-2 xl:col-span-1">
        <RouterLink to="/project-details"
          class="flex items-center gap-3 sm:gap-4 xxxl:gap-5 bb-dashed mb-3 pb-3 xxxl:mb-6 xxxl:pb-6">
          <img :src="companyImg" :width="60" :height="60" class="rounded-full w-10 h-10 4xl:w-14 4xl:h-14"
            alt="company icon" />
          <div>
            <p class="text-base sm:text-lg 4xl:text-xl font-medium mb-2">
              {{ title.slice(0, 15) }} ...
            </p>
            <div class="flex text-xs md:text-sm items-center gap-2">
              <span class="text-xs sm:text-sm">{{ category }}</span>
              <span class="text-xs">•</span>
              <span class="text-xs sm:text-sm">{{ desc }}</span>
            </div>
          </div>
        </RouterLink>
        <div class="flex justify-between items-center mb-2 4xl:mb-4">
          <div class="flex items-center gap-4">
            <span class="flex items-center gap-1">
              <IconThumbUp :size="22" /> {{ likes }}
            </span>
            <span class="flex items-center gap-1">
              <IconMessageDots :size="22" /> {{ comments }}
            </span>
          </div>
          <div class="flex gap-1">
            <img src="/images/html.png" :width="24" :height="24" alt="icon" />
            <img src="/images/python.png" :width="24" :height="24" alt="icon" />
            <img src="/images/android.png" :width="24" :height="24" alt="icon" />
          </div>
        </div>
        <div
          class="px-3 xxxl:px-6 4xl:px-8 py-2 xxxl:py-3 rounded-2xl bg-primary/5 dark:bg-bg3 flex justify-between items-center">
          <div class="flex">
            <img src="/images/user-2.png" :width="24" :height="24"
              class="border border-n0 dark:border-n500 -mr-2 rounded-full" alt="img" />
            <img src="/images/user-3.png" :width="24" :height="24"
              class="border border-n0 dark:border-n500 -mr-2 rounded-full" alt="img" />
            <img src="/images/user-4.png" :width="24" :height="24"
              class="border border-n0 dark:border-n500 -mr-2 rounded-full" alt="img" />
            <img src="/images/user-5.png" :width="24" :height="24"
              class="border border-n0 dark:border-n500 -mr-2 rounded-full" alt="img" />
            <img src="/images/user-6.png" :width="24" :height="24"
              class="border border-n0 dark:border-n500 -mr-2 rounded-full" alt="img" />
          </div>
          <span class="text-xs sm:text-sm xxxl:text-base">
            {{ remainingTasks }} tasks remaining
          </span>
        </div>
      </div>
    </div>
  </div>
  <div class="mt-6 lg:mt-8">
    <Pagination :current-page="currentPage" :end-index="endIndex" :next-page="nextPage" :paginate="paginate"
      :prev-page="prevPage" :start-index="startIndex" :total-data="totalData" :total-pages="totalPages" />
  </div>
</template>
