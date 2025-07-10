<script setup lang="ts">
import { IconChevronDown } from '@tabler/icons-vue'
import { onClickOutside } from '@vueuse/core'
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
const selectOptions = ['All', 'None', 'Read', 'Unread', 'Starred', 'Unstarred']
const open = ref(false)
const target = ref(null)
onClickOutside(target, () => (open.value = false))
</script>

<template>
  <div ref="target" class="relative">
    <button @click="open = !open" class="flex items-center">
      <IconChevronDown :size="22" />
    </button>
    <div
      class="absolute ltr:origin-top-left rtl:origin-top-right top-full rtl:right-0 ltr:-left-5 z-10 flex-col w-40 bg-n0 rounded-md py-2 dark:bg-bg4 border min-w-[220px] border-n30 dark:border-n500"
      :class="{ 'opacity-100 scale-100 visible': open, 'opacity-0 scale-0 invisible': !open }"
    >
      <ul>
        <li v-for="option in selectOptions" :key="option">
          <RouterLink class="px-5 py-2 hover:bg-primary/10 block duration-300" to="#">
            {{ option }}
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>
