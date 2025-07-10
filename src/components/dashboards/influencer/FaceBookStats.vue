<script setup lang="ts">
import { IconArrowUpRight } from '@tabler/icons-vue'
import ProgressChart from '../sales/ProgressChart.vue'
import { IconPlus } from '@tabler/icons-vue'
import OptionsVertical from '@/components/shared/OptionsVertical.vue'

const fbStats = [
  {
    title: 'Content Posts',
    amount: '$65,110',
    percent: 40.7,
    series: 35.5,
    bg: '#5D69F4',
    color: 'text-primary'
  },
  {
    title: 'Followers',
    amount: '32.7k',
    percent: 66.7,
    series: 78.5,
    bg: '#00998B',
    color: 'text-secondary1'
  },
  {
    title: 'Following',
    amount: '29.4%',
    percent: 10.7,
    series: 55.5,
    bg: '#FFC861',
    color: 'text-secondary3'
  },
  {
    title: 'Likes (30 days)',
    amount: '$33,110',
    percent: 50.7,
    series: 43.5,
    bg: '#00998B',
    color: 'text-secondary1'
  },
  {
    title: 'Comments',
    amount: '$33,110',
    percent: 50.7,
    series: 53.5,
    bg: '#FFC861',
    color: 'text-secondary3'
  },
  {
    title: 'Profile views',
    amount: '$33,110',
    percent: 50.7,
    series: 65.5,
    bg: '#5D69F4',
    color: 'text-primary'
  }
]
</script>

<template>
  <div class="col-span-12 xl:col-span-3 box mb-4 xxxl:mb-6">
    <div class="flex flex-wrap justify-between items-center gap-3 pb-4 lg:pb-6 mb-4 lg:mb-6 bb-dashed">
      <p class="font-medium">Facebook Stats</p>
      <OptionsVertical />
    </div>
    <div class="grid grid-cols-12 gap-4 xxxl:gap-6">
      <div v-for="{ amount, bg, color, percent, series, title } in fbStats" :key="title" class="col-span-12 md:col-span-6 4xl:col-span-4 box bg-primary/5 dark:bg-bg3 overflow-hidden">
        <div class="flex justify-between items-center mb-6 pb-6 bb-dashed">
          <span class="font-medium">{{ title }}</span>
          <div class="flex">
            <img src="/images/user-2.png" :width="32" :height="32" class="border border-n0 dark:border-n500 -mr-4 rounded-full" alt="img" />
            <img src="/images/user-3.png" :width="32" :height="32" class="border border-n0 dark:border-n500 -mr-4 rounded-full" alt="img" />
            <img src="/images/user-4.png" :width="32" :height="32" class="border border-n0 dark:border-n500 -mr-4 rounded-full" alt="img" />
            <img src="/images/user-5.png" :width="32" :height="32" class="border border-n0 dark:border-n500 -mr-4 rounded-full" alt="img" />
            <div class="border flex items-center dark:border-n500 justify-center text-n0 border-n0 rounded-full bg-primary w-8 h-8">
              <IconPlus :size="22" />
            </div>
          </div>
        </div>
        <div class="flex justify-between items-center">
          <div class="grow shrink-0">
            <h4 class="h4 mb-4">{{ amount }}</h4>
            <span :class="color" class="flex items-center gap-1"> <IconArrowUpRight :size="20" /> {{ percent }} % </span>
          </div>
          <div class="-my-3 grow shrink-0 w-40 h-28 flex justify-end">
            <ProgressChart :bg="bg" :labels="series + '%'" :series="series" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
