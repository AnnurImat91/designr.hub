<script setup lang="ts">
import { IconArrowBarToRight, IconArrowUpRight, IconMessageDots, IconNotes, IconThumbUp } from '@tabler/icons-vue'

const stats = [
  {
    title: 'Articles',
    icon: IconNotes,
    amount: '210',
    percent: '28.7',
    color: 'text-primary',
    bg: 'bg-primary/5 dark:bg-bg3'
  },
  {
    title: 'Readers',
    icon: IconArrowBarToRight,
    amount: '2.3k',
    percent: '28.7',
    color: 'text-secondary1',
    bg: 'bg-secondary1/5'
  },
  {
    title: 'Likes',
    icon: IconThumbUp,
    amount: '3.5k',
    percent: '28.7',
    color: 'text-secondary3',
    bg: 'bg-secondary3/5'
  },
  {
    title: 'Comments',
    icon: IconMessageDots,
    amount: '552+',
    percent: '28.7',
    color: 'text-secondary2',
    bg: 'bg-secondary2/5'
  }
]
</script>

<template>
  <div class="box grid grid-cols-12 mb-4 xxxl:mb-6 gap-4 xxxl:gap-6">
    <div v-for="{ amount, bg, color, icon, percent, title } in stats" :key="title" class="col-span-12 min-[480px]:col-span-6 md:col-span-3">
      <p class="font-medium bb-dashed mb-4 pb-4 lg:mb-6 lg:pb-6">
        {{ title }}
      </p>
      <div class="flex items-center gap-3 xxxl:gap-4">
        <span class="p-2 lg:p-3 xxl:p-4 inline-flex rounded-2xl" :class="[bg, color]">
          <component :size="35" :is="icon"></component>
        </span>
        <div>
          <h4 class="h4 mb-2 xl:mb-4">{{ amount }}</h4>
          <span class="flex gap-1 items-center" :class="color"> <IconArrowUpRight :size="20" /> {{ percent }}% </span>
        </div>
      </div>
    </div>
  </div>
</template>
