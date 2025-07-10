<script setup lang="ts">
import { useLayoutStore } from '@/stores/layoutStore';

const { theme } = useLayoutStore()
const uidata = [
    {
        icon: '/images/home/classic.png',
        title: "Classic",
    },
    {
        icon: '/images/home/corporate.png',
        title: "Corporate",
    },
    {
        icon: '/images/home/smart.png',
        title: "Smart",
    },
    {
        icon: '/images/home/creative.png',
        title: "Creative",
    },
];
</script>

<template>
    <section class="py-14 xxl:py-28 bg-primary/5 bg-[url(/images/home/smartui-bg.png)] bg-cover relative">
        <div class="container grid grid-cols-2 gap-4 xl:gap-6">
            <div class="col-span-2 lg:col-span-1">
                <h5 class="h5 text-primary font-semibold mb-2 lg:mb-4">
                    Ui Library
                </h5>
                <h2 class="h2 mb-4 lg:mb-6">Smart UI Design</h2>
                <p class="mb-10 lg:mb-14 text-sm md:text-base">
                    Dashboi UI provides a complete set of Vuejs components and
                    utilities such as buttons, form elements, badges, tabs and
                    typography clusters. Each component exposes several props that you
                    can use to customize its look and feel.
                </p>
                <div class="grid grid-cols-2 gap-4 xl:gap-6">
                    <div v-for="{ icon, title } in uidata" :key="title"
                        class="col-span-2 min-[480px]:col-span-1 box p-5 xl:p-8 flex flex-col items-center justify-center">
                        <div class="p-2 bg-primary/5 dark:bg-bg3 rounded-xl mb-4">
                            <img :src="icon" alt="img" />
                        </div>
                        <h5 class="h5">{{ title }}</h5>
                    </div>
                </div>
            </div>
            <div class="col-span-2 lg:col-span-1 relative">
                <img class="hidden xxl:block absolute left-0 top-20 z-[2]"
                    :src="theme.isDark ? '/images/home/os-dark.png' : '/images/home/os.png'" alt="img" />
                <img class="hidden xxl:block absolute bottom-[15%] xxl:-right-10 xxxl:-right-32 z-[2]"
                    :src="theme.isDark ? '/images/home/forecast-dark.png' : '/images/home/forecast.png'" alt="img" />
                <img src="/images/home/smartui.png" class="xxl:translate-x-10 xxxl:translate-x-16" alt="img" />
            </div>
        </div>
    </section>
</template>