<script setup lang="ts">
import { IconX } from '@tabler/icons-vue';
import { IconSearch } from '@tabler/icons-vue';
import { IconMicrophone } from '@tabler/icons-vue';


</script>

<template>
    <div class="box xl:p-8 xxl:p-[60px]">
        <form class="max-w-[770px] flex flex-wrap sm:flex-nowrap items-center gap-3 sm:gap-4 md:gap-6 mb-4">
            <div
                class="rounded-[30px] bg-primary/5 dark:bg-bg3 px-6 md:px-8 py-2 lg:py-3 w-full flex border border-n40 dark:border-n500">
                <input type="text" value="Admin Dashboard" placeholder="Enter Search" class="w-full bg-transparent" />
                <button>
                    <IconMicrophone :size="20" />
                </button>
            </div>
            <button class="btn flex items-center gap-2">
                <IconSearch :size="20" /> Search
            </button>
        </form>
        <p class="bb-dashed mb-6 pb-6 flex flex-wrap items-center gap-1">
            Showing results for &quot;
            <span class="text-primary">Admin Dashboard</span>&quot;
            <button>
                <IconX :size="20" />
            </button>
        </p>
        <div class="mt-10 lg:mt-14 text-center max-w-[513px] max-md:mx-auto max-md:flex flex-col items-center">
            <div class="px-5 lg:px-14 xl:px-24">
                <img src="/images/empty-search.png" :width="328" :height="478" alt="no result img" />
            </div>
            <h2 class="h2 mb-3 lg:mb-6">No matching results</h2>
            <p>
                Looks like we couldn&nbsp;t find any matching results for your search
                terms. Try other search terms.
            </p>
        </div>
    </div>
</template>