
<script setup lang="ts">
import { IconCoins } from '@tabler/icons-vue';
import { IconListSearch } from '@tabler/icons-vue';
import { IconStethoscope } from '@tabler/icons-vue';
import { IconRocket } from '@tabler/icons-vue';
import { IconDiamond } from '@tabler/icons-vue';
import { IconBuildingEstate } from '@tabler/icons-vue';
import { IconLeaf } from '@tabler/icons-vue';
import { RouterLink } from 'vue-router';

const categories = [
    {
        icon: IconLeaf,
        title: "Energy",
        url: "#",
    },
    {
        icon: IconBuildingEstate,
        title: "Estate",
        url: "#",
    },
    {
        icon: IconCoins,
        title: "Finance",
        url: "#",
    },
    {
        icon: IconDiamond,
        title: "Diamonds",
        url: "#",
    },
    {
        icon: IconListSearch,
        title: "Research",
        url: "#",
    },
    {
        icon: IconRocket,
        title: "Technology",
        url: "#",
    },
    {
        icon: IconStethoscope,
        title: "Healthcare",
        url: "#",
    },
];
</script>

<template>
    <div class="flex justify-start gap-4 xxxl:gap-6 mb-4 xxxl:mb-6 overflow-x-auto pb-2">
        <RouterLink v-for="{ icon, title, url } in categories" :to="url" :key="title"
            class="min-w-[195px] w-full p-6 xxl:p-8 border-[3px] flex flex-col items-center rounded-2xl border-n0 dark:border-n500 bg-primary/10">
            <div class="rounded-2xl bg-n0 dark:bg-bg3 p-3 text-primary mb-5">
                <component :size="40" :is="icon"></component>
            </div>
            <p class="text-base md:text-lg lg:text-xl font-medium">{{ title }}</p>
        </RouterLink>
    </div>
</template>

