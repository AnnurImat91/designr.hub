<script setup lang="ts">
import SingleResult from './SingleResult.vue';

const results = [
    {
        id: 1,
        title: "Dashboard Wireframe Templates - Sign Up For Free",
        link: "https://www.google.com/search",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type...",
        likes: 178,
        comment: 56,
    },
    {
        id: 2,
        title: "Dashboard Wireframe Templates - Sign Up For Free",
        link: "https://www.google.com/search",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type...",
        likes: 178,
        comment: 56,
    },
    {
        id: 3,
        title: "Dashboard Wireframe Templates - Sign Up For Free",
        link: "https://www.google.com/search",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type...",
        likes: 178,
        comment: 56,
    },
    {
        id: 4,
        title: "Dashboard Wireframe Templates - Sign Up For Free",
        link: "https://www.google.com/search",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type...",
        likes: 178,
        comment: 56,
    },
];
const images = [
    "/images/results/1.png",
    "/images/results/2.png",
    "/images/results/3.png",
    "/images/results/4.png",
];
</script>

<template>
    <div>
        <SingleResult :id="id" :comment="comment" :desc="desc" :likes="likes" :link="link" :title="title"
            v-for="{ id, comment, desc, likes, link, title } in results.slice(0, 2)" :key="id" />
        <div class="flex gap-4 mt-6 flex-wrap bb-dashed pb-6">
            <RouterLink v-for="img in images" to="#" :key="img">
                <img :src="img" :width="174" :height="200" class="rounded-2xl" alt="img" />
            </RouterLink>

            <RouterLink to="#"
                class="relative block after:rounded-2xl after:absolute after:w-full after:inset-0 after:h-full after:bg-black/60 ">
                <img src="/images/results/5.png" :width="174" :height="200" class="rounded-2xl relative" alt="img" />
                <h2 class="text-n0 w-full h2 text-center absolute top-1/2 -translate-y-1/2 z-[3]">
                    99+
                </h2>
            </RouterLink>
        </div>
        <SingleResult :id="id" :comment="comment" :desc="desc" :likes="likes" :link="link" :title="title"
            v-for="{ id, comment, desc, likes, link, title } in results.slice(2)" :key="id" />

    </div>
</template>