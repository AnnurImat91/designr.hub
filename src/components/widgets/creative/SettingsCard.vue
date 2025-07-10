<script setup lang="ts">
import { IconBriefcase, IconChecklist, IconMessageDots, IconNotebook, IconSettings, IconUsers } from '@tabler/icons-vue'
const settings = [
  {
    title: 'Profile',
    icon: IconUsers
  },
  {
    title: 'Setting',
    icon: IconSettings
  },
  {
    title: 'Messages',
    icon: IconMessageDots
  },
  {
    title: 'Tasks',
    icon: IconChecklist
  },
  {
    title: 'Services',
    icon: IconNotebook
  },
  {
    title: 'Projects',
    icon: IconBriefcase
  }
]
</script>

<template>
  <div class="col-span-12 md:col-span-6 xl:col-span-4 box p-4 md:p-6 grid grid-cols-2 gap-4 xxxl:gap-6">
    <RouterLink
      to="#"
      v-for="{ icon, title } in settings"
      :key="title"
      class="col-span-1 box bg-primary/5 dark:bg-bg3 duration-300 hover:bg-primary hover:text-n0 p-5 lg:p-8 flex flex-col items-center justify-center gap-5"
    >
      <div class="size-14 xxl:size-16 flex items-center justify-center rounded-2xl bg-n0 dark:bg-bg4 text-primary shadow-[0px_6px_30px_0px_rgba(0,0,0,0.06)]">
        <component :size="36" :is="icon"></component>
      </div>
      <p class="text-xl font-medium">{{ title }}</p>
    </RouterLink>
  </div>
</template>
