<script setup lang="ts">
import {
    IconBriefcase,
    IconBuilding,
    IconBuildingStore,
    IconCircleCheck,
    IconCircleX,
    IconPlaneTilt,
} from "@tabler/icons-vue";
const plan1 = [
    {
        title: "Basic Plan",
        icon: IconBuildingStore,
        price: "$29.00",
        facilities: {
            "Administrative support": true,
            "Legal support": true,
            "Technology support": true,
            "Marketing support": false,
            "Hotline support 24/7": false,
        },
    },
    {
        title: "Business Plan",
        icon: IconBuilding,
        price: "$99.00",
        facilities: {
            "Administrative support": true,
            "Legal support": true,
            "Technology support": true,
            "Marketing support": true,
            "Hotline support 24/7": true,
        },
    },
];
const plan2 = [
    {
        title: "Basic Plan",
        icon: IconBuildingStore,
        price: "$29.00",
        facilities: {
            "Administrative support": true,
            "Legal support": true,
            "Technology support": true,
            "Marketing support": false,
            "Hotline support 24/7": false,
        },
    },
    {
        title: "Premium Plan",
        icon: IconPlaneTilt,
        price: "$59.00",
        facilities: {
            "Administrative support": true,
            "Legal support": true,
            "Technology support": true,
            "Marketing support": true,
            "Hotline support 24/7": false,
        },
    },
    {
        title: "Business Plan",
        icon: IconBuilding,
        price: "$99.00",
        facilities: {
            "Administrative support": true,
            "Legal support": true,
            "Technology support": true,
            "Marketing support": true,
            "Hotline support 24/7": true,
        },
    },
    {
        title: "Special Plans",
        icon: IconBriefcase,
        price: "$199.00",
        facilities: {
            "Administrative support": true,
            "Legal support": true,
            "Technology support": true,
            "Marketing support": true,
            "Hotline support 24/7": true,
        },
    },
];
</script>

<template>
    <div class="py-10 lg:py-20 xl:pb-[110px] mb-10 lg:mb-20 xl:mb-[110px] bb-dashed">
        <div class="max-w-lg mx-auto text-center mb-7 lg:mb-10">
            <h2 class="h2 mb-6">Start your Free Trial</h2>
            <p>
                We won&apos;t bill you before your per month free trial period ends.
            </p>
        </div>
        <div class="box xl:p-6 grid grid-cols-2 gap-4 xxxl:gap-6">
            <div v-for="{ title, facilities, icon, price } in plan1" :key="title"
                class="col-span-2 xl:col-span-1 max-md:gap-4 hover:border-primary duration-300 box xl:py-8 xl:px-10 grid grid-cols-2 bg-primary/5 dark:bg-bg3 sm:divide-x rtl:divide-x-reverse divide-primary/20 divide-dashed">
                <div class="col-span-2 sm:col-span-1 ltr:sm:pr-4 ltr:md:pr-6 rtl:sm:pl-4 rtl:md:pl-6">
                    <div
                        class="rounded-full mb-3 p-3 inline-block border border-n30 dark:border-n500 bg-n0 dark:bg-bg3 text-primary">
                        <component :size="36" :is="icon"></component>
                    </div>
                    <h4 class="text-2xl font-medium pb-6 mb-4 border-b border-n30 dark:border-n500">
                        {{ title }}
                    </h4>
                    <h2 class="display-4 text-primary mb-3">{{ price }}</h2>
                    <span>Per month</span>
                </div>
                <div class="col-span-2 sm:col-span-1 ltr:sm:pl-4 ltr:md:pl-6 rtl:sm:pr-4 rtl:md:pr-6">
                    <ul class="flex flex-col gap-4 mb-6 lg:mb-8">
                        <li v-for="(key, value) in facilities" :key="value" class="flex items-center gap-2">
                            <IconCircleCheck v-if="key" class="text-primary" :size="20" />
                            <IconCircleX v-else class="text-secondary2" :size="20" />
                            <span>{{ value }}</span>
                        </li>
                    </ul>
                    <button class="btn-outline flex w-full justify-center py-3">
                        Choose Plan
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div class="pb-12 lg:pb-20">
        <div class="max-w-lg mx-auto text-center mb-7 lg:mb-10">
            <h2 class="h2 mb-6">Start your Free Trial</h2>
            <p>
                We won&apos;t bill you before your per month free trial period ends.
            </p>
        </div>
        <div class="box xl:p-6 grid grid-cols-12 gap-4 xxxl:gap-6">
            <div v-for="{ title, facilities, icon, price } in plan2" :key="title"
                class="col-span-12 md:col-span-6 xl:col-span-4 4xl:col-span-3 flex flex-col hover:border-primary duration-300 items-center box xl:p-8 bg-primary/5 dark:bg-bg3">
                <div
                    class="rounded-full mb-3 p-3 inline-block border border-n30 dark:border-n500 bg-n0 dark:bg-bg3 text-primary">
                    <component :size="36" :is="icon"></component>
                </div>
                <h4 class="text-2xl text-center font-medium w-full pb-6 mb-4 bb-dashed">
                    {{ title }}
                </h4>
                <div class="bb-dashed mb-6 pb-6 w-full text-center">
                    <h2 class="display-4 text-primary mb-3">{{ price }}</h2>
                    <span>Per month</span>
                </div>
                <ul class="flex flex-col gap-4 mb-6 lg:mb-8">
                    <li v-for="(key, value) in facilities" :key="value" class="flex items-center gap-2">
                        <IconCircleCheck v-if="key" class="text-primary" :size="20" />
                        <IconCircleX v-else class="text-secondary2" :size="20" />
                        <span>{{ value }}</span>
                    </li>
                </ul>
                <button class="btn-outline py-3 px-12">Choose Plan</button>
            </div>
        </div>
    </div>
</template>