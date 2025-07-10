<script setup lang="ts">
import CommonDropdownVue from '@/components/shared/CommonDropdown.vue'
import { useLayoutStore } from '@/stores/layoutStore'
import type { ApexOptions } from 'apexcharts'
import { computed } from 'vue';
import VueApexCharts from 'vue3-apexcharts'

const { theme } = useLayoutStore()
function generateData(baseval: any, count: any, yrange: any) {
  let i = 0
  const series = []
  while (i < count) {
    const x = Math.floor(Math.random() * (750 - 1 + 1)) + 1
    const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
    const z = Math.floor(Math.random() * (75 - 15 + 1)) + 15

    series.push([x, y, z])
    baseval += 86400000
    i++
  }
  return series
}
const chartData = computed<ApexOptions>(() => {
  return {
    series: [
      {
        name: 'Bioenergy',
        data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
          min: 10,
          max: 60
        })
      },
      {
        name: 'Vital Force',
        data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
          min: 10,
          max: 60
        })
      },
      {
        name: 'Kinetic Energy',
        data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
          min: 10,
          max: 60
        })
      },
      {
        name: 'Metabolic Energy',
        data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
          min: 10,
          max: 60
        })
      }
    ],
    chart: {
      type: 'bubble',
      toolbar: {
        show: false
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#5D69F4', '#00998B', '#FF6161', '#FFC861'],
    fill: {
      opacity: 1
    },
    xaxis: {
      tickAmount: 12,
      type: 'category',
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
      max: 70,
      labels: {
        style: {
          colors: !theme.isDark ? '#404A60' : '#EBECEF'
        },
        offsetX: theme.dir == 'rtl' ? -20 : 0
      }
    },
    legend: {
      position: 'bottom',
      horizontalAlign: 'center',
      offsetY: 8,
      itemMargin: {
        horizontal: 10
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
      borderColor: theme.isDark ? '#404A60' : '#EBECEF',
      padding: {
        bottom: 20
      }
    }
  }
}) 
</script>

<template>
  <div class="col-span-12 xl:col-span-6 box overflow-x-hidden">
    <div class="flex flex-wrap justify-between items-center gap-3 pb-4 lg:pb-6 mb-4 lg:mb-6 bb-dashed">
      <p class="font-medium">Energy Level</p>
      <div class="flex items-center gap-2">
        <p class="text-xs sm:text-sm">Sort By :</p>
        <CommonDropdownVue />
      </div>
    </div>
    <VueApexCharts :height="380" width="100%" :series="chartData.series" :options="chartData" type="bubble" />
  </div>
</template>
