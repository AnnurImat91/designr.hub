<script setup lang="ts">
import { IconDotsVertical } from '@tabler/icons-vue'
import { onClickOutside } from '@vueuse/core'
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
const props = defineProps<{
  fromBottom?: boolean
}>()
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
  <div ref="target" class="relative ltr:pl-3 rtl:pr-3">
    <IconDotsVertical :size="20" @click="isOpen = !isOpen" class="cursor-pointer" />
    <ul
      v-show="isOpen"
      :class="{
        'visible opacity-100': isOpen,
        ' invisible opacity-0': !isOpen,
        'top-0': !props.fromBottom,
        'bottom-0': props.fromBottom
      }"
      class="absolute ltr:right-5 rtl:left-5 border dark:border-n500 min-w-[160px] bg-n0 z-[3] dark:bg-bg3 p-1.5 rounded-md"
    >
      <li @click="isOpen = false" v-for="{ title, url } in options" :key="title">
        <RouterLink
          :to="url"
          class="py-2 hover:bg-primary/10 text-sm hover:text-primary rounded-md duration-300 block px-3"
        >
          {{ title }}
        </RouterLink>
      </li>
    </ul>
  </div>
</template>
