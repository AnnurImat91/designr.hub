<script setup lang="ts">
import OptionsVertical from '@/components/shared/OptionsVertical.vue'
import { IconArrowUpRight, IconChartBar, IconMessageDots, IconNotes, IconThumbUp, IconUserCircle, IconUsers } from '@tabler/icons-vue'
const twitterStats = [
  {
    icon: IconNotes,
    title: 'Content Posts',
    amount: '196',
    percent: 66.7,
    color: 'text-primary',
    bg: '#5D69F4'
  },
  {
    icon: IconUsers,
    title: 'Followers',
    amount: '33.5k',
    percent: 66.7,
    color: 'text-secondary3',
    bg: '#C78200'
  },
  {
    icon: IconUserCircle,
    title: 'Following',
    amount: '291',
    percent: 66.7,
    color: 'text-secondary1',
    bg: '#00998B'
  },
  {
    icon: IconThumbUp,
    title: 'Likes (30 days)',
    amount: '329.7k',
    percent: 66.7,
    color: 'text-secondary3',
    bg: '#C78200'
  },
  {
    icon: IconMessageDots,
    title: 'Comments',
    amount: '7.2k',
    percent: 66.7,
    color: 'text-secondary1',
    bg: '#00998B'
  },
  {
    icon: IconChartBar,
    title: 'Profile views',
    amount: '32.7k',
    percent: 66.7,
    color: 'text-primary',
    bg: '#5D69F4'
  }
]
</script>

<template>
  <div class="col-span-12 xl:col-span-3 box">
    <div class="flex flex-wrap justify-between items-center gap-3 pb-4 lg:pb-6 mb-4 lg:mb-6 bb-dashed">
      <p class="font-medium">Twitter Stats</p>
      <OptionsVertical />
    </div>
    <div class="grid grid-cols-12 gap-4 xxxl:gap-6">
      <div v-for="{ amount, color, icon, percent, title } in twitterStats" :key="title" class="col-span-12 md:col-span-6 xxxl:col-span-4 box bg-primary/5 dark:bg-bg3">
        <p class="font-medium bb-dashed mb-4 pb-4 lg:mb-6 lg:pb-6">{{ title }}</p>
        <div class="flex items-center gap-4 xxxl:gap-6">
          <span :class="color" class="p-1 lg:p-2 inline-flex rounded-xl bg-n0 dark:bg-bg4">
            <component :size="40" :is="icon"></component>
          </span>
          <div>
            <h4 class="h4 mb-4">{{ amount }}</h4>
            <span :class="color" class="flex items-center gap-1"> <IconArrowUpRight :size="20" /> {{ percent }}% </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
