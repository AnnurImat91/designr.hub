<script setup lang="ts">
import Checkbox from '@/components/shared/Checkbox.vue';
import Switch from '@/components/shared/Switch.vue';

const updates = [
    "Updates from System Notification",
    "Tips on getting more out of PCT-themes",
    "Things you missed since you last logged into PCT-themes",
    "News about products and other services",
    "Tips and Document business products",
    "Tips on getting more reach",
];
const emailSettings = [
    {
        id: 1,
        title: "Email Notification",
        desc: "3093+ email",
        status: false,
    },
    {
        id: 2,
        title: "Send Copy To Personal Email",
        desc: "231+ email",
        status: true,
    },
    {
        id: 3,
        title: "Spam Email",
        desc: "254+ email",
        status: true,
    },
];
const relatedEmails = [
    {
        id: 1,
        title: "Have new notifications",
        desc: "Features integrated from this account",
        status: true,
    },
    {
        id: 2,
        title: "You're sent a direct message",
        desc: "Features integrated from this account",
        status: true,
    },
    {
        id: 3,
        title: "Someone adds you as a connection",
        desc: "Features integrated from this account",
        status: false,
    },
];
const whenToEscalate = [
    {
        id: 1,
        title: "Upon new order",
        desc: "Features integrated from this account",
        status: true,
    },
    {
        id: 2,
        title: "New membership approval",
        desc: "Features integrated from this account",
        status: false,
    },
    {
        id: 3,
        title: "Member registration",
        desc: "Features integrated from this account",
        status: true,
    },
];
</script>

<template>
    <div class="grid grid-cols-12 gap-4 xxxl:gap-6">
        <div class="col-span-12 lg:col-span-6">
            <div class="box xl:p-8 xxl:p-10 mb-4 xxxl:mb-6">
                <p class="font-medium bb-dashed mb-4 pb-4 md:mb-6 md:pb-6 ">
                    Email Settings
                </p>
                <div class="flex flex-col gap-4 md:gap-6">
                    <div v-for="{ desc, id, status, title } in emailSettings" :key="id"
                        class="flex items-center justify-between gap-2">
                        <div>
                            <p class="font-medium text-base md:text-lg xl:text-xl mb-2">{{ title }}</p>
                            <span class="text-xs lg:text-sm">{{ desc }}</span>
                        </div>
                        <Switch :label="title" :isChecked="status" />
                    </div>
                </div>
            </div>
            <div class="box xl:p-8 xxl:p-10">
                <p class="font-medium bb-dashed md:mb-6 md:pb-6 mb-4 pb-4">
                    Updates from System Notification
                </p>
                <div class="flex flex-col gap-4">
                    <Checkbox v-for="update in updates" :label="update" :key="update" />
                </div>
            </div>
        </div>
        <div class="col-span-12 lg:col-span-6">
            <div class="box xl:p-8 xxl:p-10 mb-4 xxxl:mb-6">
                <p class="font-medium bb-dashed md:mb-6 md:pb-6 mb-4 pb-4">
                    Activity Related Emails
                </p>
                <div class="flex flex-col gap-6">
                    <div v-for="{ id, desc, status, title } in relatedEmails" :key="id"
                        class="flex items-center justify-between gap-2">
                        <div>
                            <p class="font-medium text-base md:text-lg xl:text-xl mb-2">{{ title }}</p>
                            <span class="text-xs  lg:text-sm">{{ desc }}</span>
                        </div>
                        <Switch :label="title" :isChecked="status" />
                    </div>
                </div>
            </div>
            <div class="box xl:p-8 xxl:p-10">
                <p class="font-medium bb-dashed md:mb-6 md:pb-6 mb-4 pb-4">
                    When to escalate emails?
                </p>
                <div class="flex flex-col gap-6">
                    <div v-for="{ id, desc, status, title } in whenToEscalate" :key="id"
                        class="flex items-center justify-between gap-2">
                        <div>
                            <p class="font-medium text-base md:text-lg xl:text-xl mb-2">{{ title }}</p>
                            <span class="text-xs  lg:text-sm">{{ desc }}</span>
                        </div>
                        <Switch :label="title" :isChecked="status" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>