<script setup lang="ts">
import { useLayoutStore } from "@/stores/layoutStore";
import { RouterLink } from "vue-router";
import Navbar from "./Navbar.vue";
const { theme } = useLayoutStore()
</script>

<template>
  <div class="bg-[url(/images/home/hero-bg.png)] bg-cover bg-no-repeat relative">
    <div class="bg-gradient-to-b from-primary/20 to-n0 dark:to-[#1B232D] pt-28 lg:pt-32">
      <img :src="theme.isDark ? '/images/home/os-dark.png' : '/images/home/os.png'"
        class="absolute left-3 min-[1650px]:left-[8%] top-[24%] hidden xxl:block" alt="hero img" />
      <img :src="theme.isDark ? '/images/home/browser-dark.png' : '/images/home/browser.png'"
        class="absolute hidden xxl:block left-[2%] bottom-[5%]" alt="hero img" />
      <img :src="theme.isDark ? '/images/home/projects-status-dark.png' : '/images/home/projects-status.png'"
        class="absolute hidden xxl:block top-[10%] right-0 min-[1480px]:]right-6 min-[1680px]:right-[4%]"
        alt="hero img" />
      <img :src="theme.isDark ? '/images/home/transactions-dark.png' : '/images/home/transactions.png'"
        class="absolute hidden right-[4%] bottom-[3%] xxl:block" alt="hero img" />
      <Navbar />
      <div class="container">
        <div class="max-w-5xl mx-auto text-center">
          <h1 class="display-3 mb-4 lg:mb-6 mt-6">
            Effortless Dashboard Creation for Pros very Fast
          </h1>
          <p class="lg:text-xl mb-8 lg:mb-10 text-sm md:text-base">
            Dashboi is the ultimate solution for developers looking to build
            beautiful Vuejs dashboards in no time, with the power of UI and
            Tailwind CSS.
          </p>
          <div class="flex justify-center gap-4 lg:gap-6 pb-10 lg:pb-14">
            <a target="_blank"
              href="https://themeforest.net/checkout/from_item/49662587?license=regular&support=bundle_6month"
              class="btn">
              Purchase Now
            </a>
            <RouterLink to="#pages" class="btn-outline">
              View Demos
            </RouterLink>
          </div>
        </div>
        <div class="flex justify-center">
          <img src="/images/home/main.png" class="rounded-t-2xl rounded-b-sm" :width="1296" :height="619" alt="hero" />
        </div>
      </div>
    </div>
  </div>
</template>