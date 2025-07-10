<script setup lang="ts">
import { RouterLink } from 'vue-router';


</script>
<template>
    <div class="flex justify-between flex-wrap items-center gap-3 mb-6 lg:mb-8">
        <div class="flex items-start sm:items-center gap-4">
            <img src="/images/user.png" :width="48" :height="48" class="rounded-full" alt="profile img" />
            <div>
                <p class="text-lg lg:text-xl md:mb-1">
                    Welcome back,
                    <span class="font-medium text-lg lg:text-xl">Hawkins</span>
                </p>
                <span class="text-xs">
                    Happy to see you again on your dashboard.
                </span>
            </div>
        </div>
        <div class="flex gap-3 flex-wrap ">
            <RouterLink to="/profil" class="btn-outline">
                View Reports
            </RouterLink>
            <RouterLink to="#" class="btn">
                Manage Store
            </RouterLink>
        </div>
    </div>
</template>


