<template>
  <div
    @mouseover="hovered = true"
    @mouseleave="hovered = false"
    @click="selectPayment"
    :class="{
      'bg-gray-100': isHovered || hovered,
      'cursor-pointer': true,
      'border-blue-500 border-2': isHovered || hovered || isSelected
    }"
    class="flex items-center justify-between p-4 rounded-lg border border-gray-300"
  >
    <!-- Logo Bank dan Nama Bank -->
    <div class="flex items-center space-x-4">
      <img :src="`/images/${bankName.toLowerCase()}.svg`" alt="logo bank" class="h-8 w-auto" />
      <div class="flex flex-col">
        <span class="text-md font-medium">{{ bankName }} Virtual Account</span>
      </div>
    </div>

    <!-- Fee di kanan -->
    <div class="text-sm font-medium">FEE {{ fee }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'PaymentOption',
  props: {
    bankName: String, // Nama bank (Mandiri, BNI, dll)
    fee: String, // Biaya
    isHovered: Boolean, // Status hover
    isSelected: Boolean // Status terpilih
  },
  setup(props, { emit }) {
    const hovered = ref(false) // Status hover lokal

    // Mengirimkan event ketika bank dipilih
    const selectPayment = () => {
      emit('select', props.bankName)
    }

    return {
      hovered,
      selectPayment
    }
  }
})
</script>

<style scoped>
/* Gaya tambahan atau penyesuaian di sini */
</style>
