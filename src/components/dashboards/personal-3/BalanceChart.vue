<script setup lang="ts">
import type { ApexOptions } from 'apexcharts'
import { useLayoutStore } from '@/stores/layoutStore'
import VueApexCharts from 'vue3-apexcharts'
import CommonDropdown from '@/components/shared/CommonDropdown.vue'
import { computed } from 'vue';
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
        },
        offsetX: theme.dir == 'rtl' ? -30 : 0
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
  <div class="col-span-12 lg:col-span-8 box overflow-x-hidden">
    <div class="flex flex-wrap justify-between items-center gap-3 pb-4 lg:pb-6 mb-4 lg:mb-6 bb-dashed">
      <p class="font-medium">Balance Overview</p>
      <div class="flex items-center gap-2">
        <p class="text-xs sm:text-sm">Sort By :</p>
        <CommonDropdown />
      </div>
    </div>
    <VueApexCharts :height="200" width="100%" :series="series" :options="chartData" type="line" />
  </div>
</template>
