<script setup lang="ts">
import {
    IconDroplet,
    IconDropletPlus,
    IconHeartbeat,
    IconScaleOutline,
} from "@tabler/icons-vue";
const stats = [
    {
        amount: "224/80",
        subtitle: "Min/Max",
        title: "Blood quality",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Illis videtur.",
        icon: IconDroplet,
    },
    {
        amount: "120",
        subtitle: "Bpm",
        title: "Heart rate",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Illis videtur.",
        icon: IconHeartbeat,
    },
    {
        amount: "12/14",
        subtitle: "Units",
        title: "Blood quality",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Illis videtur.",
        icon: IconDropletPlus,
    },
    {
        amount: "62.7",
        subtitle: "Lbs",
        title: "Weight",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Illis videtur.",
        icon: IconScaleOutline,
    },
];
</script>

<template>
    <div class="box grid grid-cols-2 gap-4 xxxl:gap-6 xl:px-6 col-span-12 xl:col-span-6">
        <div v-for="{ title, amount, desc, icon, subtitle } in stats" :key="title"
            class="col-span-2 md:col-span-1 box bg-primary/5 dark:bg-bg3">
            <div class="bb-dashed pb-4 mb-4 lg:mb-6 lg:pb-6 flex justify-between items-center">
                <div>
                    <h4 class="h4 mb-3">{{ amount }}</h4>
                    <p>{{ subtitle }}</p>
                </div>
                <span class="bg-n0 text-primary dark:bg-bg4 p-3 rounded-xl">
                    <component :size="32" :is="icon"></component>
                </span>
            </div>
            <p class="font-medium mb-2">{{ title }}</p>
            <p class="text-xs">{{ desc }}</p>
        </div>
    </div>
</template>