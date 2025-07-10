<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps<{
  isChecked?: boolean
  label: string
}>()

const isChecked = ref(props.isChecked)
</script>

<template>
  <div class="flex items-center justify-center">
    <label :for="label" class="flex items-center cursor-pointer">
      <div class="relative">
        <input
          type="checkbox"
          :id="label"
          v-model="isChecked"
          :checked="isChecked"
          class="sr-only"
        />
        <div
          class="block w-14 h-8 rounded-full"
          :class="{ 'bg-primary': isChecked, 'bg-primary/20': !isChecked }"
        ></div>
        <div
          class="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"
          :class="{ 'translate-x-full': isChecked }"
        ></div>
      </div>
    </label>
  </div>
</template>
