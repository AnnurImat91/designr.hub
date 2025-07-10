<script lang="ts" setup>
import { useLayoutStore } from '@/stores/layoutStore';
import { IconMoon, IconSun } from '@tabler/icons-vue'
const { theme, toggleDark } = useLayoutStore()

</script>
<template>
    <button class="p-2 sm:p-3 rounded-full bg-n0 dark:bg-bg4 border border-n30 dark:border-n500" @click="toggleDark"
        aria-label="mode swithcer">
        <IconMoon v-if="theme.isDark" />
        <IconSun v-else />
    </button>
</template>

