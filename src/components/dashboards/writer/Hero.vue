<script setup lang="ts">
import { IconCirclePlus } from '@tabler/icons-vue';


</script>

<template>
    <div class="box p-4 mb-4 xxxl:mb-6">
        <div
            class="bg-primary/5 relative dark:bg-bg3 rounded-2xl p-4 sm:p-11 md:p-12 lg:p-[64px] after:sm:bg-[url('/images/writer-bg.png')] after:bg-no-repeat after:bg-cover after:absolute after:w-full after:h-full after:inset-0 after:rtl:scale-x-[-1]">
            <div class="relative z-[2]">
                <h1 class="display-4 mb-4">Hello, Hawkins</h1>
                <p class="mb-6 xl:mb-10 max-w-sm lg:max-w-xl">
                    Have any ideas for a new article? If not, you should definitely
                    check the feed for some inspiration.
                </p>
                <RouterLink to="#" class="btn">
                    <IconCirclePlus />
                    New Article
                </RouterLink>
            </div>
        </div>
    </div>
</template>