<script setup lang="ts">
import { layoutsHorizontal, sidebarData } from '@/data/sidebarHorizontal'
import { IconChevronDown, IconChevronRight } from '@tabler/icons-vue'
import { onMounted, ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
const activeMenu = ref('')
const router = useRouter()
const pathName = ref(router.currentRoute.value.fullPath)

const updateActiveMenu = async () => {
  await router.isReady()
  sidebarData.map(({ submenus, title }) => submenus.map(({ url }) => (url == pathName.value ? (activeMenu.value = title) : '')))
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
  <div class="w-full bg-n0 dark:bg-bg4">
    <div class="mx-auto max-w-[1700px] py-4 flex justify-between items-center px-3">
      <ul class="relative flex gap-2">
        <li :key="id" v-for="{ id, submenus, title } in sidebarData" class="group relative cursor-pointer px-3 py-2.5">
          <span class="flex items-center duration-300 hover:text-primary" :class="{ 'text-primary': isActive(submenus) }">
            <span class="text-sm">{{ title }}</span>
            <IconChevronDown v-if="submenus" :size="20" />
          </span>
          <ul
            class="group-hover:event-unset pointer-events-none invisible absolute ltr:left-0 rtl:right-0 top-[120%] min-w-[200px] bg-n7 p-3 text-n2 opacity-0 duration-300 group-hover:visible group-hover:top-full group-hover:opacity-100 lg:px-5 bg-n0 dark:bg-bg3 shadow-[rgba(99,99,99,0.2)_0px_2px_8px_0px] rounded-md"
          >
            <li v-for="{ title, url } in submenus" :key="title" class="min-w-[180px]">
              <RouterLink
                class="relative inline-block py-2 hover:text-primary duration-200 text-sm after:absolute after:bottom-0 after:right-0 after:h-0.5 after:w-0 after:bg-secondary after:transition-all after:duration-300 hover:after:left-0 hover:after:right-auto hover:after:w-full"
                :class="{ 'text-primary': pathName == url }"
                :to="url"
              >
                {{ title }}
              </RouterLink>
            </li>
          </ul>
        </li>
      </ul>
      <div class="relative group">
        <button class="text-sm flex items-center gap-2 py-3">
          More
          <IconChevronDown :size="20" />
        </button>
        <ul
          class="absolute group-hover:event-unset pointer-events-none invisible group-hover:visible duration-300 transition-all translate-y-5 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 group-hover:flex flex-col bg-n0 dark:bg-bg3 rounded-md w-full min-w-[200px] rtl:left-0 ltr:right-0 top-full shadow-[rgba(99,99,99,0.2)_0px_2px_8px_0px]"
        >
          <li v-for="{ id, name, submenus } in layoutsHorizontal" :key="id" class="min-w-[200px] w-full relative group/submenu">
            <button class="flex w-full justify-between text-sm items-center px-4 py-2.5 hover:text-primary duration-300">
              {{ name }}
              <IconChevronRight v-if="submenus" class="rtl:rotate-180" :size="20" />
            </button>
            <ul
              class="absolute group-hover/submenu:event-unset pointer-events-none invisible group-hover/submenu:visible ltr:right-full rtl:left-full shadow-[rgba(99,99,99,0.2)_0px_2px_8px_0px] top-0 opacity-0 group-hover/submenu:opacity-100 duration-300 min-w-[200px] group-hover/submenu:flex flex-col bg-n0 dark:bg-bg3 border border-n0 dark:border-n800 rounded-md"
            >
              <li v-for="{ title, url } in submenus" :key="title">
                <RouterLink :to="url" class="px-4 py-2.5 inline-block hover:text-primary text-sm duration-300" :class="{ 'text-primary': pathName == url }">
                  {{ title }}
                </RouterLink>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
