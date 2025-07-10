<script setup lang="ts">
import { IconMessage } from '@tabler/icons-vue';
import { IconThumbUp } from '@tabler/icons-vue';

const props = defineProps<{
    id: number;
    title: string;
    link: string;
    desc: string;
    likes: number;
    comment: number;
}>()
</script>

<template>
    <div key={id} class="py-4 md:py-6 bb-dashed">
        <RouterLink to="#" class="text-primary font-medium text-lg md:text-xl block mb-1">
            {{ props.title }}
        </RouterLink>
        <RouterLink to={link} class="text-secondary1 block text-sm mb-3">
            {{ props.link }}
        </RouterLink>
        <p class="text-sm mb-5">{{ props.desc }}</p>
        <div class="flex gap-6">
            <div class="flex items-center gap-2">
                <button>
                    <IconThumbUp :size="20" />
                </button>
                <span>{{ props.likes }}</span>
            </div>
            <div class="flex items-center gap-2">
                <button>
                    <IconMessage :size="20" />
                </button>
                <span>{{ props.comment }}</span>
            </div>
        </div>
    </div>
</template>