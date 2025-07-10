<script setup lang="ts">
import NavbarTopVue from '@/components/shared/NavbarTop.vue'
import VerticalSidebar from '@/components/sidebars/VerticalSidebar.vue'
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useLayoutStore } from '@/stores/layoutStore'
import Footer from '@/components/shared/Footer.vue'
import TwoColumnSidebar from '@/components/sidebars/TwoColumnSidebar.vue'
import HoveredSidebar from '@/components/sidebars/HoveredSidebar.vue'
import TopNavHorizontal from '@/components/shared/TopNavHorizontal.vue'
import useWindowSize from '@/utils/useWindowSize'

const { theme } = useLayoutStore()

const isSidebarOpen = ref(false)
const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}
const setSidebar = (value: boolean) => {
  isSidebarOpen.value = value
}
// Watcher to check window width and update isOpen
const handleWindowResize = () => {
  isSidebarOpen.value = window.innerWidth > 1400
}

onMounted(() => {
  // Initial check when the component is mounted
  handleWindowResize()

  // Attach event listener for window resize
  window.addEventListener('resize', handleWindowResize)
})

onBeforeUnmount(() => {
  // Remove event listener when the component is unmounted
  window.removeEventListener('resize', handleWindowResize)
})
const { windowSize } = useWindowSize()
</script>
<style>
.dark .group {
  background-image: none !important;
}
</style>
<template>
  <div class="w-full min-h-screen group bg-no-repeat bg-cover bg-center dark:bg-gray-900" style="background-image: url('/images/background/bg-dashboard-user.png')">
    <NavbarTopVue v-show="theme.layout != 'Horizontal' || (theme.layout == 'Horizontal' && windowSize < 1400)" :is-sidebar-open="isSidebarOpen" :toggle-sidebar="toggleSidebar" />
    <TopNavHorizontal v-show="theme.layout == 'Horizontal' && windowSize > 1400" />
    <!-- Sidebar -->
    <VerticalSidebar
      :set-sidebar="setSidebar"
      v-show="theme.layout === 'Vertical' || (theme.layout == 'Horizontal' && windowSize < 1400)"
      :is-sidebar-open="isSidebarOpen"
      :toggleSidebar="toggleSidebar"
    />
    <TwoColumnSidebar v-show="theme.layout === 'Two Column'" :is-sidebar-open="isSidebarOpen" :toggle-sidebar="toggleSidebar" :set-sidebar="setSidebar" />
    <HoveredSidebar v-show="theme.layout === 'Hovered'" :is-sidebar-open="isSidebarOpen" :toggleSidebar="toggleSidebar" :set-sidebar="setSidebar" />

    <main
      class="pt-[72px] md:pt-20 xl:pt-[98px] transition-all duration-500"
      :class="{
        'ltr:xxl:ml-[280px] ltr:xxxl:ml-[336px] rtl:xxl:mr-[280px] rtl:xxxl:mr-[336px]': isSidebarOpen && theme.layout === 'Vertical',
        'ltr:xxl:ml-[280px] ltr:xxxl:ml-[360px] rtl:xxl:mr-[280px] rtl:xxxl:mr-[360px]': isSidebarOpen && theme.layout === 'Two Column',
        'ltr:xxl:ml-20 rtl:xxl:mr-20': isSidebarOpen && theme.layout == 'Hovered',
        'xxl:!pt-[172px]': theme.layout == 'Horizontal'
      }"
    >
      <div class="px-3 sm:px-4" :class="{ 'max-w-[1700px] mx-auto': theme.layout == 'Horizontal' }">
        <slot />
      </div>
      <!-- <Footer /> -->
    </main>
  </div>
</template>

<style scoped></style>
