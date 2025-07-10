<script setup lang="ts">
import { IconMessage } from '@tabler/icons-vue';
import { IconThumbUp } from '@tabler/icons-vue';

const results = [
    {
        id: 1,
        img: "/images/projectgrid/project-1.png",
        likes: 178,
        comment: 11,
        by: "Mackie",
    },
    {
        id: 2,
        img: "/images/projectgrid/project-2.png",
        likes: 178,
        comment: 11,
        by: "Mackie",
    },
    {
        id: 3,
        img: "/images/projectgrid/project-3.png",
        likes: 178,
        comment: 11,
        by: "Mackie",
    },
    {
        id: 4,
        img: "/images/projectgrid/project-4.png",
        likes: 178,
        comment: 11,
        by: "Mackie",
    },
    {
        id: 5,
        img: "/images/projectgrid/project-5.png",
        likes: 178,
        comment: 11,
        by: "Mackie",
    },
    {
        id: 6,
        img: "/images/projectgrid/project-6.png",
        likes: 178,
        comment: 11,
        by: "Mackie",
    },
    {
        id: 7,
        img: "/images/projectgrid/project-7.png",
        likes: 178,
        comment: 11,
        by: "Mackie",
    },
    {
        id: 8,
        img: "/images/projectgrid/project-8.png",
        likes: 178,
        comment: 11,
        by: "Mackie",
    },
    {
        id: 9,
        img: "/images/projectgrid/project-9.png",
        likes: 178,
        comment: 11,
        by: "Mackie",
    },
    {
        id: 10,
        img: "/images/projectgrid/project-1.png",
        likes: 178,
        comment: 11,
        by: "Mackie",
    },
    {
        id: 11,
        img: "/images/projectgrid/project-2.png",
        likes: 178,
        comment: 11,
        by: "Mackie",
    },
    {
        id: 12,
        img: "/images/projectgrid/project-3.png",
        likes: 178,
        comment: 11,
        by: "Mackie",
    },
    {
        id: 13,
        img: "/images/projectgrid/project-4.png",
        likes: 178,
        comment: 11,
        by: "Mackie",
    },
    {
        id: 14,
        img: "/images/projectgrid/project-5.png",
        likes: 178,
        comment: 11,
        by: "Mackie",
    },
    {
        id: 15,
        img: "/images/projectgrid/project-6.png",
        likes: 178,
        comment: 11,
        by: "Mackie",
    },
];
</script>

<template>
    <div class="grid grid-cols-12 gap-x-3 gap-y-4 xxxl:gap-y-6 4xl:grid-cols-10 mt-6">
        <RouterLink to="#" v-for="{ id, by, comment, img, likes } in results" :key="id"
            class="col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3 xxl:col-span-4 xxxl:col-span-3 4xl:col-span-2 box p-2 bg-primary/5 dark:bg-bg3 rounded-lg">
            <img :src="img" :width="269" :height="200" class="w-full rounded-md" alt="img" />
            <div class="flex justify-between items-center mt-5 px-5">
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
                        <span class="text-sm">{{ comment }}</span>
                    </div>
                </div>
                <span>by {{ by }}</span>
            </div>
        </RouterLink>
    </div>
</template>