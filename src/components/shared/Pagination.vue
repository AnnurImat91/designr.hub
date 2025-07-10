<script setup lang="ts">
import { IconChevronLeft } from '@tabler/icons-vue'
import { IconChevronRight } from '@tabler/icons-vue'

const props = defineProps<{
  startIndex: number
  endIndex: number
  totalData: number
  currentPage: number
  totalPages: number
  nextPage: () => void
  prevPage: () => void
  paginate: (page: number) => void
}>()
</script>

<template>
  <div class="flex col-span-12 gap-4 sm:justify-between justify-center items-center flex-wrap">
    <p>
      Showing {{ props.startIndex + 1 }} to {{ props.endIndex + 1 }} of
      {{ props.totalData }} entries
    </p>

    <ul class="flex gap-2 md:gap-3 flex-wrap md:font-semibold items-center">
      <li>
        <button
          @click="props.prevPage"
          :disabled="props.currentPage == 1"
          class="hover:bg-primary disabled:hover:bg-transparent disabled:hover:text-primary text-primary rtl:rotate-180 disabled:cursor-not-allowed hover:text-n0 border md:w-10 duration-300 md:h-10 w-8 h-8 flex items-center rounded-full justify-center border-primary"
        >
          <IconChevronLeft />
        </button>
      </li>

      <li :key="page" v-for="page in props.totalPages">
        <button
          @click="props.paginate(page)"
          class="hover:bg-primary text-primary hover:text-n0 border md:w-10 duration-300 md:h-10 w-8 h-8 flex items-center rounded-full justify-center border-primary"
          :class="{ 'bg-primary !text-n0': props.currentPage == page }"
        >
          {{ page }}
        </button>
      </li>

      <li>
        <button
          @click="props.nextPage"
          :disabled="props.currentPage == props.totalPages"
          class="hover:bg-primary disabled:hover:bg-transparent disabled:hover:text-primary rtl:rotate-180 text-primary disabled:cursor-not-allowed hover:text-n0 border md:w-10 duration-300 md:h-10 w-8 h-8 flex items-center rounded-full justify-center border-primary"
        >
          <IconChevronRight />
        </button>
      </li>
    </ul>
  </div>
</template>
