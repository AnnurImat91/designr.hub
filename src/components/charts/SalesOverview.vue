<script setup lang="ts">
import { useLayoutStore } from '@/stores/layoutStore'
import useWindowSize from '@/utils/useWindowSize'
import type { ApexOptions } from 'apexcharts'
import { computed } from 'vue'
import VueApexCharts from 'vue3-apexcharts'
const { theme } = useLayoutStore()
const { windowSize } = useWindowSize()

const series = [
  {
    name: 'Website Blog',
    type: 'column',
    data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
  },
  {
    name: 'Social Media',
    type: 'line',
    data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
  }
]

const options = computed<ApexOptions>(() => {
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
    stroke: {
      width: [0, 4],
      colors: ['#00998B']
    },
    colors: ['#099495'],
    dataLabels: {
      enabled: true,
      enabledOnSeries: [1],
      style: {
        fontSize: windowSize.value > 650 ? '12px' : '8px'
      }
    },
    legend: {
      show: false
    },
    xaxis: {
      categories: [
        "Jan '01",
        ' ',
        "Jan '03",
        ' ',
        "Jan '05",
        ' ',
        "Jan '07",
        ' ',
        "Jan '09",
        ' ',
        "Jan '11"
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
        labels: {
          style: {
            colors: !theme.isDark ? '#404A60' : '#EBECEF'
          }
        }
      },
      {
        opposite: true,
        labels: {
          style: {
            colors: !theme.isDark ? '#404A60' : '#EBECEF'
          }
        }
      }
    ],
    fill: {
      colors: ['#5D69F4'],
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
        top: 10
      }
    }
  }
})
</script>

<template>
  <div class="col-span-12 lg:col-span-6 box overflow-x-hidden">
    <p class="mb-4 pb-4 xl:mb-6 xl:pb-6 bb-dashed">Sales Overview</p>
    <VueApexCharts :height="330" width="100%" :options="options" :series="series" type="line" />
  </div>
</template>
