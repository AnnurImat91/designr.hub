<script setup lang="ts">
import { useLayoutStore } from '@/stores/layoutStore'
import { IconArrowUpRight } from '@tabler/icons-vue'

function goBack() {
  window.history.back()
}
const { theme } = useLayoutStore()
</script>

<template>
  <div class="flex items-center justify-center py-10 md:py-20 lg:py-28">
    <div class="flex flex-col items-center justify-center text-center max-w-[640px] mx-auto">
      <img :src="theme.isDark ? '/images/system-error-dark.png' : '/images/system-error.png'" alt="confirm illustration" class="mb-10 lg:mb-14" />
      <h2 class="h2 mb-4 lg:mb-6">Oops... Something went wrong</h2>
      <p class="mb-6 md:mb-8 lg:mb-10">An error has occurred. If the problem persists, please contact a system administrator or try again later.</p>
      <button @click="goBack" class="btn">Take Me Back <IconArrowUpRight :size="20" /></button>
    </div>
  </div>
</template>
