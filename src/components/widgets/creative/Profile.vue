<script setup lang="ts">
import SocialLinks from '@/components/shared/SocialLinks.vue'
import { IconCheck, IconMessage } from '@tabler/icons-vue'
import { IconCirclePlus } from '@tabler/icons-vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="col-span-12 md:col-span-6 xl:col-span-4 box p-3">
    <div class="bg-primary/5 dark:bg-bg3 flex flex-col items-center justify-center rounded-2xl h-full py-8">
      <div class="p-3 bg-n0 dark:bg-bg4 rounded-full relative">
        <img :width="120" :height="120" class="rounded-full" src="/images/user-big-2.png" alt="img" />
        <div class="p-1 absolute right-2 bottom-10 bg-primary rounded-full text-n0">
          <IconCheck :size="18" />
        </div>
      </div>
      <RouterLink to="#" class="text-center">
        <h4 class="mt-6 lg:mt-8 h4 mb-3">Diana Prince</h4>
        <p class="mb-4 lg:mb-6">UI/UX Designer</p>
      </RouterLink>

      <div class="flex justify-center bb-dashed pb-4 mb-4 md:pb-6 md:mb-6">
        <SocialLinks />
      </div>

      <div class="flex gap-3 flex-wrap justify-center">
        <RouterLink to="#" class="btn">
          <IconCirclePlus />
          Follow
        </RouterLink>
        <RouterLink to="#" class="btn-outline">
          <IconMessage />
          Message
        </RouterLink>
      </div>
    </div>
  </div>
</template>
