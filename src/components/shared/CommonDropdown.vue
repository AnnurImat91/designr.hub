<script lang="ts" setup>
import { ref } from 'vue'

import Dropdown from 'primevue/dropdown'

type Option = {
  name: string
  code?: string
}
const props = defineProps<{
  options?: Option[]
  inputClass?: string
  placeholderProps?: string
}>()

const selectedCity = ref()
const sortOptions = [{ name: 'Last 7 Days' }, { name: 'Last Month' }, { name: 'Last Year' }]
const dropdownOptions = ref(props.options || sortOptions)
</script>
<template>
  <Dropdown
    v-model="selectedCity"
    :pt="{
      item: ({ context }) => ({
        class: ['py-1 px-3 hover:text-primary text-xs duration-300 rounded-md cursor-pointer', { 'bg-primary text-n0 hover:!text-n0': context.selected }]
      })
    }"
    :options="dropdownOptions"
    optionLabel="name"
    :placeholder="props.placeholderProps || dropdownOptions[0].name"
    class="border text-xs select-none cursor-pointer border-n30 dark:border-n500 flex gap-2 justify-between items-center rounded-3xl py-1.5 px-3 xxl:px-4 sm:py-2 bg-primary/5 dark:bg-bg3"
    :class="props.inputClass"
    inputClass="text-xs focus:outline-none"
    panelClass="shadow-lg p-2 bg-n0 dark:bg-bg4 rounded-md wrapper dark:border dark:border-n600"
  >
  </Dropdown>
</template>
