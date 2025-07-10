<script setup lang="ts">
import CommonDropdownVue from '@/components/shared/CommonDropdown.vue'
import { IconChecklist, IconFilePower, IconFiles, IconInfoCircle, IconMathAvg, IconTrack, IconUsers } from '@tabler/icons-vue'
const projects = [
  {
    title: 'Project Discussion',
    desc: '6 Person',
    icon: IconFiles
  },
  {
    title: 'In Progress',
    desc: '16 Projects',
    icon: IconFilePower
  },
  {
    title: 'Completed Projects',
    desc: '24',
    icon: IconChecklist
  },
  {
    title: 'Delivery Projects',
    desc: '20',
    icon: IconTrack
  },
  {
    title: 'Employee',
    desc: '500+',
    icon: IconUsers
  },
  {
    title: 'Salary Avg',
    desc: '44k',
    icon: IconMathAvg
  }
]
</script>

<template>
  <div class="col-span-12 md:col-span-6 xl:col-span-4 box">
    <div class="flex flex-wrap justify-between items-center gap-3 pb-4 lg:pb-6 mb-4 lg:mb-6 bb-dashed">
      <p class="font-medium">Projects Summery</p>
      <div class="flex items-center gap-2">
        <p class="text-xs sm:text-sm">Sort By :</p>
        <CommonDropdownVue />
      </div>
    </div>
    <div class="flex flex-col gap-6">
      <div v-for="{ desc, icon, title } in projects" :key="title" class="flex items-center justify-between">
        <RouterLink to="#" class="flex items-center gap-4">
          <span class="p-3 inline-flex rounded-xl bg-primary/5 dark:bg-bg3 text-primary">
            <component :is="icon"></component>
          </span>
          <div>
            <p class="text-base sm:text-lg md:text-xl font-medium mb-2">{{ title }}</p>
            <span class="text-xs lg:text-sm">{{ desc }}</span>
          </div>
        </RouterLink>
        <button title="Project description">
          <IconInfoCircle :size="20" />
        </button>
      </div>
    </div>
  </div>
</template>
