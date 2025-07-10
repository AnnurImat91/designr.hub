<script setup lang="ts">
import { IconArrowUpRight } from '@tabler/icons-vue'
</script>

<template>
  <div class="col-span-12 md:col-span-6 lg:col-span-7 xl:col-span-8">
    <div class="box p-4">
      <div
        class="bg-primary/5 dark:bg-bg3 rounded-2xl relative p-4 sm:p-6 md:p-10 xl:p-[64px] after:inset-0 after:xxxl:bg-[url('/images/soccer-hero-bg.png')] after:bg-no-repeat after:bg-right after:absolute after:w-full after:h-full after:rtl:scale-x-[-1]"
      >
        <div class="relative z-[2]">
          <h2 class="h2 mb-4">Contest Rewards Await</h2>
          <p class="mb-10 max-w-md">Predict who will win and how a match will end and get a chance to win incredible cash prizes.</p>
          <RouterLink to="#" class="btn font-medium">
            Read More
            <IconArrowUpRight :size="20" />
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>
