<script setup lang="ts">
import { useLayoutStore } from '@/stores/layoutStore'
import type { ApexOptions } from 'apexcharts'
import VueApexCharts from 'vue3-apexcharts'
import CommonDropdown from '../shared/CommonDropdown.vue'
import { computed } from 'vue';
import useWindowSize from '@/utils/useWindowSize';
const { theme } = useLayoutStore()
const { windowSize } = useWindowSize()
const chartData = computed<ApexOptions>(() => {
  return {
    series: [14, 23, 21, 17, 15, 10, 12, 17, 21],
    chart: {
      type: 'polarArea'
    },
    colors: [
      '#5D69F4',
      '#00998B',
      '#FFC861',
      '#FF6161',
      '#8169D3',
      '#5D69F4',
      '#00998B',
      '#FFC861',
      '#FF6161'
    ],
    labels: [
      'Application',
      'Widgets',
      'Input Forms',
      'Components',
      'Pages',
      'Earning List',
      'Total Sale',
      'Revenue',
      'Ads Spent'
    ],
    stroke: {
      colors: theme.isDark ? ['#343E56'] : ['#EBECEF'],
      width: 2
    },
    fill: {
      opacity: 1
    },
    responsive: [

      {
        breakpoint: 310,
        options: {
          chart: {
            height: 400
          }
        }
      }
    ],
    dataLabels: {
      enabled: true,
      style: {
        colors: !theme.isDark ? ['#343E56'] : ['#EBECEF']
      },
      textAnchor: 'start',
      distributed: false,
      background: {
        enabled: false
      }
    },
    yaxis: {
      labels: {
        formatter: function (val) {
          return val + '%'
        }
      }
    },
    plotOptions: {
      polarArea: {
        rings: {
          strokeWidth: 1,
          strokeColor: theme.isDark ? '#343E56' : '#EBECEF'
        },
        spokes: {
          strokeWidth: 1,
          connectorColors: theme.isDark ? '#343E56' : '#EBECEF'
        }
      }
    },
    legend: {
      itemMargin: {
        vertical: 2
      },
      offsetX: windowSize.value > 580 ? 30 : 0,
      position: windowSize.value > 580 ? 'right' : 'bottom',
      horizontalAlign: 'center',
      labels: {
        colors: !theme.isDark ? '#404A60' : '#EBECEF'
      },
      markers: {
        width: 4,
        height: 4,
        offsetX: theme.dir == 'ltr' ? -6 : 3
      }
    },

  }
})
</script>

<template>
  <div class="col-span-12 lg:col-span-6 box overflow-x-hidden showcase">
    <div class="flex flex-wrap justify-between items-center gap-3 pb-4 lg:pb-6 mb-4 lg:mb-6 bb-dashed">
      <p class="font-medium">Showcase Info</p>
      <div class="flex items-center gap-2">
        <p class="text-xs sm:text-sm">Sort By :</p>
        <CommonDropdown />
      </div>
    </div>
    <VueApexCharts :height="400" width="100%" :series="chartData.series" :options="chartData" type="polarArea" />
  </div>
</template>
