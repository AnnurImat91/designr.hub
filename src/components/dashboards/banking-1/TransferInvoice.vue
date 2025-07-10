<script setup lang="ts">
import CommonDropdown from '@/components/shared/CommonDropdown.vue'
import OptionsVertical from '@/components/shared/OptionsVertical.vue'
import { IconArrowNarrowRight } from '@tabler/icons-vue'
import Recipients from './Recipients.vue'
</script>

<template>
  <div class="col-span-12 xl:col-span-4 xxxl:col-span-6 box">
    <div
      class="flex flex-wrap justify-between items-center gap-3 pb-4 lg:pb-6 mb-4 lg:mb-6 bb-dashed"
    >
      <p class="font-medium">Transfer & Send Invoice</p>
      <OptionsVertical />
    </div>
    <p class="text-xl mb-6 font-semibold">Recent Recipient</p>
    <Recipients />
    <form>
      <p class="mb-4">See All Contacts</p>
      <CommonDropdown
        :options="[{ name: 'X Bank' }, { name: 'Y Bank' }, { name: 'Z Bank' }]"
        input-class="w-full xl:py-2.5 xl:px-5"
      />

      <p class="mt-6 mb-4">Amount</p>
      <div class="flex gap-3 mb-6 lg:mb-8">
        <CommonDropdown
          placeholder-props="$"
          :options="[{ name: '$' }, { name: '€' }, { name: '£' }, { name: '¥' }]"
          input-class="w-20 xl:py-2.5 xl:px-4 text-lg"
        />
        <input
          type="number"
          class="border text-sm border-n40 dark:border-n500 w-full focus:outline-none flex gap-2 justify-between items-center rounded-[30px] bg-primary/5 dark:bg-bg3 px-4 py-2 [-moz-appearance:_textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
          placeholder="0.00"
        />
      </div>
      <div class="flex items-center gap-3 mb-8 xl:mb-10">
        <input type="checkbox" id="check" />
        <label for="check" class="cursor-pointer"> Funds will reach destination tomorrow. </label>
      </div>
      <div class="flex flex-wrap gap-6">
        <button class="btn">Transfer Funds</button>
        <div class="flex items-center flex-wrap gap-4">
          <p class="flex text-primary font-medium items-center gap-2">
            Apply More
            <IconArrowNarrowRight />
          </p>
          <div class="flex items-center gap-3">
            <RouterLink
              to="#"
              class="inline-flex py-2 px-3 rounded-full border border-primary/20 dark:bg-n900"
            >
              <img width="38" height="21" src="/images/paypal.png" alt="icon" />
            </RouterLink>
            <RouterLink
              to="#"
              class="inline-flex py-2 px-3 rounded-full border border-primary/20 dark:bg-n900"
            >
              <img width="38" height="21" src="/images/visa.png" alt="icon" />
            </RouterLink>
            <RouterLink
              to="#"
              class="inline-flex py-2 px-3 rounded-full border border-primary/20 dark:bg-n900"
            >
              <img width="38" height="21" src="/images/payoneer.png" alt="icon" />
            </RouterLink>
            <RouterLink
              to="#"
              class="inline-flex py-2 px-3 rounded-full border border-primary/20 dark:bg-n900"
            >
              <img width="38" height="21" src="/images/mastercard.png" alt="icon" />
            </RouterLink>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
