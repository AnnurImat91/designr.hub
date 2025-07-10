<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

defineProps(['bg', 'width', 'height'])
const isInView = ref(false)
const progress = ref(null)

const progressObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        isInView.value = true
      }
    })
  },
  {
    threshold: 0.2
  }
)

onMounted(() => {
  if (progress.value) {
    progressObserver.observe(progress.value)
  }
})

onBeforeUnmount(() => {
  if (progress.value) {
    progressObserver.unobserve(progress.value)
  }
})
</script>

<template>
  <div ref="progress" class="bar bg-primary/20" :class="[height || 'h-2', 'rounded-full']">
    <div :style="{ width: `${width}%` }" class="rounded-full" :class="[bg, isInView ? 'progress-grow' : '', height || 'h-2']"></div>
  </div>
</template>
