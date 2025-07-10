<script setup lang="ts">
import SocialLinks from "@/components/shared/SocialLinks.vue";
import {
    IconCheck,
    IconCirclePlus,
    IconMessage,
    IconStarFilled,
} from "@tabler/icons-vue";
const details = [
    {
        title: "Projects Views",
        number: "56k",
    },
    {
        title: "Projects Sale",
        number: "1.5k",
    },
    {
        title: "Total Projects",
        number: "3.1k",
    },
    {
        title: "Followers",
        number: "2.2k",
    },
    {
        title: "Following",
        number: "671",
    },
];
</script>

<template>
    <div
        class="box mb-4 xxxl:mb-6 grid grid-cols-2 md:pr-6 md:divide-x rtl:md:divide-x-reverse divide-primary/20 divide-dashed gap-6">
        <div class="flex flex-col items-center ltr:md:mr-6 rtl:md:ml-6 text-center col-span-2 md:col-span-1">
            <div class="p-4 rounded-full border border-n30 dark:border-n500 relative mb-6 lg:mb-8">
                <img src="/images/user-big-1.png" :height="120" :width="120" class="rounded-full" alt="company logo" />
                <div class="p-1 absolute right-2 bottom-10 bg-primary rounded-full text-n0">
                    <IconCheck :size="18" />
                </div>
            </div>
            <div class="flex items-center flex-col justify-center pb-7">
                <h4 class="h4 mb-4">ABstract</h4>
                <div class="flex flex-wrap items-center justify-center gap-1 md:gap-2 xxxl:gap-3 4xl:gap-4">
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
            <div class="flex w-full justify-center bb-dashed pb-6 mb-6">
                <SocialLinks />
            </div>
            <div class="flex gap-4 justify-center">
                <RouterLink to="#" class="btn px-4 xxxl:px-5">
                    <IconCirclePlus />
                    Follow
                </RouterLink>
                <RouterLink to="#" class="btn-outline px-4 xxxl:px-5">
                    <IconMessage />
                    Message
                </RouterLink>
            </div>
        </div>
        <div class="col-span-2 md:col-span-1 ltr:md:pl-6 rtl:md:pr-6">
            <div class="bg-primary/5 dark:bg-bg3 rounded-xl p-4 lg:px-6 lg:py-8">
                <p class="text-xl font-medium mb-2">Details</p>
                <p class="text-sm bb-dashed pb-6 mb-6">
                    Hi, We’re. A specialist agent. You can call me any Projects to buy !
                    We have very unique design stylist features. My work attribution is
                    Minimalist/Flat/Simple.
                </p>
                <ul class="flex flex-col gap-2 bb-dashed pb-6 mb-6">

                    <li v-for="{ number, title } in details" class="flex justify-between items-center font-medium"
                        :key="title">
                        <span>{{ title }}</span>
                        <span>{{ number }}</span>
                    </li>

                </ul>
                <div class="flex justify-between items-center">
                    <p>Member since: 23/07/23</p>
                    <RouterLink to="#">Report</RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>