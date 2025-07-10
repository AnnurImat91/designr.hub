<script setup lang="ts">
import { jobs } from '@/data/fakedata'
import CommonDropdownVue from '../shared/CommonDropdown.vue'
import SearchBar from '../shared/SearchBar.vue'
import { useTableFunctions } from '@/utils/tableFunction'
import { IconMapPin } from '@tabler/icons-vue'
import { IconClockHour4 } from '@tabler/icons-vue'
import { IconCircleCheck } from '@tabler/icons-vue'
import { IconBookmark } from '@tabler/icons-vue'
import Pagination from '../shared/Pagination.vue'
import { IconSearch } from '@tabler/icons-vue'
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
} = useTableFunctions(jobs, 10)
</script>

<template>
  <div class="box xxxl:p-8">
    <div class="flex flex-wrap gap-3 justify-between items-center bb-dashed mb-6 pb-6">
      <p class="font-medium">List View</p>
      <div class="flex items-center gap-4 lg:gap-8 xl:gap-10">
        <SearchBar :search="search" />
        <div class="flex items-center gap-2">
          <p class="whitespace-nowrap">Sort By :</p>
          <CommonDropdownVue :options="[{ name: 'Name' }, { name: 'Price' }, { name: 'Rating' }]" />
        </div>
      </div>
    </div>
    <div class="flex flex-col max-md:gap-10 md:gap-6 lg:gap-8 mb-6 pb-6 bb-dashed">
      <div v-for="{ id, icon, title, location, time, experience } in paginatedData" :key="id"
        class="flex justify-between md:items-center gap-4 flex-col md:flex-row">
        <RouterLink to="#" class="flex items-start md:items-center gap-3 sm:gap-4 lg:gap-6">
          <img :src="icon" :width="54" :height="54" class="rounded-full w-10 h-10 lg:w-14 lg:h-14" alt="icon" />
          <div>
            <p class="text-base sm:text-lg xl:text-xl font-medium mb-2">{{ title }}</p>
            <div class="flex flex-wrap items-center gap-3 md:gap-5 text-sm">
              <span class="flex items-center gap-2">
                <IconMapPin :size="18" /> {{ location }}
              </span>
              <span class="flex items-center gap-2">
                <IconClockHour4 :size="18" /> {{ time }}
              </span>
              <span class="flex items-center gap-2">
                <IconCircleCheck :size="18" /> {{ experience }}
              </span>
            </div>
          </div>
        </RouterLink>
        <div class="flex items-center max-md:justify-end gap-3 sm:gap-4">
          <RouterLink to="#" class="btn lg:py-3 lg:px-6 whitespace-nowrap"> Apply Now </RouterLink>
          <button data-tooltip-id="bookmark"
            class="md:w-12 md:h-12 focus:outline-primary focus:outline-dashed focus:outline-1 focus:outline-offset-4 sm:w-10 sm:h-10 w-9 h-9 border border-n30 dark:border-n500 flex justify-center items-center text-primary rounded-full bg-primary/5 dark:bg-bg3">
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
