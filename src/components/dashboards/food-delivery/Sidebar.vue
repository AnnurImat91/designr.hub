<script setup lang="ts">
import { useLayoutStore } from '@/stores/layoutStore'
import { IconMapPin } from '@tabler/icons-vue'
import { IconUpload } from '@tabler/icons-vue'
import { IconDownload } from '@tabler/icons-vue'
import { RouterLink } from 'vue-router'
import CartItem from './CartItem.vue'
import OptionsVertical from '@/components/shared/OptionsVertical.vue'
const { theme } = useLayoutStore()
const cartItems = [
  {
    id: 1,
    title: 'Penne Arrabbiata',
    price: '$5.86',
    img: '/images/cart/item-1.png'
  },
  {
    id: 2,
    title: 'Sushi Rolls',
    price: '$5.86',
    img: '/images/cart/item-2.png'
  },
  {
    id: 3,
    title: 'Burger Deluxe',
    price: '$5.86',
    img: '/images/cart/item-3.png'
  },
  {
    id: 4,
    title: 'Pad Thai',
    price: '$5.86',
    img: '/images/cart/item-4.png'
  },
  {
    id: 5,
    title: 'Miso Soup',
    price: '$5.86',
    img: '/images/cart/item-5.png'
  }
]
</script>

<template>
  <div class="box px-2 sm:px-3 p-3">
    <div class="bg-primary/5 dark:bg-bg3 rounded-2xl p-4 md:p-6">
      <div class="flex justify-between items-center bb-dashed pb-6 mb-6">
        <p class="font-medium">Your Balance</p>
        <OptionsVertical />
      </div>
      <div class="box p-2 sm:p-3">
        <div
          class="bg-primary/5 dark:bg-bg3 rounded-2xl p-2 md:p-6 bg-right-top bg-no-repeat"
          :class="{
            'bg-[url(/images/bg-profile.png)]': !theme.isDark,
            'bg-[url(/images/bg-profile-dark.png)]': theme.isDark
          }"
        >
          <p class="text-xl font-medium mb-4">Balance</p>
          <h2 class="display-4 mb-8">$660.00</h2>
          <div class="flex gap-2 sm:gap-4">
            <RouterLink to="#" class="btn px-2.5 py-1.5 xxxl:py-3 xxxl:px-5 gap-1 sm:gap-2">
              <IconDownload /> Top Up
            </RouterLink>
            <RouterLink to="#" class="btn-outline px-2.5 py-1.5 xxxl:py-3 xxxl:px-5 gap-1 sm:gap-2">
              <IconUpload /> transfer
            </RouterLink>
          </div>
        </div>
      </div>
      <div>
        <p class="pt-6 mt-6 border-t text-xl font-medium border-primary/20 border-dashed">
          Your Address
        </p>
        <div class="flex items-center flex-wrap justify-between mt-5 mb-4 gap-3">
          <div class="flex items-center gap-2">
            <IconMapPin class="text-primary" />
            <h4 class="h4">Map Street, 23</h4>
          </div>
          <button class="btn-outline">Change</button>
        </div>
        <p class="mb-6 lg:mb-8">
          Lorem ipsum is a placeholder text commonly used in the printing and typesetting industr
        </p>
        <div class="flex gap-4 flex-wrap bb-dashed pb-6 mb-6">
          <RouterLink to="#" class="btn"> Add Details </RouterLink>
          <RouterLink to="#" class="btn-outline"> Add Note </RouterLink>
        </div>
        <div class="flex flex-col gap-6 bb-dashed pb-6 mb-6">
          <template v-for="cart in cartItems" :key="cart.id">
            <CartItem :cart="cart" />
          </template>
        </div>
        <div class="flex justify-between items-center mb-4">
          <span>Service Charge</span>
          <p class="font-semibold">+$2.00</p>
        </div>
        <div class="flex justify-between items-center mb-6 lg:mb-8">
          <span class="text-2xl">Total</span>
          <span class="text-2xl font-semibold">$20.00</span>
        </div>
        <RouterLink to="#" class="btn w-full flex justify-center"> Checkout </RouterLink>
      </div>
    </div>
  </div>
</template>
