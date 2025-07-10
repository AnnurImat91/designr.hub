<script setup lang="ts">
import {
    IconCircleKey,
    IconNotes,
    IconSettings,
    IconUser,
    IconUserCircle,
} from "@tabler/icons-vue";
import Profile from "./Profile.vue";
import PersonalDetails from "./PersonalDetails.vue";
import MyAccount from "./MyAccount.vue";
import ChangePassword from "./ChangePassword.vue";
import Settings from "./Settings.vue";
import { ref } from "vue";
const tabData = [
    {
        id: 1,
        name: "Profile",
        icon: IconUser,
        content: Profile,
    },
    {
        id: 2,
        name: "Personal Details",
        icon: IconNotes,
        content: PersonalDetails,
    },
    {
        id: 3,
        name: "My Account",
        icon: IconUserCircle,
        content: MyAccount,
    },
    {
        id: 4,
        name: "Change Password",
        icon: IconCircleKey,
        content: ChangePassword,
    },
    {
        id: 5,
        name: "Settings",
        icon: IconSettings,
        content: Settings,
    },
];
const activeTab = ref(1)
</script>

<template>
    <div>
        <div class="box mb-4 xl:p-4 xxxl:p-6 xxxl:mb-6 grid grid-cols-10 gap-3 md:gap-4 xxxl:gap-6">
            <button v-for="{ id, name, icon } in tabData" :key="id" @click="activeTab = id"
                class="flex px-4 items-center gap-3 rounded-2xl py-2 md:py-3 font-medium xxxl:px-6 col-span-10 min-[420px]:col-span-5 min-[670px]:col-span-3 xxl:col-span-2"
                :class="{ 'bg-primary text-n0': activeTab == id, 'bg-primary/5 text-n700 dark:bg-bg3 dark:text-n0': activeTab != id }">
                <span :class="{ 'text-n0': id == activeTab, 'text-primary': id != activeTab }">
                    <component :is="icon"></component>
                </span>
                <span class="text-xs md:text-sm xxxl:text-base">{{ name }}</span>
            </button>
        </div>
        <div v-for="tab in tabData" :key="tab.id">
            <div v-show="activeTab == tab.id">
                <component :is="tab.content"></component>
            </div>
        </div>
    </div>
</template>