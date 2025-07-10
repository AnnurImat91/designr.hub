<script setup lang="ts">
import { IconPlaneDeparture } from '@tabler/icons-vue';

const flightList = [
    {
        id: 1,
        img: "/images/delta.png",
        title: "Delta Air Lines",
        depertureTime: "12:10 am",
        arrivalTime: "07:30 pm",
        from: "New York",
        to: "London",
        price: 420,
    },
    {
        id: 2,
        img: "/images/delta.png",
        title: "Qatar Airways",
        depertureTime: "12:10 am",
        arrivalTime: "07:30 pm",
        from: "New York",
        to: "London",
        price: 360,
    },
    {
        id: 3,
        img: "/images/delta.png",
        title: "Royel Flight",
        depertureTime: "12:10 am",
        arrivalTime: "07:30 pm",
        from: "New York",
        to: "London",
        price: 220,
    },
    {
        id: 4,
        img: "/images/delta.png",
        title: "Japan Air Lines",
        depertureTime: "12:10 am",
        arrivalTime: "07:30 pm",
        from: "New York",
        to: "London",
        price: 380,
    },
    {
        id: 5,
        img: "/images/delta.png",
        title: "Delta Air Lines",
        depertureTime: "12:10 am",
        arrivalTime: "07:30 pm",
        from: "New York",
        to: "London",
        price: 520,
    },
];
</script>

<template>
    <div class="col-span-12 xl:col-span-8 flex flex-col gap-4 xxl:gap-6">
        <div v-for="{ arrivalTime, depertureTime, from, id, img, price, title, to } in flightList" :key="id"
            class="md:flex bg-n0 dark:bg-bg4 border border-n30 border-b-0 dark:border-n500 rounded-2xl">
            <div class="flex flex-col gap-6 p-3 sm:p-4 lg:p-6 flex-grow">
                <div class="flex justify-around md:justify-between flex-wrap items-center gap-6">
                    <div class="flex gap-8 md:gap-12 min-[1700px]:gap-16">
                        <div class="flex justify-center md:w-auto flex-col gap-3 text-center md:text-start">
                            <div
                                class="grid place-content-center w-16 h-16 rounded-full bg-white dark:bg-bg4 shadow-lg mx-auto ms-md-0">
                                <img :width="52" :height="27" :src="img" alt="image" class=" object-fit-contain" />
                            </div>
                            <p class="mb-0 font-medium">{{ title }}</p>
                        </div>
                        <div class="flex flex-col text-start justify-between gap-2">
                            <span class="block text-primary">From</span>
                            <h4 class="h4 font-semibold">{{ depertureTime }}</h4>
                            <span class="block">{{ from }}</span>
                        </div>
                    </div>

                    <div class="flex gap-8 md:gap-12 min-[1700px]:gap-16">
                        <div class="flex justify-center flex-col gap-2 text-center">
                            <div class="grid place-content-center w-12 h-12 shadow-lg rounded-full mx-auto">
                                <div class="grid place-content-center w-10 h-10 bg-primary/10 text-primary rounded-full">
                                    <IconPlaneDeparture />
                                </div>
                            </div>
                            <span class="block font-medium"> Non-stop </span>
                            <span class="block">02h 15 min</span>
                        </div>
                        <div class="flex flex-col text-start justify-between gap-2 md:pr-6 xxxl:pr-10 4xl:pr-12">
                            <span class="block text-primary">To</span>
                            <h4 class="h4 font-semibold">{{ arrivalTime }}</h4>
                            <span class="block ">{{ to }}</span>
                        </div>
                    </div>
                </div>
                <div
                    class="flex flex-wrap justify-center sm:justify-between text-center gap-3 rounded-xl bg-primary/5 dark:bg-bg3 p-3">
                    <p class="mb-0">
                        Airplane :
                        <span class="text-secondary3">
                            <span>Boeing 787</span>
                            <span class="text-[10px]">•</span> <span>NH 847</span>
                        </span>
                    </p>
                    <p class="text-primary max-sm:hidden">•</p>
                    <p class="mb-0">
                        Travel Class : <span class="text-primary">Economy</span>
                    </p>
                </div>
                <div
                    class="flex flex-col min-[500px]:flex-row  gap-2 justify-center min-[500px]:justify-between text-center">
                    <p class="mb-0">
                        Refundable <span class="text-primary">$5 eCash</span>
                    </p>
                    <p class="mb-0 text-red-500"> Only 10 Seat Left </p>
                    <p class="mb-0"> Flight Details </p>
                </div>
            </div>

            <div
                class="p-3 lg:p-6 bg-primary/10 justify-center border-b border-n30 dark:border-n500 max-md:rounded-b-xl dark:bg-bg3 flex items-center text-center md:text-start md:rounded-e-2xl">
                <div class="max-md:flex items-center gap-2">
                    <p class="md:mb-2 line-through">$450</p>
                    <div class="flex items-center justify-center justify-content-md-start gap-2 md:mb-4 lg:mb-6">
                        <h2 class="h2"> ${{ price }}</h2>
                        <span class="inline-block text-sm text-primary">
                            20% OFF
                        </span>
                    </div>
                    <RouterLink to="#" class="btn-outline xxl:px-5 xxxl:px-7">
                        Book Now
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>