<script setup lang="ts">
import type { ApexOptions } from 'apexcharts'
import VueApexCharts from 'vue3-apexcharts'
import CommonDropdownVue from '../shared/CommonDropdown.vue'
import { useLayoutStore } from '@/stores/layoutStore'
import { computed } from 'vue';
const { theme } = useLayoutStore()

const series = [
  {
    name: 'This Years',
    data: [81, 40, 68, 51, 72, 109, 100, 45, 75, 65]
  },
  {
    name: 'Last Years',
    data: [11, 62, 45, 62, 34, 72, 41, 55, 65, 48]
  }
]
const chartData = computed<ApexOptions>(() => {
  return {
    chart: {
      type: 'area',
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
    stroke: {
      curve: 'smooth',
      colors: ['#00998B', '#FFC861']
    },
    xaxis: {
      categories: [
        'Week 01',
        'Week 02',
        'Week 03',
        'Week 04',
        'Week 05',
        'Week 06',
        'Week 07',
        'Week 08',
        'Week 09',
        'Week 010'
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
      labels: {
        formatter: function (v) {
          return v + 'k'
        },
        style: {
          colors: !theme.isDark ? '#404A60' : '#EBECEF'
        },
        offsetX: theme.dir == 'rtl' ? -30 : 0
      }
    },
    legend: {
      show: false
    },
    colors: ['rgba(0, 153, 139, 0.2)', 'rgba(255, 200, 97, 0.21)'],
    responsive: [
      {
        breakpoint: 1820,
        options: {
          chart: {
            height: 340
          }
        }
      },
      {
        breakpoint: 1600,
        options: {
          chart: {
            height: 308
          }
        }
      },
      {
        breakpoint: 992,
        options: {
          chart: {
            height: 350
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
      },
      {
        breakpoint: 400,
        options: {
          chart: {
            height: 200
          }
        }
      }
    ],
    grid: {
      borderColor: theme.isDark ? '#404A60' : '#EBECEF'
    }
  }
})
</script>

<template>
  <div class="col-span-12 lg:col-span-6 box overflow-x-hidden">
    <div class="flex flex-wrap justify-between items-center gap-3 pb-4 lg:pb-6 mb-4 lg:mb-6 bb-dashed">
      <p class="font-medium">Market Overview</p>
      <div class="flex items-center gap-2">
        <p class="text-xs sm:text-sm">Sort By :</p>
        <CommonDropdownVue />
      </div>
    </div>
    <VueApexCharts :height="330" width="100%" :series="series" :options="chartData" type="area" />
  </div>
</template>
