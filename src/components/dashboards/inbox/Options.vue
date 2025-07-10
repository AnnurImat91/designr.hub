<script setup lang="ts">
import { IconArchive, IconDotsVertical, IconInfoOctagon, IconMailOpened, IconTrash } from '@tabler/icons-vue'
import { onClickOutside } from '@vueuse/core'
import { ref } from 'vue'
const open = ref(false)
const target = ref(null)

const props = defineProps<{
  checked: boolean
  deleteSelected: () => void
}>()

const handleDeleteSelected = () => {
  if (confirm('Delete Selected?')) {
    props.deleteSelected()
    open.value = false
  }
}

onClickOutside(target, () => (open.value = false))
</script>

<template>
  <div ref="target" class="relative">
    <button @click="open = !open" class="flex items-center">
      <IconDotsVertical :size="20" />
    </button>
    <div
      class="absolute ltr:origin-top-left rtl:origin-top-right top-full ltr:-right-16 ltr:md:left-0 rtl:-left-16 rtl:right-0 z-[3] flex-col w-40 bg-n0 rounded-md py-2 dark:bg-bg4 border min-w-[220px] border-n30 dark:border-n500"
      :class="{ 'opacity-100 scale-100 visible': open, 'opacity-0 scale-0 invisible': !open }"
    >
      <RouterLink to="#" class="flex items-center gap-3 px-4 py-2 hover:bg-primary/10 duration-300 border-b border-30 dark:border-n500">
        <IconMailOpened :size="22" />
        <span>Mark all as read</span>
      </RouterLink>

      <template v-if="checked">
        <button @click="handleDeleteSelected" class="flex items-center w-full gap-3 px-4 py-2 hover:bg-primary/10 duration-300 border-b border-30 dark:border-n500">
          <IconTrash :size="22" />
          <span>Delete</span>
        </button>
        <button class="flex items-center w-full gap-3 px-4 py-2 hover:bg-primary/10 duration-300 border-b border-30 dark:border-n500">
          <IconArchive :size="22" />
          <span>Archive</span>
        </button>
        <button class="flex items-center w-full gap-3 px-4 py-2 hover:bg-primary/10 duration-300 border-b border-30 dark:border-n500">
          <IconInfoOctagon :size="22" />
          <span>Report spam</span>
        </button>
      </template>

      <p v-else class="italic px-4 py-3 text-sm">Select messages to see more actions</p>
    </div>
  </div>
</template>
