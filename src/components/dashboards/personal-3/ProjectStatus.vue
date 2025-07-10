<script setup lang="ts">
const progressData = [
  {
    id: 1,
    title: 'Completed',
    bg: 'bg-secondary4',
    width: 'w-[90%]',
    percent: 90,
    color: 'text-secondary4'
  },
  {
    id: 2,
    title: 'Pending',
    bg: 'bg-secondary1',
    width: 'w-[70%]',
    percent: 70,
    color: 'text-secondary1'
  },
  {
    id: 3,
    title: 'Cancelled',
    bg: 'bg-secondary2',
    width: 'w-[60%]',
    percent: 60,
    color: 'text-secondary2'
  }
]
import CommonDropdown from '@/components/shared/CommonDropdown.vue'
import ProgressBar from '@/components/shared/ProgressBar.vue'
import { useLayoutStore } from '@/stores/layoutStore'
import type { ApexOptions } from 'apexcharts'
import { computed } from 'vue'
import VueApexCharts from 'vue3-apexcharts'
const { theme } = useLayoutStore()
const chartData = computed<ApexOptions>(() => {
  return {
    series: [67],
    chart: {
      type: 'radialBar',
      offsetY: -10
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 135,
        track: {
          background: !theme.isDark ? '#DFE0E4' : '#404A60'
        },
        dataLabels: {
          name: {
            fontSize: '16px',
            color: '#5D69F4',
            offsetY: 120
          },
          value: {
            offsetY: 76,
            fontSize: '22px',
            color: !theme.isDark ? '#404a60' : '#dfe0e4',
            formatter: function (val: number) {
              return val + '%'
            }
          }
        }
      }
    },

    stroke: {
      dashArray: 4
    },
    labels: ['Returning Customer'],
    fill: {
      colors: ['#5D69F4'],
      opacity: 1
    },
    responsive: [
      {
        breakpoint: 1500,
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
      }
    ]
  }
})
</script>

<template>
  <div class="col-span-12 lg:col-span-6 box">
    <div class="flex flex-wrap justify-between items-center gap-3 pb-4 lg:pb-6 mb-6 bb-dashed">
      <p class="font-medium">Project Status</p>
      <div class="flex items-center gap-2">
        <p class="text-xs sm:text-sm">Sort By :</p>
        <CommonDropdown />
      </div>
    </div>
    <VueApexCharts
      :height="300"
      width="100%"
      :series="chartData.series"
      :options="chartData"
      type="radialBar"
    />
    <ProgressBar :progressData="progressData" />
  </div>
</template>
