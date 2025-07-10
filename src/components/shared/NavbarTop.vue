<script lang="ts" setup>
import ModeSwitcherVue from '@/components/topbar/ModeSwitcher.vue'
import { IconMenu2, IconSearch } from '@tabler/icons-vue'
import { useLayoutStore } from '@/stores/layoutStore'
import NotificationDropdown from '../topbar/NotificationDropdown.vue'
import SwitchLanguage from '../topbar/SwitchLanguage.vue'
import ProfileDropDown from '../topbar/ProfileDropDown.vue'
import useWindowSize from '@/utils/useWindowSize'
const { windowSize } = useWindowSize()
const { theme } = useLayoutStore()
defineProps<{
  isSidebarOpen: boolean
  toggleSidebar: () => void
}>()
</script>
<template>
  <nav
    class="px-4 xxl:px-6 py-2 xl:py-3 shadow-sm duration-300 dark:border-b dark:border-n700 navbar-top z-20 xxl:py-3.5 gap-3 bg-n0 dark:bg-bg4 fixed flex justify-between items-center"
    :class="{
      'w-full xxxl:w-[calc(100%-336px)] xxl:w-[calc(100%-280px)] ltr:xxxl:ml-[336px] ltr:xxl:ml-[280px] rtl:xxxl:mr-[336px] rtl:xxl:mr-[280px]':
        (isSidebarOpen && theme.layout == 'Vertical') || (theme.layout == 'Horizontal' && windowSize < 1400),
      'w-full xxxl:w-[calc(100%-360px)] xxl:w-[calc(100%-280px)] ltr:xxxl:ml-[360px] ltr:xxl:ml-[280px] rtl:xxxl:mr-[360px] rtl:xxl:mr-[280px]': isSidebarOpen && theme.layout == 'Two Column',
      'w-full xxl:w-[calc(100%-80px)] ltr:xxl:ml-[80px] rtl:xxl:mr-[80px]': isSidebarOpen && theme.layout == 'Hovered',
      'w-full': !isSidebarOpen
    }"
  >
    <div class="flex grow md:gap-4 xxl:gap-6 items-center">
      <button @click="toggleSidebar">
        <IconMenu2 />
      </button>
      <form class="bg-primary/5 dark:bg-bg3 hidden md:flex gap-3 rounded-lg border border-transparent focus-within:border-primary px-3 xxl:px-3 items-center justify-between max-w-[493px] w-full">
        <button>
          <IconSearch :size="20" />
        </button>
        <input type="text" placeholder="Search" class="bg-transparent py-2 md:py-2.5 xxl:py-3 focus:outline-none w-full" />
      </form>
      <!-- <SelectLayout /> -->
    </div>
    <div class="flex items-center gap-3 sm:gap-4 xxl:gap-6">
      <ModeSwitcherVue />
      <NotificationDropdown />
      <!-- <SwitchLanguage /> -->
      <div class="text-gray-300">|</div>
      <ProfileDropDown />
    </div>
  </nav>
</template>
