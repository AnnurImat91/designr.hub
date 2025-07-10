<script setup lang="ts">
import { IconDotsVertical } from '@tabler/icons-vue';
import { IconArrowNarrowRight } from '@tabler/icons-vue';

const hobylist = [
    {
        title: "The Desert",
        img: "/images/hoby-1.png",
    },
    {
        title: "The Forest",
        img: "/images/hoby-2.png",
    },
    {
        title: "The Sunset",
        img: "/images/hoby-3.png",
    },
    {
        title: "Wildlife",
        img: "/images/hoby-4.png",
    },
    {
        title: "Wild bird",
        img: "/images/hoby-5.png",
    },
];
</script>

<template>
    <div class="box grid grid-cols-12 lg:grid-cols-10 gap-4 mb-4 xxxl:mb-6">
        <div v-for="{ img, title } in hobylist" :key="title" class="relative group col-span-6 md:col-span-3 lg:col-span-2">
            <img :width="174" :height="200" :src="img" class="rounded-2xl w-full" alt="hoby img" />
            <div class="p-4 absolute inset-0 flex flex-col justify-between opacity-0 duration-300 group-hover:opacity-100">
                <div ref={ref} class="flex items-center justify-between w-full">
                    <p class="font-semibold text-n0">{{ title }}</p>
                    <IconDotsVertical :size="20" class="text-n0" />
                </div>
                <RouterLink to="#" class="flex items-center justify-between w-full">
                    <span class="font-semibold text-n0 text-xs">View Activities</span>
                    <IconArrowNarrowRight :size="20" class="text-n0" />
                </RouterLink>
            </div>
        </div>
    </div>
</template>