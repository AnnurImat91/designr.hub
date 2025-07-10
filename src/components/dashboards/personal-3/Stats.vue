<script setup lang="ts">
import { IconCalendarPlus } from '@tabler/icons-vue';
import { IconTimeline } from '@tabler/icons-vue';
import { IconShoppingBag } from '@tabler/icons-vue';
import { IconChartBar } from '@tabler/icons-vue';
import { IconChartHistogram } from '@tabler/icons-vue';

const states = [
    {
        amount: "$24,300",
        icon: IconChartHistogram,
        title: "Total Earnings",
        color: "text-primary",
        bg: "bg-primary/20",
        percent: "40.7",
    },
    {
        amount: "$18,700",
        icon: IconChartBar,
        title: "Total Revenue",
        color: "text-secondary1",
        bg: "bg-secondary1/20",
        percent: "+8.65",
    },
    {
        amount: "29.4%",
        icon: IconCalendarPlus,
        title: "Session",
        color: "text-secondary3",
        bg: "bg-secondary3/20",
        percent: "17.65",
    },
    {
        amount: "88+",
        icon: IconShoppingBag,
        title: "Pending Orders",
        color: "text-secondary2",
        bg: "bg-secondary2/20",
        percent: "-4.25",
    },
];
</script>

<template>
    <div class="col-span-12 lg:col-span-6 grid grid-cols-2 gap-4 xxxl:gap-6">
        <div v-for="{ amount, bg, color, icon, percent, title } in states" :key="title"
            class="col-span-2 md:col-span-1 box">
            <div class="flex justify-between items-center bb-dashed mb-6 pb-6">
                <div>
                    <h4 class="h4 mb-3">{{ amount }}</h4>
                    <p class="font-medium">{{ title }}</p>
                </div>
                <div :class="[color, bg]" class="p-3 rounded-xl">
                    <component :is="icon"></component>
                </div>
            </div>
            <div class="flex justify-between items-center">
                <span :class="color" class="flex items-center gap-2">
                    <IconTimeline /> {{ percent }} %
                </span>
                <div class="flex">
                    <img src="/images/user-2.png" :width="32" :height="32"
                        class="border-2 border-n0 dark:border-n500 -ml-3 rounded-full" alt="img" />
                    <img src="/images/user-3.png" :width="32" :height="32"
                        class="border-2 border-n0 dark:border-n500 -ml-3 rounded-full" alt="img" />
                    <img src="/images/user-4.png" :width="32" :height="32"
                        class="border-2 border-n0 dark:border-n500 -ml-3 rounded-full" alt="img" />
                </div>
            </div>
        </div>
    </div>
</template>


