<script setup lang="ts">
import { IconChartBar } from '@tabler/icons-vue';
import { IconVolume } from '@tabler/icons-vue';
import { IconChartHistogram } from '@tabler/icons-vue';
import Statbox from './Statbox.vue';

const stats = [
  {
    title: "Market Cap",
    amount: "$929,992k",
    percent: 29.7,
    icon: IconChartHistogram,
  },
  {
    title: "Volume 24h",
    amount: "$929,992k",
    percent: 90.7,
    icon: IconVolume,
  },
  {
    title: "Low/high 24h",
    amount: "$929,992k",
    percent: 40.7,
    icon: IconChartBar,
  },
];
</script>

<template>
  <template v-for="{ amount, icon, percent, title } in stats" :key="title">
    <Statbox :amount="amount" :icon="icon" :percent="percent" :title="title" />
  </template>

  <div class="col-span-12 md:col-span-6 xl:col-span-6 4xl:col-span-3 box">
    <div class="flex items-center gap-4 mb-6">
      <div class="w-14 h-14 lg:w-auto lg:h-auto">
        <img src="/images/bitcoin.png" class="rounded-2xl" :width="72" :height="72" alt="img" />
      </div>
      <div>
        <h4 class="h4 mb-3">Bitcoin</h4>
        <p>BTC</p>
      </div>
    </div>
    <p class="text-sm mb-6">
      Bitcoin (BTC) is a cryptocurrency, a virtual currency designed to act
      as money and a form of payment outside the control of any one person,
      group, or entity...
    </p>
    <div class="flex items-center gap-3 4xl:gap-5">
      <RouterLink to="#" class="btn-outline px-3 4xl:px-5 py-2.5">
        Compare
      </RouterLink>
      <RouterLink to="#" class="btn  px-3 4xl:px-5 py-2.5">
        Buy BTC
      </RouterLink>
    </div>
  </div>
</template>