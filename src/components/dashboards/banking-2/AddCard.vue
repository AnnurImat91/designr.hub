<script setup lang="ts">
import Modal from '@/components/shared/Modal.vue'
defineProps(['isOpen'])
defineEmits(['toggle-open'])
</script>

<template>
  <Modal :isOpen="isOpen" :toggle-open="$emit('toggle-open')" width="max-w-[496px] lg:top-24">
    <div class="mb-4 pb-4 bb-dashed lg:mb-6 lg:pb-6">
      <h4 class="h4">Add Card</h4>
    </div>
    <form>
      <div class="mt-6 xl:mt-8 grid grid-cols-2 gap-4 xxxl:gap-6">
        <div class="col-span-2">
          <label for="card-number" class="md:text-lg font-medium block mb-4"> Card Number </label>
          <div
            class="bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl relative"
          >
            <input
              type="number"
              class="text-sm w-full px-6 py-2.5 md:py-3 bg-transparent rounded-3xl"
              placeholder="5890 - 6858 - 6332 - 9843"
              id="card-number"
              required
            />
            <img
              src="/images/mastercard.png"
              class="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4"
              :width="20"
              :height="20"
              alt="mastercard"
            />
          </div>
        </div>
        <div class="col-span-2">
          <label for="holder" class="md:text-lg font-medium block mb-4"> Card Holder </label>
          <input
            type="text"
            class="w-full text-sm bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-6 py-2.5 md:py-3"
            placeholder="Enter Name"
            id="holder"
            required
          />
        </div>

        <div class="col-span-2 md:col-span-1">
          <label for="month" class="md:text-lg font-medium block mb-4"> Month </label>
          <input
            type="number"
            class="w-full text-sm bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-6 py-2.5 md:py-3"
            placeholder="12"
            id="month"
            required
          />
        </div>
        <div class="col-span-2 md:col-span-1">
          <label for="year" class="md:text-lg font-medium block mb-4"> Year </label>
          <input
            type="number"
            class="w-full text-sm bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-6 py-2.5 md:py-3"
            placeholder="2027"
            id="year"
            required
          />
        </div>

        <div class="col-span-2 mt-4">
          <button class="btn flex w-full justify-center" type="submit">Add Card</button>
        </div>
      </div>
    </form>
  </Modal>
</template>
