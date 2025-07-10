<script setup lang="ts">
import OptionsVertical from "@/components/shared/OptionsVertical.vue";
import { IconTimeline } from "@tabler/icons-vue";
import {
    IconChartBar,
    IconMessageDots,
    IconNotes,
    IconThumbUp,
    IconUserCircle,
    IconUsers,
} from "@tabler/icons-vue";
import StatChart from "../personal-2/StatChart.vue";
import OptionsHorizontal from "@/components/shared/OptionsHorizontal.vue";
const instagramStats = [
    {
        icon: IconNotes,
        title: "Content Posts",
        amount: "196",
        percent: 66.7,
        color: "text-primary",
        bg: "#5D69F4",
    },
    {
        icon: IconUsers,
        title: "Followers",
        amount: "33.5k",
        percent: 66.7,
        color: "text-secondary3",
        bg: "#C78200",
    },
    {
        icon: IconUserCircle,
        title: "Following",
        amount: "291",
        percent: 66.7,
        color: "text-secondary1",
        bg: "#00998B",
    },
    {
        icon: IconThumbUp,
        title: "Likes (30 days)",
        amount: "329.7k",
        percent: 66.7,
        color: "text-secondary3",
        bg: "#C78200",
    },
    {
        icon: IconMessageDots,
        title: "Comments",
        amount: "7.2k",
        percent: 66.7,
        color: "text-secondary1",
        bg: "#00998B",
    },
    {
        icon: IconChartBar,
        title: "Profile views",
        amount: "32.7k",
        percent: 66.7,
        color: "text-primary",
        bg: "#5D69F4",
    },
];
</script>

<template>
    <div class="col-span-12 xl:col-span-3 box mb-4 xxxl:mb-6">
        <div class="flex flex-wrap justify-between items-center gap-3 pb-4 lg:pb-6 mb-4 lg:mb-6 bb-dashed">
            <p class="font-medium">Instagram Stats</p>
            <OptionsVertical />
        </div>
        <div class="grid grid-cols-12 gap-4 xxxl:gap-6">
            <div v-for="{ amount, bg, color, icon, percent, title } in instagramStats" :key="title"
                class="col-span-12 md:col-span-6 4xl:col-span-4 overflow-hidden">
                <div class="box bg-primary/5 dark:bg-bg3">
                    <div class="flex items-center justify-between bb-dashed mb-4 pb-4">
                        <div class="flex items-center gap-3">
                            <span :class="color" class="p-2 inline-flex rounded-xl bg-n0 dark:bg-bg4">
                                <component :size="18" :is="icon"></component>
                            </span>
                            <span class="font-medium">{{ title }}</span>
                        </div>
                        <OptionsHorizontal />
                    </div>
                    <div class="flex items-center justify-between">
                        <div>
                            <h4 class="h4 mb-3">{{ amount }}</h4>
                            <span :class="color" class="flex items-center gap-2">
                                <IconTimeline /> {{ percent }}%
                            </span>
                        </div>
                        <StatChart :height="60" :color="bg" />
                    </div>
                </div>
            </div>


        </div>
    </div>
</template>