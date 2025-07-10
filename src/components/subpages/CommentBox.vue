<script setup lang="ts">
import { IconSend } from '@tabler/icons-vue'
import { IconMessageDots } from '@tabler/icons-vue'
import { IconThumbUp } from '@tabler/icons-vue'
import { ref } from 'vue'
import AnimateHeight from 'vue-animate-height'
const showComment = ref(false)
const props = defineProps<{
  comment: string
  commenter: string
  commenterImg: string
  replierImg: string
  time: string
}>()
</script>

<template>
  <div
    class="box p-0 flex items-start gap-3 md:gap-4 border-none bg-n0 dark:bg-bg4 mb-4 md:mb-6 xl:mb-8 last:mb-0"
  >
    <img
      :width="48"
      :height="48"
      class="rounded-full shrink-0 w-9 h-9 md:w-12 md:h-12"
      :src="props.commenterImg"
      alt="commenter img"
    />
    <div>
      <div class="flex gap-1 flex-wrap items-center mb-3">
        <p class="font-medium text-xl mb-1">{{ props.commenter }}</p>
        <p>{{ time }}</p>
      </div>
      <p class="mb-5 text-sm">{{ comment }}</p>
      <div class="flex items-center gap-8">
        <button class="flex items-center gap-1 text-primary"><IconThumbUp /> 179</button>
        <button @click="showComment = !showComment" class="flex items-center gap-1 text-primary">
          <IconMessageDots /> Reply
        </button>
      </div>
      <AnimateHeight :height="showComment ? 'auto' : 0">
        <div class="flex items-center gap-3 md:gap-5 mt-6">
          <img :src="replierImg" :width="40" :height="40" alt="replier" />
          <div
            class="max-w-md w-full bg-primary/5 dark:bg-bg3 flex justify-between items-center rounded-3xl ltr:pr-4 rtl:pl-4"
          >
            <input
              type="text"
              class="w-full bg-transparent focus:outline-none px-5 py-3"
              placeholder="Join the discussion..."
            />
            <button class="rounded-full text-primary">
              <IconSend />
            </button>
          </div>
        </div>
      </AnimateHeight>
    </div>
  </div>
</template>
