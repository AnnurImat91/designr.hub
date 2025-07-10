<script setup lang="ts">
import CommonDropdown from '@/components/shared/CommonDropdown.vue'
import { IconArrowDownLeft } from '@tabler/icons-vue'
import { IconArrowUpRight } from '@tabler/icons-vue'

const trending = [
  {
    icon: '/images/linkedin.png',
    title: 'LinkedIn',
    company: 'Linkedin Corp.',
    amount: 1478.32
  },
  {
    icon: '/images/github.png',
    title: 'Github',
    company: 'Github Inc.',
    amount: 978.32
  },
  {
    icon: '/images/invision.png',
    title: 'Invision',
    company: 'Invision Corp.',
    amount: 1678.32
  },
  {
    icon: '/images/telegram.png',
    title: 'Telegram',
    company: 'Telegram Inc.',
    amount: 478.32
  },
  {
    icon: '/images/kickstarter.png',
    title: 'Kickstarter',
    company: 'Kickstarter Corp.',
    amount: 1178.32
  },
  {
    icon: '/images/google.png',
    title: 'Google',
    company: 'Google Inc.',
    amount: 2478.32
  }
]
</script>

<template>
  <div class="col-span-12 md:col-span-6 xl:col-span-4 box">
    <div class="flex flex-wrap justify-between items-center gap-3 pb-4 lg:pb-6 mb-4 lg:mb-6 bb-dashed">
      <p class="font-medium">Trending Stocks</p>
      <div class="flex items-center gap-2">
        <p class="text-xs sm:text-sm">Sort By :</p>
        <CommonDropdown />
      </div>
    </div>
    <div class="flex flex-col gap-6">
      <div v-for="{ amount, company, icon, title } in trending" :key="title" class="flex justify-between items-center">
        <RouterLink to="#" class="flex justify-between items-center gap-4 xxl:gap-6">
          <img :src="icon" :width="54" :height="54" alt="icon" />
          <div class="flex flex-col">
            <p class="font-medium lg:text-xl mb-2">{{ title }}</p>
            <span class="text-sm">{{ company }}</span>
          </div>
        </RouterLink>
        <p class="flex items-center gap-1" :class="{ 'text-primary': amount > 1000, 'text-secondary2': amount < 1000 }">
          <IconArrowUpRight v-if="amount > 1000" /> <IconArrowDownLeft v-else /> ${{ amount }}
        </p>
      </div>
    </div>
  </div>
</template>
