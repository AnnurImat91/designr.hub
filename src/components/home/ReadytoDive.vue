<script setup lang="ts">
import { IconArrowUpRight } from '@tabler/icons-vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="bg-n0 dark:bg-bg4">
    <div class="rounded-2xl bg-[url(/images/home/smartui-bg.png)] max-w-[1600px] mx-auto bg-cover bg-no-repeat pt-10 lg:pt-14 bg-primary/5 dark:bg-bg3">
      <div class="container grid grid-cols-2 gap-4 xl:gap-6 items-center">
        <div class="col-span-2 lg:col-span-1">
          <h5 class="h5 text-primary font-semibold mb-2 lg:mb-4">Ready to Dive</h5>
          <h2 class="h2 mb-4 lg:mb-6">Ready to dive in? Explore all available ingredients.</h2>
          <p class="mb-10 lg:mb-14 text-sm md:text-base">We built a great documentation to help you get started. Each component has a demo page and code snippets showing how to use them.</p>
          <RouterLink to="/dashboards/personal-1" class="btn-outline">
            Browse Pages
            <IconArrowUpRight :size="20" />
          </RouterLink>
        </div>
        <div class="col-span-2 lg:col-span-1">
          <img src="/images/home/readytodive.png" alt="img" class="xxl:translate-x-10 xxxl:translate-x-20 4xl:translate-x-24" />
        </div>
      </div>
    </div>
  </section>
</template>
