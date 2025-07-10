<script setup lang="ts">
import { sidebarData } from '@/data/sidebarData'
import { useLayoutStore } from '@/stores/layoutStore'
import useWindowSize from '@/utils/useWindowSize'
import { IconChevronRight } from '@tabler/icons-vue'
import { IconX } from '@tabler/icons-vue'
import { onMounted, ref } from 'vue'
import AnimateHeight from 'vue-animate-height'
import { useRouter, RouterLink } from 'vue-router'
const activeMenu = ref('')
const router = useRouter()
const pathName = ref(router.currentRoute.value.fullPath)
const { theme } = useLayoutStore()
const props = defineProps<{
  isSidebarOpen: boolean
  toggleSidebar: () => void
  setSidebar: (value: boolean) => void
}>()

function setActiveMenu(name: string) {
  if (activeMenu.value == name) {
    activeMenu.value = ''
  } else {
    activeMenu.value = name
  }
}
const { windowSize } = useWindowSize()
const handleRouteClick = () => {
  if (windowSize.value < 1400) {
    props.setSidebar(false)
  }
}
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

const isActive = (submenus: any[]) => {
  return submenus.some(({ url }) => pathName.value == url)
}
</script>

<template>
  <div>
    <div
      @click="setSidebar(false)"
      class="duration-500"
      :class="{
        'xxl:hidden max-xxl:inset-0 max-xxl:fixed z-20 bg-n800/40 ': isSidebarOpen && theme.layout == 'Hovered'
      }"
    ></div>
    <aside
      v-if="theme.layout == 'Hovered'"
      class="xxl:w-20 group max-xxl:w-[320px] hover:xxl:w-[336px] z-[21] duration-300 fixed ltr:left-0 rtl:right-0 shadow-lg h-full bg-n0 dark:bg-bg4 top-0"
      :class="{
        'translate-x-0 visible': isSidebarOpen,
        'ltr:-translate-x-full rtl:translate-x-full invisible': !isSidebarOpen
      }"
    >
      <div class="p-4 group-hover:lg:p-6 group-hover:xxl:p-[30px]">
        <div class="flex justify-between xxl:justify-center group-hover:justify-between items-center">
          <RouterLink to="/">
            <img :width="174" :height="38" src="/images/logo-with-text.png" alt="logo" class="xxl:hidden group-hover:xxl:block" />
            <img :width="36" :height="36" src="/images/logoicon.png" alt="logo" class="hidden xxl:block group-hover:hidden" />
          </RouterLink>
          <button @click="toggleSidebar" class="xxl:hidden">
            <IconX />
          </button>
        </div>
      </div>
      <div class="overflow-y-auto fixed right-0 left-0 h-full sidebar-hovered">
        <div class="px-4 group-hover:lg:px-6 group-hover:xxl:px-8 pb-24">
          <div v-for="{ id, items, title } in sidebarData" :key="id">
            <p class="text-xs font-semibold py-3 group-hover:xxl:py-6 border-t-2 border-dashed border-primary/20">
              <span class="xxl:hidden group-hover:block text-xs">{{ title }}</span>
            </p>
            <ul class="mb-5 flex flex-col group-hover:gap-2 xxl:gap-5 4xl:gap-6">
              <li
                v-for="{ id, icon, name, submenus } in items"
                :key="id"
                class="relative"
                :class="{
                  'bg-primary/5 dark:bg-bg3 rounded-xl xxl:rounded-full group-hover:rounded-xl': activeMenu == name
                }"
              >
                <button
                  @click="setActiveMenu(name)"
                  class="max-lg:px-4 max-xxl:px-6 max-xxl:w-full max-xxl:py-3 group-hover:w-full group/btn xxl:bg-primary/5 group-hover:bg-n0 dark:group-hover:bg-bg4 group-hover:border-none xxl:border xxl:border-n30 xxl:dark:border-n500 flex max-xxl:justify-between group-hover:justify-between xxl:h-12 justify-center xxl:w-12 items-center group-hover:lg:px-6 py-2 group-hover:lg:py-3 max-xxl:rounded-2xl xxl:rounded-full group-hover:rounded-2xl hover:!bg-primary hover:text-n0"
                  :class="{ '!bg-primary text-n0': activeMenu == name || isActive(submenus) }"
                >
                  <span class="flex items-center max-xxl:gap-2 group-hover:gap-2">
                    <span class="text-primary group-hover/btn:text-n0" :class="{ '!text-n0': activeMenu == name || isActive(submenus) }">
                      <component :size="22" :is="icon"></component>
                    </span>
                    <span class="xxl:hidden group-hover:block text-sm font-normal">
                      {{ name }}
                    </span>
                  </span>
                  <IconChevronRight class="xxl:hidden rtl:rotate-180 group-hover:block" :class="{ 'ltr:rotate-90 rtl:rotate-90': activeMenu == name }" />
                </button>
                <AnimateHeight :height="activeMenu == name ? 'auto' : 0">
                  <ul class="px-4 xxl:px-5 xxl:hidden py-2 group-hover:block">
                    <li v-for="{ title, url } in submenus" @click="handleRouteClick" :key="title">
                      <RouterLink class="block text-sm py-2 px-6" :class="{ 'text-primary': pathName == url }" :to="url"> <span class="pr-1">•</span> {{ title }} </RouterLink>
                    </li>
                  </ul>
                </AnimateHeight>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </aside>
  </div>
</template>
