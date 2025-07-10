<script setup lang="ts">
import { RouterLink } from 'vue-router';


</script>

<template>
    <div
        class="bg-primary rounded-2xl p-4 sm:p-6 md:p-10 xl:p-20 relative after:bg-[url('/images/hr-board-bg.png')] after:bg-no-repeat after:bg-cover after:absolute after:w-full after:h-full after:rounded-2xl rtl:after:scale-x-[-1] after:inset-0">
        <div class="relative z-[1]">
            <h1 class="display-4 text-n0 mb-4">Welcome back, Hawkins</h1>
            <p class="mb-10 text-n0 max-w-2xl">
                It seems like you&nbsp;re looking for a job feed or information related
                to job opportunities. Could you please provide more
            </p>
            <RouterLink to="#" class="btn-white">
                Manage Jobs
            </RouterLink>
        </div>
    </div>
</template>