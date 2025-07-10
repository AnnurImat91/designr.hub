<script setup lang="ts">
import { IconChecks } from '@tabler/icons-vue';

const instructions = [
    {
        title: "8 team seats",
        desc: "Each team member on your account can create projects and tasks.",
    },
    {
        title: "Integrations",
        desc: "Add up to 5 addons to your main application to help you manage.",
    },
    {
        title: "Growth scaling",
        desc: "Your application grows in parallel of your business, without any effort.",
    },
];
</script>

<template>
    <div
        class="box xl:p-6 grid grid-cols-2 max-lg:gap-4 lg:divide-x rtl:lg:divide-x-reverse divide-primary/20 divide-dashed">
        <div class="col-span-2 lg:col-span-1">
            <div
                class="box ltr:lg:mr-4 rtl:lg:ml-4 bg-primary/5 dark:bg-bg3 xl:p-8 max-md:flex flex-col items-center max-md:text-center">
                <img src="/images/promotion.png" :width="424" :height="330" class="bb-dashed mb-6 pb-6"
                    alt="promotion illustration" />
                <h5 class="text-xl font-medium mb-2">Empower your team</h5>
                <p class="text-sm mb-6 xl:mb-8 max-md:max-w-[500px]">
                    Make your team more productive and more efficient with our premium
                    plan. Don&apos;t miss out on this great opportunity!
                </p>
                <p class="text-sm">
                    Only <span class="h2 text-primary">$99.99</span> /per month
                </p>
            </div>
        </div>
        <div class="col-span-2 lg:col-span-1">
            <div class="box ltr:lg:ml-4 rtl:lg:mr-4 bg-primary/5 dark:bg-bg3 xl:p-8">
                <h5 class="text-xl font-medium mb-2">Upgrade Now</h5>
                <p class="text-sm mb-6 lg:mb-8">
                    Take a look at some incredible features that have been added to our
                    premium plan. You won&apos;t believe it!
                </p>

                <div class="flex flex-col gap-4 xl:gap-6 mb-6 bb-dashed pb-6">
                    <div v-for="{ desc, title } in instructions" :key="title" class="flex items-center gap-4 xl:gap-6">
                        <div
                            class="border border-n30 rounded-full dark:border-n500 bg-n0 dark:bg-bg4 p-2 md:p-3 text-primary">
                            <IconChecks />
                        </div>
                        <div>
                            <h5 class="texl-lg md:text-xl font-medium mb-2">
                                {{ title }}
                            </h5>
                            <p class="text-xs md:text-sm">{{ desc }}</p>
                        </div>
                    </div>
                </div>
                <div class="flex gap-4">
                    <RouterLink to="#" class="btn px-5">
                        Upgrade
                    </RouterLink>
                    <RouterLink to="#" class="btn-outline px-5">
                        Skip
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>