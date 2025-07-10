<script setup lang="ts">
import { ref, onMounted } from 'vue'
const scrolled = ref(false)
const menuOpen = ref(false)
const searchResult = ref<ResultType[]>([])
import { demoData } from './demodata'
import { RouterLink, useRouter } from 'vue-router'
import { IconSearch } from '@tabler/icons-vue'
import ModeSwitcher from '../topbar/ModeSwitcher.vue'
import { IconArrowUpRight } from '@tabler/icons-vue'
import { IconMenu2 } from '@tabler/icons-vue'
type ResultType = {
  id: number
  title: string
  img: any
  desc: string
  category: string
  url: string
}
onMounted(() => {
  window.addEventListener('scroll', function () {
    if (this.window.scrollY > 120) {
      scrolled.value = true
    } else {
      scrolled.value = false
    }
  })
})
const handleSearch = (e: any) => {
  const searchTerm = e.target.value.toLowerCase()
  if (!searchTerm.trim()) {
    searchResult.value = []
    return
  }
  const result = demoData.filter(({ title, desc }) => title.toLowerCase().includes(searchTerm) || desc.toLowerCase().includes(searchTerm))
  searchResult.value = result
}
const router = useRouter()
const path = router.currentRoute.value.fullPath
</script>

<template>
  <div class="fixed top-0 w-full max-lg:bg-n0 dark:max-lg:bg-bg4 max-lg:shadow-lg z-10" :class="{ 'bg-n0 dark:bg-bg3 shadow-lg': scrolled }">
    <nav class="container top-0 flex duration-500 justify-between items-center gap-2 py-3 md:py-4 xxl:py-6 4xl:py-8" :class="{ 'lg:py-4 xxl:!py-5': scrolled }">
      <div class="flex items-center gap-2 sm:gap-4 xl:gap-6">
        <RouterLink to="/" class="shrink-0">
          <img :width="174" :height="38" src="/images/logo-with-text.png" class="max-xxl:hidden" alt="logo" />
          <img src="/images/logoicon.png" class="xxl:hidden" alt="logo" />
        </RouterLink>
        <div class="relative" ref="{searchContainerRef}">
          <form
            @submit.prevent
            class="bg-n0 dark:bg-bg4 shrink-0 flex gap-3 rounded-[30px] border max-md:border-n30 lg:border-transparent px-3 xl:px-5 xxl:px-6 items-center justify-between xxl:w-[336px]"
            :class="{ 'bg-primary/5 dark:bg-bg4': scrolled, 'bg-n0': !scrolled, 'bg-primary/5 dark:bg-primary/10': path == '/demos' }"
          >
            <input type="text" placeholder="E.g. sales, stock.." @focus="handleSearch" @input="handleSearch" class="bg-transparent py-2 xxl:py-3 focus:outline-none w-full" />
            <IconSearch />
          </form>
          <div v-show="searchResult.length > 0" class="absolute top-[110%] left-0 max-h-[350px] overflow-y-auto right-0 p-1 rounded-lg flex flex-col bg-n0 dark:bg-bg4">
            <RouterLink v-for="{ id, desc, title, url } in searchResult" :key="id" :to="url" class="flex flex-col gap-1 p-2 hover:bg-primary/5 dark:hover:bg-bg3 rounded-lg duration-300">
              <p class="font-medium text-sm xl:text-base">{{ title }}</p>
              <span class="text-xs">{{ desc }}</span>
            </RouterLink>
          </div>
        </div>
      </div>

      <ul
        class="lg:flex z-20 items-center gap-4 absolute top-full lg:static"
        :class="{ 'bg-n0 dark:bg-bg4 w-full left-0 right-0 p-4 flex text-start translate-x-0 justify-start max-lg:flex-col': menuOpen, 'max-lg:hidden max-lg:-translate-x-full': !menuOpen }"
      >
        <li>
          <a href="#pages">Prebuilt Pages</a>
        </li>
        <li>
          <a href="#layouts">Layouts</a>
        </li>
        <li>
          <a href="#faqs">Faqs</a>
        </li>
      </ul>
      <div class="flex items-center gap-4">
        <ModeSwitcher />
        <a target="_blank" class="btn max-md:hidden" to="https://themeforest.net/checkout/from_item/49662587?license=regular&support=bundle_6month">
          Buy Dashboi
          <IconArrowUpRight :size="20" />
        </a>
      </div>
      <button @click="menuOpen = !menuOpen" class="lg:hidden">
        <IconMenu2 />
      </button>
    </nav>
  </div>
</template>
