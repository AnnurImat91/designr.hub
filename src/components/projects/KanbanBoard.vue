<script setup lang="ts">
import { IconCirclePlus } from '@tabler/icons-vue'
import OptionsVertical from '../shared/OptionsVertical.vue'

const taskList = {
  'In Progress': [
    {
      id: 1,
      title: 'Tasks 1',
      priority: 'High',
      date: 'Jan 23, 2023 / 04:05 PM',
      name: 'Cody Fisher',
      designation: 'Software developer',
      img: '/images/user-big-1.png'
    },
    {
      id: 2,
      title: 'Tasks 2',
      priority: 'Medium',
      date: 'Jan 23, 2023 / 04:05 PM',
      name: 'Cody Fisher',
      designation: 'Software developer',
      img: '/images/user-big-2.png'
    },
    {
      id: 3,
      title: 'Tasks 3',
      priority: 'Low',
      date: 'Jan 23, 2023 / 04:05 PM',
      name: 'Cody Fisher',
      designation: 'Software developer',
      img: '/images/user-big-3.png'
    },
    {
      id: 4,
      title: 'Tasks 4',
      priority: 'Low',
      date: 'Jan 23, 2023 / 04:05 PM',
      name: 'Cody Fisher',
      designation: 'Software developer',
      img: '/images/user-big-4.png'
    },
    {
      id: 5,
      title: 'Tasks 5',
      priority: 'High',
      date: 'Jan 23, 2023 / 04:05 PM',
      name: 'Cody Fisher',
      designation: 'Software developer',
      img: '/images/user-big-5.png'
    }
  ],
  'In Review': [
    {
      id: 6,
      title: 'Tasks 6',
      priority: 'High',
      date: 'Jan 23, 2023 / 04:05 PM',
      name: 'Cody Fisher',
      designation: 'Software developer',
      img: '/images/user-big-1.png'
    },
    {
      id: 7,
      title: 'Tasks 7',
      priority: 'Medium',
      date: 'Jan 23, 2023 / 04:05 PM',
      name: 'Cody Fisher',
      designation: 'Software developer',
      img: '/images/user-big-2.png'
    },
    {
      id: 8,
      title: 'Tasks 8',
      priority: 'Low',
      date: 'Jan 23, 2023 / 04:05 PM',
      name: 'Cody Fisher',
      designation: 'Software developer',
      img: '/images/user-big-3.png'
    },
    {
      id: 9,
      title: 'Tasks 9',
      priority: 'Low',
      date: 'Jan 23, 2023 / 04:05 PM',
      name: 'Cody Fisher',
      designation: 'Software developer',
      img: '/images/user-big-4.png'
    }
  ],
  Done: [
    {
      id: 10,
      title: 'Tasks 10',
      priority: 'High',
      date: 'Jan 23, 2023 / 04:05 PM',
      name: 'Cody Fisher',
      designation: 'Software developer',
      img: '/images/user-big-5.png'
    },
    {
      id: 11,
      title: 'Tasks 11',
      priority: 'Medium',
      date: 'Jan 23, 2023 / 04:05 PM',
      name: 'Cody Fisher',
      designation: 'Software developer',
      img: '/images/user-big-2.png'
    }
  ]
}
</script>
<template>
  <div class="grid grid-cols-12 gap-4 xxxl:gap-6">
    <div v-for="(task, value) in taskList" :key="value" class="col-span-12 md:col-span-6 xl:col-span-4">
      <div class="box xl:p-8">
        <div class="flex justify-between items-center bb-dashed mb-6 pb-6">
          <p class="font-medium">{{ value }}</p>
          <OptionsVertical />
        </div>
        <div class="flex flex-col gap-6">
          <div v-for="{ date, designation, id, img, name, priority, title } in task" :key="id"
            class="box bg-primary/5 xl:p-6">
            <div class="flex justify-between items-center mb-4 lg:mb-6 xxl:mb-8">
              <div>
                <p class="text-xl font-semibold mb-1 lg:mb-2">
                  {{ title }}
                </p>
                <span class="text-xs lg:text-sm">{{ date }}</span>
              </div>
              <span class="inline-block rounded-lg py-2 px-2 md:px-4 text-n0 text-sm" :class="{
                'bg-primary': priority == 'High',
                'bg-secondary1': priority == 'Medium',
                'bg-secondary2': priority == 'Low'
              }">
                {{ priority }}
              </span>
            </div>
            <div class="flex justify-between items-center">
              <div class="flex gap-4 items-center">
                <img :src="img" :width="40" :height="40" alt="img" class="rounded-full" />
                <div>
                  <p class="text-sm font-semibold mb-1">
                    {{ name }}
                  </p>
                  <span class="text-xs">
                    {{ designation }}
                  </span>
                </div>
              </div>
              <OptionsVertical :from-bottom="true" />
            </div>
          </div>
        </div>
        <button class="btn-outline mt-6">
          <IconCirclePlus />
          Add New
        </button>
      </div>
    </div>
  </div>
</template>
