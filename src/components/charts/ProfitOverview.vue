<script setup lang="ts">
import type { ApexOptions } from 'apexcharts'
import { dataSet } from '../dashboards/company/data'
import VueApexCharts from 'vue3-apexcharts'
import { useLayoutStore } from '@/stores/layoutStore'
import CommonDropdown from '../shared/CommonDropdown.vue'
import { computed } from 'vue'
const { theme } = useLayoutStore()
const chartData = computed<ApexOptions>(() => {
  return {
    series: [
      {
        name: 'Net Profit',
        data: dataSet[0]
      },
      {
        name: 'Revenue',
        data: dataSet[1]
      },
      {
        name: 'Free  Cash Flow',
        data: dataSet[2]
      }
    ],
    chart: {
      type: 'area',
      stacked: false,
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#5D69F4', '#099495', '#FFC861'],
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 0.05,
        stops: [20, 100, 100, 100]
      }
    },
    yaxis: {
      labels: {
        style: {
          colors: !theme.isDark ? '#404A60' : '#EBECEF'
        },
        offsetX: theme.dir == 'rtl' ? -50 : 0,
        formatter: function (val) {
          return (val / 1000000).toFixed(2)
        }
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      }
    },
    xaxis: {
      type: 'datetime',
      tickAmount: 8,
      min: new Date('01/01/2014').getTime(),
      max: new Date('01/20/2014').getTime(),
      labels: {
        style: {
          colors: !theme.isDark ? '#404A60' : '#EBECEF'
        },
        rotate: -15,
        rotateAlways: true
        // formatter: function (val, timestamp) {
        //   return moment(new Date(timestamp)).format("DD MMM YYYY");
        // },
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        color: theme.isDark ? '#404A60' : '#EBECEF'
      }
    },

    tooltip: {
      shared: true
    },
    legend: {
      position: 'bottom',
      horizontalAlign: 'center',
      itemMargin: {
        horizontal: 16
      },
      offsetY: 8,
      markers: {
        height: 4,
        width: 4,
        offsetX: theme.dir == 'rtl' ? 5 : -5
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
  <div class="box col-span-12 lg:col-span-6 overflow-x-hidden">
    <div class="flex flex-wrap justify-between items-center gap-3 pb-4 lg:pb-6 mb-4 lg:mb-6 bb-dashed">
      <p class="font-medium">Profit Overview</p>
      <div class="flex items-center gap-2">
        <p class="text-xs sm:text-sm">Sort By :</p>
        <CommonDropdown />
      </div>
    </div>
    <VueApexCharts :height="330" width="100%" :options="chartData" :series="chartData.series" type="area" />
  </div>
</template>
