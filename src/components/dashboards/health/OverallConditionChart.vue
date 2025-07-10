<script setup lang="ts">
import CommonDropdown from '@/components/shared/CommonDropdown.vue'
import { useLayoutStore } from '@/stores/layoutStore'
import type { ApexOptions } from 'apexcharts'
import { computed } from 'vue';
import VueApexCharts from 'vue3-apexcharts'
const { theme } = useLayoutStore()
const chartData = computed<ApexOptions>(() => {
  return {
    series: [
      {
        name: 'Summer',
        type: 'area',
        data: [44, 55, 31, 47, 31, 43, 26, 41, 31, 47, 33]
      },
      {
        name: 'Winter',
        type: 'line',
        data: [55, 69, 45, 61, 43, 54, 37, 52, 44, 61, 43]
      }
    ],
    chart: {
      type: 'line',
      toolbar: {
        show: false
      }
    },
    stroke: {
      curve: 'smooth'
    },
    colors: ['#5D69F4', '#FFC861'],
    fill: {
      type: 'solid',
      opacity: [0.35, 1]
    },
    labels: [
      'Dec 01',
      'Dec 02',
      'Dec 03',
      'Dec 04',
      'Dec 05',
      'Dec 06',
      'Dec 07',
      'Dec 08',
      'Dec 09 ',
      'Dec 10',
      'Dec 11'
    ],
    yaxis: {
      labels: {
        style: {
          colors: !theme.isDark ? '#404A60' : '#EBECEF'
        },
        offsetX: theme.dir == 'rtl' ? -30 : 0
      }
    },
    xaxis: {
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
    legend: {
      position: 'bottom',
      horizontalAlign: 'center',
      offsetY: 8,
      itemMargin: {
        horizontal: 20
      },
      markers: {
        height: 4,
        width: 4,
        offsetX: theme.dir == 'ltr' ? -5 : 5
      },
      labels: {
        colors: !theme.isDark ? '#404A60' : '#EBECEF'
      }
    },
    grid: {
      borderColor: theme.isDark ? '#404A60' : '#EBECEF'
    }
  }
})
</script>

<template>
  <div class="col-span-12 xl:col-span-6 box overflow-x-hidden">
    <div class="flex flex-wrap justify-between items-center gap-3 pb-4 lg:pb-6 mb-4 lg:mb-6 bb-dashed">
      <p class="font-medium">Overall Condition</p>
      <div class="flex items-center gap-2">
        <p class="text-xs sm:text-sm">Sort By :</p>
        <CommonDropdown />
      </div>
    </div>
    <VueApexCharts :height="320" width="100%" :series="chartData.series" :options="chartData" type="line" />
  </div>
</template>
