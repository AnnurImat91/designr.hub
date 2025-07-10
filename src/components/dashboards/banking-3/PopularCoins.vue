<script setup lang="ts">
import OptionsVertical from '@/components/shared/OptionsVertical.vue'
import { IconArrowUpRight } from '@tabler/icons-vue'

const coins = [
  {
    name: 'BTC',
    img: '/images/btc.png'
  },
  {
    name: 'ETH',
    img: '/images/eth.png'
  },
  {
    name: 'BNB',
    img: '/images/bnb.png'
  },
  {
    name: 'ADA',
    img: '/images/ada.png'
  },
  {
    name: 'DOGE',
    img: '/images/doge.png'
  },
  {
    name: 'SOL',
    img: '/images/sol.png'
  }
]
</script>

<template>
  <div class="col-span-12 lg:col-span-4 xxl:col-span-3 box">
    <div class="flex flex-wrap justify-between items-center gap-3 pb-4 lg:pb-6 mb-4 lg:mb-6 bb-dashed">
      <p class="font-medium">Popular Coins</p>
      <OptionsVertical />
    </div>
    <div class="w-full overflow-x-auto">
      <table class="w-full whitespace-nowrap">
        <thead>
          <tr class="bg-primary/5 dark:bg-bg3 text-n500 dark:text-n30">
            <th class="py-3 font-semibold px-4 text-start">Name</th>
            <th class="py-3 font-semibold px-4 text-center">View</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="{ img, name } in coins" :key="name" class="even:bg-primary/5 dark:bg-bg3 odd:dark:bg-bg4">
            <td class="py-3 px-4">
              <span class="flex items-center gap-2">
                <img class="rounded-full" :src="img" :width="32" :height="32" alt="img" />
                <p>{{ name }}</p>
              </span>
            </td>
            <td class="py-3 px-4 flex justify-center">
              <RouterLink to="#">
                <IconArrowUpRight :size="20" />
              </RouterLink>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
