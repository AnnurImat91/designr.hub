<script setup lang="ts">
import { IconX } from '@tabler/icons-vue';
import { RouterLink } from 'vue-router';
import HorizontalSidebar from '../sidebars/HorizontalSidebar.vue';
import ProfileDropDown from '../topbar/ProfileDropDown.vue';
import ModeSwitcher from '../horizontaltopbar/ModeSwitcher.vue';
import NotificationDropdown from '../horizontaltopbar/NotificationDropdown.vue';
import SwitchLanguage from '../horizontaltopbar/SwitchLanguage.vue';
import Search from '../horizontaltopbar/Search.vue';

defineProps(['isSidebarOpen'])
defineEmits(['toggle-sidebar'])

</script>

<template>
    <nav class="bg-[#F7F7FE] dark:bg-bg3 shadow-md w-full mx-auto fixed z-40">
        <div
            class="px-3 py-3 duration-300 navbar-top z-30 max-w-[1700px] w-full mx-auto md:py-4 xl:py-6 gap-3 flex justify-between items-center">
            <div class="flex justify-between items-center">
                <RouterLink to="/">
                    <img :width="174" :height="38" src="/images/logo-with-text.png" alt="logo" class="hidden lg:block" />
                </RouterLink>
                <button @click="$emit('toggle-sidebar')" class="xxl:hidden">
                    <IconX />
                </button>
            </div>
            <div class="flex items-center gap-3 sm:gap-4 xxl:gap-6">
                <!-- <SelectLayout isWhite={true} />-->
                <Search />
                <ModeSwitcher />
                <NotificationDropdown />
                <SwitchLanguage />
                <ProfileDropDown />
            </div>
        </div>
        <HorizontalSidebar />
    </nav>
</template>