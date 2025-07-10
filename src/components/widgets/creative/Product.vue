<script setup lang="ts">
import { IconHeart } from '@tabler/icons-vue'
import { IconHeartFilled } from '@tabler/icons-vue'
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const favourite = ref(false)
</script>

<template>
  <div class="col-span-12 md:col-span-6 xl:col-span-4 box p-3">
    <div class="p-6 rounded-2xl bg-primary/5 dark:bg-bg3 flex relative items-start justify-center">
      <h4 class="h4 text-primary absolute ltr:left-4 rtl:right-4 top-5">$599</h4>
      <img src="/images/watch.png" :width="236" :height="236" alt="product img" />
      <button @click="favourite = !favourite"
        class="p-2 bg-n0 dark:bg-n600 rounded-lg text-primary absolute ltr:right-3 rtl:left-3 top-3">
        <IconHeartFilled v-if="favourite" />
        <IconHeart v-else />
      </button>
    </div>
    <div class="pt-8 text-center px-5 xl:px-16 pb-7">
      <h4 class="h4 mb-4">Connected Watch</h4>
      <p class="text-sm mb-8">Apple — 5th Gen Connected Watch series, 64GB, 2023 issue</p>
      <RouterLink to="#" class="btn w-full flex justify-center"> Add To Cart </RouterLink>
    </div>
  </div>
</template>
