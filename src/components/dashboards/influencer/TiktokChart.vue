<script setup lang="ts">
import { useLayoutStore } from '@/stores/layoutStore';
import type { ApexOptions } from 'apexcharts';
import { computed } from 'vue';
import VueApexCharts from 'vue3-apexcharts';
const props = defineProps<{
    bg?: string;
}>();

const { theme } = useLayoutStore()
const chartData = computed<ApexOptions>(() => {
    return {
        chart: {
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
        colors: [props.bg],
        fill: {
            colors: [props.bg],
            opacity: 1,
            type: "gradient",
            gradient: {
                shade: theme.isDark ? "dark" : "light",
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
}) 
</script>

<template>
    <VueApexCharts :options="chartData" :series="chartData.series" type="area" :height="120" width="100%" />
</template>