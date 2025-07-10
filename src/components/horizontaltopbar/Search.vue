<script setup lang="ts">
import { IconSearch } from '@tabler/icons-vue';
import { onClickOutside } from '@vueuse/core'
import { ref } from 'vue'
const isOpen = ref(false)
const target = ref(null)
onClickOutside(target, () => (isOpen.value = false))
</script>

<template>
    <div class="relative" ref="target">
        <button @click="isOpen = !isOpen"
            class="p-1.5 sm:p-2 lg:p-3 border rounded-full bg-n0 dark:bg-bg4 border-n30 dark:border-n500">
            <IconSearch />
        </button>
        <div class="bg-n0 z-10 p-3 sm:p-4 border dark:border-n500 dark:bg-bg4 sm:w-[450px] rounded-md ltr:-right-[150px]
            ltr:sm:right-0 rtl:sm:left-0 shadow-lg absolute top-[105%] duration-300"
            :class="{ 'visible opacity-100': isOpen, 'invisible opacity-0': !isOpen }">
            <form class="flex gap-4 items-center">
                <input type="text"
                    class="p-2 text-sm border lg:py-2.5 w-full border-n30 bg-transparent dark:bg-bg3 dark:border-n500 rounded-md"
                    placeholder="Search ..." />
                <button class="btn rounded-lg py-2 px-4">Search</button>
            </form>
        </div>
    </div>
</template>