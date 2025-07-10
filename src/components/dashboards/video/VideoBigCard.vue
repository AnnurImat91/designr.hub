<script setup lang="ts">
import { IconPlayerPlayFilled } from '@tabler/icons-vue';
import { IconCircleCheck } from '@tabler/icons-vue';


</script>

<template>
    <div class="col-span-12 lg:col-span-5 xl:col-span-6">
        <div class="group box p-3">
            <div class="relative">
                <img src="/images/video-1.png" :width="732" :height="390" class="rounded-xl w-full" alt="video thumb" />
                <button
                    class="rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 md:border-4 duration-300 border-n0 group-hover:border-secondary3dark bg-n0 text-primary p-2 md:p-3 lg:p-4">
                    <IconPlayerPlayFilled />
                </button>
            </div>
            <div
                class="px-2 md:px-5 pb-3 md:pb-5 pt-4 md:pt-8 flex flex-wrap sm:flex-nowrap items-start gap-3 sm:gap-4 lg:gap-6">
                <img src="/images/tv-1.png" :width="60" :height="60" class="rounded-full" alt="img" />
                <div>
                    <h3>
                        <RouterLink to="#" class="h3 block mb-3 sm:mb-4">
                            Scientist Analytics for Discoveries
                        </RouterLink>
                    </h3>
                    <RouterLink to="#" class="flex items-center gap-2 mb-3">
                        <p>MAZTECH TV</p>
                        <IconCircleCheck class="text-primary" />
                    </RouterLink>
                    <div class="flex flex-wrap items-center gap-2">
                        <span>3.6k views</span>
                        <span class="text-primary">•</span>
                        <span>27 minutes ago</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>