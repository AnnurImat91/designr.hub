<script setup lang="ts">
import { ref } from 'vue'
import { IconDotsVertical } from '@tabler/icons-vue'
import { onClickOutside } from '@vueuse/core'
const props = defineProps<{
  fromBottom: boolean
  onDelete: () => void
}>()
const openDropdown = ref(false)
const target = ref(null)
onClickOutside(target, () => (openDropdown.value = false))
const toggleOpen = () => {
  openDropdown.value = !openDropdown.value
}
</script>

<template>
  <div class="relative top-0 dropdown flex justify-center">
    <IconDotsVertical :size="20" @click="toggleOpen()" class="cursor-pointer" />
    <ul
      v-show="openDropdown"
      class="absolute ltr:right-[70%] rtl:left-[70%] border text-sm z-30 dark:border-n500 min-w-[160px] p-1.5 rounded-md bg-n0 dark:bg-bg4"
      :class="{
        'bottom-0': props.fromBottom
      }"
      ref="target"
    >
      <li>
        <button
          class="py-2 w-full text-left hover:bg-primary/10 rounded-md hover:text-primary duration-300 block px-3"
        >
          Edit
        </button>
      </li>
      <li>
        <button
          @click="props.onDelete"
          class="py-2 w-full text-left hover:bg-primary/10 rounded-md hover:text-primary duration-300 block px-3"
        >
          Delete
        </button>
      </li>
      <li>
        <button
          class="py-2 w-full text-left hover:bg-primary/10 rounded-md hover:text-primary duration-300 block px-3"
        >
          Block
        </button>
      </li>
    </ul>
  </div>
</template>
