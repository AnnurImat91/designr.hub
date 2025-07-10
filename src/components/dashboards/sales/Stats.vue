<script setup lang="ts">
import { IconArrowDownLeft, IconArrowUpRight } from '@tabler/icons-vue'
import ProgressChart from './ProgressChart.vue'

const statesData = [
  {
    title: 'All Earnings',
    amount: '$65,110',
    percent: 40.7,
    series: 35.5
  },
  {
    title: 'Total Users',
    amount: '32.7k',
    percent: 66.7,
    series: 78.5
  },
  {
    title: 'Session',
    amount: '29.4%',
    percent: 10.7,
    series: 55.5
  },
  {
    title: 'Monthly Sales',
    amount: '$33,110',
    percent: 50.7,
    series: 83.5
  }
]
</script>

<template>
  <div v-for="{ amount, percent, series, title } in statesData" :key="title" class="col-span-12 min-[650px]:col-span-6 xxxl:col-span-3 box bg-n0 dark:bg-bg4">
    <div class="flex justify-between items-center mb-6 pb-6 bb-dashed">
      <span class="font-medium">{{ title }}</span>
    </div>
    <div class="flex justify-between items-center">
      <div>
        <h4 class="h4 mb-4">{{ amount }}</h4>
        <span class="flex items-center gap-1 whitespace-nowrap" :class="{ 'text-primary': percent > 30, 'text-secondary2': percent < 30 }">
          <IconArrowUpRight v-if="percent > 30" />
          <IconArrowDownLeft v-else /> {{ percent }}%
        </span>
      </div>
      <div
        class="-my-3 shrink-0 ltr:translate-x-3 ltr:xl:translate-x-7 ltr:xxxl:translate-x-2 ltr:4xl:translate-x-9 rtl:-translate-x-3 rtl:xl:-translate-x-7 rtl:xxxl:-translate-x-2 rtl:4xl:-translate-x-9"
      >
        <ProgressChart :labels="series + '%'" :series="series" />
      </div>
    </div>
  </div>
</template>
