<script setup lang="ts">
const appsetupData = [
    {
        title: "VueJS",
        desc: "Vuejs is an open source framework that makes web development intuitive and powerful.",
        img: '/images/home/vuejs.png',
    },
    {
        title: "Tailwind CSS",
        desc: "Tailwind CSS is a utility-first CSS framework for rapidly building modern websites",
        img: '/images/home/tailwind.png',
    },
    {
        title: "Typescript",
        desc: "TypeScript extends JavaScript by adding types to the language. TypeScript speeds up.",
        img: '/images/home/typescript.png',
    },
];
</script>

<template>
    <section class="py-14 xxl:py-28 bg-n0 dark:bg-bg4">
        <div class="container">
            <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                <h5 class="h5 text-primary font-semibold mb-2 lg:mb-4">
                    Next App Setup
                </h5>
                <h2 class="h2 mb-4 lg:mb-6">
                    An advanced VueJS and Tailwind CSS app setup
                </h2>
                <p class="text-sm md:text-base">
                    Dashboi is a powerful Vuejs app starter with a powerful and
                    extensible codebase. It comes with everything you need to create a
                    professional
                </p>
            </div>
            <div class="grid grid-cols-12 gap-4 xl:gap-6">
                <div v-for="{ desc, img, title } in appsetupData" :key="title"
                    class="col-span-12 md:col-span-6 xl:col-span-4 box p-3 text-center">
                    <div class="box xl:p-6 rounded-xl bg-primary/5 dark:bg-bg3 flex flex-col items-center justify-center">
                        <div class="p-4 rounded-2xl bg-n0 dark:bg-bg4 mb-6 lg:mb-8">
                            <img :width="48" :height="48" :src="img" alt="icon" />
                        </div>
                        <h4 class="h4 mb-4">{{ title }}</h4>
                        <p class="text-sm">{{ desc }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>