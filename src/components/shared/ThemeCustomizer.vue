<script setup lang="ts">
import { IconCheck, IconX } from '@tabler/icons-vue'
import { colors, directions, layoutList } from './ThemeData'
import { useLayoutStore } from '@/stores/layoutStore'
import { onMounted, ref, watch } from 'vue'
const { changeDir, theme, changeLayout, toggleDark } = useLayoutStore()
defineProps(['customizerOpen'])
defineEmits(['toggleCustomizer'])

const currentColor = ref(localStorage.getItem('primary-color') || colors[0])

const changeColor = (color: string) => {
  currentColor.value = color
  localStorage.setItem('primary-color', color)
}

const handleDarkModeChange = () => {
  toggleDark
}

watch(
  () => currentColor.value,
  (newColor) => {
    document.documentElement.style.setProperty('--primary-color', newColor)
  }
)

onMounted(() => {
  document.documentElement.style.setProperty('--primary-color', currentColor.value)
})
</script>

<template>
  <div
    @click="$emit('toggleCustomizer')"
    class="z-[60] duration-500"
    :class="{ 'fixed inset-0 bg-n900 bg-opacity-50': customizerOpen }"
  >
    <aside
      @click.stop=""
      class="w-[280px] xxxl:w-[336px] shadow-sm scrollbar-hidden z-[52] overflow-y-auto duration-300 sidebar fixed ltr:right-0 rtl:left-0 h-full bg-n0 dark:bg-bg4 top-0"
      :class="{
        'translate-x-0 visible': customizerOpen,
        'ltr:translate-x-full rtl:-translate-x-full invisible': !customizerOpen
      }"
    >
      <div class="p-4 flex justify-between items-center border-b border-n30 dark:border-n500">
        <div>
          <h5 class="h5 mb-2">Theme customizer</h5>
          <p class="text-sm">Customize & Preview in Real Time</p>
        </div>
        <button @click="$emit('toggleCustomizer')">
          <IconX />
        </button>
      </div>
      <div class="p-4 border-b border-n30 dark:border-n500">
        <span class="mb-3 text-n60 block text-sm">Themeing</span>
        <h6 class="h6 mb-3">Color Mode</h6>
        <div class="flex gap-x-5 justify-between gap-y-3">
          <p>Dark</p>
          <label class="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              v-model="theme.isDark"
              @change="handleDarkModeChange"
              class="sr-only peer duration-300"
            />
            <div
              class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary after:duration-300"
            ></div>
          </label>
        </div>
        <h6 class="h6 mb-5 mt-6">Presets</h6>
        <div class="grid grid-cols-5 place-items-center gap-3">
          <div v-for="color in colors" :key="color" class="col-span-1">
            <div class="size-10 flex items-center justify-center">
              <button
                :style="{ backgroundColor: `rgb(${color})` }"
                class="rounded-full duration-300 flex items-center justify-center text-neutral-50"
                :class="currentColor == color ? 'size-8' : 'size-6'"
                @click="changeColor(color)"
              >
                <IconCheck :size="20" v-show="currentColor == color" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="p-4 border-b border-n30 dark:border-n500">
        <span class="mb-3 text-n60 block text-sm">Layout</span>
        <h6 class="h6 mb-3">Direction</h6>
        <div class="flex gap-x-5 gap-y-3 flex-wrap mb-7">
          <div v-for="singleDir in directions" :key="singleDir" class="flex items-center">
            <button
              :class="{ 'bg-primary text-n0 border-primary': singleDir == theme.dir }"
              class="px-5 capitalize py-1.5 rounded-lg border dark:border-n500"
              @click="changeDir(singleDir)"
            >
              {{ singleDir }}
            </button>
          </div>
        </div>

        <h6 class="h6 mb-3">Sidebar</h6>
        <div class="flex gap-x-5 gap-y-3 flex-wrap">
          <div v-for="singleLayout in layoutList" :key="singleLayout" class="flex items-center">
            <button
              :class="{ 'bg-primary text-n0 border-primary': singleLayout == theme.layout }"
              class="px-5 capitalize py-1.5 rounded-lg border dark:border-n500"
              @click="changeLayout(singleLayout)"
            >
              {{ singleLayout }}
            </button>
          </div>
        </div>
      </div>
    </aside>
  </div>
</template>
