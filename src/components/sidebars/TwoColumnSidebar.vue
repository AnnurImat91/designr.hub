<script setup lang="ts">
import { onMounted, ref } from 'vue'
const activeMenu = ref('Personal')
const { theme } = useLayoutStore()
const props = defineProps<{
  isSidebarOpen: boolean
  toggleSidebar: () => void
  setSidebar: (value: boolean) => void
}>()

import { RouterLink, useRouter } from 'vue-router'
import { IconX } from '@tabler/icons-vue'
import { sidebarData } from '@/data/sidebarData'
import useWindowSize from '@/utils/useWindowSize'
import { useLayoutStore } from '@/stores/layoutStore'

const router = useRouter()
const pathName = ref(router.currentRoute.value.fullPath)

const updateActiveMenu = async () => {
  await router.isReady()
  sidebarData.map(({ items }) => items.map(({ submenus, name }) => submenus.map(({ url }) => (url == pathName.value ? (activeMenu.value = name) : ''))))
}

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
// const isActive = (submenus: any[]) => {
//     return submenus.some(({ url }) => pathName.value == url);
// };
</script>

<template>
  <div>
    <div
      @click="setSidebar(false)"
      class="duration-500"
      :class="{
        'xxl:hidden max-xxl:inset-0 max-xxl:fixed z-20 bg-n800/40 ': isSidebarOpen && theme.layout == 'Two Column'
      }"
    ></div>
    <aside
      v-if="theme.layout == 'Two Column'"
      class="w-[280px] xxxl:w-[360px] z-[21] bg-n0 dark:bg-bg3 duration-300 sidebar fixed ltr:left-0 rtl:right-0 h-full top-0"
      :class="{
        'translate-x-0 visible': isSidebarOpen,
        'ltr:-translate-x-full rtl:translate-x-full invisible': !isSidebarOpen
      }"
    >
      <div class="flex">
        <div class="h-screen shrink-0 bg-primary/5 dark:bg-bg3">
          <div class="p-4 xxxl:p-6">
            <div class="flex justify-between items-center">
              <RouterLink to="/" class="rounded-full p-2 inline-block border-n30 dark:border-n500 bg-n0 dark:bg-bg3">
                <img :width="36" :height="36" src="/images/logoicon.png" class="w-full" alt="logo" />
              </RouterLink>
            </div>
          </div>
          <div class="overflow-y-auto fixed h-full sidebar-hovered">
            <div class="px-4 xxxl:px-6 pb-28">
              <div v-for="{ id, items } in sidebarData" :key="id">
                <ul class="mb-5 flex flex-col gap-4 xxxl:gap-6 border-t-2 border-dashed border-primary/20 pt-4 lg:pt-6">
                  <li v-for="{ id, icon, name } in items" :key="id" class="inline-block rounded-xl duration-300">
                    <button
                      @click="activeMenu = name"
                      class="group p-3 rounded-full hover:bg-primary bg-n0 border border-n30 dark:bg-bg3 dark:border-n500 hover:text-n0 duration-300"
                      :class="{ 'bg-primary text-n0 dark:bg-primary': activeMenu == name }"
                    >
                      <span class="text-primary group-hover:text-n0" :class="{ '!text-n0': activeMenu == name }">
                        <component :size="22" :is="icon"></component>
                      </span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="relative grow h-screen bg-n0 dark:bg-bg4">
          <div class="sticky top-0 bg-n0 dark:bg-bg4 w-full">
            <button @click="toggleSidebar" class="xxl:hidden absolute top-3 right-3 z-20">
              <IconX />
            </button>
            <div v-for="{ items, id } in sidebarData" :key="id">
              <div v-for="{ id, name, submenus } in items" :key="id">
                <ul v-show="activeMenu == name" class="pt-4 max-xxl:pt-10">
                  <li v-for="{ title, url } in submenus" @click="handleRouteClick" :key="title">
                    <RouterLink class="text-sm block hover:text-primary duration-300 py-2 md:py-3 px-2.5 xxxl:px-6" :class="{ 'text-primary': pathName == url }" :to="url">
                      <span class="pr-1">•</span> {{ title }}
                    </RouterLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  </div>
</template>
