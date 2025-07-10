<script setup lang="ts">
import { IconHeart } from '@tabler/icons-vue';
import { IconHeartFilled } from '@tabler/icons-vue';
import { IconArrowUpRight } from '@tabler/icons-vue';
import { ref } from 'vue';

defineProps<{
    title: string;
    salaryRange: string;
    tags: string[];
    desc: string;
    expiry: string;
    location: string;
    level: string;
    proposals: number;
    company: {
        logo: string;
        name: string;
        verified: boolean;
    };
}>()
const isFavorite = ref(false)
</script>

<template>
    <div class="box">
        <div class="flex flex-wrap gap-3 justify-between items-center mb-6">
            <h4 class="h4">{{ title }}</h4>
            <p class="text-primary text-xl font-semibold">{{ salaryRange }}</p>
        </div>
        <div class="flex gap-3 md:gap-4 lg:gap-6 flex-wrap mb-6">
            <span v-for="tag in tags" :key="tag"
                class="bg-primary/5 dark:bg-bg3 rounded-xl text-primary font-medium py-2 px-4 inline-block">
                {{ tag }}
            </span>
        </div>
        <p class="mb-6">{{ desc }}</p>
        <div class="flex flex-wrap text-n700 dark:text-n0 items-center gap-4 4xl:gap-5 mb-6 pb-6 bb-dashed">
            <span>
                Expiry : <span class="font-medium">{{ expiry }}</span>
            </span>
            <span class="text-primary text-xs max-[1136px]:hidden">•</span>
            <span>
                Location : <span class="font-medium">{{ location }}</span>
            </span>
            <span class="text-primary text-xs max-[1136px]:hidden">•</span>
            <span>
                Level : <span class="font-medium">{{ level }}</span>
            </span>
            <span class="text-primary text-xs max-[1136px]:hidden">•</span>
            <span>
                Proposals : <span class="font-medium">{{ proposals }} Received</span>
            </span>
        </div>
        <div class="flex flex-wrap gap-4 justify-between">
            <RouterLink to="#" class="flex flex-wrap items-center gap-2">
                <img :src="company.logo" :width="40" :height="40" alt="company logo" />
                <p class="text-lg flex gap-2 items-center">
                    {{ company.name }} .
                    <span class="text-primary text-sm font-medium">
                        {{ company.verified ? 'Verified' : 'Not Verified' }}
                    </span>
                </p>
            </RouterLink>
            <div class="flex gap-4 items-center">
                <button @click="isFavorite = !isFavorite" class="p-2 rounded-full border text-primary border-primary">
                    <IconHeartFilled v-if="isFavorite" />
                    <IconHeart v-else />
                </button>
                <RouterLink to="#" class="btn-outline group">
                    Send Proposal
                    <IconArrowUpRight class="group-hover:rotate-45 duration-300" />
                </RouterLink>
            </div>
        </div>
    </div>
</template>