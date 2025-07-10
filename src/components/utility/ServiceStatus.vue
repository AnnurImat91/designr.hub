<script setup lang="ts">
import { IconClock } from '@tabler/icons-vue';
import { IconMessageDots } from '@tabler/icons-vue';
import OptionsVertical from '../shared/OptionsVertical.vue';

const notifications = [
    {
        id: 4,
        name: "Jenny Wilson",
        img: "/images/user-big-4.png",
        message: "Mentioned you in a comment",
        comment: "Well done! Proud of you",
        time: "05:20 PM",
        date: "August 8, 2023",
        read: false,
        timePast: "20 Min ago",
    },
    {
        id: 5,
        name: "Annette Black",
        img: "/images/user-big-5.png",
        message: "Mentioned you in a comment",
        comment: "Well done! Proud of you",
        time: "05:20 PM",
        date: "August 8, 2023",
        read: true,
        timePast: "20 Min ago",
    },
    {
        id: 6,
        name: "Dianne Russell",
        img: "/images/user-big-6.png",
        message: "Mentioned you in a comment",
        comment: "Well done! Proud of you",
        time: "05:20 PM",
        date: "August 8, 2023",
        read: true,
        timePast: "20 Min ago",
    },
    {
        id: 7,
        name: "Brooklyn Simmons",
        img: "/images/user-big-7.png",
        message: "Mentioned you in a comment",
        comment: "Well done! Proud of you",
        time: "05:20 PM",
        date: "August 8, 2023",
        read: false,
        timePast: "20 Min ago",
    },
];
</script>

<template>
    <div class="flex flex-col gap-4 xxxl:gap-6">
        <div class="box w-full">
            <div class="flex justify-between flex-wrap gap-3 items-center bb-dashed mb-6 pb-6">
                <p class="font-medium">dashboi.pixelaxis.com</p>
                <p class="text-primary">99.989% uptime</p>
            </div>
            <div class=" overflow-x-auto bb-dashed mb-6 pb-6">
                <div class="">
                    <img src="/images/line1.svg" :width="1447" ::height="149" alt="img" />
                </div>
            </div>
            <div class="flex justify-between items-center">
                <p>90 days ago</p>
                <p>Today</p>
            </div>
        </div>
        <div class="box w-full">
            <div class="flex justify-between flex-wrap gap-3 items-center bb-dashed mb-6 pb-6">
                <p class="font-medium">api.dashboi.pixelaxis.com</p>
                <p class="text-primary">99.989% uptime</p>
            </div>
            <div class=" overflow-x-auto bb-dashed mb-6 pb-6">
                <div>
                    <img src="/images/line2.svg" :width="1447" :height="149" alt="img" />
                </div>
            </div>
            <div class="flex justify-between items-center">
                <p>90 days ago</p>
                <p>Today</p>
            </div>
        </div>
        <div class="box w-full">
            <div class="flex justify-between flex-wrap gap-3 items-center bb-dashed mb-6 pb-6">
                <p class="font-medium">hooks.dashboi.pixelaxis.com</p>
                <p class="text-primary">99.989% uptime</p>
            </div>
            <div class=" overflow-x-auto bb-dashed mb-6 pb-6">
                <div>
                    <img src="/images/line3.svg" :width="1447" :height="149" alt="img" />
                </div>
            </div>
            <div class="flex justify-between items-center">
                <p>90 days ago</p>
                <p>Today</p>
            </div>
        </div>
        <div class="box xl:p-6 xxxl:p-8">
            <div class="flex justify-between items-center bb-dashed mb-6 pb-6">
                <p class="font-medium">New Doctor</p>
                <OptionsVertical />
            </div>
            <div class="p-3 sm:p-4 xl:p-6 rounded-2xl bg-primary/5 flex flex-col xxxl:gap-6 gap-4">
                <div v-for="{ id, comment, date, img, message, name, time, timePast } in notifications" :key="id"
                    class="box flex items-start min-[480px]:flex-nowrap flex-wrap gap-4 lg:gap-6 xl:p-8">
                    <img :src="img" :width="48" class="rounded-full" :height="48" alt="img" />
                    <div class="grow">
                        <div class="flex gap-2 lg:gap-4 flex-wrap items-center mb-3">
                            <p class="text-lg md:text-xl font-medium">{{ name }}</p>
                            <span class="text-sm">{{ timePast }}</span>
                        </div>
                        <div class="flex bb-dashed mb-5 pb-5 gap-1">
                            <IconMessageDots :size="20" class="shrink-0" />
                            <div class="flex flex-wrap items-center text-sm gap-1">
                                <span>{{ message }}</span>
                                <span class="font-medium">{{ comment }}</span>
                            </div>
                        </div>
                        <div class="flex items-center gap-1">
                            <IconClock :size="20" />
                            <div class="flex items-center gap-2">
                                <p class="text-sm sm:text-base font-medium">{{ time }}</p>
                                <span class="text-xs">{{ date }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>