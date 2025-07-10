<script setup lang="ts">
import type { ApexOptions } from 'apexcharts'
import { useLayoutStore } from '@/stores/layoutStore'
import VueApexCharts from 'vue3-apexcharts'
import CommonDropdownVue from '@/components/shared/CommonDropdown.vue'
import { computed } from 'vue';
import useWindowSize from '@/utils/useWindowSize';
const { windowSize } = useWindowSize()
const { theme } = useLayoutStore()
const chartData = computed<ApexOptions>(() => {
  return {
    series: [44, 55, 41, 17, 15],
    chart: {
      type: 'donut'
    },
    fill: {
      colors: ['#5D69F4', '#00998B', '#FFC861', '#FF6161', '#775DD0']
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            value: {
              color: !theme.isDark ? '#404A60' : '#EBECEF',
              fontSize: '16px',
              offsetY: 2
            },
            total: {
              show: true,
              label: 'Bank',
              fontSize: '24px',
              color: !theme.isDark ? '#404A60' : '#EBECEF',
              formatter: () => 'Transactions'
            }
          }
        }
      }
    },
    legend: {
      position: windowSize.value > 992 ? 'right' : 'bottom',
      offsetY: windowSize.value > 992 ? 20 : 0,
      itemMargin: {
        vertical: 8
      },
      horizontalAlign: 'center',
      labels: {
        colors: !theme.isDark ? '#404A60' : '#EBECEF'
      },
      markers: {
        width: 8,
        height: 8,
        offsetX: theme.dir == 'rtl' ? 5 : -5
      }
    },
    stroke: {
      colors: theme.isDark ? ['#343E56'] : ['#EBECEF']
    },
    labels: ['Completed', 'In Progress', 'Yet to Start', 'Pending', 'Canceled']
  }
}) 
</script>

<template>
  <div class="col-span-12 md:col-span-6 xl:col-span-5 4xl:col-span-4 box overflow-x-hidden">
    <div class="flex flex-wrap justify-between items-center gap-3 pb-4 lg:pb-6 mb-4 lg:mb-6 bb-dashed">
      <p class="font-medium">Weekly Transactions</p>
      <div class="flex items-center gap-2">
        <p class="text-xs sm:text-sm">Sort By :</p>
        <CommonDropdownVue />
      </div>
    </div>
    <VueApexCharts :height="400" width="100%" :series="chartData.series" :options="chartData" type="donut" />
  </div>
</template>
