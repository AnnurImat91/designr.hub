
<script setup lang="ts">
let markers = [
    {
        name: "Egypt",
        coords: [26.8, 30.8],
        style: {
            fill: "#5D69F4",
            stroke: "rgba(255, 255, 255, 0.50)",
        },
    },
    {
        name: "Canada",
        coords: [56.1304, -106.3468],
        style: {
            fill: "#5D69F4",
            stroke: "rgba(255, 255, 255, 0.50)",
        },
    },
    {
        name: "Brazil",
        coords: [-14.235, -51.9253],
        style: {
            fill: "#5D69F4",
            stroke: "rgba(255, 255, 255, 0.50)",
        },
    },
    {
        name: "China",
        coords: [35.8617, 104.1954],
        style: {
            fill: "#5D69F4",
            stroke: "rgba(255, 255, 255, 0.50)",
        },
    },
    {
        name: "United States",
        coords: [37.0902, -95.7129],
        style: {
            fill: "#5D69F4",
            stroke: "rgba(255, 255, 255, 0.50)",
        },
    },
    {
        name: "Russia",
        coords: [61, 105],
        style: {
            fill: "#5D69F4",
            stroke: "rgba(255, 255, 255, 0.50)",
        },
    },
    {
        name: "Greenland",
        coords: [71.706936, -42.604303],
        style: {
            fill: "#5D69F4",
            stroke: "rgba(255, 255, 255, 0.50)",
        },
    },
    {
        name: "Norway",
        coords: [60.472024, 8.468946],
        style: {
            fill: "#5D69F4",
            stroke: "rgba(255, 255, 255, 0.50)",
        },
    },
    {
        name: "Ukraine",
        coords: [48.379433, 31.16558],
        style: {
            fill: "#5D69F4",
            stroke: "rgba(255, 255, 255, 0.50)",
        },
    },
];
let lines = [
    { from: "Egypt", to: "Canada" },
    { from: "Egypt", to: "Russia" },
    { from: "Egypt", to: "China" },
    { from: "Egypt", to: "United States" },
    { from: "Egypt", to: "Greenland" },
    { from: "Egypt", to: "Norway" },
    { from: "Egypt", to: "Ukraine" },
    { from: "Egypt", to: "Brazil" },
];
const options = {
    map: 'world',
    markers: markers,
    lines: lines,
    zoomButtons: false,
    onLoaded(map: any) {
        window.addEventListener('resize', () => {
            map.updateSize();
        });
    },
    lineStyle: {
        stroke: '#5D69F4',
        strokeWidth: 1,
        fill: '#5D69F4',
        //     fillOpacity: 1,
        strokeDasharray: '6 3 6', // OR: [6, 2, 6]
        animation: true, // Enables animation
    },
    regionStyle: {
        initial: {
            fill: 'rgba(93, 105, 244, 0.4)',
        },
        hover: { fill: 'rgba(93, 105, 244, 1)' },
    },
}
</script>

<template>
    <div class="col-span-12 lg:col-span-6 box">
        <p class="font-medium pb-6 bb-dashed">Live Users By Country</p>
        <vuevectormap width="100%" :height="450" :options="options">
        </vuevectormap>
    </div>
</template>
