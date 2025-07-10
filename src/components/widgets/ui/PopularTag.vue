<script setup lang="ts">
const tags = ['Politics', 'Economy', 'New', 'Finance', 'Environment', 'Family', 'Food', 'Medical', 'Business', 'Movies', 'Cricket', 'Finance', 'Environment', 'Family']
</script>

<template>
  <div class="box">
    <div class="flex justify-between items-center bb-dashed pb-3 mb-3 lg:pb-6 lg:mb-6">
      <p class="font-medium">Popular Tags</p>
    </div>
    <div class="flex xl:gap-4 gap-3 w-full flex-wrap">
      <RouterLink v-for="(tag, i) in tags" to="#" :key="i" class="btn-outline py-2 px-4 text-sm">
        {{ tag }}
      </RouterLink>
    </div>
  </div>
</template>
