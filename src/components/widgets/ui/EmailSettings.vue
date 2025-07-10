<script setup lang="ts">
import OptionsVertical from '@/components/shared/OptionsVertical.vue'
import Switch from '@/components/shared/Switch.vue'

const settings = [
  {
    title: 'Email Notifications',
    number: '3093+ Email',
    checked: true
  },
  {
    title: 'Send Copy To Personal Email',
    number: '3093+ Email',
    checked: true
  },
  {
    title: 'Spam Email',
    number: '3093+ Email',
    checked: false
  }
]
</script>

<template>
  <div class="box mb-4 xxxl:mb-6">
    <div class="flex justify-between items-center bb-dashed mb-3 pb-3 lg:pb-6 lg:mb-6">
      <p class="font-medium">Email Settings</p>
      <OptionsVertical />
    </div>
    <div class="flex flex-col gap-3 lg:gap-6 w-full">
      <div v-for="{ checked, number, title } in settings" :key="title" class="flex justify-between items-center w-full">
        <div>
          <p class="font-medium text-base lg:text-lg xl:text-xl mb-2">{{ title }}</p>
          <p class="text-sm">{{ number }}</p>
        </div>
        <Switch :label="title" :isChecked="checked" />
      </div>
    </div>
  </div>
</template>
