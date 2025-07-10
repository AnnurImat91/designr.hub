<script setup lang="ts">
import { IconDots } from '@tabler/icons-vue'
import { onClickOutside } from '@vueuse/core'
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const options = [
  {
    title: 'Edit',
    url: '#'
  },
  {
    title: 'Delete',
    url: '#'
  },
  {
    title: 'Share',
    url: '#'
  }
]
const isOpen = ref(false)
const target = ref(null)
onClickOutside(target, () => (isOpen.value = false))
</script>

<template>
  <div ref="target" class="relative">
    <IconDots :size="20" @click="isOpen = !isOpen" class="cursor-pointer" />
    <ul
      v-show="isOpen"
      :class="{ 'visible opacity-100': isOpen, ' invisible opacity-0': !isOpen }"
      class="absolute top-1/2 ltr:right-8 rtl:left-8 border shadow-xl dark:border-n500 min-w-[160px] bg-n0 z-[3] dark:bg-bg3 p-1.5 rounded-md"
    >
      <li v-for="option in options" :key="option.title">
        <RouterLink
          :to="option.url"
          class="py-2 hover:bg-primary/10 text-sm rounded-md hover:text-primary duration-300 block px-3"
        >
          {{ option.title }}
        </RouterLink>
      </li>
    </ul>
  </div>
</template>
