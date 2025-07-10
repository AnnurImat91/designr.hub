<script setup lang="ts">
import { IconChartBar } from '@tabler/icons-vue';
import { IconUsers } from '@tabler/icons-vue';
import { IconChartHistogram } from '@tabler/icons-vue';
import StatChart from '../personal-2/StatChart.vue';
import OptionsHorizontal from '@/components/shared/OptionsHorizontal.vue';
import { IconTimeline } from '@tabler/icons-vue';

const statesdata = [
  {
    title: "Sales",
    icon: IconChartHistogram,
    amount: "$65,110",
    percent: "76.9%",
    color: "text-primary",
    bg: "bg-primary/5 dark:bg-bg3",
    chartbg: "#5D69F4",
  },
  {
    title: "Income",
    icon: IconUsers,
    amount: "$19.7k",
    percent: "66.7%",
    color: "text-secondary1",
    bg: "bg-secondary1/5",
    chartbg: "#00998B",
  },
  {
    title: "Orders",
    icon: IconChartBar,
    amount: "1.6k",
    percent: "66.9%",
    color: "text-secondary3",
    bg: "bg-secondary3/5",
    chartbg: "#C78200",
  },
];
</script>

<template>
  <div
    class="col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3 flex items-center box p-3 md:p-4 xxxl:px-8 xxl:py-6 overflow-hidden">
    <div class="flex items-center justify-between pr-1 w-full">
      <div class="shrink-0">
        <span class="block text-lg xl:text-2xl mb-4 font-medium">
          Welcome back, <br />
          Hawkins
        </span>
        <p>
          <span class="text-primary">DashBoi</span> Dashboard
        </p>
      </div>
      <img src="/images/welcome.png" class="hidden self-center sm:block xl:hidden shrink-0 4xl:block" alt="img" />
    </div>
  </div>
  <div v-for="stat in statesdata" :key="stat.title" class="col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3">
    <div class="box p-3 md:p-4 xxxl:px-8 xxxl:py-6">
      <div class="flex items-center justify-between bb-dashed mb-4 pb-4">
        <div class="flex items-center gap-3">
          <span class="p-2 inline-flex rounded-xl" :class="[stat.bg, stat.color]">
            <component :is="stat.icon"></component>
          </span>
          <span class="font-medium">{{ stat.title }}</span>
        </div>
        <OptionsHorizontal />
      </div>
      <div class="flex items-center justify-between">
        <div>
          <h4 class="h4 mb-3">{{ stat.amount }}</h4>
          <span :class="stat.color" class="flex items-center gap-2">
            <IconTimeline /> {{ stat.percent }}
          </span>
        </div>
        <StatChart :color="stat.chartbg" />
      </div>
    </div>
  </div>
</template>