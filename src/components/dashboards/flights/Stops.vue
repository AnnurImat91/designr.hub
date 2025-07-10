<script setup lang="ts">
import Checkbox from '@/components/shared/Checkbox.vue';

const stops = [
  {
    title: "Non Stop",
    checked: true,
  },
  {
    title: "1 Stop",
    checked: false,
  },
  {
    title: "2+ Stop",
    checked: false,
  },
  {
    title: "3+ Stop",
    checked: false,
  },
  {
    title: "4+ Stop",
    checked: false,
  },
  {
    title: "5+ Stop",
    checked: false,
  },
  {
    title: "6+ Stop",
    checked: false,
  },
  {
    title: "7+ Stop",
    checked: false,
  },
  {
    title: "8+ Stop",
    checked: false,
  },
  {
    title: "9+ Stop",
    checked: false,
  },
];
</script>

<template>
  <div class="box">
    <p class="mb-4 pb-4  xl:mb-6 xl:pb-6 bb-dashed">No. of Stops</p>
    <ul class="flex flex-col gap-3">
      <li v-for="{ checked, title } in  stops " :key="title">
        <Checkbox :checked="checked" :label="title" />
      </li>
    </ul>
  </div>
</template>