<script setup lang="ts">
import CommonDropdownVue from '@/components/shared/CommonDropdown.vue'
import { IconArrowUpRight } from '@tabler/icons-vue'
import { IconUserCircle } from '@tabler/icons-vue'
import { IconCalendar } from '@tabler/icons-vue'

const articles = [
  {
    id: 1,
    img: '/images/article-1.png',
    by: 'Admin',
    date: '12 Jan, 2023',
    title: 'Breakthrough in Space Exploration: New Planet Discovered',
    desc: 'Scientists have discovered a distant exoplanet with potential habitable conditions...'
  },
  {
    id: 2,
    img: '/images/article-2.png',
    by: 'Admin',
    date: '12 Jan, 2023',
    title: 'AI System Diagnoses Diseases with Unprecedented Accuracy',
    desc: 'Scientists have discovered a distant exoplanet with potential habitable conditions...'
  },
  {
    id: 3,
    img: '/images/article-3.png',
    by: 'Admin',
    date: '12 Jan, 2023',
    title: 'Promising Advances in Carbon Capture Technology',
    desc: 'Scientists have discovered a distant exoplanet with potential habitable conditions...'
  },
  {
    id: 4,
    img: '/images/article-4.png',
    by: 'Admin',
    date: '12 Jan, 2023',
    title: 'Genetic Breakthrough: New Therapy Offers Hope for Rare Genetic...',
    desc: 'Scientists have discovered a distant exoplanet with potential habitable conditions...'
  }
]
</script>

<template>
  <div class="box col-span-2 md:col-span-1">
    <div class="flex flex-wrap justify-between items-center gap-3 pb-4 lg:pb-6 mb-4 lg:mb-6 bb-dashed">
      <p class="font-medium">New Articles</p>
      <div class="flex items-center gap-2">
        <p class="text-xs sm:text-sm">Sort By :</p>
        <CommonDropdownVue />
      </div>
    </div>
    <div class="grid grid-cols-2 gap-4 xxxl:gap-6 items-start">
      <div v-for="{ by, date, desc, id, img, title } in articles" :key="id" class="box p-2 bg-primary/5 dark:bg-bg3 col-span-2 md:col-span-1 xl:col-span-2">
        <img :width="416" :height="306" class="rounded-2xl w-full" :src="img" alt="img" />
        <div class="px-4 pb-4">
          <div class="mt-5 xxxl:mt-8 flex items-center flex-wrap gap-2 mb-5">
            <span class="flex items-center gap-2 text-xs sm:text-sm"> <IconUserCircle :size="20" /> By {{ by }} </span>
            <span class="text-primary">•</span>
            <span class="flex items-center gap-2 text-xs sm:text-sm"> <IconCalendar :size="20" /> {{ date }} </span>
          </div>
          <RouterLink to="#" class="text-xl block font-semibold mb-3 md:mb-5">
            {{ title }}
          </RouterLink>
          <p class="text-sm mb-4 lg:mb-6">{{ desc }}</p>
          <RouterLink to="#" class="text-primary font-semibold flex items-center gap-2">
            Read Article
            <IconArrowUpRight :size="20" />
          </RouterLink>
        </div>
      </div>
      <div class="col-span-2">
        <RouterLink to="#" class="btn-outline">
          See All
          <IconArrowUpRight :size="20" />
        </RouterLink>
      </div>
    </div>
  </div>
</template>
