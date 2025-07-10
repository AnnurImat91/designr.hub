<script setup lang="ts">
import { tileThreeData } from '@/data/fakedata'
import { useTableFunctions } from '@/utils/tableFunction'
import Pagination from '../shared/Pagination.vue'
import { IconArrowUpRight, IconInbox } from '@tabler/icons-vue'
import type { RouterLink } from 'vue-router'
import { IconPaperclip } from '@tabler/icons-vue'
import { IconClock } from '@tabler/icons-vue'

const { currentPage, endIndex, nextPage, paginate, paginatedData, prevPage, startIndex, totalData, totalPages } = useTableFunctions(tileThreeData, 18)
</script>

<template>
  <div class="grid grid-cols-12 gap-4 4xl:gap-6">
    <div v-for="{ id, img, name, attachment, time, type } in paginatedData" :key="id" class="box p-0 sm:p-3 min-[1900px]:p-4 col-span-12 md:col-span-6 xxxl:col-span-4">
      <div class="box p-3 md:p-4 bg-primary/5 dark:bg-bg3 4xl:p-6 flex gap-2 justify-between items-center">
        <div class="flex gap-3 4xl:gap-5">
          <img :src="img" :width="60" :height="60" class="rounded-2xl w-10 h-10 lg:w-14 lg:h-14" alt="img" />
          <div>
            <RouterLink to="#" class="font-medium text-base block lg:text-lg 4xl:text-xl mb-2">
              {{ name }}
            </RouterLink>
            <div class="flex text-xs sm:text-sm flex-wrap items-center gap-3 lg:gap-4 xxl:gap-6">
              <span class="flex items-center gap-1"> <IconInbox :size="18" /> {{ type }} </span>
              <span class="flex items-center gap-1"> <IconClock :size="18" /> {{ time }} </span>
              <span class="flex items-center gap-1"> <IconPaperclip :size="18" /> {{ attachment }} </span>
            </div>
          </div>
        </div>
        <RouterLink to="#" class="bg-n0 dark:bg-bg4 rounded-full p-2 4xl:p-3 border border-n30 dark:border-n500">
          <IconArrowUpRight :size="20" />
        </RouterLink>
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
