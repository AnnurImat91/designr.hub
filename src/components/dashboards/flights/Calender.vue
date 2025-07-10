<script setup lang="ts">
import { ref } from "vue";
import Calendar from 'primevue/calendar';

const date = ref();
</script>

<template>
    <div class="box">
        <p class="pb-4 xl:pb-6 bb-dashed">
            Calendar
        </p>
        <Calendar v-model="date" inline showWeek :pt="{
            root: ({ props }) => ({
                class: [
                    // Display and Position
                    'inline-flex',
                    'max-w-full w-full',
                    'relative',

                    // Misc
                    { 'opacity-60 select-none pointer-events-none cursor-default': props.disabled }
                ]
            }),
            panel: ({ props }) => ({
                class: [
                    // Display & Position
                    {
                        absolute: !props.inline,
                        'inline-block': props.inline
                    },

                    // Size
                    { 'w-auto p-2 ': !props.inline },
                    { 'min-w-[80vw] w-auto p-2 ': props.touchUI },
                    { 'p-2 min-w-full': props.inline },

                    // Shape
                    'rounded-lg',
                    {
                        'shadow-md': !props.inline
                    },

                    // Colors
                    'bg-surface-0 dark:bg-surface-800',
                    'border-surface-200 dark:border-surface-700',

                    //misc
                    { 'overflow-x-auto': props.inline }
                ]
            }),
            datepickerMask: {
                class: ['fixed top-0 left-0 w-full h-full', 'flex items-center justify-center', 'bg-black bg-opacity-90']
            },
            header: {
                class: [
                    //Font
                    'font-semibold',

                    // Flexbox and Alignment
                    'flex items-center justify-between',

                    // Spacing
                    'p-2',
                    'm-0',

                    // Shape
                    // 'border-b',
                    'rounded-t-md',

                    // Colors
                    'text-surface-700 dark:text-white/80',
                    'bg-surface-0 dark:bg-surface-800',
                    'border-surface-200 dark:border-surface-700'
                ]
            },
            previousbutton: {
                class: [
                    'relative',

                    // Flexbox and Alignment
                    'inline-flex items-center justify-center',

                    // Size
                    'w-8 h-8',
                    'p-0 m-0',

                    // Shape
                    'rounded-full',

                    // Colors
                    'text-surface-600 dark:text-white/70',
                    'border-0',
                    'bg-transparent',

                    // Transitions
                    'transition-colors duration-200 ease-in-out',

                    // States
                    'hover:text-surface-700 dark:hover:text-white/80',
                    'hover:bg-surface-100 dark:hover:bg-surface-800/80',

                    // Misc
                    'cursor-pointer overflow-hidden'
                ]
            },
            title: {
                class: [
                    // Text
                    'leading-8',
                    'mx-auto my-0'
                ]
            },
            monthTitle: {
                class: [
                    // Font
                    'text-base leading-5',
                    'font-semibold',

                    // Colors
                    'text-surface-700 dark:text-white/80',

                    // Transitions
                    'transition duration-200',

                    // Spacing
                    'p-2',
                    'm-0 mr-2',

                    // States
                    'hover:text-primary dark:hover:text-primary-400',

                    // Misc
                    'cursor-pointer'
                ]
            },
            yearTitle: {
                class: [
                    // Font
                    'text-base leading-5',
                    'font-semibold',

                    // Colors
                    'text-surface-700 dark:text-white/80',

                    // Transitions
                    'transition duration-200',

                    // Spacing
                    'p-2',
                    'm-0',

                    // States
                    'hover:text-primary-500 dark:hover:text-primary-400',

                    // Misc
                    'cursor-pointer'
                ]
            },
            nextbutton: {
                class: [
                    'relative',

                    // Flexbox and Alignment
                    'inline-flex items-center justify-center',

                    // Size
                    'w-8 h-8',
                    'p-0 m-0',

                    // Shape
                    'rounded-full',

                    // Colors
                    'text-surface-600 dark:text-white/70',
                    'border-0',
                    'bg-transparent',

                    // Transitions
                    'transition-colors duration-200 ease-in-out',

                    // States
                    'hover:text-surface-700 dark:hover:text-white/80',
                    'hover:bg-surface-100 dark:hover:bg-surface-800/80',

                    // Misc
                    'cursor-pointer overflow-hidden'
                ]
            },
            table: {
                class: [
                    // Font
                    'text-base leading-none',
                    // Size & Shape
                    'border-collapse',
                    'w-full',

                    // Spacing
                    'm-0 my-2'
                ]
            },
            tableheadercell: {
                class: [
                    // Spacing
                    'p-0 md:p-2'
                ]
            },
            weekheader: {
                class: ['leading-5', 'text-surface-600 dark:text-white/70', 'opacity-60 cursor-default']
            },
            weeknumber: {
                class: ['text-surface-600 dark:text-white/70', 'opacity-60 cursor-default']
            },
            weekday: {
                class: [
                    // Colors
                    'text-surface-500 dark:text-white/60'
                ]
            },
            day: {
                class: [
                    // Spacing
                    'p-0 md:p-2'
                ]
            },
            weeklabelcontainer: ({ context }: any) => ({
                class: [
                    // Flexbox and Alignment
                    'flex items-center justify-center',
                    'mx-auto',

                    // Shape & Size
                    'w-8 h-8',
                    'rounded-full',
                    'border-transparent border',

                    // Colors
                    {
                        'text-surface-600 dark:text-white/70 bg-transparent': !context.selected && !context.disabled,
                        'text-primary-700 bg-primary-100': context.selected && !context.disabled
                    },

                    // States
                    'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50',
                    {
                        'hover:bg-surface-100 dark:hover:bg-surface-800/80': !context.selected && !context.disabled,
                        'hover:bg-primary-200': context.selected && !context.disabled
                    },
                    {
                        'opacity-60 cursor-default': context.disabled,
                        'cursor-pointer': !context.disabled
                    }
                ]
            }),
            daylabel: ({ context }: any) => ({
                class: [
                    // Flexbox and Alignment
                    'flex items-center justify-center',
                    'mx-auto',

                    // Shape & Size
                    'w-8 h-8',
                    'rounded-full',
                    'border-transparent border',

                    // Colors
                    {
                        'bg-primary text-n0': context.date.today,
                        'text-surface-600 dark:text-white/70 bg-transparent': !context.selected && !context.disabled && !context.date.today,
                        'text-primary-700 bg-primary-100 dark:text-surface-0 dark:bg-primary-300/40': context.selected && !context.disabled
                    },

                    // States
                    // 'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50',
                    {
                        'hover:bg-primary hover:text-n0 dark:hover:bg-surface-600/80': !context.selected && !context.disabled,
                        'hover:bg-primary-200 dark:hover:bg-primary-200/40': context.selected && !context.disabled
                    },
                    {
                        'opacity-60 cursor-default': context.disabled,
                        'cursor-pointer': !context.disabled
                    }
                ]
            }),

            transition: {
                enterFromClass: 'opacity-0 scale-y-[0.8]',
                enterActiveClass: 'transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]',
                leaveActiveClass: 'transition-opacity duration-100 ease-linear',
                leaveToClass: 'opacity-0'
            }
        }
            " />
    </div>
</template>