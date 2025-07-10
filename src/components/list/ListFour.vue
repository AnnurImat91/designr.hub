<script setup lang="ts">
import { foods } from '@/data/fakedata'
import { useTableFunctions } from '@/utils/tableFunction'
import Pagination from '../shared/Pagination.vue'
import { IconSearch } from '@tabler/icons-vue'
import CommonDropdown from '../shared/CommonDropdown.vue'
import SearchBar from '../shared/SearchBar.vue'
import { IconInbox } from '@tabler/icons-vue'
import { IconClockHour4 } from '@tabler/icons-vue'
import { IconLink } from '@tabler/icons-vue'
import { IconPlus } from '@tabler/icons-vue'
import { IconBookmark } from '@tabler/icons-vue'
import { RouterLink } from 'vue-router'

const {
  currentPage,
  endIndex,
  nextPage,
  paginate,
  paginatedData,
  prevPage,
  search,
  startIndex,
  tableData,
  totalData,
  totalPages
} = useTableFunctions(foods, 10)
</script>

<template>
  <div class="box xxxl:p-8">
    <div class="flex flex-wrap justify-between gap-3 items-center bb-dashed mb-6 pb-6">
      <p class="font-medium">Another List View</p>
      <div class="flex items-center gap-4 lg:gap-8 xl:gap-10">
        <SearchBar :search="search" />
        <div class="flex items-center shrink-0 gap-2">
          <p class="text-xs sm:text-sm">Sort By :</p>
          <CommonDropdown :options="[{ name: 'Name' }, { name: 'Price' }, { name: 'Rating' }]" />
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-7 lg:gap-8 mb-6 pb-6 bb-dashed overflow-x-auto">
      <div v-for="{ id, icon, time, title, links, type } in paginatedData" :key="id"
        class="flex justify-between items-center gap-3 min-w-max">
        <RouterLink to="#" class="flex items-start sm:items-center gap-3 sm:gap-4 lg:gap-6 min-w-[350px]">
          <img :src="icon" :width="54" :height="54" class="rounded-full" alt="icon" />
          <div>
            <p class="text-base sm:text-lg lg:text-xl font-medium mb-2">{{ title }}</p>
            <div class="flex flex-wrap items-center gap-3 sm:gap-5 text-xs sm:text-sm">
              <span class="flex items-center gap-2">
                <IconInbox :size="18" /> {{ type }}
              </span>
              <span class="flex items-center gap-2">
                <IconClockHour4 :size="18" /> {{ time }}
              </span>
              <span class="flex items-center gap-2">
                <IconLink :size="18" /> {{ links }}
              </span>
            </div>
          </div>
        </RouterLink>
        <div class="flex items-center gap-3 sm:gap-4">
          <div class="flex">
            <img src="/images/user-2.png" :width="32" :height="32"
              class="border border-n0 dark:border-n500 -mr-4 rounded-full" alt="img" />
            <img src="/images/user-3.png" :width="32" :height="32"
              class="border border-n0 dark:border-n500 -mr-4 rounded-full" alt="img" />
            <img src="/images/user-4.png" :width="32" :height="32"
              class="border border-n0 dark:border-n500 -mr-4 rounded-full" alt="img" />
            <img src="/images/user-5.png" :width="32" :height="32"
              class="border border-n0 dark:border-n500 -mr-4 rounded-full" alt="img" />
            <div
              class="border flex items-center justify-center text-n0 border-n0 dark:border-n500 rounded-full bg-primary w-8 h-8">
              <IconPlus :size="22" />
            </div>
          </div>
          <RouterLink to="#" class="btn lg:py-3 lg:px-6"> Order Now </RouterLink>
          <button data-tooltip-id="bookmark"
            class="md:w-12 md:h-12 focus:outline-primary shrink-0 mr-2 focus:outline-dashed focus:outline-1 focus:outline-offset-4 sm:w-10 sm:h-10 w-9 h-9 border border-n30 dark:border-n500 flex justify-center items-center text-primary rounded-full bg-primary/5 dark:bg-bg3">
            <IconBookmark />
          </button>
        </div>
      </div>
    </div>
    <Pagination :current-page="currentPage" :end-index="endIndex" :next-page="nextPage" :paginate="paginate"
      :prev-page="prevPage" :start-index="startIndex" :total-data="totalData" :total-pages="totalPages" />

    <div v-show="!tableData.length" class="text-center py-10">
      <div class="text-center mx-auto max-w-[500px] max-md:flex flex-col items-center">
        <div class="flex justify-center mb-5">
          <IconSearch :size="60" class="text-primary" />
        </div>
        <h3 class="h3 mb-3 lg:mb-6">No matching results</h3>
        <p>
          Looks like we couldn&nbsp;t find any matching results for your search terms. Try other
          search terms.
        </p>
      </div>
    </div>
  </div>
</template>
