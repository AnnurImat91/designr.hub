<script setup lang="ts">
import CommonDropdownVue from '@/components/shared/CommonDropdown.vue';
import { IconShoppingCart } from '@tabler/icons-vue'
import { IconArrowDownRight } from '@tabler/icons-vue';
import { IconArrowsLeftRight } from '@tabler/icons-vue';
import { IconArrowUpRight } from '@tabler/icons-vue';
import { IconPhoto } from '@tabler/icons-vue'
import { IconCalendarPlus } from '@tabler/icons-vue'
import { IconChartHistogram } from '@tabler/icons-vue'

const overviews = [
    {
        title: 'Total Sale',
        percent: 69.6,
        number: '- 245',
        total: '3214',
        icon: IconChartHistogram,
        arrow: IconArrowUpRight,
        color: 'text-primary'
    },
    {
        title: 'Revenue',
        percent: 3.6,
        number: '+$210',
        total: '$6254',
        icon: IconCalendarPlus,
        arrow: IconArrowDownRight,
        color: 'text-secondary2'
    },
    {
        title: 'Abandon Cart',
        percent: 79.6,
        number: '- 245',
        total: '152',
        icon: IconShoppingCart,
        arrow: IconArrowsLeftRight,
        color: 'text-secondary3'
    },
    {
        title: 'Ads Spent',
        percent: 2.6,
        number: '- 26',
        total: '502k',
        icon: IconPhoto,
        arrow: IconArrowDownRight,
        color: 'text-secondary2'
    }
]
</script>

<template>
    <div class="box">
        <div class="flex flex-wrap justify-between items-center gap-3 pb-4 lg:pb-6 mb-4 lg:mb-6 bb-dashed">
            <p class="font-medium">Projects Overview</p>
            <div class="flex items-center gap-2">
                <p class="text-xs sm:text-sm">Sort By :</p>
                <CommonDropdownVue />
            </div>
        </div>
        <div class="flex flex-col gap-4 lg:gap-6">
            <div v-for="overview in overviews" :key="overview.title" class="flex justify-between items-center">
                <div class="flex gap-3 md:gap-4 lg:gap-6 items-center">
                    <span class="p-3 inline-flex rounded-2xl bg-primary/5 dark:bg-bg3 text-primary">
                        <component :size="32" :is="overview.icon"></component>
                    </span>
                    <div>
                        <p class="text-sm md:text-base mb-2 md:mb-3">{{ overview.title }}</p>
                        <span class="text-lg md:text-xl font-medium">{{ overview.total }}</span>
                    </div>
                </div>
                <div class="text-end">
                    <p>{{ overview.number }}</p>
                    <p class="flex mt-3 items-center gap-1" :class="overview.color">
                        <component :size="18" :is="overview.arrow"></component>
                        {{ overview.percent }}%
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
