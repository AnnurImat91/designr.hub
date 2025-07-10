<script setup lang="ts">
import ProgressChart from '../sales/ProgressChart.vue';

const stats = [
    {
        title: "Total Deposits",
        amount: "$65,110",
        border: "border-primary",
        bg: "#5D69F4",
        series: 83.5,
    },
    {
        title: "Loan Processed",
        amount: "$65,110",
        border: "border-secondary1",
        bg: "#00998B",
        series: 70.4,
    },
    {
        title: "Transactions",
        amount: "$65,110",
        border: "border-[#C78200]",
        bg: "#C78200",
        series: 43.5,
    },
    {
        title: "Investment Growth",
        amount: "$65,110",
        border: "border-secondary2",
        bg: "#FF6161",
        series: 23.1,
    },
];
</script>

<template>
    <div class="col-span-12 xl:col-span-8 xxxl:col-span-6 box">
        <p class="font-medium mb-4">My Balance</p>
        <h2 class="h2 mb-8">$9565,110</h2>
        <div ref="progress" class="bar rounded-full bg-opacity-20 bg-primary/5">
            <div class="rounded-full h-2 bg-primary w-[70%]"></div>
        </div>
        <div class="my-8 py-8 border-y border-primary/20 border-dashed grid gap-2 sm:gap-4 grid-cols-3">
            <div class="col-span-1 max-[400px]:col-span-3 max-[400px]:flex justify-between">
                <p class="text-sm md:text-base font-medium mb-3">Card Header</p>
                <h5 class="h5 font-semibold">$65,110</h5>
            </div>
            <div class="col-span-1 max-[400px]:col-span-3 max-[400px]:flex justify-between">
                <p class="text-sm md:text-base font-medium mb-3">Valid Thru</p>
                <h5 class="h5 font-semibold">$65,110</h5>
            </div>
            <div class="col-span-1 max-[400px]:col-span-3">
                <h5 class="h5 font-semibold">.... .... .... 1234</h5>
            </div>
        </div>
        <div class="grid grid-cols-2 gap-4 xl:gap-6">
            <div v-for="{ amount, bg, border, series, title } in stats" :key="title"
                class="col-span-2 flex items-center sm:col-span-1 border rounded-2xl border-dashed pr-4 py-4"
                :class="border">
                <div class="shrink-0">
                    <ProgressChart :labels="series + '%'" :series="series" :bg="bg" />
                </div>
                <div class="grow">
                    <p class="font-medium mb-3">{{ title }}</p>
                    <h4 class="h4">{{ amount }}</h4>
                </div>
            </div>
        </div>
    </div>
</template>