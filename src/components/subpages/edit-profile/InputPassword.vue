<script setup lang="ts">
import { IconEyeOff } from '@tabler/icons-vue';
import { IconEye } from '@tabler/icons-vue';
import { ref } from 'vue';
const props = defineProps<{
    placeholder: string
}>()
const showPass = ref()

</script>

<template>
    <div class=" bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-6 py-3 relative">
        <input :type="showPass ? 'text' : 'password'" class="w-11/12 text-sm focus:outline-none bg-transparent"
            :placeholder="props.placeholder" :id="placeholder" required />
        <span @click="showPass = !showPass"
            class="absolute ltr:right-3 ltr:md:right-5 rtl:left-3 rtl:md:left-5 top-1/2 -translate-y-1/2 cursor-pointer">
            <IconEye v-if="showPass" />
            <IconEyeOff v-else />
        </span>
    </div>
</template>