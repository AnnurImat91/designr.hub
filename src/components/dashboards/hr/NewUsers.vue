<script setup lang="ts">
import SocialLinks from '@/components/shared/SocialLinks.vue';
import { IconMessage } from '@tabler/icons-vue';
import { IconCirclePlus } from '@tabler/icons-vue';
import { IconCheck } from '@tabler/icons-vue';
import { RouterLink } from 'vue-router';
import Team from './Team.vue';
import Calender from './Calender.vue';

const users = [
    {
        name: "Wade Warren",
        designation: "UI/UX designer",
        img: "/images/user-big-1.png",
    },
    {
        name: "Paula Irving",
        designation: "Ethical Hacker",
        img: "/images/user-big-2.png",
    },
    {
        name: "Diana Prince",
        designation: "UI/UX designer",
        img: "/images/user-big-3.png",
    },
    {
        name: "Karen Starr",
        designation: "Project Manager",
        img: "/images/user-big-4.png",
    },
];
</script>

<template>
    <div class="grid grid-cols-12 gap-4 xxxl:gap-6 mt-4 xxxl:mt-6 xxxl:mb-6">
        <div class="col-span-12 xl:col-span-8 4xl:col-span-6">
            <div class="box">
                <div class="flex items-center justify-between bb-dashed pb-6 mb-6">
                    <p class="font-medium">New Users</p>
                    <RouterLink to="#" class="btn-outline">
                        View All
                    </RouterLink>
                </div>
                <div class="grid grid-cols-2 gap-4 xxxl:gap-6">

                    <div v-for="{ designation, img, name } in users"
                        class="col-span-2 min-[640px]:col-span-1 flex flex-col items-center text-center justify-center rounded-2xl bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 p-3 sm:p-4 lg:py-8 lg:px-4"
                        :key="name">
                        <div class="p-3 bg-n0 dark:bg-bg4 rounded-full relative">
                            <img :width="120" :height="120" class="rounded-full" :src="img" alt="img" />
                            <div class="p-1 absolute right-2 bottom-10 bg-primary rounded-full text-n0">
                                <IconCheck :size="18" />
                            </div>
                        </div>
                        <h4 class="mt-6 lg:mt-8 h4 mb-3">{{ name }}</h4>
                        <p class="mb-4 lg:mb-6">{{ designation }}</p>

                        <div class="flex justify-center bb-dashed pb-6 mb-6">
                            <SocialLinks />
                        </div>

                        <div class="flex gap-3 flex-wrap justify-center">
                            <RouterLink to="#" class="btn px-3 lg:px-6 py-1.5 lg:py-3">
                                <IconCirclePlus />
                                Follow
                            </RouterLink>
                            <RouterLink to="#" class="btn-outline py-1.5 px-3 lg:px-6 lg:py-3">
                                <IconMessage />
                                Message
                            </RouterLink>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div class="col-span-12 xl:col-span-4 4xl:col-span-6 grid grid-cols-2 gap-4 xxxl:gap-6 mb-4 xl:mb-0">
            <Team />
            <Calender />
        </div>
    </div>
</template>