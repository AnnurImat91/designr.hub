<script setup lang="ts">
import { onMounted, ref } from 'vue'
import AnimateHeight from 'vue-animate-height'
const activeMenu = ref('')
const { theme } = useLayoutStore()
const props = defineProps<{
  isSidebarOpen: boolean
  toggleSidebar: () => void
  setSidebar: (value: boolean) => void
}>()

import { RouterLink, useRouter } from 'vue-router'
import {
  IconChevronRight,
  IconX,
  IconLogout,
  IconHome2,
  IconServer,
  IconServerBolt,
  IconServerCog,
  IconWorld,
  IconFileInvoice,
  IconHeadset,
  IconAffiliate,
  IconPresentation,
  IconPercentage
} from '@tabler/icons-vue'
import { sidebarData } from '@/data/sidebarData'
import useWindowSize from '@/utils/useWindowSize'
import { useLayoutStore } from '@/stores/layoutStore'
import { useAuthStore } from '@/stores/auth';
import axios from 'axios';

const router = useRouter()
const pathName = ref(router.currentRoute.value.fullPath)
const authStore = useAuthStore();

function setActiveMenu(name: string) {
  if (activeMenu.value == name) {
    activeMenu.value = ''
  } else {
    activeMenu.value = name
  }
}

const updateActiveMenu = async () => {
  await router.isReady()
  sidebarData.map(({ items }) => items.map(({ submenus, name }) => submenus.map(({ url }) => (url == pathName.value ? (activeMenu.value = name) : ''))))
}

const handleLogout = async () => {
  authStore.logout();
  try {
    // Hit logout ke backend
    await axios.post(`${import.meta.env.VITE_API_URL}api/auth/logout`, {
      withCredentials: true
    });
  } catch (error: any) {
    console.error(error);
  } finally {
    // Redirect ke halaman home setelah logout (misalnya "/")
    router.push('/login');
  }
};

const updatePathName = () => {
  pathName.value = router.currentRoute.value.fullPath
}
onMounted(() => {
  router.afterEach(updatePathName)
})
onMounted(updateActiveMenu)

