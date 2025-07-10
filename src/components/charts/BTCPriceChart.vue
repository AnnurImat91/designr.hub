<script setup lang="ts">
import type { ApexOptions } from 'apexcharts'
import CommonDropdownVue from '../shared/CommonDropdown.vue'
import { useLayoutStore } from '@/stores/layoutStore'
import VueApexCharts from 'vue3-apexcharts'
import { computed } from 'vue';
const { theme } = useLayoutStore()
const chartData = computed<ApexOptions>(() => {
  return {
    series: [
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
    ],
    chart: {
      type: 'line',
      toolbar: {
        show: false
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
    forecastDataPoints: {
      count: 10
    },
    colors: ['#FFC861', '#00998B', '#5D69F4'],
    stroke: {
      width: [3, 3, 4]
    },
    xaxis: {
      type: 'category',
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      tickAmount: 9,
      labels: {
        style: {
          colors: !theme.isDark ? '#404A60' : '#EBECEF'
        }
      },
      axisTicks: {
        show: false
      },
      axisBorder: {
        show: false
      }
    },
    yaxis: {
      min: 0,
      max: 150,
      tickAmount: 6,
      labels: {
        style: {
          colors: !theme.isDark ? '#404A60' : '#EBECEF'
        }
      }
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
    grid: {
      borderColor: theme.isDark ? '#404A60' : '#EBECEF',
      padding: {
        bottom: 20
      }
    }
  }
})
</script>

<template>
  <div class="col-span-12 lg:col-span-6 box overflow-x-hidden">
    <div class="flex flex-wrap justify-between items-center gap-3 pb-4 lg:pb-6 mb-4 lg:mb-6 bb-dashed">
      <p class="font-medium">BTC Price Chart</p>
      <div class="flex items-center gap-2">
        <p class="text-xs sm:text-sm">Sort By :</p>
        <CommonDropdownVue />
      </div>
    </div>
    <VueApexCharts :height="330" width="100%" :series="chartData.series" :options="chartData" type="line" />
  </div>
</template>
