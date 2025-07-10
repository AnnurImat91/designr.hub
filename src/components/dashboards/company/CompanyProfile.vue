<script setup lang="ts">
import SocialLinks from '@/components/shared/SocialLinks.vue';
import { IconCirclePlus } from '@tabler/icons-vue';
import { IconMessage } from '@tabler/icons-vue';
import { IconStarFilled } from '@tabler/icons-vue';
import { IconCheck } from '@tabler/icons-vue';
import type { RouterLink } from 'vue-router';

const list = [
    {
        title: "Project Views",
        amount: "56k",
    },
    {
        title: "Projects Sale",
        amount: "1.5k",
    },
    {
        title: "Total Project",
        amount: "3.1k",
    },
    {
        title: "Followers",
        amount: "2.2k",
    },
    {
        title: "Following",
        amount: "671",
    },
];
</script>

<template>
    <div class="box col-span-2 md:col-span-1 xl:col-span-2">
        <div class="flex justify-center mb-6 lg:mb-8">
            <div class="p-4 rounded-full border border-n30 dark:border-n500 relative">
                <img src="/images/company-logo.png" :height="120" :width="120" class="rounded-full" alt="company logo" />
                <div class="p-1 absolute right-2 bottom-10 bg-primary rounded-full text-n0">
                    <IconCheck :size="18" />
                </div>
            </div>
        </div>
        <div class="flex items-center flex-col justify-center pb-7">
            <h4 class="h4 mb-4">ABstract</h4>
            <div class="flex items-center justify-center gap-2 flex-wrap">
                <span>
                    ID: <span class="text-primary">23565</span>
                </span>
                <span class="text-primary">•</span>
                <span>Projects: 3.1k</span>
                <span class="text-primary">•</span>
                <span class="flex items-center gap-1">
                    <IconStarFilled :size="20" class="text-secondary3dark" /> 4.8
                    (114)
                </span>
            </div>
        </div>
        <div class="flex justify-center bb-dashed pb-6 mb-6">
            <SocialLinks />
        </div>
        <div class="flex gap-4 justify-center bb-dashed pb-6 mb-6">
            <RouterLink to="#" class="btn border border-primary font-semibold">
                <IconCirclePlus />
                Follow
            </RouterLink>
            <RouterLink to="#" class="btn-outline">
                <IconMessage />
                Message
            </RouterLink>
        </div>
        <div class="bb-dashed pb-6 mb-6">
            <ul class="flex flex-col gap-3">
                <li v-for="{ amount, title } in list" :key="title" class="flex justify-between items-center">
                    <span>{{ title }}</span>
                    <span class="font-medium">{{ amount }}</span>
                </li>
            </ul>
        </div>
        <div class="bb-dashed pb-6 mb-6">
            <h5 class="text-xl font-medium mb-2">Details</h5>
            <p>
                Hi, We’re. A specialist agent. You can call me any Projects to buy !
                We have very unique design stylist features. My work attribution is
                Minimalist/Flat/Simple.
            </p>
        </div>
        <div class="flex flex-wrap gap-4 justify-between items-center">
            <span>Member since: October 27, 2023</span>
            <RouterLink to="#">Report</RouterLink>
        </div>
    </div>
</template>