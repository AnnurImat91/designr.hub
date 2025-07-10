<script setup lang="ts">
import { useLayoutStore } from '@/stores/layoutStore';
import { IconUsers } from '@tabler/icons-vue';
import { IconDeviceMobile } from '@tabler/icons-vue';
import { IconHeadset } from '@tabler/icons-vue';

const { theme } = useLayoutStore()
const supportData = [
    {
        title: "Support portal",
        desc: "Running into issues? We have a dedicated support portal where you can open a ticket and get help from our support team.",
        icon: IconHeadset,
    },
    {
        title: "Github access",
        desc: "We built Github automation that allows you to access to our private repositories, for the products you've purchased from us.",
        icon: IconDeviceMobile,
    },
    {
        title: "Community",
        desc: "We have a thrilling Discord community where you can discuss your work and get help from our community of customers and developers.",
        icon: IconUsers,
    },
];
</script>

<template>
    <section class="py-14 xxl:py-28 bg-n0 dark:bg-bg4">
        <div class="container grid grid-cols-2 gap-6 items-center">
            <div class="col-span-2 lg:col-span-1 relative">
                <img class="hidden xxl:block absolute -left-10 z-[2] xxxl:-left-20 4xl:-left-32 top-[20%]"
                    :src="theme.isDark ? '/images/home/card-dark.png' : '/images/home/card.png'" alt="img" />
                <img class="hidden xxl:block absolute bottom-10 z-[2] -right-3"
                    :src="theme.isDark ? '/images/home/transactions-dark.png' : '/images/home/transactions.png'"
                    alt="img" />
                <img src='/images/home/satisfaction.png' class="xxl:-translate-x-10 xxxl:-translate-x-20" alt="img" />
            </div>
            <div class="col-span-2 lg:col-span-1">
                <h5 class="h5 text-primary font-semibold mb-2 lg:mb-4">
                    We have your back
                </h5>
                <h2 class="h2 mb-4 lg:mb-6">Customer Satisfaction</h2>
                <p class="mb-10 lg:mb-14 text-sm md:text-base">
                    We are here to help you. We have a dedicated support team and a
                    community of developers to help you with any issue you might have.
                </p>
                <div class="flex flex-col gap-4 md:gap-6 xl:gap-8">
                    <div v-for="{ title, desc, icon } in supportData" :key="title" class="flex items-start gap-4 xl:gap-6">
                        <div class="p-3 rounded-full bg-primary/5 dark:bg-bg3 text-primary">
                            <component class="w-6 h-6 md:w-9 md:h-9" :is="icon"></component>
                        </div>
                        <div>
                            <h5 class="text-lg lg:text-xl font-medium mb-2">
                                {{ title }}
                            </h5>
                            <p class="text-sm">{{ desc }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>