<script setup lang="ts">
import CommonDropdown from '@/components/shared/CommonDropdown.vue'
import { IconArcheryArrow, IconDownload, IconSpeedboat, IconSwimming, IconTrekking } from '@tabler/icons-vue'
import { RouterLink } from 'vue-router'
const projects = [
  {
    title: 'Extreme Triathlon',
    date: 'June 01, 2023',
    icon: IconSwimming,
    color: 'text-primary',
    bg: 'bg-primary/5 dark:bg-bg3'
  },
  {
    title: 'Jungle Hiking',
    date: 'June 01, 2023',
    icon: IconTrekking,
    color: 'text-secondary1',
    bg: 'bg-secondary1/5'
  },
  {
    title: 'Archery challenge',
    date: 'June 01, 2023',
    icon: IconArcheryArrow,
    color: 'text-secondary2',
    bg: 'bg-secondary2/5'
  },
  {
    title: 'Extreme waterskiing',
    date: 'June 01, 2023',
    icon: IconSpeedboat,
    color: 'text-secondary3',
    bg: 'bg-secondary3/5'
  }
]
</script>

<template>
  <div class="col-span-12 md:col-span-6 xl:col-span-4 box">
    <div class="flex flex-wrap justify-between items-center gap-3 pb-4 lg:pb-6 mb-4 lg:mb-6 bb-dashed">
      <p class="font-medium">Popular Activities</p>
      <div class="flex items-center gap-2">
        <p class="text-xs sm:text-sm">Sort By :</p>
        <CommonDropdown />
      </div>
    </div>
    <div class="flex flex-col gap-6">
      <div v-for="{ bg, color, date, icon, title } in projects" :key="title" class="flex items-center justify-between">
        <RouterLink to="#" class="flex items-center gap-3 sm:gap-4">
          <span :class="`p-2 sm:p-3 inline-flex rounded-xl ${bg} ${color}`">
            <component :size="30" :is="icon"></component>
          </span>
          <div>
            <p class="text-base sm:text-lg md:text-xl font-medium mb-2">
              {{ title }}
            </p>
            <span class="text-sm">{{ date }}</span>
          </div>
        </RouterLink>
        <RouterLink to="#" class="bg-bg3/5 dark:bg-bg3 p-2 sm:p-3 rounded-xl">
          <IconDownload />
        </RouterLink>
      </div>
    </div>
  </div>
</template>
