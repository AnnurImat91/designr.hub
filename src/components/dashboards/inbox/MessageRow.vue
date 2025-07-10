<script setup lang="ts">
import { IconStarFilled } from '@tabler/icons-vue'
import { IconStar } from '@tabler/icons-vue'
import { ref } from 'vue'
defineProps<{
  id: number;
  sender: string;
  title: string;
  desc: string;
  date: string;
  isChecked: boolean;
  handleSelect: (e: any) => void
}>()
const favorite = ref(false)
</script>

<template>
  <tr class="border border-n30 dark:border-n500 cursor-pointer group" :class="{
    'bg-primary/20': isChecked,
    'bg-primary/5 dark:bg-bg3 first:bg-n0 dark:first:bg-bg4': !isChecked
  }">
    <td class="py-3 md:py-5 ltr:pl-6 ltr:lg:pl-8 rtl:pr-6 rtl:lg:pr-7">
      <div class="flex items-center relative gap-2 cursor-pointer">
        <input type="checkbox" :checked="isChecked" @change="handleSelect" :name="sender"
          class="opacity-0 absolute h-6 w-6" />
        <div
          class="bg-n0 dark:bg-bg4 border gap-2 border-gray-200 group-hover:border-gray-400 rounded w-5 h-5 flex shrink-0 justify-center items-center focus-within:border-primary">
          <svg class="fill-current hidden w-[10px] h-[10px] text-primary pointer-events-none" version="1.1"
            viewBox="0 0 17 12" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
              <g transform="translate(-9 -11)" fill="#363AED" fillRule="nonzero">
                <path
                  d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
              </g>
            </g>
          </svg>
        </div>
      </div>
    </td>
    <td class="py-3 md:py-5 px-2">
      <button @click="favorite = !favorite" class="flex items-center">
        <IconStarFilled v-if="favorite" :size="20" class="text-secondary3dark" />
        <IconStar class="text-n50" v-else :size="20" />
      </button>
    </td>
    <td class="py-3 md:py-5 px-2">
      <span>{{ sender }}</span>
    </td>
    <td class="py-3 md:py-5 px-2">
      <div class="flex items-center gap-3">
        <span class="font-medium">{{ title }}</span>
        <span>-</span>
        <span>{{ desc.slice(0, 50) + '...' }}</span>
      </div>
    </td>
    <td class="py-3 md:py-5 ltr:pl-2 rtl:pr-2 ltr:pr-6 ltr:lg:pr-8 rtl:pl-6 rtl:lg:pr-7">
      <span>{{ date }}</span>
    </td>
  </tr>
</template>
