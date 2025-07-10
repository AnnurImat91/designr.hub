<script setup lang="ts">
import { IconPlus } from '@tabler/icons-vue';
import { IconMinus } from '@tabler/icons-vue';
import { ref } from 'vue';
import AnimateHeight from 'vue-animate-height';

const faqData = [
    {
        id: 1,
        question: "Is DashBoi suitable for beginners?",
        answer:
            "Yes, DashBoi is beginner-friendly with an easy-to-navigate interface and comprehensive documentation. ",
    },
    {
        id: 2,
        question: "Can I customize the look and feel of DashBoi?",
        answer:
            "Absolutely! DashBoi is highly customizable, allowing you to modify colors, layouts, and components effortlessly.",
    },
    {
        id: 3,
        question: "What technologies does DashBoi support?",
        answer:
            "DashBoi supports modern web technologies, built on Next.js and styled with Tailwind CSS.",
    },
    {
        id: 4,
        question: "Can I use DashBoi for commercial projects?",
        answer:
            "Yes, DashBoi is licensed for commercial use, making it suitable for both personal and commercial projects.",
    },
    {
        id: 5,
        question: "How can I get started with DashBoi?",
        answer:
            "Getting started is easy! Follow the documentation for quick installation, customization, and usage guidance.",
    },
];
const opened = ref<number | null>(3)
</script>

<template>
    <section id="faqs"
        class="bg-[url(/images/home/smartui-bg.png)] bg-cover bg-no-repeat py-14 xxl:py-28 bg-primary/5 dark:bg-bg3">
        <div class="container grid grid-cols-12 gap-6 items-center">
            <div class="col-span-12 lg:col-span-6">
                <h5 class="h5 text-primary font-semibold mb-2 lg:mb-4">FAQs</h5>
                <h2 class="h2 mb-4 lg:mb-6">Frequently Asked Questions</h2>
                <p class="mb-7 lg:mb-10 text-sm md:text-base">
                    Here are the FAQs along with brief and easy-to-understand answers.
                    Unlike traditional currencies, cryptocurrencies operate on
                    decentralized networks based on blockchain technology.
                </p>
                <RouterLink to="/dashboards/personal-1" class="btn">
                    View Dashboard
                </RouterLink>
            </div>
            <div class="col-span-12 lg:col-span-6 xxl:col-span-5 xxl:col-start-8">
                <div class="flex flex-col gap-4">
                    <div v-for="{ id, answer, question } in faqData" :key="id" class="rounded-2xl bg-n0 dark:bg-bg4">
                        <div class="flex cursor-pointer select-none items-center justify-between gap-2 px-6 xl:px-8 py-4 box border-none"
                            @click="opened == id ? opened = null : opened = id">
                            <div class="flex items-center gap-2">
                                <h6 class="text-sm sm:text-base md:text-lg font-medium">
                                    {{ question }}
                                </h6>
                            </div>
                            <span class="block rounded-full p-1 text-n8 text-n0"
                                :class="{ 'bg-secondary2': id == opened, 'bg-primary': id != opened }">
                                <IconMinus v-if="id == opened" :size="22" />
                                <IconPlus v-else :class="{ 'rotate90': id == opened }" class="duration-300" :size="22" />
                            </span>
                        </div>
                        <AnimateHeight :height="opened == id ? 'auto' : 0">
                            <p class="mx-7 border-t border-dashed text-sm md:text-base border-primary/20 pb-4 pt-3">
                                {{ answer }}
                            </p>
                        </AnimateHeight>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>