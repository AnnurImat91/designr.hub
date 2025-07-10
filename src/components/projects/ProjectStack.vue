<script setup lang="ts">
import { IconArrowUpRight } from '@tabler/icons-vue'
import OptionsVertical from '../shared/OptionsVertical.vue'
import { RouterLink } from 'vue-router'

const stacks = [
  {
    name: 'HTML5',
    img: '/images/html.png',
    desc: 'Markup Language'
  },
  {
    name: 'React',
    img: '/images/react.png',
    desc: 'JS Library'
  },
  {
    name: 'Laravel',
    img: '/images/laravel.png',
    desc: 'Backend Framework'
  },
  {
    name: 'Android',
    img: '/images/android.png',
    desc: 'Mobile OS'
  },
  {
    name: 'Python',
    img: '/images/python.png',
    desc: 'Machine Learning'
  }
]
</script>

<template>
  <div class="col-span-12 xl:col-span-3 box mb-6">
    <div class="flex flex-wrap justify-between items-center gap-3 pb-4 lg:pb-6 mb-4 lg:mb-6 bb-dashed">
      <p class="font-medium">Project Stack</p>
      <OptionsVertical />
    </div>
    <div class="w-full overflow-x-auto">
      <div class="flex flex-col">
        <div v-for="{ img, desc, name } in stacks" :key="name" class="odd:bg-primary/5 dark:bg-bg3 even:dark:bg-bg4 p-3 md:px-6 md:py-4 flex justify-between items-center rounded-2xl">
          <div class="flex items-center gap-4 md:gap-6">
            <img class="rounded-full" :src="img" :width="54" :height="54" alt="img" />
            <div>
              <p class="text-lg md:text-xl font-medium mb-2">{{ name }}</p>
              <span class="text-xs md:text-sm">{{ desc }}</span>
            </div>
          </div>
          <RouterLink to="#" class="p-2 md:p-3 rounded-full border border-n30 dark:border-n500 bg-n0 dark:bg-bg4">
            <IconArrowUpRight :size="20" />
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>
