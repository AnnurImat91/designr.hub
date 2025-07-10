<script setup lang="ts">
import { IconVideo } from '@tabler/icons-vue';
import { RouterLink } from 'vue-router';


</script>

<template>
    <div class="col-span-12 md:col-span-6 lg:col-span-5 xl:col-span-4 box xl:p-4">
        <div class="box bg-primary/5 dark:bg-bg3 xl:p-6">
            <div class="flex justify-between flex-wrap items-center gap-4 bb-dashed mb-6 pb-6">
                <div>
                    <p class="font-medium mb-1">UEFA Champions League</p>
                    <span class="text-xs">Final Match</span>
                </div>
                <RouterLink to="#" class="btn bg-secondary2 text-sm border-none px-4 hover:bg-secondary2 hover:text-n0">
                    <IconVideo :size="20" /> Live Now
                </RouterLink>
            </div>
            <div class="flex items-center justify-between mb-6">
                <div class="flex flex-col items-center text-center gap-3">
                    <div class="bg-n0 w-[60px] h-[60px] flex items-center justify-center rounded-full shadow-xl">
                        <img src="/images/barcelona.png" alt="img" :width="50" :height="50" />
                    </div>
                    <p class="font-medium">Barcelona</p>
                </div>
                <h2 class="h2">3 : 5</h2>
                <div class="flex flex-col items-center text-center gap-3">
                    <div class="bg-n0 w-[60px] h-[60px] flex items-center justify-center rounded-full shadow-xl">
                        <img src="/images/real-madrid.png" alt="img" :width="32" :height="32" />
                    </div>
                    <p class="font-medium">Real Madrid</p>
                </div>
            </div>
            <RouterLink to="#" class="btn w-full flex justify-center">
                Watch Now
            </RouterLink>
        </div>
    </div>
</template>