<script setup lang="ts">
import { useLayoutStore } from "@/stores/layoutStore";
import {
  IconBriefcase,
  IconBulbFilled,
  IconUserCode,
} from "@tabler/icons-vue";
const supportData = [
  {
    title: "User Experience",
    desc: "We understand the importance of creating a dashboard that not only looks great but is also easy to use and accessible for everyone.",
    icon: IconBriefcase,
  },
  {
    title: "Developer Experience",
    desc: "We get that creating a dashboard is not just about the end-users but also about the developers who build it. ",
    icon: IconUserCode,
  },
  {
    title: "VueJS powered",
    desc: "Dashboi combines the power of the latest version of Vuejs with the popular Tailwind CSS framework, allowing you to create stunning designs with ease.",
    icon: IconBulbFilled,
  },
];
const { theme } = useLayoutStore()
</script>

<template>
  <section class="py-14 xxl:py-28 bg-n0 dark:bg-bg4">
    <div class="container grid grid-cols-2 gap-4 xl:gap-6 items-center">
      <div class="col-span-2 lg:col-span-1 relative">
        <img class="hidden xxl:block absolute -left-10 z-[2] xxxl:-left-20 4xl:-left-56 top-[20%]"
          :src="theme.isDark ? '/images/home/transactions-dark.png' : '/images/home/transactions.png'" :width="138"
          :height="138" alt="img" />
        <img class="hidden xxl:block absolute bottom-10 z-[2] -right-0"
          :src="theme.isDark ? '/images/home/stat-dark.png' : '/images/home/stat.png'" alt="img" />
        <img src="/images/home/whychoose.png" class="xxl:-translate-x-10 xxxl:-translate-x-28 4xl:-translate-x-40"
          alt="img" />
      </div>
      <div class="col-span-2 lg:col-span-1">
        <h5 class="h5 text-primary font-semibold mb-2 lg:mb-4">
          Hard Rock
        </h5>
        <h2 class="h2 mb-4 lg:mb-6">Why choose Dashboi</h2>
        <p class="mb-10 lg:mb-14 text-sm md:text-base">
          Dashboi is a modern, clean and fully responsive Vuejs / Tailwind
          CSS dashboard system. It is built with care and provides a solid
          foundation for your next project, while yielding an exquisite
          developer experience.
        </p>
        <div class="flex flex-col gap-4 md:gap-6 xl:gap-8">
          <div v-for="{ title, desc, icon } in supportData" :key="title" class="flex items-start gap-4 xl:gap-6">
            <div class="p-3 rounded-full bg-primary/5 dark:bg-bg3 text-primary">
              <component :size="36" :is="icon"></component>
            </div>
            <div>
              <h5 class="text-lg lg:text-xl font-medium mb-2">
                {{ title }}
              </h5>
              <p class="text-sm">{{ desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>