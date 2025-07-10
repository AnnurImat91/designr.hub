<script setup lang="ts">
import OptionsVertical from '@/components/shared/OptionsVertical.vue';
import { useLayoutStore } from '@/stores/layoutStore';
import type { ApexOptions } from 'apexcharts';
import { computed } from 'vue';
import VueApexCharts from 'vue3-apexcharts';
const { theme } = useLayoutStore()

const options = computed<ApexOptions>(() => {
    return {
        chart: {
            width: "100%",
            type: "bar",
            toolbar: {
                show: false,
            },
            animations: {
                enabled: true,
                easing: "easeinout",
                speed: 800,
            },
        },
        states: {
            active: {
                filter: {
                    type: 'darken',
                    value: 0.90,
                }
            },
            normal: {
                filter: {
                    type: 'lighten',
                    value: .001,
                }
            },
        },
        dataLabels: {
            enabled: true,
            style: {
                colors: ["#fff"],
            },
        },
        labels: ["Goal", "Pending Forecast", "Revenue"],
        xaxis: {
            labels: {
                show: false,
                style: {
                    colors: !theme.isDark ? "#404A60" : "#EBECEF",
                },
            },
            axisBorder: {
                show: false,
            },
            axisTicks: {
                color: theme.isDark ? "#404A60" : "#EBECEF",
            },
        },
        yaxis: [
            {
                labels: {
                    style: {
                        colors: !theme.isDark ? "#404A60" : "#EBECEF",
                    },
                },
            },
            {
                opposite: true,
            },
        ],
        plotOptions: {
            bar: {
                dataLabels: {
                    position: "center",
                },
            },
        },

        fill: {
            opacity: 1,
        },
        colors: ["#838CF6"],
        grid: {
            borderColor: theme.isDark ? "#404A60" : "#EBECEF",
        },
    };
})
const series = [
    {
        name: "Website Blog",
        type: "bar",
        data: [37, 12, 18],
    },
];
</script>

<template>
    <div class="col-span-12 lg:col-span-6">
        <div class="box">
            <div class="flex flex-wrap justify-between items-center gap-3 pb-4 lg:pb-6 mb-4 lg:mb-6 bb-dashed">
                <p class="font-medium">Sales Forecast</p>
                <OptionsVertical />
            </div>
            <VueApexCharts :height="400" width="100%" :options="options" :series="series" type="bar" />
            <p class="text-center bb-dashed mb-5 pb-5">
                Total Forecasted Value
            </p>
            <ul class="flex flex-wrap justify-center gap-2 sm:gap-4 text-xs sm:text-sm">
                <li class="flex items-center gap-2">
                    <span class="w-2 h-2 rounded-sm bg-primary/60"></span> Goal
                </li>
                <li class="flex items-center gap-2">
                    <span class="w-2 h-2 rounded-sm bg-primary/80"></span> Pending
                    Forecast
                </li>
                <li class="flex items-center gap-2">
                    <span class="w-2 h-2 rounded-sm bg-primary/60"></span> Revenue
                </li>
            </ul>
        </div>
    </div>
</template>

