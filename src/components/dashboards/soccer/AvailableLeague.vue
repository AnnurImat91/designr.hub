<script setup lang="ts">
import OptionsVertical from '@/components/shared/OptionsVertical.vue'
import { IconArrowUpRight } from '@tabler/icons-vue'
import { RouterLink } from 'vue-router'

const projects = [
  {
    title: 'EPL',
    country: 'England',
    icon: '/images/leagues/epl.png'
  },
  {
    title: 'La Liga',
    country: 'Spain',
    icon: '/images/leagues/la-liga.png'
  },
  {
    title: 'Bundesliga',
    country: 'Germany',
    icon: '/images/leagues/bundesliga.png'
  },
  {
    title: 'Serie A',
    country: 'Italy',
    icon: '/images/leagues/serie.png'
  },
  {
    title: 'Ligue 1',
    country: 'France',
    icon: '/images/leagues/ligue1.png'
  },
  {
    title: 'MLS',
    country: 'United States and Canada',
    icon: '/images/leagues/mls.png'
  },
  {
    title: 'Premeira Liga',
    country: 'Portugal',
    icon: '/images/leagues/premeira-liga.png'
  },
  {
    title: 'Eredivisie',
    country: 'Dutch league',
    icon: '/images/leagues/eredivisie.png'
  },
  {
    title: 'Scottish Premiership',
    country: 'Scotland',
    icon: '/images/leagues/scottish.png'
  },
  {
    title: 'Brasileirao',
    country: 'Brazil',
    icon: '/images/leagues/brasileirao.png'
  }
]
</script>

<template>
  <div class="col-span-12 lg:col-span-4">
    <div class="box">
      <div class="flex flex-wrap justify-between items-center gap-3 pb-4 lg:pb-6 mb-4 lg:mb-6 bb-dashed">
        <p class="font-medium">Available Leagues</p>
        <OptionsVertical />
      </div>
      <div class="flex flex-col gap-6">
        <RouterLink to="#" v-for="{ country, icon, title } in projects" :key="title" class="flex items-center justify-between group">
          <div class="flex items-center gap-4">
            <div class="md:w-[54px] md:h-[54px] shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-n0 shadow-[0px_6px_30px_0px_rgba(0,0,0,0.12)] text-primary">
              <img :src="icon" :width="36" :height="36" alt="icon" />
            </div>
            <div>
              <p class="text-base sm:text-xl font-medium sm:mb-2">
                {{ title }}
              </p>
              <span class="text-xs sm:text-sm">{{ country }}</span>
            </div>
          </div>
          <button
            class="md:w-14 md:h-14 w-10 h-10 flex shrink-0 items-center justify-center rounded-full bg-primary/5 dark:bg-bg3 text-primary group-hover:bg-primary group-hover:text-n0 duration-300"
          >
            <IconArrowUpRight :size="24" />
          </button>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
