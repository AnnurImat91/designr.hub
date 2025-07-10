<script setup lang="ts">
import { IconCircleCheck } from '@tabler/icons-vue';

const features = [
    {
        title: "Starter App",
        icon: '/images/home/starter.png',
        desc: "Dashboi ships with a clean starter project where you can start writing your own code and content",
    },
    {
        title: "Customization",
        icon: '/images/home/customize.png',
        desc: "Dashboi is built with Tailwind CSS and Smart UI. You can customize every single",
    },
    {
        title: "Component",
        icon: '/images/home/component.png',
        desc: "Dashboi ships with a lot of UI components, from the smallest parts required to build ",
    },
    {
        title: "End App",
        icon: '/images/home/endapp.png',
        desc: "Dashboi ships with a clean End project where you can start writing your own code and content",
    },
];
</script>

<template>
    <section class="bg-[url(/images/home/smartui-bg.png)] bg-cover bg-no-repeat py-14 xxl:py-28 bg-primary/5 dark:bg-bg3">
        <div class="container grid grid-cols-2 gap-4 xl:gap-6 items-center">
            <div class="col-span-2 lg:col-span-1">
                <h5 class="h5 text-primary font-semibold mb-2 lg:mb-4">
                    Made for developers
                </h5>
                <h2 class="h2 mb-4 lg:mb-6">A layered experience</h2>
                <p class="mb-10 lg:mb-14 text-sm md:text-base">
                    Dashboi is built on top on the Next Layout concept. Layouts can be
                    seen as groups of components and composables that are related to
                    each other. They help create a consistent experience and a
                    maintainable codebase.
                </p>
                <ul class="flex flex-col gap-4">
                    <li class="flex items-center gap-2 md:gap-4 text-sm md:text-base">
                        <IconCircleCheck class="text-primary" :size="20" /> Change
                        colors in seconds
                    </li>
                    <li class="flex items-center gap-2 md:gap-4 text-sm md:text-base">
                        <IconCircleCheck class="text-primary" :size="20" /> Choose the
                        font family of your choice
                    </li>
                    <li class="flex items-center gap-2 md:gap-4 text-sm md:text-base">
                        <IconCircleCheck class="text-primary" :size="20" /> Mix and
                        match components as you need
                    </li>
                </ul>
            </div>
            <div class="col-span-2 lg:col-span-1 grid grid-cols-2 gap-4 xxl:gap-6">
                <div v-for="{ desc, icon, title } in features" :key="title"
                    class="col-span-2 sm:col-span-1 box p-5 xl:p-8 flex flex-col items-center text-center">
                    <div class="p-4 bg-primary/5 rounded-xl mb-6 lg:mb-8 box">
                        <img :src="icon" alt="img" />
                    </div>
                    <h4 class="h4 mb-4">{{ title }}</h4>
                    <p class="text-sm">{{ desc }}</p>
                </div>
            </div>
        </div>
    </section>
</template>