<script setup lang="ts">
import { IconArrowUpRight } from '@tabler/icons-vue';
import { IconChartBar } from '@tabler/icons-vue';
import { IconUsers } from '@tabler/icons-vue';
import { IconChartHistogram } from '@tabler/icons-vue';

const stats = [
    {
        title: "All Earings",
        amount: "$65,110",
        icon: IconChartHistogram,
        color: "text-primary",
        percent: "40.7",
    },
    {
        title: "Total Users",
        amount: "32.7k",
        icon: IconUsers,
        color: "text-secondary1",
        percent: "20.7",
    },
    {
        title: "Session",
        amount: "29.4%",
        icon: IconChartBar,
        color: "text-secondary2",
        percent: "-7.77",
    },
];
</script>

<template>
    <div class="box md:divide-x rtl:md:divide-x-reverse grid grid-cols-6 divide-primary/20 mb-4 xxxl:mb-6 gap-5">
        <div v-for="{ amount, color, icon, percent, title } in stats"
            class="col-span-6 sm:col-span-3 md:col-span-2 md:px-6 ltr:first:pl-0 ltr:last:pr-0 rtl:last:pl-0 rtl:first:pr-0"
            :key="title">
            <div class="">
                <p class="bb-dashed font-medium pb-6 mb-6">{{ title }}</p>
                <div class="flex gap-4 xxl:gap-6 items-center">
                    <span class="p-4 inline-flex rounded-2xl bg-primary/5 dark:bg-bg3 text-primary">
                        <component :size="36" :is="icon"></component>
                    </span>
                    <div>
                        <h4 class="h4 mb-4">{{ amount }}</h4>
                        <span :class="`${color} flex items-center gap-1`">
                            <IconArrowUpRight :size="20" /> {{ percent }} %
                        </span>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

