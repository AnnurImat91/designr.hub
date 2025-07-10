
<script setup lang="ts">
import OptionsHorizontal from '@/components/shared/OptionsHorizontal.vue';
import { IconChartBar } from '@tabler/icons-vue';
import { IconTimeline } from '@tabler/icons-vue';
import { IconUsers } from '@tabler/icons-vue';
import { IconChartHistogram } from '@tabler/icons-vue';
import StatChart from './StatChart.vue';

const statesdata = [
    {
        title: "All Earning",
        icon: IconChartHistogram,
        amount: "$65,110",
        percent: "76.9%",
        color: "text-primary",
        bg: "bg-primary/5 dark:bg-bg3",
        chartbg: "#5D69F4",
    },
    {
        title: "Total Users",
        icon: IconUsers,
        amount: "32.7k",
        percent: "66.7%",
        color: "text-secondary1",
        bg: "bg-secondary1/5",
        chartbg: "#00998B",
    },
    {
        title: "Monthly Sales",
        icon: IconChartBar,
        amount: "$33,110",
        percent: "66.9%",
        color: "text-secondary3",
        bg: "bg-secondary3/5",
        chartbg: "#C78200",
    },
];
</script>

<template>
    <div class="grid grid-cols-12 gap-4 xxxl:gap-6 mb-4 xxxl:mb-6 overflow-x-hidden">
        <div
            class="col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3 flex items-center box p-3 md:p-4 4xl:px-8 xxl:py-6 ltr:!pr-0 rtl:!pl-0">
            <div class="flex items-center justify-between w-full overflow-hidden">
                <div class="shrink-0">
                    <span class="block text-lg xl:text-xl 4xl:text-2xl mb-4 font-medium">
                        Welcome back, <br /> Hawkins
                    </span>
                    <p>
                        <span class="text-primary">DashBoi</span> Dashboard
                    </p>
                </div>
                <img src="/images/welcome.png" class="self-center 4xl:shrink-0" alt="img" />
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

    </div>
</template>

