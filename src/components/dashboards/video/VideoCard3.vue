<script setup lang="ts">
import { IconCircleCheck } from '@tabler/icons-vue';
import { IconPlayerPlayFilled } from '@tabler/icons-vue';

</script>

<template>
    <div class="col-span-12 xl:col-span-6">
        <div
            class="relative after:bg-gradient-to-t after:w-full after:rounded-2xl hover:after:h-full after:duration-300 after:h-1/2 after:absolute after:bottom-0 after:left-0 after:right-0 after:from-black after:to-transparent">
            <img src="/images/video-2.png" :width="756" :height="400" class="rounded-2xl w-full min-h-[280px]" alt="img" />
            <div class="absolute z-[2] bottom-6 w-full lg:bottom-8 px-3 md:px-5 lg:px-10">
                <h3>
                    <RouterLink to="#" class="text-n0 block h3 mb-6">
                        Scientist Analytics for Discoveries
                    </RouterLink>
                </h3>
                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-3 sm:gap-4 xl:gap-6">
                        <img src="/images/tv-1.png" class="rounded-full w-10 h-10 lg:w-14 lg:h-14" alt="tv icon" :width="60"
                            :height="60" />
                        <div>
                            <RouterLink to="#" class="flex items-center gap-2 mb-2 md:mb-3">
                                <p class="uppercase text-n0">MAZTECH TV</p>
                                <IconCircleCheck ::size="20" class="text-secondary3dark" />
                            </RouterLink>
                            <div class="flex flex-wrap items-center gap-2 text-n0">
                                <span class="text-xs">3.6k views</span>
                                <span class="text-secondary3dark">•</span>
                                <span class="text-xs">27 minutes ago</span>
                            </div>
                        </div>
                    </div>
                    <button class="rounded-full border-2 border-no bg-secondary3dark text-primary p-1.5 md:p-3">
                        <IconPlayerPlayFilled :size="20" />
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div class="col-span-12 xl:col-span-6">
        <div
            class="relative mb-4 xxxl:mb-6 after:bg-gradient-to-t after:w-full after:rounded-2xl hover:after:h-full after:duration-300 after:h-1/2 after:absolute after:bottom-0 after:left-0 after:right-0 after:from-black after:to-transparent">
            <img src="/images/video-3.png" :width="756" :height="440" class="rounded-2xl w-full min-h-[200px]" alt="img" />
            <div class="absolute z-[2] bottom-6 w-full lg:bottom-8 px-5 lg:px-10">
                <h3>
                    <RouterLink to="#" class="text-n0 block h3 mb-3 md:mb-6">
                        Scientist Analytics for Discoveries
                    </RouterLink>
                </h3>
                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-2 sm:gap-4 xl:gap-6">
                        <img src="/images/tv-2.png" class="rounded-full w-10 h-10 lg:w-14 lg:h-14" alt="tv icon" :width="60"
                            :height="60" />
                        <div>
                            <RouterLink to="#" class="flex items-center gap-2 mb-2 md:mb-3">
                                <p class="uppercase text-n0">innova TV</p>
                                <IconCircleCheck :size="20" class="text-secondary3dark" />
                            </RouterLink>
                            <div class="flex flex-wrap items-center gap-1 text-n0">
                                <span class="text-xs">3.6k views</span>
                                <span class="text-secondary3dark">•</span>
                                <span class="text-xs">27 minutes ago</span>
                            </div>
                        </div>
                    </div>
                    <button class="rounded-full border-2 border-no bg-secondary3dark text-primary p-1.5 md:p-3">
                        <IconPlayerPlayFilled :size="20" />
                    </button>
                </div>
            </div>
        </div>
        <div
            class="relative after:bg-gradient-to-t after:w-full hover:after:h-full after:duration-300 after:rounded-2xl after:h-1/2 after:absolute after:bottom-0 after:left-0 after:right-0 after:from-black after:to-transparent">
            <img src="/images/video-4.png" :width="756" :height="440" class="rounded-2xl w-full min-h-[200px]" alt="img" />
            <div class="absolute z-[2] bottom-6 w-full lg:bottom-8 px-3 md:px-5 lg:px-10">
                <h3>
                    <RouterLink to="#" class="text-n0 block h3 mb-3 md:mb-6">
                        Scientist Analytics for Discoveries
                    </RouterLink>
                </h3>
                <div class="items-center flex justify-between">
                    <div class="flex items-center gap-3 md:gap-4 xl:gap-6">
                        <img src="/images/tv-3.png" class="rounded-full w-10 h-10 lg:w-14 lg:h-14" alt="tv icon" :width="60"
                            :height="60" />
                        <div>
                            <RouterLink to="#" class="flex items-center gap-2 mb-2 md:mb-3">
                                <p class="uppercase text-n0">Pinlove TV</p>
                                <IconCircleCheck :size="20" class="text-secondary3dark" />
                            </RouterLink>
                            <div class="flex flex-wrap items-center gap-2 text-n0">
                                <span class="text-xs">3.6k views</span>
                                <span class="text-secondary3dark">•</span>
                                <span class="text-xs">27 minutes ago</span>
                            </div>
                        </div>
                    </div>
                    <button class="rounded-full border-2 border-no bg-secondary3dark text-primary p-1.5 md:p-3">
                        <IconPlayerPlayFilled :size="20" />
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>