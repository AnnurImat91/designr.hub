<template>
  <div class="flex justify-between items-center gap-3 md:gap-1">
    <div class="flex items-center gap-2 md:gap-4 xxxl:gap-6">
      <div class="h-10 w-10 md:h-14 md:w-14">
        <img v-bind:src="cart.img" alt="img" class="rounded-full" width="54" height="54" />
      </div>
      <div>
        <p class="text-sm sm:text-base xxxl:text-xl mb-2">{{ cart.title }}</p>
        <p class="text-xs md:text-base text-primary font-semibold">
          {{ cart.price }}
        </p>
      </div>
    </div>
    <div class="flex gap-2 xxxl:gap-3 items-center">
      <button
        @click="handleSubtract"
        class="p-0.5 sm:p-1 border rounded-full border-primary text-primary hover:bg-primary hover:text-n0 duration-300"
      >
        <IconMinus :size="18" />
      </button>
      <span
        class="w-6 h-6 sm:w-8 sm:h-8 rounded-full flex justify-center items-center bg-primary text-n0"
      >
        {{ quantity }}
      </span>
      <button
        @click="handleAdd"
        class="p-0.5 sm:p-1 border rounded-full border-primary text-primary hover:bg-primary hover:text-n0 duration-300"
      >
        <IconPlus :size="18" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { IconMinus, IconPlus } from '@tabler/icons-vue'

defineProps(['cart'])
const quantity = ref(1)

const handleSubtract = () => {
  if (quantity.value > 1) {
    quantity.value--
  }
}

const handleAdd = () => {
  quantity.value++
}
</script>
