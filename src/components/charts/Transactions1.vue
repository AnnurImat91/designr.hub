<script setup lang="ts">
import { useLayoutStore } from '@/stores/layoutStore'
import type { ApexOptions } from 'apexcharts'
import VueApexCharts from 'vue3-apexcharts'
import CommonDropdownVue from '../shared/CommonDropdown.vue'
import { computed } from 'vue';
const { theme } = useLayoutStore()
const chartData = computed<ApexOptions>(() => {
  return {
    series: [
      {
        name: 'Total Sales',
        type: 'column',
        data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
      },
      {
        name: 'Total Expense',
        type: 'area',
        data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
      },
      {
        name: 'Total Profit',
        type: 'line',
        data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
      }
    ],
    chart: {
      type: 'line',
      stacked: false,
      toolbar: {
        show: false
      }
    },
    legend: {
      itemMargin: {
        horizontal: 20
      },
      offsetY: 8,
      markers: {
        height: 4,
        width: 4,
        offsetX: theme.dir == 'rtl' ? 5 : -5
      },
      labels: {
        colors: !theme.isDark ? '#404A60' : '#EBECEF'
      }
    },
    stroke: {
      width: [0, 2, 5],
      curve: 'smooth'
    },
    plotOptions: {
      bar: {
        columnWidth: '50%'
      }
    },
    fill: {
      opacity: [0.85, 0.25, 1],
      colors: ['#5D69F4', '#00998B'],
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 1,
        opacityTo: 0.3,
        stops: [0, 100, 100]
      }
    },
    labels: [
      '01/01/2003',
      '02/01/2003',
      '03/01/2003',
      '04/01/2003',
      '05/01/2003',
      '06/01/2003',
      '07/01/2003',
      '08/01/2003',
      '09/01/2003',
      '10/01/2003',
      '11/01/2003'
    ],
    xaxis: {
      type: 'datetime',
      labels: {
        style: {
          colors: !theme.isDark ? '#404A60' : '#EBECEF'
        }
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        color: theme.isDark ? '#404A60' : '#EBECEF'
      }
    },
    yaxis: {
      min: 0,
      labels: {
        style: {
          colors: !theme.isDark ? '#404A60' : '#EBECEF'
        }
      }
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function (y) {
          if (typeof y !== 'undefined') {
            return y.toFixed(0) + ' points'
          }
          return y
        }
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
      <p class="font-medium">Transactions Overview</p>
      <div class="flex items-center gap-2">
        <p class="text-xs sm:text-sm">Sort By :</p>
        <CommonDropdownVue />
      </div>
    </div>
    <VueApexCharts :height="330" width="100%" :series="chartData.series" :options="chartData" type="line" />
  </div>
</template>
