<script setup lang="ts">
import CommonDropdown from '@/components/shared/CommonDropdown.vue'
import { IconArrowUpRight, IconThumbUp } from '@tabler/icons-vue'
import { IconSend } from '@tabler/icons-vue'
import { IconStarHalfFilled } from '@tabler/icons-vue'
import { IconStarFilled } from '@tabler/icons-vue'
import { IconMessageDots } from '@tabler/icons-vue'
import { ref } from 'vue'
import AnimateHeight from 'vue-animate-height'
import { RouterLink } from 'vue-router'
const showComment = ref<number | null>(null)
const comments = [
  {
    date: 'Mar 03, 2023',
    id: 1,
    time: '09.01 am',
    comment:
      'I had no idea that consolidating my student loans could simplify my repayment and potentially lower my monthly payments. This article has given me a new perspective on managing my loans. ',
    commenterImg: '/images/user-big-2.png',
    commenter: 'Cameron Williamson',
    designation: 'Actress',
    replierImg: '/images/user-big-3.png'
  },
  {
    date: 'Mar 03, 2023',
    id: 2,
    time: '09.01 am',
    comment:
      'I had no idea that consolidating my student loans could simplify my repayment and potentially lower my monthly payments. This article has given me a new perspective on managing my loans. ',
    commenterImg: '/images/user-big-2.png',
    commenter: 'Cameron Williamson',
    designation: 'Actress',
    replierImg: '/images/user-big-3.png'
  },
  {
    date: 'Mar 03, 2023',
    id: 3,
    time: '09.01 am',
    comment:
      'I had no idea that consolidating my student loans could simplify my repayment and potentially lower my monthly payments. This article has given me a new perspective on managing my loans. ',
    commenterImg: '/images/user-big-2.png',
    commenter: 'Cameron Williamson',
    designation: 'Actress',
    replierImg: '/images/user-big-3.png'
  },
  {
    date: 'Mar 03, 2023',
    id: 2,
    time: '09.01 am',
    comment:
      'I had no idea that consolidating my student loans could simplify my repayment and potentially lower my monthly payments. This article has given me a new perspective on managing my loans. ',
    commenterImg: '/images/user-big-2.png',
    commenter: 'Cameron Williamson',
    designation: 'Actress',
    replierImg: '/images/user-big-3.png'
  },
  {
    date: 'Mar 03, 2023',
    id: 3,
    time: '09.01 am',
    comment:
      'I had no idea that consolidating my student loans could simplify my repayment and potentially lower my monthly payments. This article has given me a new perspective on managing my loans. ',
    commenterImg: '/images/user-big-2.png',
    commenter: 'Cameron Williamson',
    designation: 'Actress',
    replierImg: '/images/user-big-3.png'
  }
]
const handleCommentShow = (id: number) => {
  showComment.value == id ? (showComment.value = null) : (showComment.value = id)
}
</script>

<template>
  <div class="box col-span-12 order-2 lg:order-1 lg:col-span-5 xl:col-span-4">
    <div class="flex flex-wrap justify-between items-center gap-3 pb-4 lg:pb-6 mb-4 lg:mb-6 bb-dashed">
      <p class="font-medium">Latest Reviews</p>
      <div class="flex items-center gap-2">
        <p class="text-xs sm:text-sm">Sort By :</p>
        <CommonDropdown />
      </div>
    </div>
    <div class="flex flex-col gap-6 items-start">
      <div v-for="{ comment, commenter, commenterImg, date, designation, id, replierImg, time } in comments" :key="id" class="box p-4 md:p-6 bg-primary/5 dark:bg-bg3">
        <div class="flex items-center gap-2 bb-dashed mb-6 pb-6">
          <span>{{ date }}</span>
          <span class="text-primary scale-50">•</span>
          <span>{{ time }}</span>
        </div>
        <div class="flex gap-1 text-secondary3dark mb-3">
          <IconStarFilled :size="18" />
          <IconStarFilled :size="18" />
          <IconStarFilled :size="18" />
          <IconStarFilled :size="18" />
          <IconStarHalfFilled :size="18" />
        </div>
        <p class="mb-6">{{ comment }}</p>
        <div class="flex items-center gap-2 sm:gap-4 md:gap-6 bb-dashed pb-4 mb-4 md:mb-6 md:pb-6">
          <img :width="60" :height="60" :src="commenterImg" class="w-10 h-10 md:w-14 md:h-14 rounded-full" alt="commenter img" />
          <div>
            <p class="font-medium text-base sm:text-lg lg:text-xl mb-1">
              {{ commenter }}
            </p>
            <p>{{ designation }}</p>
          </div>
        </div>
        <div class="flex items-center gap-8">
          <button class="flex items-center gap-1 text-primary"><IconThumbUp /> 79</button>
          <button @click="handleCommentShow(id)" class="flex items-center gap-1 text-primary"><IconMessageDots /> Reply</button>
        </div>
        <AnimateHeight :height="showComment == id ? 'auto' : 0">
          <div class="flex items-center gap-3 md:gap-5 mt-4 md:mt-6">
            <img :src="replierImg" :width="40" :height="40" alt="replier" class="w-9 h-9 md:w-11 md:h-11 rounded-full" />
            <form class="text-sm bg-n0 dark:bg-bg4 rounded-3xl grow flex items-center justify-between">
              <input type="text" class="bg-transparent p-2 md:p-3 w-full" placeholder="Join the discussion..." />
              <span class="inline-block px-5 shrink-0 text-primary cursor-pointer">
                <IconSend :size="20" />
              </span>
            </form>
          </div>
        </AnimateHeight>
      </div>
      <RouterLink to="#" class="btn-outline">
        See All
        <IconArrowUpRight :size="20" />
      </RouterLink>
    </div>
  </div>
</template>
