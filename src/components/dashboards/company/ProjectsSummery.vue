<script setup lang="ts">
import CommonDropdownVue from "@/components/shared/CommonDropdown.vue";
import {
  IconChecklist,
  IconFilePower,
  IconFiles,
  IconInfoCircle,
  IconMathAvg,
  IconSquareX,
  IconTrack,
  IconUsers,
} from "@tabler/icons-vue";
const projects = [
  {
    title: "Project Discussion",
    desc: "6 Person",
    icon: IconFiles,
  },
  {
    title: "In Progress",
    desc: "16 Projects",
    icon: IconFilePower,
  },
  {
    title: "Completed Projects",
    desc: "24",
    icon: IconChecklist,
  },
  {
    title: "Delivery Projects",
    desc: "20",
    icon: IconTrack,
  },
  {
    title: "Employee",
    desc: "500+",
    icon: IconUsers,
  },
  {
    title: "Salary Avg",
    desc: "44k",
    icon: IconMathAvg,
  },
  {
    title: "Project Cancel",
    desc: "192+",
    icon: IconSquareX,
  },
];
</script>

<template>
  <div class="box col-span-2 md:col-span-1 xl:col-span-2">
    <div class="flex flex-wrap justify-between items-center gap-3 pb-4 lg:pb-6 mb-4 lg:mb-6 bb-dashed">
      <p class="font-medium">Projects Summery</p>
      <div class="flex items-center gap-2">
        <p class="text-xs sm:text-sm">Sort By : </p>
        <CommonDropdownVue />
      </div>
    </div>
    <div class="flex flex-col gap-6">

      <div v-for="{ desc, icon, title } in projects" :key="title" class="flex items-center justify-between">
        <RouterLink to="#" class="flex items-center gap-3 md:gap-4">
          <span class="p-3 inline-flex rounded-xl bg-primary/5 dark:bg-bg3 text-primary">
            <component :size="32" :is="icon"></component>
          </span>
          <div>
            <p class="text-base md:text-lg lg:text-xl font-medium mb-2">
              {{ title }}
            </p>
            <span class="text-xs  lg:text-sm">{{ desc }}</span>
          </div>
        </RouterLink>
        <button title="Project description">
          <IconInfoCircle />
        </button>
      </div>

    </div>
  </div>
</template>