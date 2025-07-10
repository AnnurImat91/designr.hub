<script setup lang="ts">
import CommonDropdown from '@/components/shared/CommonDropdown.vue'
import { useLayoutStore } from '@/stores/layoutStore'
import type { ApexOptions } from 'apexcharts'
import { computed } from 'vue';
import VueApexCharts from 'vue3-apexcharts'
const { theme } = useLayoutStore()
let series = [
  {
    name: 'Total Sales',
    data: [10, 80, 70, 65, 40, 88, 60, 99, 105]
  },
  {
    name: 'Total Expense',
    data: [13, 61, 70, 88, 68, 30, 100, 70, 98]
  },
  {
    name: 'Total Profit',
    data: [9, 38, 35, 52, 49, 70, 38, 22, 148]
  }
]
const chartData = computed<ApexOptions>(() => {
  return {
    chart: {
      type: 'line',
      toolbar: {
        show: false
      }
    },
    forecastDataPoints: {
      count: 3
    },
    colors: ['#FFC861', '#00998B', '#5D69F4'],
    stroke: {
      width: 3,
      colors: ['#FFC861', '#00998B', '#5D69F4'],
    },
    xaxis: {
      type: 'category',
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      tickAmount: 9,
      axisTicks: {
        show: false
      },
      axisBorder: {
        show: false
      },
      labels: {
        style: {
          colors: !theme.isDark ? '#404A60' : '#EBECEF'
        }
      }
    },
    yaxis: {
      min: 0,
      max: 150,
      tickAmount: 6,
      labels: {
        style: {
          colors: !theme.isDark ? '#404A60' : '#EBECEF'
        },
        offsetX: theme.dir == 'rtl' ? -30 : 0
      }
    },
    fill: {
      colors: ['#FFC861', '#00998B', '#5D69F4'],

    },
    markers: {
      colors: theme.isDark ? ['#1B232D'] : ['#FFF'],
      width: 8,
      height: 8,
      radius: 50,
      shape: "circle",
      size: 6,
      strokeColors: ['#FFC861', '#00998B', '#5D69F4'],
      hover: {
        size: 8,
      },
    },
    dataLabels: {
      enabled: false,
      enabledOnSeries: undefined,
      textAnchor: 'middle',
      distributed: false,
      offsetX: 0,
      offsetY: 0,
      background: {
        enabled: true,
        foreColor: '#fff',
        padding: 6,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#fff',
        opacity: 0.9
      }
    },
    legend: {
      offsetY: 8,
      markers: {
        height: 4,
        width: 4,
        offsetX: theme.dir == 'rtl' ? 5 : -5
      },
      itemMargin: {
        horizontal: 20
      },
      labels: {
        colors: !theme.isDark ? '#404A60' : '#EBECEF'
      }
    },
    grid: {
      borderColor: theme.isDark ? '#404A60' : '#EBECEF',
      padding: {
        bottom: 16
      }
    }
  }
})
</script>

<template>
  <div class="col-span-12 lg:col-span-6 box overflow-x-hidden">
    <div class="flex flex-wrap justify-between items-center gap-3 pb-4 lg:pb-6 mb-4 lg:mb-6 bb-dashed">
      <p class="font-medium">Sales Statistics</p>
      <div class="flex items-center gap-2">
        <p class="text-xs sm:text-sm">Sort By :</p>
        <CommonDropdown />
      </div>
    </div>
    <VueApexCharts :height="400" width="100%" :series="series" :options="chartData" type="line" />
  </div>
</template>
