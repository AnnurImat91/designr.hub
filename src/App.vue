<script lang="ts" setup>
import '@/assets/main.css'
import DefaultLayout from './layouts/DefaultLayout.vue'
import ThemeCustomizer from '@/components/shared/ThemeCustomizer.vue'
import { ref } from 'vue'
import { IconSettings } from '@tabler/icons-vue'
import '@/assets/style.scss'

const customizerOpen = ref(false)

const toggleCustomizer = () => {
  customizerOpen.value = !customizerOpen.value
}
</script>

<template>
  <!-- <button @click="toggleCustomizer" class="fixed ltr:right-4 rtl:left-4 z-50 top-1/2 bg-primary text-n0 w-10 h-10 rounded-full flex items-center justify-center">
    <IconSettings class="animate-spin-slow" />
  </button>
  <ThemeCustomizer :customizer-open="customizerOpen" @toggle-customizer="toggleCustomizer" /> -->
  <component :is="$route.meta.layout || DefaultLayout">
    <n-dialog-provider>
      <n-message-provider>
        <RouterView />
      </n-message-provider>
    </n-dialog-provider>
  </component>
</template>
