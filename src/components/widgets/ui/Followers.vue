<script setup lang="ts">
import { IconPlus } from '@tabler/icons-vue'
</script>

<template>
  <div class="box my-4 xxxl:my-6">
    <div class="flex items-center">
      <img src="/images/user-big-3.png" :width="48" :height="48" class="border-2 border-n0 -mr-4 dark:border-n500 rounded-full" alt="img" />
      <img src="/images/user-big-4.png" :width="48" :height="48" class="border-2 border-n0 -mr-4 dark:border-n500 rounded-full" alt="img" />
      <img src="/images/user-big-1.png" :width="48" :height="48" class="border-2 border-n0 -mr-4 dark:border-n500 rounded-full" alt="img" />
      <img src="/images/user-big-4.png" :width="48" :height="48" class="border-2 border-n0 -mr-4 dark:border-n500 rounded-full" alt="img" />
      <img src="/images/user-big-1.png" :width="48" :height="48" class="border-2 border-n0 -mr-4 dark:border-n500 rounded-full" alt="img" />
      <img src="/images/user-big-3.png" :width="48" :height="48" class="border-2 border-n0 -mr-4 dark:border-n500 rounded-full" alt="img" />
      <div class="border-2 flex items-center justify-center text-n0 border-n0 dark:border-n500 rounded-full bg-primary w-12 h-12">
        <IconPlus />
      </div>
    </div>
    <div class="flex gap-3 items-center mt-6">
      <h4 class="text-primary h4">245.3k</h4>
      <span>Followers</span>
    </div>
  </div>
</template>
