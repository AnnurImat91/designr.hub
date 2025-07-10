<script setup lang="ts">
import CommonDropdown from '../shared/CommonDropdown.vue'

const handleFocus = (e: any) => {
  try {
    e.currentTarget.showPicker()
  } catch (error: any) {
    console.log(error)
  }
}
</script>

<template>
  <form class="grid grid-cols-12 gap-4 xxxl:gap-6">
    <div class="col-span-12 lg:col-span-8">
      <div class="box mb-4 xxxl:mb-6">
        <div class="mb-6 pb-6 bb-dashed">
          <p class="font-medium mb-3">Billing Address</p>
          <div class="flex text-xs md:text-base flex-wrap gap-3 justify-between items-center">
            <p>Transaction ID: <span class="text-primary">25246584</span></p>
            <p>
              Total Payable Amount:
              <span class="text-primary">$1115</span>
            </p>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4 xxxl:gap-6">
          <div class="col-span-2 md:col-span-1">
            <input type="text"
              class="w-full text-sm focus:outline-none bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-6 py-3"
              placeholder="Enter name" id="name" required />
          </div>
          <div class="col-span-2 md:col-span-1">
            <input type="email"
              class="w-full text-sm focus:outline-none bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-6 py-3"
              placeholder="Enter email" id="email" required />
          </div>
          <div class="col-span-2 md:col-span-1">
            <input type="number"
              class="w-full text-sm focus:outline-none bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-6 py-3"
              placeholder="Enter Phone Number" id="number" required />
          </div>
          <div class="col-span-2 md:col-span-1">
            <CommonDropdown inputClass="!py-3.5"
              :options="[{ name: 'USA' }, { name: 'UK' }, { name: 'PAK' }, { name: 'KSA' }]" />
          </div>
          <div class="col-span-2">
            <textarea
              class="w-full text-sm focus:outline-none bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-6 py-3"
              placeholder="Enter Address" id="address" :rows="5" required></textarea>
          </div>
        </div>
      </div>
      <div class="box">
        <div class="mb-6 pb-6 bb-dashed">
          <p class="font-medium mb-6">Payment methods</p>
          <div class="flex gap-6 items-center flex-wrap">
            <label for="credit" class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="method" id="credit" class="accent-primary scale-125" />
              Credit Card
            </label>
            <label for="debit" class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="method" id="debit" class="accent-primary scale-125" />
              Debit Card
            </label>
            <label for="paypal" class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="method" id="paypal" class="accent-primary scale-125" />
              Paypal
            </label>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4 xxxl:gap-6">
          <div class="col-span-2">
            <label for="card" class="md:text-lg font-medium block mb-4"> Card Number </label>
            <input type="number"
              class="w-full text-sm focus:outline-none bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-6 py-3"
              placeholder="Enter name" id="card" required />
          </div>
          <div class="col-span-2 md:col-span-1">
            <label for="expiry" class="md:text-lg font-medium block mb-4"> Expiry Date </label>

            <input type="date"
              class="w-full text-sm focus:outline-none appearance-none bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-6 py-3"
              placeholder="DD/MM/YY" id="expiry" @focus="handleFocus" required />
          </div>
          <div class="col-span-2 md:col-span-1">
            <label for="cvc" class="md:text-lg font-medium block mb-4"> CVC/CVV </label>

            <input type="text"
              class="w-full text-sm focus:outline-none appearance-none bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-6 py-3"
              placeholder="3 digits" id="cvc" required />
          </div>
          <div class="col-span-2">
            <label for="nameoncard" class="md:text-lg font-medium block mb-4"> Name on card </label>
            <input type="text"
              class="w-full text-sm focus:outline-none bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-6 py-3"
              placeholder="Jab Archur" id="nameoncard" required />
          </div>
        </div>
      </div>
    </div>
    <div class="col-span-12 lg:col-span-4">
      <div class="box mb-4 xxxl:mb-6">
        <p class="font-medium mb-6">Enter promo code</p>
        <div
          class="w-full flex justify-between mb-4 bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-[30px] p-2">
          <input type="text" placeholder="Promo Code" class="bg-transparent text-sm w-full focus:outline-none px-4" />
          <button class="btn py-2 px-6">Apply</button>
        </div>
        <span class="text-sm md:text-base">20% Off Discount</span>
      </div>
      <div class="box mb-6">
        <p class="font-medium pb-6 mb-6 lg:pb-8 lg:mb-8 bb-dashed">Order Summery</p>
        <div class="pb-6 mb-6 lg:pb-8 lg:mb-8 bb-dashed flex flex-col gap-3">
          <div class="flex justify-between items-center">
            <span>Subtotal</span>
            <span>$110</span>
          </div>
          <div class="flex justify-between items-center">
            <span>Tax</span>
            <span>$15</span>
          </div>
          <div class="flex justify-between items-center">
            <span>Promo Code</span>
            <span>20% OFF</span>
          </div>
        </div>
        <div class="flex justify-between items-center mb-6">
          <span>Payable Now</span>
          <span class="font-medium">$90</span>
        </div>
        <button class="btn w-full flex justify-center">Payment</button>
      </div>
    </div>
  </form>
</template>
