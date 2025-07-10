<template>
    <footer class="bg-n0 footer dark:bg-bg4 ">

        <!-- layout == "Horizontal" && "max-w-[1700px] mx-auto xxl:px-3" -->
        <div class="p-6 xl:px-8 flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-4">
            <p class="text-sm lg:text-base max-md:text-center max-md:w-full">
                Copyright ©{{ new Date().getFullYear() }}
                <RouterLink class="text-primary" to="/">
                    DashBoi
                </RouterLink>
                . Designed By
                <RouterLink to="#" class="text-secondary1">
                    Pixelaxis
                </RouterLink>
            </p>
            <div class="max-md:w-full max-md:flex justify-center">
                <SocialLinks />
            </div>

            <ul class="flex gap-3 lg:gap-4 text-sm lg:text-base max-lg:justify-center max-lg:w-full">
                <li>
                    <RouterLink to="#">Privacy Policy</RouterLink>
                </li>
                <li>
                    <RouterLink to="#">Terms of condition</RouterLink>
                </li>
            </ul>
        </div>
    </footer>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import SocialLinks from './SocialLinks.vue';


</script>
