<script setup lang="ts">
import CartItem from '@/components/dashboards/food-delivery/CartItem.vue'
import OptionsVertical from '@/components/shared/OptionsVertical.vue'

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
  },
  {
    id: 6,
    title: 'Burger Deluxe',
    price: '$5.86',
    img: '/images/cart/item-3.png'
  }
]
</script>

<template>
  <div class="col-span-12 md:col-span-6 xl:col-span-4 box xl:p-10">
    <div class="flex justify-between items-center mb-6 pb-6 bb-dashed">
      <p class="font-medium">Food Orders</p>
      <OptionsVertical />
    </div>
    <div class="flex flex-col gap-6">
      <CartItem v-for="cart in cartItems" :cart="cart" :key="cart.id" />
    </div>
  </div>
</template>
