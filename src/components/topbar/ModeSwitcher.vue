<script lang="ts" setup>
import { useLayoutStore } from '@/stores/layoutStore'
import { IconMoon, IconSun } from '@tabler/icons-vue'
const { theme, toggleDark } = useLayoutStore()
</script>
<template>
  <button class="p-2 sm:p-3 rounded-full bg-primary/5 dark:bg-bg3" @click="toggleDark" aria-label="mode swithcer">
    <IconMoon :size="20" v-if="theme.isDark" />
    <IconSun :size="20" v-else />
  </button>
</template>
