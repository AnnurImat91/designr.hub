<script setup lang="ts">
import { IconThumbUp } from '@tabler/icons-vue';
import { IconMessage } from '@tabler/icons-vue';
import { IconX } from '@tabler/icons-vue';
import { IconPlayerPlayFilled } from '@tabler/icons-vue';
import { onMounted, ref } from 'vue';
import { RouterLink } from 'vue-router';
const isModalOpen = ref(false)
const videoResult = [
    {
        id: 1,
        title: "Introduction to Python Programming",
        url: "https://www.google.com/search",
        img: "/images/projectgrid/project-1.png",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type...",
        likes: 178,
        comments: 58,
    },
    {
        id: 2,
        title: "Cybersecurity Tips for Individuals",
        url: "https://www.google.com/search",
        img: "/images/projectgrid/project-2.png",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type...",
        likes: 178,
        comments: 58,
    },
    {
        id: 3,
        title: "Web Development Crash Course",
        url: "https://www.google.com/search",
        img: "/images/projectgrid/project-3.png",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type...",
        likes: 178,
        comments: 58,
    },
    {
        id: 4,
        title: "How to Set Up a Home Lab for IT Testing",
        url: "https://www.google.com/search",
        img: "/images/projectgrid/project-4.png",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type...",
        likes: 178,
        comments: 58,
    },
    {
        id: 5,
        title: "Introduction to Cloud Computing",
        url: "https://www.google.com/search",
        img: "/images/projectgrid/project-5.png",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type...",
        likes: 178,
        comments: 58,
    },
    {
        id: 6,
        title: "Data Science for Beginners",
        url: "https://www.google.com/search",
        img: "/images/projectgrid/project-6.png",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type...",
        likes: 178,
        comments: 58,
    },
    {
        id: 7,
        title: "Linux Command Line Basics",
        url: "https://www.google.com/search",
        img: "/images/projectgrid/project-7.png",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type...",
        likes: 178,
        comments: 58,
    },
    {
        id: 8,
        title: "Introduction to Machine Learning",
        url: "https://www.google.com/search",
        img: "/images/projectgrid/project-8.png",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type...",
        likes: 178,
        comments: 58,
    },
];
onMounted(() => {
    if (isModalOpen.value) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "visible";
    }
})
</script>

<template>
    <div class="mt-6 grid grid-cols-12 gap-4 xl:gap-6">
        <div v-for="{ id, comments, desc, img, likes, title, url } in videoResult" :key="id"
            class="col-span-12 lg:col-span-6 bb-dashed pb-4 lg:pb-6 last:pb-0 last:border-none video-news">
            <RouterLink to="#" class="text-lg xl:text-xl block text-primary font-medium mb-1">
                {{ title }}
            </RouterLink>
            <RouterLink :to="url" class="text-secondary1 inline-block text-sm mb-5">
                {{ url }}
            </RouterLink>
            <div class="flex flex-wrap min-sm:flex-nowrap gap-4 items-start xxxl:gap-6">
                <div @click="isModalOpen = true"
                    class="relative shrink-0 after:bg-primary/30 cursor-pointer after:absolute after:rounded-lg after:w-full after:h-full after:inset-0">
                    <img :src="img" :width="152" :height="113" class="rounded-lg" alt="img" />
                    <button
                        class="bg-primary p-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-n0 rounded-full">
                        <IconPlayerPlayFilled :size="20" />
                    </button>
                </div>
                <div>
                    <p class="text-sm mb-4">{{ desc }}</p>
                    <div class="flex gap-6">
                        <div class="flex items-center gap-1">
                            <button>
                                <IconThumbUp :size="20" />
                            </button>
                            <span class="text-sm">{{ likes }}</span>
                        </div>
                        <div class="flex items-center gap-1">
                            <button>
                                <IconMessage :size="20" />
                            </button>
                            <span class="text-sm">{{ comments }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-if="isModalOpen" @click="isModalOpen = false"
        class="fixed inset-0 z-40 flex items-center justify-center min-h-screen bg-black/40">
        <div @click.prevent class="max-w-[860px] flex items-center justify-center w-full h-full relative">
            <button @click="isModalOpen = false" class="absolute -top-5 -right-5">
                <IconX />
            </button>
            <iframe class="bg-black rounded-lg min-h-[53%] h-auto" width="100%"
                src="https://www.youtube.com/embed/naI3J7KvDwk?si=rqATxA_9TEyrASJg" title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
        </div>
    </div>
</template>