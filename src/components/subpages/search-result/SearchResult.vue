<script setup lang="ts">
import {
  IconArticle,
  IconMicrophone,
  IconPhoto,
  IconSearch,
  IconVideo,
  IconX,
} from "@tabler/icons-vue";
import AllResult from "./AllResult.vue";
import Images from "./Images.vue";
import News from "./News.vue";
import Video from "./Video.vue";
import { ref } from "vue";
const tabData = [
  {
    id: 1,
    title: "All Results",
    icon: IconSearch,
    content: AllResult,
  },
  {
    id: 2,
    title: "Images",
    icon: IconPhoto,
    content: Images,
  },
  {
    id: 3,
    title: "News",
    icon: IconArticle,
    content: News,
  },
  {
    id: 4,
    title: "Videos",
    icon: IconVideo,
    content: Video,
  },
];
const activeTab = ref(1)
</script>

<template>
  <div class="box xl:p-8">
    <form class="max-w-[770px] flex flex-wrap sm:flex-nowrap items-center gap-3 sm:gap-4 md:gap-6 mb-4">
      <div
        class="rounded-[30px] bg-primary/5 dark:bg-bg3 px-6 md:px-8 py-2 lg:py-3 w-full flex border border-n40 dark:border-n500">
        <input type="text" value="Admin Dashboard" placeholder="Enter Search" class="w-full bg-transparent" />
        <button>
          <IconMicrophone :size="20" />
        </button>
      </div>
      <button class="btn flex items-center gap-2">
        <IconSearch :size="20" /> Search
      </button>
    </form>
    <p class="bb-dashed mb-6 pb-6 flex flex-wrap items-center gap-1">
      Showing results for &quot;
      <span class="text-primary">Admin Dashboard</span>&quot;
      <button>
        <IconX :size="20" />
      </button>
    </p>
    <div class="bb-dashed pb-6">
      <div
        class="rounded-2xl min-[491px]:rounded-[30px] flex  flex-wrap gap-4 bg-primary/5 dark:bg-bg3 py-4 px-6 lg:px-8 border border-n30 dark:border-n600">
        <button v-for="{ id, icon, title } in tabData" :key="id" @click="activeTab = id"
          class="flex items-center gap-2 font-medium" :class="{ 'text-primary': id == activeTab }">
          <component :is="icon"></component> <span>{{ title }}</span>
        </button>
      </div>
    </div>
    <div v-for="tab in tabData" :key="tab.id">
      <div v-show="tab.id == activeTab">
        <component :is="tab.content"></component>
      </div>
    </div>
  </div>
</template>