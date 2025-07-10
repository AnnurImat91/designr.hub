<script setup lang="ts">
import { useLayoutStore } from '@/stores/layoutStore'
import type { ApexOptions } from 'apexcharts'
import VueApexCharts from 'vue3-apexcharts'
import CommonDropdown from '../shared/CommonDropdown.vue'
import { computed } from 'vue';
import useWindowSize from '@/utils/useWindowSize';
const { theme } = useLayoutStore()
const { windowSize } = useWindowSize()
const series = [
  {
    name: 'Total Projects',
    type: 'bar',
    data: [40, 50, 44, 31, 22, 43, 20, 35, 22, 32, 30, 16]
  },
  {
    name: 'Projects View',
    type: 'bar',
    data: [30, 28, 30, 32, 26, 30, 27, 36, 32, 46, 30, 27]
  },
  {
    name: 'Projects Sale',
    type: 'bar',
    data: [5, 8, 6, 12, 14, 8, 7, 6, 8, 10, 10, 5]
  }
]
const chartData = computed<ApexOptions>(() => {
  return {
    chart: {
      width: '100%',
      type: 'bar',
      toolbar: {
        show: false
      },
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 800
      }
    },
    dataLabels: {
      enabled: false
    },
    plotOptions: {
      bar: {
        columnWidth:
          windowSize.value < 400
            ? '5'
            : windowSize.value < 800
              ? '6'
              : windowSize.value < 1600
                ? '8'
                : '9'
      }
    },
    legend: {
      show: false
    },
    xaxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
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
    yaxis: [
      {
        min: 0,
        max: 120,
        labels: {
          show: false
        }
      },
      {
        seriesName: 'Total Projects',
        min: 0,
        max: 50,
        show: false
      },
      {
        seriesName: 'Projects View',
        min: 0,
        max: 50,
        show: false
      },
      {
        seriesName: 'Projects Sale',
        min: 0,
        max: 50,
        axisBorder: {
          show: false
        },
        labels: {
          offsetX: theme.dir == 'rtl' ? -40 : -30,
          show: true,
          style: {
            colors: !theme.isDark ? '#404A60' : '#EBECEF'
          }
        }
      }
    ],
    colors: ['#4680FF', '#00998B', '#FFC861'],
    fill: {
      colors: ['#4680FF', '#00998B', '#FFC861'],
      opacity: 1
    },
    responsive: [
      {
        breakpoint: 1500,
        options: {
          chart: {
            height: 330
          }
        }
      },
      {
        breakpoint: 570,
        options: {
          chart: {
            height: 250
          }
        }
      }
    ],
    grid: {
      borderColor: theme.isDark ? '#404A60' : '#EBECEF',
      padding: {
        left: -20
      }
    }
  }
})
</script>

<template>
  <div class="box col-span-12 lg:col-span-6 overflow-x-hidden">
    <div class="flex flex-wrap justify-between items-center gap-3 pb-4 lg:pb-6 mb-4 lg:mb-6 bb-dashed">
      <p class="font-medium">Company Overview</p>
      <div class="flex items-center gap-2">
        <p class="text-xs sm:text-sm">Sort By :</p>
        <CommonDropdown />
      </div>
    </div>
    <VueApexCharts :height="330" width="100%" :options="chartData" :series="series" type="bar" />
  </div>
</template>
