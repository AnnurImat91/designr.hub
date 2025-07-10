<script setup lang="ts">
import { IconSearch } from '@tabler/icons-vue'
const props = defineProps<{
  search: (event: any) => void
}>()
</script>

<template>
  <form
    @submit="(e) => e.preventDefault()"
    class="bg-primary/5 dark:bg-bg3 hidden md:flex gap-3 rounded-[30px] border border-transparent focus-within:border-primary px-3 xxl:px-5 items-center justify-between max-w-[250px] w-full"
  >
    <input
      type="text"
      @input="props.search"
      placeholder="Search"
      class="bg-transparent py-2 text-sm focus:outline-none w-full"
    />
    <button>
      <IconSearch :size="20" />
    </button>
  </form>
</template>
