<script setup lang="ts">
import Checkbox from '@/components/shared/Checkbox.vue';

const stops = [
    {
        title: "Early Morning",
        checked: true,
        time: "12am - 8am",
    },
    {
        title: "Morning",
        checked: true,
        time: "8am - 12pm",
    },
    {
        title: "Mid-Day",
        checked: false,
        time: "12pm - 4pm",
    },
    {
        title: "Evening",
        checked: true,
        time: "8pm - 4pm",
    },
    {
        title: "Night",
        checked: false,
        time: "8pm - 12am",
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