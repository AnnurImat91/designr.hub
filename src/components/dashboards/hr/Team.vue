<script setup lang="ts">
import { IconVideo } from '@tabler/icons-vue';
import { IconCheck } from '@tabler/icons-vue';
import { IconPhone } from '@tabler/icons-vue';
import { ref } from 'vue';

const teams = [
  {
    name: "Devon Lane",
    designation: "Software Tester",
    img: "/images/user-big-1.png",
  },
  {
    name: "Wade Warren",
    designation: "Ethical Hacker",
    img: "/images/user-big-2.png",
  },
  {
    name: "Cody Fisher",
    designation: "Software Tester",
    img: "/images/user-big-3.png",
  },
  {
    name: "Telegram",
    designation: "Scrum Master",
    img: "/images/user-big-4.png",
  },
  {
    name: "Theresa Webb",
    designation: "UI/UX Designer",
    img: "/images/user-big-1.png",
  },
  {
    name: "Ralf Edwards",
    designation: "Team Leader",
    img: "/images/user-big-2.png",
  },
];
const tasks = [
  {
    title: "Call Mr. Floyd Miles",
    desc: "Review the project initial wireframes",
  },
  {
    title: "Finish wireframes",
    desc: "Make all requested changes and publish",
  },
  {
    title: "Update timesheets",
    desc: "Update all the team timesheets",
  },
  {
    title: "Request payout",
    desc: "Send project invoice to client",
  },
  {
    title: "Approve components",
    desc: "Review complete design system",
  },
  {
    title: "Request Cancel",
    desc: "Send project Cancel Notice",
  },
];
const activeTab = ref(1)
</script>

<template>
  <div class="box col-span-2 md:col-span-1 xl:col-span-2">
    <div class="flex gap-6 mb-6 bb-dashed pb-6">

      <button @click="activeTab = 1"
        :class="{ 'bg-primary text-n0 shadow-[0px_6px_30px_0px_rgba(93,105,244,0.40)]': activeTab == 1, 'bg-primary/5 dark:bg-bg3 ': activeTab != 1 }"
        class="w-full rounded-xl py-3 duration-300">
        Team
      </button>
      <button @click="activeTab = 2"
        :class="{ 'bg-primary text-n0 shadow-[0px_6px_30px_0px_rgba(93,105,244,0.40)]': activeTab == 2, 'bg-primary/5 dark:bg-bg3 ': activeTab != 2 }"
        class="w-full rounded-xl py-3 duration-300">
        Tasks
      </button>
    </div>

    <div v-show="activeTab == 1" class="flex flex-col gap-6">
      <div v-for="{ designation, img, name } in teams" :key="name" class="flex items-center justify-between">
        <div class="flex gap-2 xxl:gap-4 items-center">
          <img :width="54" :height="54" class="rounded-full" :src="img" alt="img" />
          <div>
            <p class="text-base sm:text-xl font-medium mb-2">
              {{ name }}
            </p>
            <p class="text-sm">{{ designation }}</p>
          </div>
        </div>
        <div
          class="rounded-[32px] bg-primary/5 dark:bg-bg3 px-3 sm:px-4 xxl:px-8 py-3 md:py-4 flex items-center gap-2 sm:gap-3">
          <button>
            <IconPhone :size="20" />
          </button>
          <button>
            <IconVideo :size="20" />
          </button>
        </div>
      </div>
    </div>

    <div v-show="activeTab == 2" class="flex flex-col gap-6">
      <div v-for="{ desc, title } in tasks" :key="title" class="flex gap-3 lg:gap-4 xxl:gap-6 items-center">
        <div class="bg-primary/5 dark:bg-bg3 p-2 text-primary border border-n30 dark:border-n500 rounded-full ">
          <IconCheck :size="30" />
        </div>
        <div>
          <p class="text-base md:text-lg lg:text-xl mb-2">{{ title }}</p>
          <p class="text-sm md:text-base">{{ desc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>