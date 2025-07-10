<script setup lang="ts">
import OptionsVertical from '@/components/shared/OptionsVertical.vue';
import { ref } from 'vue';
import AllMatch from './AllMatch.vue';
import Live from './Live.vue';
import Finished from './Finished.vue';
import Scheduled from './Scheduled.vue';
const activeTab = ref(1)
const tabData = [
    {
        id: 1,
        title: "All",
        content: AllMatch,
    },
    {
        id: 2,
        title: "Live",
        content: Live,
    },
    {
        id: 3,
        title: "Finished",
        content: Finished,
    },
    {
        id: 4,
        title: "Scheduled",
        content: Scheduled,
    },
];
</script>

<template>
    <div class="col-span-12 lg:col-span-8 box">
        <div class="flex justify-between items-center bb-dashed mb-6 pb-6">
            <div class="flex flex-wrap gap-3 sm:gap-4 xxxl:gap-6">
                <button v-for="{ id, title } in tabData" :key="id" @click="activeTab = id"
                    class="md:min-w-[140px] py-2 sm:py-3 px-3 rounded-xl"
                    :class="{ 'bg-primary text-n0': activeTab == id, 'bg-primary/10 dark:bg-bg3 text-n700 dark:text-n0': activeTab != id }">
                    {{ title }}
                </button>
            </div>
            <OptionsVertical />
        </div>
        <div v-for="{ id, content } in tabData" :key="id">
            <div v-show="activeTab === id">
                <component :is="content"></component>
            </div>
        </div>
    </div>
</template>