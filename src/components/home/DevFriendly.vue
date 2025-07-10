<script setup lang="ts">
const friendlyData = [
    {
        title: "VueJS",
        img: '/images/home/vuejs.png',
    },
    {
        title: "Tailwind CSS",
        img: '/images/home/tailwind.png',
    },
    {
        title: "Typescript",
        img: '/images/home/typescript.png',
    },
    {
        title: "Webpack",
        img: '/images/home/webpack.png',
    },
    {
        title: "Node JS",
        img: '/images/home/nodejs.png',
    },
    {
        title: "Npm",
        img: '/images/home/npm.png',
    },
    {
        title: "Eslint",
        img: '/images/home/eslint.png',
    },
    {
        title: "Prettier",
        img: '/images/home/prettier.png',
    },
    {
        title: "Vite",
        img: '/images/home/vite.png',
    },
    {
        title: "HTML",
        img: '/images/home/html.png',
    },
    {
        title: "CSS",
        img: '/images/home/css.png',
    },
    {
        title: "Javascript",
        img: '/images/home/js.png',
    },
];
</script>

<template>
    <section class="py-14 xxl:py-28 bg-primary/5 dark:bg-bg3 bg-[url(/images/home/smartui-bg.png)]">
        <div class="container">
            <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                <h5 class="h5 text-primary font-semibold mb-2 lg:mb-4">
                    There is More
                </h5>
                <h2 class="h2 mb-4 lg:mb-6">Developer Friendly</h2>
                <p class="text-sm md:text-base">
                    Dashboi is a cutting edge dashboard system that uses the latest
                    javascript and technologies and remains truthfull to the best coding
                    practices
                </p>
            </div>
            <div class="grid grid-cols-12 gap-4 xxl:gap-6">
                <div v-for="{ title, img } in friendlyData" :key="title"
                    class="col-span-12 min-[480px]:col-span-6 sm:col-span-4 md:col-span-3 xl:col-span-2 text-center box p-8 rounded-xl flex flex-col items-center justify-center">
                    <div class="p-3 rounded-2xl bg-primary/5 box dark:bg-bg3 mb-4">
                        <img :src="img" alt="icon" />
                    </div>
                    <h5 class="h5">{{ title }}</h5>
                </div>
            </div>
        </div>
    </section>
</template>