const { windowSize } = useWindowSize()
const handleRouteClick = () => {
  if (windowSize.value < 1400) {
    props.setSidebar(false)
  }
}
const isActive = (submenus: any[]) => {
  return submenus.some(({ url }) => pathName.value == url)
}
</script>
<template>
  <div>
    <div @click="setSidebar(false)" class="duration-500" :class="{
      'xxl:hidden max-xxl:inset-0 max-xxl:fixed z-20 bg-n800/10 ': isSidebarOpen && theme.layout == 'Vertical'
    }"></div>
    <div @click="setSidebar(false)" class="duration-500" :class="{
      'xxl:hidden max-xxl:inset-0 max-xxl:fixed z-20 bg-n800/20 ': isSidebarOpen && theme.layout == 'Horizontal'
    }"></div>

    <aside v-if="theme.layout == 'Vertical' || (theme.layout == 'Horizontal' && windowSize < 1400)" ref="target"
      class="w-[280px] xxxl:w-[336px] shadow-sm z-[21] min-h-screen duration-300 border-r dark:border-gray-900 fixed bg-n0 dark:bg-bg4"
      :class="{
        'translate-x-0 visible': isSidebarOpen,
        'ltr:-translate-x-full rtl:translate-x-full invisible': !isSidebarOpen
      }">
      <div class="p-4 xxl:px-6 xxxl:px-[30px] xxl:py-5">
        <div class="flex justify-between items-center">
          <RouterLink to="/">
            <!-- <img :width="150" src="/logo.png" alt="logo" /> -->
            <div
              class="w-[150px] h-[50px] bg-contain bg-no-repeat bg-center bg-[url('/logo.png')] dark:bg-[url('/logo-putih.png')]">
            </div>
          </RouterLink>
          <button class="xxl:hidden" @click="toggleSidebar">
            <IconX />
          </button>
        </div>
      </div>
      <div class="overflow-y-auto fixed right-0 left-0 h-full">
        <div class="px-4 xxl:px-6 xxxl:px-8 pb-24">
          <RouterLink to="/home" :class="{ 'text-n0 border-l-4  border-blue-600': $route.path === '/home' }"
            class="px-4 w-full mb-1 group flex justify-between items-center xxxl:px-6 py-2.5 lg:py-2 rounded-sm hover:bg-gray-100 hover:!text-n0 duration-300">
            <span class="flex items-center gap-2">
              <span class="text-gray-400 group-hover:text-gray-400">
                <i class="fa-solid fa-house"
                  :class="{ 'bg-gradient-to-r from-blue-600 to-cyan-500 inline-block text-transparent bg-clip-text': $route.path === '/home' }"></i>
              </span>
              <span class="text-sm ms-2 text-gray-500"
                :class="{ 'text-gray-900 dark:text-white': $route.path === '/home' }">Home</span>
            </span>
          </RouterLink>

          <RouterLink to="/activity-log"
            :class="{ 'text-n0 border-l-4  border-blue-600': $route.path === '/activity-log' }"
            class="px-4 w-full mb-1 group flex justify-between items-center xxxl:px-6 py-2.5 lg:py-2 rounded-sm hover:bg-gray-100 hover:!text-n0 duration-300">
            <span class="flex items-center gap-2">
              <span class="text-gray-400 group-hover:text-gray-400">
                <i class="fa-solid fa-chart-simple"
                  :class="{ 'bg-gradient-to-r from-blue-600 to-cyan-500 inline-block text-transparent bg-clip-text': $route.path === '/activity-log' }"></i>
              </span>
              <span class="text-sm ms-2 text-gray-500"
                :class="{ 'text-gray-900 dark:text-white': $route.path === '/activity-log' }">Activity Log</span>
            </span>
          </RouterLink>

          <RouterLink to="/items" :class="{ 'text-n0 border-l-4  border-blue-600': $route.path === '/items' }"
            class="px-4 w-full mb-1 group flex justify-between items-center xxxl:px-6 py-2.5 lg:py-2 rounded-sm hover:bg-gray-100 hover:!text-n0 duration-300">
            <span class="flex items-center gap-2">
              <span class="text-gray-400 group-hover:text-gray-400">
                <i class="fa-solid fa-gift"
                  :class="{ 'bg-gradient-to-r from-blue-600 to-cyan-500 inline-block text-transparent bg-clip-text': $route.path === '/items' }"></i>
              </span>
              <span class="text-sm ms-2 text-gray-500"
                :class="{ 'text-gray-900 dark:text-white': $route.path === '/items' }">Items</span>
            </span>
          </RouterLink>

          <p class="text-xs pt-5 pb-2 border-t-2 border-dashed border-gray mt-4">Tools</p>

          <RouterLink to="/extention-download"
            :class="{ 'text-n0 border-l-4  border-blue-600': $route.path === '/extention-download' }"
            class="px-4 w-full mb-1 group flex justify-between items-center xxxl:px-6 py-2.5 lg:py-2 rounded-sm hover:bg-gray-100 hover:!text-n0 duration-300">
            <span class="flex items-center gap-2">
              <span class="text-gray-400 group-hover:text-gray-400">
                <i class="fa-solid fa-download"
                  :class="{ 'bg-gradient-to-r from-blue-600 to-cyan-500 inline-block text-transparent bg-clip-text': $route.path === '/extention-download' }"></i>
              </span>
              <span class="text-sm ms-2 text-gray-500"
                :class="{ 'text-gray-900 dark:text-white': $route.path === '/extention-download' }">Extention
                Download</span>
            </span>
          </RouterLink>

          <RouterLink to="/installation-guide"
            :class="{ 'text-n0 border-l-4  border-blue-600': $route.path === '/installation-guide' }"
            class="px-4 w-full mb-1 group flex justify-between items-center xxxl:px-6 py-2.5 lg:py-2 rounded-sm hover:bg-gray-100 hover:!text-n0 duration-300">
            <span class="flex items-center gap-2">
              <span class="text-gray-400 group-hover:text-gray-400">
                <i class="fa-solid fa-video"
                  :class="{ 'bg-gradient-to-r from-blue-600 to-cyan-500 inline-block text-transparent bg-clip-text': $route.path === '/installation-guide' }"></i>
              </span>
              <span class="text-sm ms-2 text-gray-500"
                :class="{ 'text-gray-900 dark:text-white': $route.path === '/installation-guide' }">Installation
                Guide</span>
            </span>
          </RouterLink>

          <p class="text-xs pt-5 pb-2 border-t-2 border-dashed border-gray mt-4">History</p>

          <RouterLink to="/purchase-history"
            :class="{ 'text-n0 border-l-4  border-blue-600': $route.path === '/purchase-history' }"
            class="px-4 w-full mb-12 group flex justify-between items-center xxxl:px-6 py-2.5 lg:py-2 rounded-sm hover:bg-gray-100 hover:!text-n0 duration-300">
            <span class="flex items-center gap-2">
              <span class="text-gray-400 group-hover:text-gray-400">
                <i class="fa-solid fa-clock-rotate-left"
                  :class="{ 'bg-gradient-to-r from-blue-600 to-cyan-500 inline-block text-transparent bg-clip-text': $route.path === '/purchase-history' }"></i>
              </span>
              <span class="text-sm ms-2 text-gray-500"
                :class="{ 'text-gray-900 dark:text-white': $route.path === '/purchase-history' }">Purchase
                History</span>
            </span>
          </RouterLink>

          <div class="box bg-gray-100">
            <div class="flex items-center">
              <i class="fa-solid fa-circle-question text-gray-400 me-2 text-sm"></i>
              <div class="text-gray-500 text-sm">Need Help?</div>
            </div>
            <p class="text-xs text-gray-500 mt-1"><a href="" class="text-blue-500"> Get in touch </a> with one of our
              experts or <a href="" class="text-blue-500">visit our FAQ </a>.</p>
          </div>

          <p class="text-xs pt-5 pb-2 mt-4">General</p>

          <RouterLink to="/settings/profile" :class="{
            'text-n0 border-l-4  border-blue-600':
              $route.path === '/settings/profile' || $route.path === '/settings/account-information' || $route.path === '/settings/billing' || $route.path === '/settings/security'
          }"
            class="px-4 w-full mb-1 group flex justify-between items-center xxxl:px-6 py-2.5 lg:py-2 rounded-sm hover:bg-gray-100 hover:!text-n0 duration-300">
            <span class="flex items-center gap-2">
              <span class="text-gray-400 group-hover:text-gray-400">
                <i class="fa-solid fa-gear" :class="{
                  'bg-gradient-to-r from-blue-600 to-cyan-500 inline-block text-transparent bg-clip-text':
                    $route.path === '/settings/profile' || $route.path === '/settings/account-information' || $route.path === '/settings/billing' || $route.path === '/settings/security'
                }"></i>
              </span>
              <span class="text-sm ms-2 text-gray-500" :class="{
                'text-gray-900 dark:text-white':
                  $route.path === '/settings/profile' || $route.path === '/settings/account-information' || $route.path === '/settings/billing' || $route.path === '/settings/security'
              }">Settings</span>
            </span>
          </RouterLink>

          <div @click="handleLogout"
            class="px-4 w-full mb-1 group flex justify-between items-center xxxl:px-6 py-2.5 lg:py-2 rounded-sm hover:bg-gray-100 hover:!text-n0 duration-300 cursor-pointer">
            <span class="flex items-center gap-2">
              <span class="text-gray-400 group-hover:text-gray-400">
                <i class="fa-solid fa-right-from-bracket"></i>
              </span>
              <span class="text-sm ms-2 text-gray-500">Logout</span>
            </span>
          </div>

          <!-- <div v-for="sidebar in sidebarData" :key="sidebar.id">
            <p class="text-xs font-semibold py-4 xl:py-5 border-t-2 border-dashed border-primary/20">
              {{ sidebar.title }}
            </p>
            <ul class="mb-5 flex flex-col gap-2">
              <li v-for="menu in sidebar.items" :key="menu.id" class="relative rounded-xl duration-300" :class="{ 'bg-primary/5 dark:bg-bg3': activeMenu == menu.name }">
                <button
                  @click="setActiveMenu(menu.name)"
                  class="px-4 w-full group flex justify-between items-center xxxl:px-5 py-2.5 xxl:py-3.5 rounded-lg hover:bg-primary hover:text-n0 duration-300"
                  :class="{
                    'bg-primary text-n0': isActive(menu.submenus) || activeMenu == menu.name
                  }"
                >
                  <span class="flex items-center gap-2">
                    <span class="text-primary group-hover:text-n0" :class="{ '!text-n0': isActive(menu.submenus) || activeMenu == menu.name }">
                      <component :size="20" :is="menu.icon"></component>
                    </span>
                    <span class="text-sm">
                      {{ menu.name }}
                    </span>
                  </span>
                  <IconChevronRight :size="18" class="duration-300 rtl:rotate-180 transition-transform" :class="{ 'ltr:rotate-90 rtl:rotate-90': activeMenu == menu.name }" />
                </button>
                <AnimateHeight :height="activeMenu == menu.name ? 'auto' : 0" :duration="500" :id="menu.name">
                  <ul class="px-2 xl:px-3 py-2">
                    <li @click="handleRouteClick" v-for="submenu in menu.submenus" :key="submenu.title">
                      <RouterLink class="block py-1.5 xl:py-2 text-sm hover:text-primary duration-300 capitalize px-3 xxl:px-4" :to="submenu.url">
                        <span class="ltr:pr-2 rtl:pl-2">•</span>
                        <span class="whitespace-nowrap text-sm">{{ submenu.title }}</span>
                      </RouterLink>
                    </li>
                  </ul>
                </AnimateHeight>
              </li>
            </ul>
          </div> -->
        </div>
        <!-- <div class="px-4 xxl:px-6 xxxl:px-8 pb-28">
          <RouterLink to="/login-1" class="px-4 w-full group flex justify-between items-center xxxl:px-6 py-2.5 lg:py-2 rounded-2xl hover:bg-primary hover:text-n0 duration-300">
            <span class="flex items-center gap-2">
              <span class="text-primary group-hover:text-n0">
                <IconLogout class="w-5 h-5 lg:w-6 lg:h-6" />
              </span>
              <span class="text-sm">Log Out</span>
            </span>
          </RouterLink>
        </div> -->
      </div>
    </aside>
  </div>
</template>

<style lang="css" scoped>
.router-link-exact-active {
  color: rgb(var(--primary-color));
}

.text-black {
  color: black;
}

.icon-active {
  background: linear-gradient(to right, #ff7e5f, #feb47b);
  /* Gradasi warna */
  -webkit-background-clip: text;
  /* Hanya memotong warna pada teks */
  -webkit-text-fill-color: transparent;
  /* Membuat bagian non-teks transparan */
}
</style>
