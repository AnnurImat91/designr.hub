<template>
    <VueApexCharts :options="chartOptions" :series="chartOptions.series" width="55%" :height="140" type="radialBar" />
</template>

<script setup lang="ts">
import type { ApexOptions } from 'apexcharts';
import VueApexCharts from 'vue3-apexcharts';
import { useLayoutStore } from '@/stores/layoutStore';
import { computed } from 'vue';
const { theme } = useLayoutStore()
const props = defineProps<{
    labels: string;
    series: number;
    bg?: string;
}>();

const chartOptions = computed<ApexOptions>(() => {
    return {
        chart: {
            type: "radialBar",
            sparkline: {
                enabled: false,
            },
        },
        series: [props.series],
        legend: {
            show: false,
        },
        stroke: {
            lineCap: "round",
        },
        colors: [props.bg ? props.bg : "#5D69F4"],
        plotOptions: {
            radialBar: {
                track: {
                    background: !theme.isDark ? "#EBECEF" : "#343E56",
                },
                dataLabels: {
                    value: {
                        show: false,
                    },
                    name: {
                        offsetY: 5,
                    },
                },
                hollow: {
                    size: "55%",
                },
            },
        },
        labels: [props.labels],
    };
}) 
</script>
