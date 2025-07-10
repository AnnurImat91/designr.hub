<script setup lang="ts">
import CommonDropdownVue from '@/components/shared/CommonDropdown.vue';
import { useLayoutStore } from '@/stores/layoutStore';
import type { ApexOptions } from 'apexcharts';
import { computed } from 'vue';
import VueApexCharts from 'vue3-apexcharts';
const { theme } = useLayoutStore()
const browers = [
    {
        icon: "/images/chrome.png",
        percent: "36.87%",
    },
    {
        icon: "/images/firefox.png",
        percent: "9.68%",
    },
    {
        icon: "/images/edge.png",
        percent: "3.25%",
    },
    {
        icon: "/images/opera.png",
        percent: "45.87%",
    },
];
const series = [
    {
        name: "Browser Sessions",
        data: [80, 50, 30, 40, 60, 20],
    },
];
const chartData = computed<ApexOptions>(() => {
    return {
        xaxis: {
            categories: ["Chrome", "Firefox", "Safari", "Opera", "Edge", "Explorer"],
            labels: {
                style: {
                    colors: !theme.isDark ? "#404A60" : "#EBECEF",
                },
            },
        },
        yaxis: {
            labels: {
                style: {
                    colors: !theme.isDark ? "#404A60" : "#EBECEF",
                },
            },
        },
        chart: {
            toolbar: {
                show: false,
            },
        },
        dataLabels: {
            enabled: true,
        },
        colors: ["#5D69F4"],
        plotOptions: {
            radar: {
                polygons: {
                    strokeColors: !theme.isDark ? "#DFE0E4" : "#404A60",
                    connectorColors: !theme.isDark ? "#DFE0E4" : "#404A60",
                    strokeWidth: "2px",
                    fill: {
                        colors:
                            !theme.isDark
                                ? ["#F7F7FE", "#ffffff"]
                                : ["#131920", "#1B232D"],
                    },
                },
            },
        },
    };
})

</script>

<template>
    <div class="box col-span-12 lg:col-span-6">
        <div class="flex flex-wrap justify-between items-center gap-3 pb-4 lg:pb-6 mb-4 lg:mb-6 bb-dashed">
            <p class="font-medium">Sessions by Browser</p>
            <div class="flex items-center gap-2">
                <p class="text-xs sm:text-sm">Sort By : </p>
                <CommonDropdownVue />
            </div>
        </div>
        <div class="overflow-x-hidden">
            <VueApexCharts :options="chartData" :series="series" type="radar" :height="400" width="100%" />
            <div class="flex flex-wrap justify-center gap-5">
                <div v-for="browser in browers" :key="browser.icon" class="flex items-center gap-2">
                    <img :width="24" :height="24" :src="browser.icon" alt="browser icon" />
                    <p>{{ browser.percent }}</p>
                </div>
            </div>
        </div>
    </div>
</template>


