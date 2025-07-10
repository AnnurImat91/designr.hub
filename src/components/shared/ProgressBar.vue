<template>
    <ul ref="progress" class="flex flex-col gap-5 lg:gap-[30px]">
        <li v-for="{ bg, width, percent, title, color } in props.progressData" :key="title">
            <div class="mb-2 flex items-center justify-between">
                <span class="inline-block shrink-0 text-title">{{ title }}</span>
                <span :class="`inline-flex shrink-0 ${color}`">
                    <CountUp :endVal="percent" enableScrollSpy />%
                </span>
            </div>
            <div :class="`bar h-2 rounded-full bg-opacity-20 ${bg}`">
                <div :class="`rounded-s-full ${width} ${bg} progress-grow h-2`"></div>
            </div>
        </li>
    </ul>
</template>
  
<script lang="ts" setup>
// import { ref, onMounted, onUnmounted } from 'vue';
import CountUp from 'vue-countup-v3';
type progressTypes = {
    title: string;
    bg: string;
    percent: number;
    width: string;
    color: string;
};
const props = defineProps<{
    progressData: progressTypes[];
}>();



// const isInView = ref(false);
// const progress = ref<HTMLElement | null>(null);

// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//             isInView.value = true;
//         }
//     });
// });

// onMounted(() => {
//     const progressBars = Array.from((progress.value as HTMLElement).getElementsByClassName('bar'));
//     progressBars.forEach((progressBar) => {
//         observer.observe(progressBar);
//     });
// });

// onUnmounted(() => {
//     const progressBars = Array.from((progress.value as HTMLElement).getElementsByClassName('bar'));
//     progressBars.forEach((progressBar) => {
//         observer.unobserve(progressBar);
//     });
// });




</script>
