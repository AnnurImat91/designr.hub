<script setup lang="ts">
defineProps(['isOpen', 'width', 'height'])
defineEmits(['toggle-open'])
</script>

<template>
    <div v-show="isOpen" @click="$emit('toggle-open')"
        class="inset-0 fixed z-[99] bg-n900/80 opacity-0 invisible duration-500 overflow-y-auto"
        :class="{ 'visible opacity-100': isOpen }">
        <div class="overflow-y-scroll">
            <div @click.stop
                class="absolute left-1/2 duration-300 max-w-[710px] my-10 modal scale-75 w-[95%] -translate-x-1/2 box xl:p-8 "
                :class="{ 'translate-y-0 scale-100 opacity-100 my-10': isOpen, 'translate-y-20 invisible opacity-0': !isOpen }">
                <div class="relative">
                    <button @click="$emit('toggle-open')" class="absolute top-0 ltr:right-0 rtl:left-0">
                        <i class="las la-times"></i>
                    </button>
                    <slot />
                </div>
            </div>
        </div>
    </div>
</template>