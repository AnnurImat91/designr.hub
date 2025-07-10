<script setup lang="ts">
import { IconArrowUpRight, IconFiles } from '@tabler/icons-vue';
import { IconTicket } from '@tabler/icons-vue';
import { IconCurrencyBitcoin } from '@tabler/icons-vue';
import { IconUsers } from '@tabler/icons-vue';

const stats = [
  {
    title: "New Users",
    amount: "44.6k",
    icon: IconUsers,
    percent: 40.7,
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    title: "Daily Income",
    amount: "$5,110",
    icon: IconCurrencyBitcoin,
    percent: 40.7,
    color: "text-secondary1",
    bg: "bg-secondary1/10",
  },
  {
    title: "Completed Projects",
    amount: "25k",
    icon: IconFiles,
    percent: 40.7,
    color: "text-secondary2",
    bg: "bg-secondary2/10",
  },
  {
    title: "Active Tickets",
    amount: "42",
    icon: IconTicket,
    percent: 40.7,
    color: "text-secondary3",
    bg: "bg-secondary3/10",
  },
];
</script>

<template>
  <div :key="title" v-for="{ amount, bg, color, icon, percent, title } in stats"
    class="col-span-12 min-[680px]:col-span-6 xl:col-span-3 box">
    <p class="font-medium mb-4 pb-4 xxxl:mb-6 xxxl:pb-6 bb-dashed">
      {{ title }}
    </p>
    <div class="flex gap-3 xxxl:gap-6 items-center">
      <span class="p-3 xxxl:p-4 inline-flex rounded-2xl" :class="[bg, color]">
        <component :size="36" :is="icon"></component>
      </span>
      <div>
        <h4 class="h4 mb-2 md:mb-4">{{ amount }}</h4>
        <span class="flex flex-wrap items-center gap-2">
          <span class="flex" :class="color">
            <IconArrowUpRight :size="22" /> {{ percent }}%
          </span>
          <span>Since last month</span>
        </span>
      </div>
    </div>
  </div>
</template>