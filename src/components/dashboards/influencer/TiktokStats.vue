<script setup lang="ts">
import OptionsVertical from '@/components/shared/OptionsVertical.vue'
import { IconArrowUpRight } from '@tabler/icons-vue'
import { IconChartBar, IconMessageDots, IconNotes, IconThumbUp, IconUserCircle, IconUsers } from '@tabler/icons-vue'

import TiktokChart from './TiktokChart.vue'
import OptionsHorizontal from '@/components/shared/OptionsHorizontal.vue'

const tiktokPostStats = [
  {
    icon: IconNotes,
    title: 'Content Posts',
    amount: '196',
    percent: 40.7,
    color: 'text-primary',
    bg: '#5D69F4'
  },
  {
    icon: IconUsers,
    title: 'Followers',
    amount: '33.5k',
    percent: 40.7,
    color: 'text-secondary1',
    bg: '#00998B'
  },
  {
    icon: IconUserCircle,
    title: 'Following',
    amount: '291',
    percent: 40.7,
    color: 'text-secondary3',
    bg: '#FFC861'
  },
  {
    icon: IconThumbUp,
    title: 'Likes (30 days)',
    amount: '329.7k',
    percent: 40.7,
    color: 'text-primary',
    bg: '#5D69F4'
  },
  {
    icon: IconMessageDots,
    title: 'Comments',
    amount: '7.2k',
    percent: 40.7,
    color: 'text-secondary1',
    bg: '#00998B'
  },
  {
    icon: IconChartBar,
    title: 'Profile views',
    amount: '32.7k',
    percent: 66.7,
    color: 'text-secondary3',
    bg: '#FFC861'
  }
]
</script>

<template>
  <div class="box">
    <div class="flex flex-wrap justify-between items-center gap-3 pb-4 lg:pb-6 mb-4 lg:mb-6 bb-dashed">
      <p class="font-medium">Tiktok Stats</p>
      <OptionsVertical />
    </div>
    <div class="grid grid-cols-2 gap-4 md:gap-6">
      <div
        v-for="{ amount, bg, color, icon, percent, title } in tiktokPostStats"
        :key="title"
        class="col-span-2 md:col-span-1 xl:col-span-2 border overflow-x-hidden border-n30 dark:border-n500 xxl:col-span-3 bg-primary/5 dark:bg-bg3 rounded-2xl"
      >
        <div class="box bg-transparent border-none rounded-b-none pb-0">
          <div class="bb-dashed mb-4 pb-4 lg:pb-6 lg:mb-6 flex items-center justify-between">
            <p class="font-medium">{{ title }}</p>
            <OptionsHorizontal />
          </div>
          <div class="flex items-center gap-4 lg:gap-6 pb-4 lg:pb-6 bb-dashed">
            <span :class="color" class="p-2 lg:p-3 xl:p-4 inline-flex rounded-2xl bg-n0 dark:bg-bg4">
              <component :size="40" :is="icon"></component>
            </span>
            <div>
              <h4 class="h4 mb-1 sm:mb-2 md:mb-4">{{ amount }}</h4>
              <div class="flex flex-wrap items-center gap-2">
                <span :class="color" class="flex items-center gap-1">
                  <IconArrowUpRight :size="20" />
                  {{ percent }} %
                </span>
                <p class="text-sm">Since Last month</p>
              </div>
            </div>
          </div>
        </div>
        <TiktokChart :bg="bg" />
      </div>
    </div>
  </div>
</template>
