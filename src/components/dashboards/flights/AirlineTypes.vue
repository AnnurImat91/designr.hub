<script setup lang="ts">
import Checkbox from '@/components/shared/Checkbox.vue';

const stops = [
    {
        title: "Asia Pacific Airlines",
        checked: true,
        time: "523",
    },
    {
        title: "American Airlines",
        checked: true,
        time: "152",
    },
    {
        title: "Europian Airlines",
        checked: true,
        time: "546",
    },
    {
        title: "Middle East Airlines",
        checked: true,
        time: "453",
    },
    {
        title: "African Airlines",
        checked: false,
        time: "324",
    },
    {
        title: "Australian Airlines",
        checked: false,
        time: "286",
    },
];
</script>

<template>
    <div class="box">
        <p class="mb-4 pb-4  xl:mb-6 xl:pb-6 bb-dashed">Departure Time</p>
        <ul class="flex flex-col gap-3">
            <li v-for="{ checked, title, time } in  stops " :key="title" class="flex items-center justify-between">
                <Checkbox :checked="checked" :label="title" />
                <span class="font-medium">{{ time }}</span>
            </li>
        </ul>
    </div>
</template>