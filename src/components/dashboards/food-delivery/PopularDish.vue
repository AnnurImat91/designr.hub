<script setup lang="ts">
import { IconArrowUpRight } from '@tabler/icons-vue'
import { IconHeartFilled } from '@tabler/icons-vue'
import { IconHeart } from '@tabler/icons-vue'
import { IconStarHalfFilled } from '@tabler/icons-vue'
import { IconStarFilled } from '@tabler/icons-vue'
import { ref } from 'vue'

defineProps<{
  title: string
  img: string
  price: string
}>()

const isFavorite = ref(false)
</script>

<template>
  <div class="box p-2 bg-primary/5 dark:bg-bg3 rounded-2xl">
    <div class="box p-3 rounded-2xl relative">
      <img :width="173" :height="122" :src="img" class="w-full" alt="food img" />
      <button @click="isFavorite = !isFavorite" class="p-2 absolute top-2 right-2 bg-primary/5 dark:bg-bg3 rounded-xl text-primary">
        <IconHeartFilled v-if="isFavorite" :size="20" />
        <IconHeart v-else :size="20" />
      </button>
    </div>
    <div class="mt-4 md:mt-6 px-4 pb-4">
      <p class="font-semibold mb-2">{{ title }}</p>
      <p class="text-xl font-semibold mb-2 text-primary">${{ price }}</p>
      <div class="flex gap-2 text-secondary3dark mb-4">
        <IconStarFilled :size="17" />
        <IconStarFilled :size="17" />
        <IconStarFilled :size="17" />
        <IconStarFilled :size="17" />
        <IconStarHalfFilled :size="17" />
      </div>
      <RouterLink class="text-primary font-semibold flex items-center gap-2" to="#">
        Add Cart
        <IconArrowUpRight :size="20" />
      </RouterLink>
    </div>
  </div>
</template>
