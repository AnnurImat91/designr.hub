<script setup lang="ts">
import { IconChevronDown } from '@tabler/icons-vue';
import { IconWorld } from '@tabler/icons-vue';
import { onClickOutside } from '@vueuse/core';
import { ref } from 'vue'
const isOpen = ref(false)
const languages = ["English", "Arabic", "Bangla", "Spanish"];
const selected = ref(languages[0])
const target = ref(null)
onClickOutside(target, () => (isOpen.value = false))
</script>

<template>
    <div class="relative" ref="target">
        <button @click="isOpen = !isOpen"
            class="flex gap-1 p-2 sm:p-3 rounded-full bg-n0 dark:bg-bg4 border border-n30 dark:border-n500">
            <IconWorld />
            <IconChevronDown :size="22" />
        </button>
        <div class="bg-n0 border dark:border-n500 ltr:origin-top-right rtl:origin-top-left dark:bg-n800 rounded-md ltr:right-0 rtl:left-0 shadow-lg absolute top-full duration-300"
            :class="{ 'opacity-100 scale-100 visible': isOpen, 'opacity-0 scale-0 invisible': !isOpen }">
            <ul class="flex flex-col w-32 bg-n0 p-1 rounded-md dark:bg-bg4">
                <li v-for="lang in languages" :key="lang"
                    class="px-4 block py-2 rounded-md cursor-pointer duration-300 hover:text-primary"
                    :class="{ 'bg-primary text-n0 hover:!text-n0': selected == lang }">
                    {{ lang }}
                </li>

            </ul>
        </div>
    </div>
</template>

