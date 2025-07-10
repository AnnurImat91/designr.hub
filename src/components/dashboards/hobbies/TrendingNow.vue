<script setup lang="ts">
import CommonDropdown from '@/components/shared/CommonDropdown.vue'
import { IconArrowUpRight, IconBike, IconTrekking, IconTruckDelivery, IconWalk } from '@tabler/icons-vue'
const projects = [
  {
    title: 'Extreme foot trek',
    date: 'June 01, 2023',
    icon: IconWalk,
    color: 'text-primary',
    bg: 'bg-primary/5 dark:bg-bg3'
  },
  {
    title: 'Corporate rafting trip',
    date: 'June 01, 2023',
    icon: IconTruckDelivery,
    color: 'text-secondary1',
    bg: 'bg-secondary1/5'
  },
  {
    title: 'Hiking in the Alps',
    date: 'June 01, 2023',
    icon: IconTrekking,
    color: 'text-secondary2',
    bg: 'bg-secondary2/5'
  },
  {
    title: 'Bicycle team mastery',
    date: 'June 01, 2023',
    icon: IconBike,
    color: 'text-secondary3',
    bg: 'bg-secondary3/5'
  }
]
</script>

<template>
  <div class="box col-span-2 md:col-span-1">
    <div class="flex flex-wrap justify-between items-center gap-3 pb-4 lg:pb-6 mb-4 lg:mb-6 bb-dashed">
      <p class="font-medium">Trending Now</p>
      <div class="flex items-center gap-2">
        <p class="text-xs sm:text-sm">Sort By :</p>
        <CommonDropdown />
      </div>
    </div>
    <div class="flex flex-col gap-6">
      <div v-for="{ bg, color, date, icon, title } in projects" :key="title" class="flex items-center justify-between">
        <RouterLink to="#" class="flex items-center gap-4">
          <span class="p-3 inline-flex rounded-xl" :class="[bg, color]">
            <component :size="30" :is="icon"></component>
          </span>
          <div>
            <p class="text-base md:text-xl font-medium mb-2">{{ title }}</p>
            <span class="text-sm">{{ date }}</span>
          </div>
        </RouterLink>
        <button class="bg-bg3/5 dark:bg-bg3 p-3 rounded-xl">
          <IconArrowUpRight :size="20" />
        </button>
      </div>
    </div>
  </div>
</template>
