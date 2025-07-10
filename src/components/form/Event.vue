<script setup lang="ts">
import Checkbox from '../shared/Checkbox.vue'
import OptionsVertical from '../shared/OptionsVertical.vue';

const handleFocus = (e: any) => {
  try {
    e.currentTarget.showPicker()
  } catch (error: any) {
    console.log(error)
  }
}
</script>

<template>
  <div class="grid grid-cols-12 gap-4 xxxl:gap-6">
    <form class="col-span-12">
      <div class="box xl:p-8">
        <div class="flex justify-between items-center bb-dashed pb-6 mb-6">
          <p class="font-medium">New Event</p>
          <OptionsVertical />
        </div>
        <div class="box bg-primary/5 dark:bg-bg3 md:p-4 grid grid-cols-2 gap-4 xl:p-6 xxxl:gap-6 mb-6">
          <div class="col-span-2 bb-dashed pb-6">
            <p class="font-medium mb-1">Create an Event</p>
            <span class="text-xs">Create a new upcoming event</span>
          </div>
          <div class="col-span-2 md:col-span-1">
            <label for="title" class="md:text-lg font-medium block mb-4"> Event Title </label>
            <input type="text"
              class="w-full text-sm focus:outline-none bg-n0 dark:bg-bg4 border border-n30 dark:border-n500 rounded-3xl px-6 py-3"
              placeholder="Enter Title" id="title" required />
          </div>
          <div class="col-span-2 md:col-span-1">
            <label for="email" class="md:text-lg font-medium block mb-4"> Email Address </label>
            <input type="email"
              class="w-full text-sm focus:outline-none bg-n0 dark:bg-bg4 border border-n30 dark:border-n500 rounded-3xl px-6 py-3"
              placeholder="Enter Email" id="email" required />
          </div>
          <div class="col-span-2 md:col-span-1">
            <label for="shortd" class="md:text-lg font-medium block mb-4">
              Short Description
            </label>
            <input type="text"
              class="w-full text-sm focus:outline-none bg-n0 dark:bg-bg4 border border-n30 dark:border-n500 rounded-3xl px-6 py-3"
              placeholder="Write short des..." id="shortd" required />
          </div>
          <div class="col-span-2 md:col-span-1">
            <label for="participants" class="md:text-lg font-medium block mb-4">
              Participants
            </label>
            <input type="text"
              class="w-full text-sm focus:outline-none bg-n0 dark:bg-bg4 border border-n30 dark:border-n500 rounded-3xl px-6 py-3"
              placeholder="Add Participants" id="participants" required />
          </div>
          <div class="col-span-2 md:col-span-1">
            <label for="start" class="md:text-lg font-medium block mb-4"> Start Date </label>

            <input type="date"
              class="w-full text-sm focus:outline-none bg-n0 dark:bg-bg4 border border-n30 dark:border-n500 rounded-3xl px-6 py-3 appearance-none"
              placeholder="Select Date" id="start" @focus="handleFocus" required />
          </div>
          <div class="col-span-2 md:col-span-1">
            <label for="end" class="md:text-lg font-medium block mb-4"> End Date </label>

            <input type="date"
              class="w-full text-sm focus:outline-none bg-n0 dark:bg-bg4 border border-n30 dark:border-n500 rounded-3xl px-6 py-3 appearance-none"
              placeholder="Select Date" id="end" @focus="handleFocus" required />
          </div>
          <div class="col-span-2 md:col-span-1">
            <label for="address" class="md:text-lg font-medium block mb-4"> Address/Street </label>
            <input type="text"
              class="w-full text-sm focus:outline-none bg-n0 dark:bg-bg4 border border-n30 dark:border-n500 rounded-3xl px-6 py-3"
              placeholder="Enter Address" id="address" required />
          </div>
          <div class="col-span-2 md:col-span-1">
            <label for="city" class="md:text-lg font-medium block mb-4"> City </label>
            <input type="text"
              class="w-full text-sm focus:outline-none bg-n0 dark:bg-bg4 border border-n30 dark:border-n500 rounded-3xl px-6 py-3"
              placeholder="Enter City" id="city" required />
          </div>
          <div class="col-span-2 md:col-span-1">
            <label for="category" class="md:text-lg font-medium block mb-4"> Event category </label>
            <input type="text"
              class="w-full text-sm focus:outline-none bg-n0 dark:bg-bg4 border border-n30 dark:border-n500 rounded-3xl px-6 py-3"
              placeholder="Ex: CA" id="category" required />
          </div>
          <div class="col-span-2 md:col-span-1">
            <label for="colorcode" class="md:text-lg font-medium block mb-4">
              Event color code
            </label>
            <input type="text"
              class="w-full text-sm focus:outline-none bg-n0 dark:bg-bg4 border border-n30 dark:border-n500 rounded-3xl px-6 py-3"
              placeholder="Ex: 95422" id="colorcode" required />
          </div>
          <div class="col-span-2">
            <label for="longdesc" class="md:text-lg font-medium block mb-4">
              Long Description
            </label>
            <textarea
              class="w-full text-sm focus:outline-none bg-n0 dark:bg-bg4 border border-n30 dark:border-n500 rounded-3xl px-6 py-3"
              placeholder="Write description..." id="longdesc" :rows="5" required></textarea>
          </div>
          <div class="col-span-2">
            <Checkbox label="This record is private" />
            <div class="flex gap-4 mt-6 lg:mt-10">
              <button type="submit" class="btn hover:shadow-none">Submit</button>
              <button type="reset" class="btn-outline shadow-none">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
