<script setup lang="ts">
import CommonDropdown from '@/components/shared/CommonDropdown.vue';
import Switch from '@/components/shared/Switch.vue';
import { IconEyeOff } from '@tabler/icons-vue';
import { IconEye } from '@tabler/icons-vue';
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const recognized = [
    {
        id: 1,
        title: "Celt Desktop",
        desc: "4351 Deans Lane",
        status: false,
    },
    {
        id: 2,
        title: "Imco Tablet",
        desc: "4185 Michigan Avenue",
        status: true,
    },
    {
        id: 3,
        title: "Albs Mobile",
        desc: "3462 Fairfax Drive",
        status: true,
    },
];
const advanceSettings = [
    {
        id: 1,
        title: "Secure Browsing",
        desc: "Browsing Securely ( https ) when it's necessary",
        status: true,
    },
    {
        id: 2,
        title: "Login Notifications",
        desc: "Notify when login attempted from other place",
        status: false,
    },
    {
        id: 3,
        title: "Login Approvals",
        desc: "Approvals is not required when login from unrecognized devices.",
        status: true,
    },
    {
        id: 4,
        title: "Job Notification",
        desc: "Approvals is not required when login from unrecognized devices.",
        status: false,
    },
    {
        id: 5,
        title: "Message",
        desc: "Approvals is not required when login from unrecognized devices.",
        status: true,
    },
];
const activeSesstions = [
    {
        id: 1,
        title: "Celt Desktop",
        desc: "4351 Deans Lane",
    },
    {
        id: 2,
        title: "Moon Tablet",
        desc: "4185 Michigan Avenue",
    },
    {
        id: 3,
        title: "Albs Mobile",
        desc: "3462 Fairfax Drive",
    },
];
const showPass = ref(false)
</script>

<template>
    <div class="grid grid-cols-12 gap-4 xxxl:gap-6">
        <div class="col-span-12 lg:col-span-6">
            <div class="box xl:p-8 xxl:p-10 mb-6">
                <p class="font-medium bb-dashed mb-4 pb-4 md:mb-6 md:pb-6">
                    General Settings
                </p>
                <form class="mt-6 xl:mt-8 grid grid-cols-2 gap-4 xxxl:gap-6">
                    <div class="col-span-2">
                        <label for="username" class="md:text-lg font-medium block mb-4">
                            Username *
                        </label>
                        <input type="text"
                            class="w-full text-sm focus:outline-none bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-6 py-3"
                            placeholder="Enter username" value="Derrel Steward" id="username" required />
                    </div>
                    <div class="col-span-2 md:col-span-1">
                        <label for="email" class="md:text-lg font-medium block mb-4">
                            Account Email *
                        </label>
                        <input type="email"
                            class="w-full text-sm focus:outline-none bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-6 py-3"
                            placeholder="Enter Email" value="example@mail.com" id="email" required />
                    </div>
                    <div class="col-span-2 md:col-span-1">
                        <label for="location" class="md:text-lg font-medium block mb-4">
                            Location
                        </label>
                        <CommonDropdown input-class="!py-3.5"
                            :options="[{ name: 'English US' }, { name: 'Spanish' }, { name: 'Arabic' }]" />
                    </div>
                    <div class="col-span-2">
                        <label for="password" class="md:text-lg font-medium block mb-4">
                            Sign in using *
                        </label>
                        <div
                            class=" bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-6 py-3 mb-4 relative">
                            <input :type="showPass ? 'text' : 'password'"
                                class="w-11/12 text-sm focus:outline-none bg-transparent" placeholder="Enter Your Password"
                                id="password" value="!fE#42@Rbb" required />
                            <span @click="showPass = !showPass"
                                class="absolute ltr:right-4 rtl:left-4 top-1/2 -translate-y-1/2 cursor-pointer">
                                <IconEye v-if="showPass" />
                                <IconEyeOff v-else />
                            </span>
                        </div>
                    </div>
                    <div class="col-span-2 flex gap-4">
                        <button class="btn px-5">Save Changes</button>
                        <button class="btn-outline px-5">Cancel</button>
                    </div>
                </form>
            </div>
            <div class="box xl:p-8 xxl:p-10">
                <p class="font-medium bb-dashed mb-4 pb-4 md:mb-6 md:pb-6">
                    Advance Settings
                </p>
                <div class="flex flex-col gap-6">
                    <div v-for="{ id, desc, status, title } in recognized" :key="id"
                        class="flex items-center justify-between gap-2">
                        <div>
                            <p class="font-medium text-base md:text-lg xl:text-xl mb-2">{{ title }}</p>
                            <span class="text-xs  lg:text-sm">{{ desc }}</span>
                        </div>
                        <Switch :label="title" :is-checked="status" />
                    </div>
                </div>
            </div>
        </div>
        <div class="col-span-12 lg:col-span-6">
            <div class="box xl:p-8 xxl:p-10 mb-6">
                <p class="font-medium bb-dashed mb-4 pb-4 md:mb-6 md:pb-6">
                    Recognized Devices
                </p>
                <div class="flex flex-col gap-6">
                    <div v-for="{ desc, id, status, title } in advanceSettings" :key="id"
                        class="flex items-center justify-between gap-2">
                        <div>
                            <p class="font-medium text-base md:text-lg xl:text-xl mb-2">{{ title }}</p>
                            <span class="text-xs  lg:text-sm">{{ desc }}</span>
                        </div>
                        <Switch :label="title" :is-checked="status" />
                    </div>
                </div>
            </div>
            <div class="box xl:p-8 xxl:p-10">
                <p class="font-medium bb-dashed mb-4 pb-4 md:mb-6 md:pb-6">
                    Active Sessions
                </p>
                <div class="flex flex-col gap-6">
                    <div v-for="{ id, desc, title } in activeSesstions" :key="id"
                        class="flex items-center justify-between gap-2">
                        <div>
                            <p class="font-medium text-base md:text-lg xl:text-xl mb-2">{{ title }}</p>
                            <span class="text-xs  lg:text-sm">{{ desc }}</span>
                        </div>
                        <RouterLink to="/login-1" class="btn-outline">
                            Log Out
                        </RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>