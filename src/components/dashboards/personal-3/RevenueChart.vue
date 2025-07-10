<script setup lang="ts">
import CommonDropdown from '@/components/shared/CommonDropdown.vue'
import { useLayoutStore } from '@/stores/layoutStore'
import type { ApexOptions } from 'apexcharts'
import { computed } from 'vue';
import VueApexCharts from 'vue3-apexcharts'
const { theme } = useLayoutStore()
const series = [
  {
    name: 'This Years',
    data: [31, 40, 28, 51, 42, 109, 100]
  },
  {
    name: 'Last Years',
    data: [11, 32, 45, 32, 34, 52, 41]
  }
]

const chartData = computed<ApexOptions>(() => {
  return {
    chart: {
      type: 'area',
      //  sparkline: {
      //          enabled: true,
      //       },
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
      curve: 'smooth'
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
    yaxis: {
      labels: {
        style: {
          colors: !theme.isDark ? '#404A60' : '#EBECEF'
        },
        offsetX: theme.dir == 'rtl' ? -30 : 0
      }
    },
    legend: {
      show: false
    },
    colors: ['#5D69F4', '#FFC861'],
    fill: {
      colors: ['#5D69F4', '#FFC861'],
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 1,
        opacityTo: 0.5,
        stops: [0, 100, 100]
      }
    },
    responsive: [
      {
        breakpoint: 1600,
        options: {
          chart: {
            height: 300
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
      <p class="font-medium">Revenue Analytics</p>
      <div class="flex items-center gap-2">
        <p class="text-xs sm:text-sm">Sort By :</p>
        <CommonDropdown />
      </div>
    </div>
    <VueApexCharts :height="300" width="100%" :series="series" :options="chartData" type="area" />
  </div>
</template>
