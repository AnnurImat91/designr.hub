<script setup lang="ts">
import { useLayoutStore } from '@/stores/layoutStore'
import type { ApexOptions } from 'apexcharts'
import VueApexCharts from 'vue3-apexcharts'
import CommonDropdownVue from '../shared/CommonDropdown.vue'
import { computed } from 'vue'

const { theme } = useLayoutStore()
const series = [
  {
    data: [11, 22, 15, 26, 23, 32, 21]
  },
  {
    data: [1, 14, 10, 31, 13, 35, 28]
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
    stroke: {
      curve: 'smooth',
      colors: ['#5D69F4', '#00998B']
    },
    legend: {
      show: false
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
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
        formatter: function (v) {
          return v + 'k'
        }
      }
    },
    markers: {
      hover: {
        sizeOffset: 4
      }
    },
    grid: {
      borderColor: theme.isDark ? '#404A60' : '#EBECEF'
    }
  }
})
</script>

<template>
  <div class="col-span-12 lg:col-span-6 box overflow-x-hidden">
    <div
      class="flex flex-wrap justify-between items-center gap-3 pb-4 lg:pb-6 mb-4 lg:mb-6 bb-dashed"
    >
      <p class="font-medium">Balance Overview</p>
      <div class="flex items-center gap-2">
        <p class="text-xs sm:text-sm">Sort By :</p>
        <CommonDropdownVue />
      </div>
    </div>
    <VueApexCharts :height="250" width="100%" :series="series" :options="chartData" type="line" />
  </div>
</template>
