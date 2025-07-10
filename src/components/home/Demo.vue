<script setup lang="ts">
import { demoData } from '@/components/home/demodata'
import { IconArrowUpRight } from '@tabler/icons-vue'
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const currentItems = ref(demoData)
const activeCategory = ref('all')
const categorySet = new Set(demoData.map((item) => item.category))
const categories = ['all', ...Array.from(categorySet)].sort()

const handleCategoryClick = (category: string) => {
    activeCategory.value = category
    category == 'all'
        ? (currentItems.value = demoData)
        : (currentItems.value = demoData.filter((item) => item.category == category))
}

</script>

<template>
    <section id="pages" class="pb-14 xxl:pb-28 bg-n0 dark:bg-bg4 pt-32 xxl:pt-44">
        <div class="container">
            <div class="max-w-4xl mx-auto text-center mb-10 lg:mb-14">
                <h5 class="h5 text-primary font-semibold mb-2 lg:mb-4">Prebuilt Pages</h5>
                <h2 class="h2 mb-4 lg:mb-6">94+ Amazing Demos</h2>
                <p class="text-sm md:text-base">
                    Dashboi ships with 94+ prebuilt pages, including dashboard and app examples, as well as
                    collections like lists, grids, profile and personal pages and many other authentication
                    and utility pages.
                </p>
            </div>
            <div class="grid grid-cols-12 gap-4 xxl:gap-6">
                <div class="max-md:hidden md:col-span-4 lg:col-span-3 xxl:col-span-2">
                    <div
                        class="flex flex-col sticky top-20 xxl:top-24 gap-1 xxxl:gap-2 bg-primary/5 p-2 rounded-xl border border-n30 dark:border-n500">
                        <button v-for="category in categories" :key="category" @click="handleCategoryClick(category)"
                            class="px-4 lg:px-6 py-2.5 xxxl:py-3 rounded-xl duration-300 text-start text-sm lg:text-base capitalize font-medium"
                            :class="{ 'bg-primary text-n0': activeCategory == category }">
                            {{ category }}
                        </button>
                    </div>
                </div>
                <div class="col-span-12 md:col-span-8 lg:col-span-9 xxl:col-span-10 grid grid-cols-2 gap-x-4 xxl:gap-x-6">
                    <RouterLink v-for="{ id, img, title, desc, url } in currentItems" :to="url" :key="id"
                        class="col-span-2 lg:col-span-1 group after:inset-0 after:duration-500 block rounded-xl relative after:absolute after:w-full after:h-[94%] after:rounded-xl hover:after:bg-primary/20">
                        <span
                            class="md:px-10 text-sm lg:text-base px-5 py-2.5 xl:py-3.5 rounded-[32px] duration-300 opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 bg-bg3 text-n0 font-semibold cursor-pointer absolute top-1/3 min-[450px]:top-5/12 lg:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[2]">
                            View Demo
                        </span>
                        <img :src="img" alt="img" class="rounded-xl border w-full border-n30 dark:border-n500" />
                        <div
                            class="max-w-[90%] -translate-y-1/2 bg-n0 dark:bg-bg4 mx-auto rounded-xl border border-n30 dark:border-n500 py-4 px-6 xl:px-8">
                            <h6 class="h6 mb-1 font-semibold">{{ title }}</h6>
                            <p class="text-xs">{{ desc }}</p>
                        </div>
                    </RouterLink>
                </div>
            </div>
        </div>
    </section>
</template>
