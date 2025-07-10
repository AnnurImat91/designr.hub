<script setup lang="ts">
import { IconBriefcase, IconCreditCard, IconHome2, IconLock, IconMessageDots, IconNotebook, IconSettingsBolt, IconShieldLock, IconUpload, IconUsers } from '@tabler/icons-vue'

const settingsData = [
  {
    title: 'Institution',
    icon: IconHome2
  },
  {
    title: 'Team',
    icon: IconUsers
  },
  {
    title: 'Projects',
    icon: IconBriefcase
  },
  {
    title: 'Permissions',
    icon: IconLock
  },
  {
    title: 'Documents',
    icon: IconNotebook
  },
  {
    title: 'Upload',
    icon: IconUpload
  },
  {
    title: 'Billing',
    icon: IconCreditCard
  },
  {
    title: 'Messaging',
    icon: IconMessageDots
  },
  {
    title: 'Safety',
    icon: IconShieldLock
  },
  {
    title: 'General Settings',
    icon: IconSettingsBolt
  }
]
</script>

<template>
  <div class="min-h-[65vh]">
    <div class="box p-3 md:p-4 xl:p-6 grid grid-cols-12 gap-4 xxxl:gap-6 xl:grid-cols-10">
      <RouterLink
        to="#"
        v-for="{ icon, title } in settingsData"
        :key="title"
        class="col-span-12 min-[400px]:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2 box p-8 xxl:py-12 bg-primary/5 dark:bg-bg3 hover:bg-primary hover:text-n0 duration-300 flex flex-col items-center justify-center gap-5 text-center"
      >
        <div class="rounded-2xl size-20 flex items-center justify-center text-primary bg-n0 dark:bg-bg4 shadow-[0px_6px_30px_0px_rgba(0,0,0,0.06)]">
          <component :size="32" :is="icon"></component>
        </div>
        <span class="text-xl font-medium">{{ title }}</span>
      </RouterLink>
    </div>
  </div>
</template>
