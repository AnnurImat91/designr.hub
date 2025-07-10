<script setup lang="ts">
import OptionsVertical from '@/components/shared/OptionsVertical.vue'

const suggested = [
  {
    img: '/images/user.png',
    name: 'Ralph Edwards',
    email: 'info@gmail.com'
  },
  {
    img: '/images/user-2.png',
    name: 'Marvin McKinney',
    email: 'info@gmail.com'
  },
  {
    img: '/images/user-3.png',
    name: 'Cody Fisher',
    email: 'info@gmail.com'
  },
  {
    img: '/images/user-4.png',
    name: 'Jacob Jones',
    email: 'info@gmail.com'
  },
  {
    img: '/images/user-5.png',
    name: 'James Cook',
    email: 'info@gmail.com'
  },
  {
    img: '/images/user-6.png',
    name: 'Edward Rock',
    email: 'info@gmail.com'
  }
]
</script>

<template>
  <div class="box mb-4 xxxl:mb-6">
    <div class="flex justify-between items-center bb-dashed pb-6 mb-6">
      <p class="font-medium">Who is following you</p>
      <OptionsVertical />
    </div>
    <div class="flex justify-between p-4 lg:p-6 bg-primary/5 dark:bg-bg3">
      <p class="font-semibold text-lg">Suggested</p>
      <RouterLink to="#" class="font-semibold text-lg"> Click Here </RouterLink>
    </div>
    <div class="flex flex-col">
      <div v-for="{ email, img, name } in suggested" :key="name" class="flex items-center justify-between px-2 sm:px-4 xl:px-6 py-2 xl:py-4 even:bg-primary/5 dark:even:bg-bg3">
        <RouterLink to="#" class="flex items-center gap-3 sm:gap-4">
          <img :src="img" :width="40" :height="40" class="rounded-full" alt="img" />
          <div>
            <p class="text-sm font-semibold mb-1">{{ name }}</p>
            <span class="text-xs">{{ email }}</span>
          </div>
        </RouterLink>
        <RouterLink to="#" class="btn shadow-none text-primary border border-n30 bg-primary/5 dark:bg-bg3 dark:border-n500"> Follow </RouterLink>
      </div>
    </div>
  </div>
</template>
