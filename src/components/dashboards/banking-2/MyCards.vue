<script setup lang="ts">
import OptionsVertical from '@/components/shared/OptionsVertical.vue'
import { IconPlus } from '@tabler/icons-vue'
import { ref } from 'vue'

import Dialog from 'primevue/dialog'
const visible = ref(false)

const cards = [
  '/images/card-1.png',
  '/images/card-2.png',
  '/images/card-3.png',
  '/images/card-4.png',
  '/images/card-5.png',
  '/images/card-6.png'
]
</script>

<template>
  <div class="col-span-12 box">
    <div class="flex flex-wrap justify-between items-center gap-3 pb-4 lg:pb-6 mb-4 lg:mb-6 bb-dashed">
      <p class="font-medium">My Cards</p>
      <OptionsVertical />
    </div>
    <div class="grid grid-cols-12 gap-4 xxxl:gap-6">
      <div v-for="card in cards" :key="card" class="col-span-12 md:col-span-6 xl:col-span-4 xxxl:col-span-3">
        <img :width="350" :height="229" class="rounded-2xl w-full" :src="card" alt="card img" />
      </div>

      <div @click="visible = true"
        class="col-span-12 md:col-span-6 cursor-pointer xl:col-span-4 xxxl:col-span-3 border border-dashed self-stretch max-xxxl:py-14 w-full rounded-2xl border-primary bg-primary/10 flex flex-col justify-center items-center text-center h-full">
        <button class="bg-primary text-n0 p-2 rounded-full mb-3">
          <IconPlus />
        </button>
        <p class="font-medium mb-2">Add New Credit Card</p>
      </div>
    </div>
  </div>
  <Dialog v-model:visible="visible" header="Add Card" modal :pt="{
    root: ({ state }) => ({
      class: [
        // Shape
        'rounded-xl',
        'shadow-lg',
        'border-0',

        // Size
        'max-h-[90vh] max-w-[496px]',
        'w-[95%]',
        'm-0',

        // Color
        'dark:border',
        'dark:border-n500',

        // Transitions
        'transform',
        'scale-100',

        // Maximized State
        {
          'transition-none': state.maximized,
          'transform-none': state.maximized,
          '!w-screen': state.maximized,
          '!h-screen': state.maximized,
          '!max-h-full': state.maximized,
          '!top-0': state.maximized,
          '!left-0': state.maximized
        }
      ]
    }),
    header: {
      class: [
        // Flexbox and Alignment
        'flex items-center justify-between bb-dashed pb-4 px-3 md:px-6',
        'shrink-0',

        // Spacing
        'pt-6',

        // Shape
        'border-t-0',
        'rounded-tl-xl',
        'rounded-tr-xl',

        // Colors
        'bg-n0 dark:bg-bg3',
        'text-surface-700 dark:text-surface-0/80'
      ]
    },
    title: {
      class: ['font-semibold text-lg md:text-xl xl:text-2xl']
    },
    icons: {
      class: ['flex items-center']
    },
    closeButton: {
      class: [
        'relative',

        // Flexbox and Alignment
        'flex items-center justify-center',

        // Size and Spacing
        'mr-2',
        'last:mr-0',
        'w-8 h-8',

        // Shape
        'border-0',
        'rounded-full',

        // Colors
        // 'text-surface-500',
        'bg-transparent',

        // Transitions
        'transition duration-200 ease-in-out',

        // States
        'hover:text-surface-700 dark:hover:text-white/80',
        'hover:bg-surface-100 dark:hover:bg-surface-800/80',
        // 'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-inset',
        // 'focus:ring-primary-400/50 dark:focus:ring-primary-300/50',

        // Misc
        'overflow-hidden'
      ]
    },
    closeButtonIcon: {
      class: [
        // Display
        'inline-block',

        // Size
        'w-4',
        'h-4'
      ]
    },
    content: ({ state, instance }) => ({
      class: [
        // Spacing
        'px-3 md:px-6',
        'pb-8',
        'pt-0',

        // Shape
        {
          grow: state.maximized,
          'rounded-bl-xl': !instance.$slots.footer,
          'rounded-br-xl': !instance.$slots.footer
        },

        // Colors
        'bg-n0 dark:bg-bg3',

        // Misc
        'overflow-y-auto'
      ]
    }),
    mask: ({ props, state }) => ({
      class: [
        // Transitions
        'transition',
        'duration-200',
        { 'p-2 sm:p-3': !state.maximized },

        // Background and Effects
        { 'bg-black/40': props.modal, 'backdrop-blur-sm': props.modal }
      ]
    }),
    transition: ({ props }) => {
      return props.position === 'top'
        ? {
          enterFromClass: 'opacity-0 scale-75 translate-x-0 -translate-y-full translate-z-0',
          enterActiveClass: 'transition-all duration-200 ease-out',
          leaveActiveClass: 'transition-all duration-200 ease-out',
          leaveToClass: 'opacity-0 scale-75 translate-x-0 -translate-y-full translate-z-0'
        }
        : props.position === 'bottom'
          ? {
            enterFromClass: 'opacity-0 scale-75 translate-y-full',
            enterActiveClass: 'transition-all duration-200 ease-out',
            leaveActiveClass: 'transition-all duration-200 ease-out',
            leaveToClass: 'opacity-0 scale-75 translate-x-0 translate-y-full translate-z-0'
          }
          : props.position === 'left' ||
            props.position === 'topleft' ||
            props.position === 'bottomleft'
            ? {
              enterFromClass:
                'opacity-0 scale-75 -translate-x-full translate-y-0 translate-z-0',
              enterActiveClass: 'transition-all duration-200 ease-out',
              leaveActiveClass: 'transition-all duration-200 ease-out',
              leaveToClass: 'opacity-0 scale-75  -translate-x-full translate-y-0 translate-z-0'
            }
            : props.position === 'right' ||
              props.position === 'topright' ||
              props.position === 'bottomright'
              ? {
                enterFromClass:
                  'opacity-0 scale-75 translate-x-full translate-y-0 translate-z-0',
                enterActiveClass: 'transition-all duration-200 ease-out',
                leaveActiveClass: 'transition-all duration-200 ease-out',
                leaveToClass:
                  'opacity-0 scale-75 opacity-0 scale-75 translate-x-full translate-y-0 translate-z-0'
              }
              : {
                enterFromClass: 'opacity-0 scale-75',
                enterActiveClass: 'transition-all duration-200 ease-out',
                leaveActiveClass: 'transition-all duration-200 ease-out',
                leaveToClass: 'opacity-0 scale-75'
              }
    }
  }">
    <div>
      <form>
        <div class="mt-6 xl:mt-8 grid grid-cols-2 gap-4 xxxl:gap-6">
          <div class="col-span-2">
            <label for="card-number" class="md:text-lg font-medium block mb-4"> Card Number </label>
            <div class="bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl relative">
              <input type="number" class="text-sm w-full px-6 py-2.5 md:py-3 bg-transparent rounded-3xl"
                placeholder="5890 - 6858 - 6332 - 9843" id="card-number" required />
              <img src="/images/mastercard.png" class="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4"
                :width="20" :height="20" alt="mastercard" />
            </div>
          </div>
          <div class="col-span-2">
            <label for="holder" class="md:text-lg font-medium block mb-4"> Card Holder </label>
            <input type="text"
              class="w-full text-sm bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-6 py-2.5 md:py-3"
              placeholder="Enter Name" id="holder" required />
          </div>

          <div class="col-span-2 md:col-span-1">
            <label for="month" class="md:text-lg font-medium block mb-4"> Month </label>
            <input type="number"
              class="w-full text-sm bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-6 py-2.5 md:py-3"
              placeholder="12" id="month" required />
          </div>
          <div class="col-span-2 md:col-span-1">
            <label for="year" class="md:text-lg font-medium block mb-4"> Year </label>
            <input type="number"
              class="w-full text-sm bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-6 py-2.5 md:py-3"
              placeholder="2027" id="year" required />
          </div>

          <div class="col-span-2 mt-4">
            <button class="btn flex w-full justify-center" type="submit">Add Card</button>
          </div>
        </div>
      </form>
    </div>
  </Dialog>
</template>
