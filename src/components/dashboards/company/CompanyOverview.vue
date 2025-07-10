<script setup lang="ts">
import CommonDropdown from '@/components/shared/CommonDropdown.vue';
import { useLayoutStore } from '@/stores/layoutStore';
import useWindowSize from '@/utils/useWindowSize';
import type { ApexOptions } from 'apexcharts';
import { computed } from 'vue';
import VueApexCharts from 'vue3-apexcharts';
const { theme } = useLayoutStore()
const { windowSize } = useWindowSize()

const series = [
  {
    name: "Total Projects",
    type: "bar",
    data: [40, 50, 44, 31, 22, 43, 20, 35, 22, 32, 30, 16],
  },
  {
    name: "Projects View",
    type: "bar",
    data: [30, 28, 30, 32, 26, 30, 27, 36, 32, 46, 30, 27],
  },
  {
    name: "Projects Sale",
    type: "bar",
    data: [5, 8, 6, 12, 14, 8, 7, 6, 8, 10, 10, 5],
  },
];
const chartData = computed<ApexOptions>(() => {
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
    stroke: {
      colors: ['transparent'],
      width: 2
    },
    plotOptions: {
      bar: {
        columnWidth:
          windowSize.value < 400
            ? "7"
            : windowSize.value < 800
              ? "8"
              : windowSize.value < 1200
                ? "10"
                : windowSize.value < 1400
                  ? "12"
                  : "16",
      },
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      labels: {
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
        seriesName: "Total Projects",
        min: 0,
        max: 50,
        show: false,
        tickAmount: 10,
      },
      {
        seriesName: "Projects View",
        min: 0,
        max: 50,
        show: false,
        tickAmount: 10,
      },
      {
        seriesName: "Projects Sale",
        min: 0,
        max: 50,
        tickAmount: 10,
        labels: {
          offsetX: -25,
          show: true,
          style: {
            colors: !theme.isDark ? "#404A60" : "#EBECEF",
          },
        },
      },
    ],
    colors: ["#5D69F4", "#00998B", "#FFC861"],
    fill: {
      colors: ["#5D69F4", "#00998B", "#FFC861"],
      opacity: 1,
    },
    responsive: [
      {
        breakpoint: 1500,
        options: {
          chart: {
            height: 350,
          },
        },
      },
      {
        breakpoint: 992,
        options: {
          chart: {
            height: 320,
          },
        },
      },
      {
        breakpoint: 570,
        options: {
          chart: {
            height: 250,
          },
        },
      },
    ],
    grid: {
      borderColor: theme.isDark ? "#404A60" : "#EBECEF",
      padding: {
        top: 0,
        bottom: 0,
        left: -10,
        right: 0,
      },
    },
  };
}) 
</script>

<template>
  <div class="box mb-6 overflow-x-hidden">
    <div class="flex flex-wrap justify-between items-center gap-3 pb-4 lg:pb-6 mb-4 lg:mb-6 bb-dashed">
      <p class="font-medium">Company Overview</p>
      <div class="flex items-center gap-2">
        <p class="text-xs sm:text-sm">Sort By : </p>
        <CommonDropdown selected={selected} setSelected={setSelected} items={options} />
      </div>
    </div>
    <VueApexCharts :height="350" width="100%" :options="chartData" :series="series" type="bar" />
  </div>
</template>