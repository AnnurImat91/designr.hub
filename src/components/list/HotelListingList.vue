<script setup lang="ts">
import { IconHeart, IconMapPin } from '@tabler/icons-vue'
import { IconStarFilled } from '@tabler/icons-vue'
import { IconHeartFilled } from '@tabler/icons-vue'
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const icons = [
  {
    icon: '/images/icon-car-parking.png',
    title: 'parking'
  },
  {
    icon: '/images/icon-room-service.png',
    title: 'room'
  },
  {
    icon: '/images/icon-breakfast.png',
    title: 'restaurent'
  },
  {
    icon: '/images/icon-fitness.png',
    title: 'fitness'
  },
  {
    icon: '/images/icon-glob.png',
    title: 'free'
  },
  {
    icon: '/images/icon-swimming-pool.png',
    title: 'swimming'
  },
  {
    icon: '/images/icon-laundry.png',
    title: 'laundry'
  }
]
const isFavourite = ref(false)
const props = defineProps<{
  id: number
  img: string
  title: string
  rating: number
  location: string
  price: number
  favourite: boolean
}>()
</script>

<template>
  <div class="col-span-2 min-[620px]:col-span-1 lg:col-span-2">
    <div class="flex flex-col lg:flex-row box p-2 rounded-2xl bg-white dark:bg-bg4 hover:shadow-lg duration-300 border">
      <div class="relative h-full shrink-0">
        <div class="rounded-2xl">
          <img :width="400" :height="260" :src="img" alt="image" class="w-full h-full rounded-2xl" />
        </div>
        <button @click="isFavourite = !isFavourite" class="absolute z-[2] left-4 top-4 md:left-6 md:top-6 text-primary rounded-lg bg-n0 p-2.5">
          <IconHeartFilled v-if="isFavourite" /> <IconHeart v-else />
        </button>
      </div>
      <div class="flex-grow p-2 md:p-3 lg:p-4 xxl:px-7">
        <div>
          <div class="flex justify-between mb-2">
            <RouterLink to="#" class="link block flex-grow hover:text-primary text-xl font-medium">
              {{ props.title }}
            </RouterLink>
            <div class="flex gap-2 items-center shrink-0">
              <IconStarFilled :size="18" class="text-secondary3dark" />
              <span class="block">{{ props.rating }}</span>
            </div>
          </div>
          <div class="flex justify-between mb-6">
            <div class="flex items-center gap-1">
              <IconMapPin :size="18" class="text-secondary3" />
              <span class="inline-block"> {{ props.location }} </span>
            </div>
            <span class="inline-block font-medium text-secondary1"> 20% OFF </span>
          </div>
          <ul class="flex items-center flex-wrap gap-1 md:gap-3">
            <div
              v-for="{ icon, title } in icons"
              :key="title"
              data-tooltip-id="{title}"
              class="grid place-content-center w-8 h-8 min-[800px]:w-10 min-[800px]:h-10 p-1 rounded-full bg-primary/5 dark:bg-bg3 text-primary"
            >
              <img :width="28" :height="28" :src="icon" alt="image" />
            </div>
          </ul>
        </div>
        <div class="my-5 xl:my-7">
          <div class="bb-dashed"></div>
        </div>
        <div class="flex flex-wrap justify-between gap-3 items-center">
          <span class="flex items-center gap-1">
            <span class="block text-xl font-medium text-primary"> ${{ price }} </span>
            <span class="inline-block text-base font-normal"> /per night </span>
          </span>
          <div class="flex gap-4">
            <RouterLink to="#" class="btn-outline shadow-none font-semibold"> More Info </RouterLink>
            <RouterLink to="#" class="btn font-semibold"> Book Now </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
