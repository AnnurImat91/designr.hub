<script setup lang="ts">
import OptionsVertical from '@/components/shared/OptionsVertical.vue'
import { IconDownload } from '@tabler/icons-vue'

const materials = [
  {
    title: 'Holtz - Complete Anatomy',
    size: '94.7 MB',
    time: 'uploaded 2 days ago'
  },
  {
    title: 'Assessing doses Pt. 2',
    size: '79 KB',
    time: 'uploaded 1 weeks ago'
  },
  {
    title: 'Written exam template',
    size: '42 KB',
    time: 'uploaded 2 days ago'
  },
  {
    title: 'Holy Quran',
    size: '97 KB',
    time: 'uploaded 1 days ago'
  },
  {
    title: 'English 2nd Part',
    size: '4.7 MB',
    time: 'uploaded 2 days ago'
  },
  {
    title: 'Calculus Calculation',
    size: '97 KB',
    time: 'uploaded 2 weeks ago'
  },
  {
    title: 'UI/UX Design',
    size: '97 KB',
    time: 'uploaded 2 weeks ago'
  }
]
</script>

<template>
  <div class="col-span-12 lg:col-span-5 box mt-6">
    <div
      class="flex flex-wrap justify-between items-center gap-3 pb-4 lg:pb-6 mb-4 lg:mb-6 bb-dashed"
    >
      <p class="font-medium">Download Course Materials</p>
      <OptionsVertical />
    </div>
    <div class="flex flex-col gap-6">
      <div
        v-for="{ size, time, title } in materials"
        :key="title"
        class="flex justify-between items-center"
      >
        <div class="flex items-center gap-2 sm:gap-4 xl:gap-6">
          <div class="w-10 h-10 md:w-14 md:h-14">
            <img src="/images/pdf.png" :width="54" :height="54" class="rounded-lg" alt="" />
          </div>
          <div>
            <p class="text-sm md:text-base xl:text-xl font-medium mb-2">
              {{ title }}
            </p>
            <p class="flex text-xs md:text-sm items-center flex-wrap gap-1">
              <span>{{ size }}</span>
              <span class="max-md:hidden">•</span>
              <span>{{ time }}</span>
            </p>
          </div>
        </div>
        <RouterLink to="#" class="p-2 md:p-3 rounded-xl bg-primary/10 dark:bg-bg3">
          <IconDownload :size="20" />
        </RouterLink>
      </div>
    </div>
  </div>
</template>
