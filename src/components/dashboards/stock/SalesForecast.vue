<script setup lang="ts">
import CommonDropdown from '@/components/shared/CommonDropdown.vue'
import { useLayoutStore } from '@/stores/layoutStore'
import useWindowSize from '@/utils/useWindowSize'
import type { ApexOptions } from 'apexcharts'
import { computed } from 'vue'
import VueApexCharts from 'vue3-apexcharts'
const { windowSize } = useWindowSize()
const { theme } = useLayoutStore()
const series = [
  {
    name: 'Website Blog',
    type: 'column',
    data: [40, 50, 44, 31, 22, 43, 20, 35, 22, 32, 30, 16]
  },
  // {
  //     name: "chart 2",
  //     type: "area",
  //     data: [15, 28, 20, 25, 18, 30, 22, 36, 32, 46, 30, 27],
  // },
  {
    name: 'Social Media',
    type: 'line',
    data: [5, 8, 6, 5, 7, 8, 7, 6, 8, 4, 6, 3]
  }
]
const chartData = computed<ApexOptions>(() => {
  return {
    chart: {
      width: '100%',
      type: 'line',
      toolbar: {
        show: false
      },
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 800
      }
    },
    plotOptions: {
      bar: {
        columnWidth: windowSize.value < 768 ? '8' : '20',
        dataLabels: {
          position: 'center'
        }
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: [0, 3, 3],
      colors: ['#5D69F4', '#FFC861', '#00998B'],
      dashArray: [0, 0, 10],
      curve: ['straight', 'straight', 'smooth']
    },

    legend: {
      show: false
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
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
        seriesName: 'Website Blog',
        labels: {
          show: true,
          offsetX: -40,
          style: {
            colors: !theme.isDark ? '#404A60' : '#EBECEF'
          }
        }
      },
      {
        seriesName: 'chart 2',
        max: 70,
        labels: {
          show: false
        }
      },
      {
        seriesName: 'Social Media',
        max: 30,
        labels: {
          show: false
        }
      }
    ],
    colors: ['#4680FF', '#FFC861'],
    fill: {
      colors: ['#5D69F4', '#FFC861', '#00998B'],
      opacity: [1, 0.1, 1]
    },
    responsive: [
      {
        breakpoint: 1500,
        options: {
          chart: {
            height: 400
          }
        }
      },
      {
        breakpoint: 992,
        options: {
          chart: {
            height: 280
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
        left: -30
      }
    }
  }
})
</script>
<template>
  <div class="col-span-12 lg:col-span-7 xl:col-span-8 box overflow-x-hidden">
    <div class="flex flex-wrap justify-between items-center gap-3 pb-4 lg:pb-6 mb-4 lg:mb-6 bb-dashed">
      <p class="font-medium">Sales Forecast</p>
      <div class="flex items-center gap-2">
        <p class="text-xs sm:text-sm">Sort By :</p>
        <CommonDropdown />
      </div>
    </div>
    <VueApexCharts :height="400" width="100%" :options="chartData" :series="series" type="line" />
  </div>
</template>
