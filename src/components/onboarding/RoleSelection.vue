<script setup lang="ts">
import { IconCircleCheckFilled } from '@tabler/icons-vue';
import { ref } from 'vue';

const rules = [
    {
        title: "React",
        icon: "/images/roles/react.png",
    },
    {
        title: "HTML",
        icon: "/images/roles/html.png",
    },
    {
        title: "css",
        icon: "/images/roles/css.png",
    },
    {
        title: "Javascript",
        icon: "/images/roles/js.png",
    },
    {
        title: "Typescript",
        icon: "/images/roles/typescript.png",
    },
    {
        title: "Angular",
        icon: "/images/roles/angular.png",
    },
    {
        title: "JQuery",
        icon: "/images/roles/jquery.png",
    },
    {
        title: "SASS/SCSS",
        icon: "/images/roles/sass.png",
    },
    {
        title: "Bootstrap",
        icon: "/images/roles/bootstrap.png",
    },
    {
        title: "Python",
        icon: "/images/roles/python.png",
    },
    {
        title: "Node.js",
        icon: "/images/roles/node.png",
    },
    {
        title: "Ruby",
        icon: "/images/roles/ruby.png",
    },
    {
        title: "Java",
        icon: "/images/roles/java.png",
    },
    {
        title: "C#",
        icon: "/images/roles/csharp.png",
    },
    {
        title: "PHP",
        icon: "/images/roles/php.png",
    },
    {
        title: "Go",
        icon: "/images/roles/go.png",
    },
    {
        title: "Perl",
        icon: "/images/roles/pearl.png",
    },
    {
        title: "Dart",
        icon: "/images/roles/dart.png",
    },
];
const selected = ref(rules[0].title)
</script>

<template>
    <div class="max-w-lg mx-auto text-center mb-10 lg:mb-[60px]">
        <h2 class="h2 mb-6">Choose a profile</h2>
        <p>Pick one of the following roles based on your skills</p>
    </div>
    <div class="grid grid-cols-12 xl:grid-cols-10 4xl:grid-cols-12 gap-4 xxxl:gap-6">
        <div v-for="{ icon, title } in rules" :key="title" @click="selected = title"
            class="col-span-12 min-[480px]:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2 box p-4 cursor-pointer"
            :class="{ 'border-primary dark:border-primary': selected == title }">
            <div class="rounded-2xl bg-primary/5 dark:bg-bg3 p-8 flex items-center flex-col relative">
                <IconCircleCheckFilled v-show="selected == title" class="text-primary absolute -top-2 -right-2" />
                <div
                    class="rounded-full w-16 h-16 mb-3 p-2 inline-block border border-n30 dark:border-n500 bg-n0 dark:bg-bg3 text-primary">
                    <img :src="icon" :width="60" :height="60" alt="icon" />
                </div>
                <h5 class="text-xl font-medium text-center">{{ title }}</h5>
            </div>
        </div>
    </div>
    <div class="mx-auto max-w-sm flex justify-center items-center mt-7 gap-5 lg:mt-10">
        <button class="btn">Choose Profile</button>
        <RouterLink to="">Read More</RouterLink>
    </div>
</template>