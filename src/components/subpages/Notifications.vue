<script setup lang="ts">
import { IconClock, IconMessageDots } from '@tabler/icons-vue'
import OptionsVertical from '../shared/OptionsVertical.vue'

const notificationsData = {
  today: [
    {
      id: 1,
      name: 'Jane Cooper',
      img: '/images/user-big-1.png',
      message: 'Mentioned you in a comment',
      comment: 'Well done! Proud of you',
      time: '05:20 PM',
      date: 'August 8, 2023',
      read: false,
      timePast: '20 Min ago'
    },
    {
      id: 2,
      name: 'Arlene McCoy',
      img: '/images/user-big-2.png',
      message: 'Mentioned you in a comment',
      comment: 'Well done! Proud of you',
      time: '05:20 PM',
      date: 'August 8, 2023',
      read: true,
      timePast: '20 Min ago'
    },
    {
      id: 3,
      name: 'Kathryn Murphy',
      img: '/images/user-big-3.png',
      message: 'Mentioned you in a comment',
      comment: 'Well done! Proud of you',
      time: '05:20 PM',
      date: 'August 8, 2023',
      read: false,
      timePast: '20 Min ago'
    }
  ],
  yesterday: [
    {
      id: 4,
      name: 'Jenny Wilson',
      img: '/images/user-big-4.png',
      message: 'Mentioned you in a comment',
      comment: 'Well done! Proud of you',
      time: '05:20 PM',
      date: 'August 8, 2023',
      read: false,
      timePast: '20 Min ago'
    },
    {
      id: 5,
      name: 'Annette Black',
      img: '/images/user-big-5.png',
      message: 'Mentioned you in a comment',
      comment: 'Well done! Proud of you',
      time: '05:20 PM',
      date: 'August 8, 2023',
      read: true,
      timePast: '20 Min ago'
    },
    {
      id: 6,
      name: 'Dianne Russell',
      img: '/images/user-big-6.png',
      message: 'Mentioned you in a comment',
      comment: 'Well done! Proud of you',
      time: '05:20 PM',
      date: 'August 8, 2023',
      read: true,
      timePast: '20 Min ago'
    },
    {
      id: 7,
      name: 'Brooklyn Simmons',
      img: '/images/user-big-7.png',
      message: 'Mentioned you in a comment',
      comment: 'Well done! Proud of you',
      time: '05:20 PM',
      date: 'August 8, 2023',
      read: false,
      timePast: '20 Min ago'
    }
  ]
}
</script>

<template>
  <div class="box xl:p-8">
    <div class="flex justify-between items-center mb-4 pb-4 md:mb-6 md:pb-6 bb-dashed">
      <p class="font-medium">Notifications</p>
      <OptionsVertical />
    </div>
    <div v-for="(item, value) in notificationsData" :key="value">
      <p class="py-4 px-6 font-semibold">{{ value }}</p>
      <div>
        <div
          v-for="{ id, comment, date, img, message, name, read, time, timePast } in item"
          :key="id"
          class="p-4 md:p-6 rounded-xl flex flex-wrap items-start gap-4 md:gap-6 border border-n30 dark:border-n500 mb-4 last:mb-0"
          :class="{ 'bg-primary/5 dark:bg-bg3': !read }"
        >
          <img :src="img" :width="48" class="rounded-full" :height="48" alt="img" />
          <div class="grow">
            <div class="flex gap-2 md:gap-4 flex-wrap items-center mb-3">
              <p class="text-xl font-medium">{{ name }}</p>
              <span class="text-sm">{{ timePast }}</span>
            </div>
            <div class="flex bb-dashed mb-5 pb-5 gap-1">
              <IconMessageDots :size="22" class="shrink-0" />
              <div class="flex flex-wrap items-center text-sm gap-1">
                <span>{{ message }}</span>
                <span class="font-medium">{{ comment }}</span>
              </div>
            </div>
            <div class="flex items-center gap-1">
              <IconClock />
              <div class="flex items-center gap-2">
                <p class="font-medium">{{ time }}</p>
                <span class="text-xs">{{ date }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
