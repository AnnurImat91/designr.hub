<template>
  <div class="flex gap-1 text-primary">
    <span
      v-for="index in 5"
      :key="index"
      class="cursor-pointer"
      @click="handleStarClick(index + 1)"
    >
      <component :is="getStarIcon(index + 1)" :size="20" />
    </span>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { IconStar, IconStarFilled } from '@tabler/icons-vue'

const props = defineProps(['initialRating', 'onChange'])
const rating = ref(props.initialRating)

const handleStarClick = (clickedRating: number) => {
  rating.value = clickedRating
  if (props.onChange) {
    props.onChange(clickedRating)
  }
}

const getStarIcon = (starValue: number) => {
  return starValue <= rating.value ? IconStarFilled : IconStar
}
</script>
