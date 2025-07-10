<script setup lang="ts">
import { IconBell } from '@tabler/icons-vue'
import { onClickOutside } from '@vueuse/core'
import { ref } from 'vue'
const isOpen = ref(false)
const target = ref(null)
onClickOutside(target, () => (isOpen.value = false))

const notifications = [
    {
        id: 1,
        name: 'Benjamin ',
        img: '/images/user.png',
        activity: 'Sent a message',
        time: '1 hour ago'
    },
    {
        id: 2,
        name: 'William ',
        img: '/images/user-3.png',
        activity: 'Left a comment',
        time: '2 hour ago'
    },
    {
        id: 3,
        name: 'Samuel',
        img: '/images/user-2.png',
        activity: 'Left a comment',
        time: '3 hour ago'
    },
    {
        id: 4,
        name: 'Scott',
        img: '/images/user-4.png',
        activity: 'Uploaded a file',
        time: 'Yesterday'
    },
    {
        id: 5,
        name: 'David',
        img: '/images/user-5.png',
        activity: 'Left a comment',
        time: 'Yesterday'
    }
]
</script>
<template>
    <div ref="target" class="relative">
        <button @click="isOpen = !isOpen"
            class="p-2 sm:p-3 rounded-full bg-n0 dark:bg-bg4 border border-n30 dark:border-n500">
            <IconBell />
        </button>
        <div class="bg-n0 border dark:border-n500 dark:bg-n800 rounded-md max-sm:origin-top ltr:sm:origin-top-right rtl:sm:origin-top-left rtl:max-sm:-left-[142px] ltr:max-sm:-right-[142px] ltr:sm:right-0 rtl:sm:left-0 shadow-lg absolute top-full duration-300"
            :class="{ 'opacity-100 scale-100 visible': isOpen, 'opacity-0 scale-0 invisible': !isOpen }">
            <div class="flex justify-between items-center lg:px-4 p-3 border-b dark:border-n500">
                <h5 class="h5">Notifications</h5>
                <RouterLink to="/notifications" onClick="{toggleOpen}" class="text-primary text-sm">
                    View All
                </RouterLink>
            </div>
            <ul class="flex flex-col w-[310px] p-2">
                <div v-for="notification in notifications" :key="notification.id"
                    class="flex gap-2 cursor-pointer p-2 rounded-md hover:bg-primary/10 duration-300">
                    <img :src="notification.img" width="40" height="40" class="rounded-full" alt="img" />
                    <div class="text-sm">
                        <div class="flex gap-1">
                            <span class="font-medium">{{ notification.name }}</span>
                            <span>{{ notification.activity }}</span>
                        </div>
                        <span class="text-n100 dark:text-n50 text-xs">{{ notification.time }}</span>
                    </div>
                </div>
            </ul>
        </div>
    </div>
</template>
