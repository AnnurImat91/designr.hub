<script setup lang="ts">
import { cardGridFour } from '@/data/fakedata'
import { useTableFunctions } from '@/utils/tableFunction'
import Pagination from '../shared/Pagination.vue'
import { timeAgo } from '@/utils/timeAgo'
import { IconPencil } from '@tabler/icons-vue'
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
} = useTableFunctions(cardGridFour, 9)
</script>

<template>
  <div class="grid grid-cols-12 gap-4 xxxl:gap-6">
    <div
      v-for="{ id, author, authorImg, img, time, title, tag } in paginatedData"
      :key="id"
      class="box col-span-12 md:col-span-6 xl:col-span-4 p-3"
    >
      <div class="flex flex-col items-center justify-center rounded-2xl h-full">
        <div>
          <img :width="472" :height="306" class="rounded-xl" :src="img" alt="img" />
        </div>
        <div class="mt-6 lg:mt-8 md:px-3 xxxl:px-5 pb-3 lg:pb-5">
          <span
            class="text-sm px-5 py-2 inline-block rounded-3xl bg-primary/5 dark:bg-bg3 text-primary font-semibold"
          >
            {{ tag }}
          </span>
          <h4>
            <RouterLink to="#" class="mt-4 h4 bb-dashed block pb-4 mb-4 lg:mb-6 lg:pb-6">
              {{ title }}
            </RouterLink>
          </h4>
          <div class="flex justify-between gap-1 items-center">
            <div class="flex gap-2 xxxl:gap-4 items-center">
              <div class="w-8 h-8 sm:w-11 sm:h-11">
                <img :src="authorImg" class="rounded-full" :width="44" :height="44" alt="author" />
              </div>
              <div>
                <p class="font-medium text-sm md:text-base md:font-semibold mb-1">{{ author }}</p>
                <span class="text-xs">{{ timeAgo(time) }}</span>
              </div>
            </div>
            <RouterLink to="#" class="btn-outline">
              <IconPencil :size="18" /> <span>Edit</span>
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
