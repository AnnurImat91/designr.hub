<script setup lang="ts">
import { IconCalendarPlus } from '@tabler/icons-vue'
import { IconTimeline } from '@tabler/icons-vue'
import { IconChartBar } from '@tabler/icons-vue'
import { IconUsers } from '@tabler/icons-vue'
import { IconChartHistogram } from '@tabler/icons-vue'

const stateData = [
  {
    title: 'All Earnings',
    percent: 70.7,
    width: 'w-[70.7%]',
    amount: '$65,110',
    icon: IconChartHistogram
  },
  {
    title: 'Total Users',
    percent: 66.7,
    width: 'w-[66.7%]',
    amount: '32.7k',
    icon: IconUsers
  },
  {
    title: 'Sessions',
    percent: 10.7,
    width: 'w-[29.4%]',
    amount: '29.4%',
    icon: IconCalendarPlus
  },
  {
    title: 'Monthly Sales',
    percent: 40.7,
    width: 'w-[40.7%]',
    amount: '$33,110',
    icon: IconChartBar
  }
]
</script>
<template>
  <div class="grid grid-cols-12 gap-4 xxxl:gap-6">
    <div
      v-for="stat in stateData"
      :key="stat.title"
      class="p-3 bg-n0 rounded-2xl dark:bg-bg4 sm:p-4 xxl:p-6 xxxl:px-8 col-span-12 sm:col-span-6 xl:col-span-3 xxl:col-span-4 xxxl:col-span-3 border dark:border-n500"
    >
      <div class="flex gap-4 xxxl:gap-6 items-center">
        <span class="p-3 inline-flex rounded-2xl bg-primary/10 dark:bg-bg3 text-primary">
          <component :size="32" :is="stat.icon"></component>
        </span>
        <div>
          <p class="mb-3">{{ stat.title }}</p>
          <h4 class="h4 font-semibold">{{ stat.amount }}</h4>
        </div>
      </div>
      <div class="w-full bg-primary/10 rounded-sm h-1 mt-5 lg:mt-7 mb-4">
        <div class="bg-primary h-1 rounded-sm" :class="stat.width"></div>
      </div>
      <p class="flex items-center gap-2">
        <span class="flex items-center gap-2" :class="{ 'text-primary': stat.percent > 30, 'text-secondary2': stat.percent < 30 }">
          <IconTimeline />
          {{ stat.percent }}%
        </span>
        Since Last Month
      </p>
    </div>
  </div>
</template>
