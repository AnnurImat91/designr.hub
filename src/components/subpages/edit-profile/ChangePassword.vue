<script setup lang="ts">
import InputPassword from './InputPassword.vue';

const rules = [
    "At least 8 characters",
    "At least 1 lower letter (a-z)",
    "At least 1 uppercase letter(A-Z)",
    "At least 1 number (0-9)",
    "At least 1 special characters",
];
</script>

<template>
    <div class="box xl:p-8 xxl:p-10 mb-6">
        <p class="font-medium bb-dashed pb-4 mb-4 md:mb-6 md:pb-6">
            Change Password
        </p>
        <form class="mt-6 xl:mt-8 grid grid-cols-2 gap-4 xxxl:gap-6">
            <div class="col-span-2 md:col-span-1">
                <label for="email" class="md:text-lg font-medium block mb-4">
                    Old Password
                </label>
                <InputPassword placeholder="Old Password" />
            </div>
            <div class="col-span-2 md:col-span-1">
                <label for="email" class="md:text-lg font-medium block mb-4">
                    New Password
                </label>
                <InputPassword placeholder="New Password" />
            </div>
            <div class="col-span-2">
                <label for="email" class="md:text-lg font-medium block mb-4">
                    Confirm Password
                </label>
                <InputPassword placeholder="Confirm Password" />
            </div>
            <div class="col-span-2">
                <p class="font-medium text-lg mb-4">
                    New password must contain :
                </p>
                <ul class="marker:text-primary list-disc list-inside">
                    <li v-for="rule in rules" :key="rule">{{ rule }}</li>
                </ul>
            </div>
            <div class="col-span-2 flex gap-4">
                <button class="btn px-5">Save Changes</button>
                <button class="btn-outline px-5">Cancel</button>
            </div>
        </form>
    </div>
</template>