<script setup lang="ts">
import { projectsDataOne } from '@/data/fakedata'
import { useTableFunctions } from '@/utils/tableFunction'
import { IconMessageDots } from '@tabler/icons-vue'
import { IconThumbUp } from '@tabler/icons-vue'
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
} = useTableFunctions(projectsDataOne, 9)
</script>

<template>
  <div class="grid grid-cols-12 gap-4 xxxl:gap-6">
    <div v-for="{
      id,
      category,
      comments,
      companyImg,
      desc,
      likes,
      remainingTasks,
      title
    } in paginatedData" :key="id" class="col-span-12 md:col-span-6 xl:col-span-4 box p-3">
      <div class="p-3 sm:p-4 xxl:p-6 xxxl:p-7">
        <RouterLink to="/project-details" class="flex items-center gap-3 xxxl:gap-5 bb-dashed mb-6 pb-6">
          <img :src="companyImg" :width="60" :height="60" class="rounded-full w-10 h-10 lg:w-14 lg:h-14"
            alt="company icon" />
          <div>
            <p class="text-base sm:text-lg lg:text-xl font-medium mb-2">
              {{ title }}
            </p>
            <div class="flex text-xs md:text-sm items-center gap-2">
              <span class="text-xs md:text-sm">{{ category }}</span>
              <span class="text-xs">•</span>
              <span class="text-xs md:text-sm">{{ desc }}</span>
            </div>
          </div>
        </RouterLink>
        <div class="flex justify-between items-center">
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
      </div>
      <div class="px-3 lg:px-6 xxxl:px-8 py-3 rounded-2xl bg-primary/5 dark:bg-bg3 flex justify-between items-center">
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
        <span class="text-xs sm:text-sm md:text-base"> {{ remainingTasks }} tasks remaining </span>
      </div>
    </div>
  </div>
  <div class="mt-6 lg:mt-8">
    <Pagination :current-page="currentPage" :end-index="endIndex" :next-page="nextPage" :paginate="paginate"
      :prev-page="prevPage" :start-index="startIndex" :total-data="totalData" :total-pages="totalPages" />
  </div>
</template>
