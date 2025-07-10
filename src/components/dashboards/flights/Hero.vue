<script setup lang="ts">
import CommonDropdown from '@/components/shared/CommonDropdown.vue'
import { IconSearch } from '@tabler/icons-vue'

const handleFocus = (e: any) => {
  try {
    e.currentTarget.showPicker()
  } catch (error: any) {
    console.log(error)
  }
}
</script>

<template>
  <div
    class="col-span-12 rounded-2xl p-4 sm:p-6 md:p-10 xxl:p-[72px] xxl:pb-[139px] relative after:absolute after:w-full after:h-full after:inset-0 after:bg-no-repeat after:rounded-2xl rtl:after:scale-x-[-1] after:bg-[url('/images/flights-banner-bg.png')] after:bg-cover shadow-[0px_6px_30px_0px_rgba(0,0,0,0.06)]">
    <div class="relative z-[2]">
      <h1 class="h1 text-n0 max-w-[752px] mb-10">
        Secure Your Journey with Hassle-free Air Ticket Booking
      </h1>
      <div class="bg-n0 dark:bg-bg4 max-w-[864px] rounded-2xl p-3 sm:p-4 lg:py-5 lg:px-6">
        <form>
          <div class="flex flex-wrap items-center gap-4 mb-6">
            <div class="flex items-center gap-2 accent-primary">
              <input type="radio" id="one-way" name="trip" class="scale-125" defaultChecked />
              <label class="cursor-pointer" for="one-way"> One Way </label>
            </div>
            <div class="flex items-center gap-2 accent-primary">
              <input type="radio" id="round-trip" name="trip" class="scale-125" />
              <label class="cursor-pointer" for="round-trip"> Round Trip </label>
            </div>
            <div class="flex items-center gap-2 accent-primary">
              <input type="radio" id="multi-city" name="trip" class="scale-125" />
              <label class="cursor-pointer" for="multi-city"> Multi City </label>
            </div>
          </div>
          <div class="grid grid-cols-12 lg:grid-cols-9 gap-4">
            <div class="col-span-12 sm:col-span-6 lg:col-span-2">
              <CommonDropdown :options="[
                { name: 'New York' },
                { name: 'Florida' },
                { name: 'Jerusalem' },
                { name: 'Kairo' }
              ]" placeholder-props="Select From" input-class="!py-3" />
            </div>
            <div class="col-span-12 sm:col-span-6 lg:col-span-2">
              <CommonDropdown :options="[
                { name: 'Delhi' },
                { name: 'Dhaka' },
                { name: 'Islamabad' },
                { name: 'Kabul' }
              ]" placeholder-props="Select To" input-class="!py-3" />
            </div>
            <div class="col-span-12 sm:col-span-6 lg:col-span-2">
              <label for="date"
                class="border select-none cursor-pointer border-n40 dark:border-n500 flex gap-2 justify-between items-center rounded-[30px] bg-primary/5 dark:bg-bg3 px-6 py-2.5 w-full">
                <input type="date" @focus="handleFocus" class="bg-transparent text-sm w-full focus:outline-none" />
              </label>
            </div>
            <div class="col-span-12 sm:col-span-6 lg:col-span-2">
              <CommonDropdown :options="[{ name: 'Class One' }, { name: 'Class 2' }]" placeholder-props="Select Class"
                input-class="!py-3" />
            </div>
            <div class="col-span-12 sm:col-span-6 lg:col-span-1">
              <button class="btn py-2.5 px-5 max-[400px]:w-full flex justify-center max-lg:px-16">
                <IconSearch />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
