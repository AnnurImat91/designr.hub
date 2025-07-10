<script setup lang="ts">
import type { ApexOptions } from 'apexcharts'
import VueApexCharts from 'vue3-apexcharts'
import CommonDropdown from '../shared/CommonDropdown.vue'
import { useLayoutStore } from '@/stores/layoutStore'
import { computed } from 'vue';
const { theme } = useLayoutStore()
let series = [
  {
    name: 'Total Sales',
    data: [2, 40, 48, 22, 26, 19, 59, 40, 43, 21, 15, 51, 57, 34, 30, 28, 24, 27, 18, 51]
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
    colors: ['#5D69F4'],
    stroke: {
      width: 5
    },
    xaxis: {
      type: 'category',
      categories: [
        '11 Feb',
        '13 Feb',
        '15 Feb',
        '19 Feb',
        '21 Feb',
        '23 Feb',
        '25 Feb',
        '27 Feb',
        '01 Mar',
        '11 Mar',
        '13 Mar',
        '15 Mar',
        '19 Mar',
        '21 Mar',
        '23 Mar',
        '25 Mar',
        '27 Mar',
        '28 Mar',
        '30 Mar'
      ],
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
      max: 100,
      tickAmount: 2,
      labels: {
        style: {
          colors: !theme.isDark ? '#404A60' : '#EBECEF'
        },
        offsetX: theme.dir == 'rtl' ? -20 : 0
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
      borderColor: theme.isDark ? '#404A60' : '#EBECEF'
    },
    markers: {
      width: 8,
      height: 8,
      radius: 50,
      shape: 'circle',
      size: 8,
      strokeColors: '#FFC861',
      hover: {
        size: 12
      }
    }
  }
})
</script>

<template>
  <div class="col-span-12 lg:col-span-6 box overflow-x-hidden">
    <div class="flex flex-wrap justify-between items-center gap-3 pb-4 lg:pb-6 mb-4 lg:mb-6 bb-dashed">
      <p class="font-medium">Revenue Overview</p>
      <div class="flex items-center gap-2">
        <p class="text-xs sm:text-sm">Sort By :</p>
        <CommonDropdown />
      </div>
    </div>
    <VueApexCharts :height="250" width="100%" :series="series" :options="chartData" type="line" />
  </div>
</template>
