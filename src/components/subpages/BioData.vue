<script setup lang="ts">
import OptionsVertical from '@/components/shared/OptionsVertical.vue'
import SocialLinks from '@/components/shared/SocialLinks.vue'
import { IconArticle, IconThumbUp, IconUserCircle, IconUsers } from '@tabler/icons-vue'
const biodataStats = [
  {
    amount: '239k',
    title: 'Followers',
    color: 'text-primary',
    icon: IconUsers
  },
  {
    amount: '345k',
    title: 'Following',
    color: 'text-secondary1',
    icon: IconUserCircle
  },
  {
    amount: '679k',
    title: 'Like',
    color: 'text-secondary2',
    icon: IconThumbUp
  },
  {
    amount: '500',
    title: 'Post',
    color: 'text-secondary3',
    icon: IconArticle
  }
]
</script>

<template>
  <div class="mb-4 xxxl:mb-6 p-3 box">
    <div class="box bg-primary/5 dark:bg-bg3">
      <div class="flex justify-between items-center bb-dashed mb-6 pb-6">
        <p>Bio Data</p>
        <OptionsVertical />
      </div>
      <div class="grid grid-cols-2 gap-6">
        <div
          v-for="{ amount, color, icon, title } in biodataStats"
          :key="title"
          class="col-span-2 min-[480px]:col-span-1 flex items-center gap-4 lg:gap-6"
        >
          <div
            :class="color"
            class="p-2 rounded-lg bg-n0 dark:bg-bg4 shadow-[0px_6px_30px_0px_rgba(0,0,0,0.06)]"
          >
            <component :size="32" :is="icon"></component>
          </div>
          <div>
            <h5 :class="color" class="h5 mb-1">{{ amount }}</h5>
            <span class="text-sm">{{ title }}</span>
          </div>
        </div>
      </div>
      <p class="text-sm my-6 xl:mb-6 mt-8 bb-dashed mb-6 pb-6">
        It is a long established fact that a reader will be distracted by the readable content of a
        page when looking at its layout.
      </p>
      <SocialLinks />
    </div>
  </div>
</template>
