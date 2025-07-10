<script setup lang="ts">
import OptionsHorizontal from '@/components/shared/OptionsHorizontal.vue';
import { IconArrowUpRight } from '@tabler/icons-vue';
import { IconArrowsLeftRight } from '@tabler/icons-vue';
import { IconArrowDownLeft } from '@tabler/icons-vue';
import type { ApexOptions } from 'apexcharts';
import VueApexCharts from 'vue3-apexcharts';

const props = defineProps(['title', 'amount', 'percent', 'icon', 'bg'])
const chartData: ApexOptions = {
    chart: {
        height: "100%",
        type: "area",
        sparkline: {
            enabled: true,
        },
        toolbar: {
            show: false,
        },
        animations: {
            enabled: true,
            easing: "easeinout",
            speed: 800,
        },
    },
    grid: {
        show: false,
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        width: 1,
        curve: "straight",
    },
    series: [
        {
            name: "Series 1",
            data: [
                40, 32, 25, 32, 22, 34, 34, 19, 29, 35, 30, 40, 23, 33, 45, 32, 22,
                34, 34, 19, 29,
            ],
        },
    ],
    tooltip: {
        enabled: false,
    },
    colors: [props.bg || "#5D69F4"],
    fill: {
        colors: [props.bg || "#5D69F4"],
        opacity: 1,
        type: "gradient",
        gradient: {
            shade: "dark",
            type: "vertical",
            shadeIntensity: 0.3,
            gradientToColors: undefined,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 0.1,
            stops: [0, 100, 100],
            colorStops: [],
        },
    },
    xaxis: {
        tooltip: {
            enabled: false,
        },
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
        labels: {
            show: false,
        },
    },
    yaxis: {
        tooltip: {
            enabled: false,
            // followCursor: true
        },
        labels: {
            show: false,
        },
    },
};
</script>

<template>
    <div
        class="col-span-12 md:col-span-6 border border-n30 dark:border-n500 overflow-x-hidden 4xl:col-span-3 bg-n0 rounded-2xl dark:bg-bg4">
        <div class="box border-none rounded-b-none pb-0">
            <div class="bb-dashed pb-6 mb-6 flex items-center justify-between">
                <p class="font-medium">{{ title }}</p>
                <OptionsHorizontal />
            </div>
            <div class="flex items-center gap-4 lg:gap-6 pb-6 bb-dashed">
                <span class="p-4 inline-flex rounded-2xl bg-primary/5 dark:bg-bg3 text-primary">
                    <component :size="32" :is="icon"></component>
                </span>
                <div>
                    <h4 class="h4 mb-4">{{ amount }}</h4>
                    <div class="flex items-center gap-3">
                        <span class="flex text-sm items-center gap-1"
                            :class="{ 'text-primary': percent > 80, 'text-secondary2': percent < 30, 'text-secondary1': percent > 30 && percent < 80 }">
                            <IconArrowDownLeft v-show="percent < 30" />
                            <IconArrowUpRight v-show="percent > 80" />
                            <IconArrowsLeftRight v-show="percent > 30 && percent < 80" /> {{ percent }}%
                        </span>
                        <p class="text-sm">Since Last month</p>
                    </div>
                </div>
            </div>
        </div>

        <VueApexCharts :options="chartData" :series="chartData.series" type="area" :height="120" width="100%" />
    </div>
</template>