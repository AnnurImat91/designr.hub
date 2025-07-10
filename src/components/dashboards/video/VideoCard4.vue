<script setup lang="ts">
import { IconPlayerPlayFilled } from '@tabler/icons-vue';
import { IconCircleCheck } from '@tabler/icons-vue';
import { RouterLink } from 'vue-router';

const videos = [
    {
        id: 1,
        title: "Scientist Analytics for Discoveries",
        images: "/images/article-1.png",
        tvIcon: "/images/innova-tv.png",
        tvName: "Innova tv",
    },
    {
        id: 2,
        title: "Scientist Analytics for Discoveries",
        images: "/images/article-2.png",
        tvIcon: "/images/tv-2.png",
        tvName: "Innova tv",
    },
    {
        id: 3,
        title: "Scientist Analytics for Discoveries",
        images: "/images/article-3.png",
        tvIcon: "/images/innova-tv.png",
        tvName: "Innova tv",
    },
    {
        id: 4,
        title: "Scientist Analytics for Discoveries",
        images: "/images/article-4.png",
        tvIcon: "/images/tv-2.png",
        tvName: "Innova tv",
    },
];
</script>

<template>
    <div v-for="{ id, images, title, tvIcon, tvName } in videos" :key="id"
        class="col-span-12 md:col-span-6 lg:col-span-4 xxxl:col-span-3 box p-2 group">
        <div class="relative">
            <img :src="images" :width="350" :height="270" class="rounded-2xl w-full" alt="img" />
            <button
                class="rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-n0 duration-300 group-hover:border-secondary3dark bg-n0 text-primary p-3">
                <IconPlayerPlayFilled :size="20" />
            </button>
        </div>
        <div class="pt-4 sm:pt-6 lg:pt-8 px-3 md:px-5 pb-4">
            <h4>
                <RouterLink to="#" class="h4 mb-3 md:mb-5 block">
                    {{ title }}
                </RouterLink>
            </h4>
            <div class="flex items-center gap-3 xxl:gap-4">
                <img :src="tvIcon" class="rounded-full w-10 h-10 lg:w-14 lg:h-14" alt="tv icon" :width="60" :height="60" />
                <div>
                    <RouterLink to="#" class="flex items-center gap-2 mb-2 sm:mb-3">
                        <p class="uppercase">{{ tvName }}</p>
                        <IconCircleCheck :size="18" class="text-primary" />
                    </RouterLink>
                    <div class="flex flex-wrap items-center font-medium gap-2">
                        <span class="text-xs sm:text-sm md:text-base">
                            3.6k views
                        </span>
                        <span class="text-primary">•</span>
                        <span class="text-xs sm:text-sm md:text-base">
                            27 minutes ago
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>