<script setup lang="ts">
import { IconCheck } from '@tabler/icons-vue'
import Checkbox from '../shared/Checkbox.vue'
import CommonDropdown from '../shared/CommonDropdown.vue'
import OptionsVertical from '../shared/OptionsVertical.vue'
import StarRating from '../shared/StarRating.vue'
import SocialLinks from '../shared/SocialLinks.vue'
import { IconCirclePlus } from '@tabler/icons-vue'
import { IconMessage } from '@tabler/icons-vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="grid grid-cols-12 gap-4 xxxl:gap-6">
    <form class="col-span-12 lg:col-span-7 xl:col-span-8">
      <div class="box xl:p-8">
        <div class="flex justify-between items-center bb-dashed pb-6 mb-6">
          <p class="font-medium">New Doctor</p>
          <OptionsVertical />
        </div>
        <div class="box bg-primary/5 dark:bg-bg3 md:p-4 grid grid-cols-2 gap-4 xl:p-6 xxxl:gap-6 mb-6">
          <div class="col-span-2 bb-dashed pb-6">
            <p class="font-medium mb-1">General Info</p>
            <span class="text-xs">Some general Information</span>
          </div>
          <div class="col-span-2 md:col-span-1">
            <label for="name" class="md:text-lg font-medium block mb-4"> Name </label>
            <input type="text" class="w-full text-sm focus:outline-none bg-n0 dark:bg-bg4 border border-n30 dark:border-n500 rounded-3xl px-6 py-3" placeholder="Enter Name" id="name" required />
          </div>
          <div class="col-span-2 md:col-span-1">
            <label for="email" class="md:text-lg font-medium block mb-4"> Email </label>
            <input type="email" class="w-full text-sm focus:outline-none bg-n0 dark:bg-bg4 border border-n30 dark:border-n500 rounded-3xl px-6 py-3" placeholder="Enter Email" id="email" required />
          </div>
          <div class="col-span-2 md:col-span-1">
            <label for="experience" class="md:text-lg font-medium block mb-4"> Experience </label>
            <CommonDropdown input-class="!py-3.5 !bg-n0 dark:!bg-bg4" :options="[{ name: '0-5 Years' }, { name: '3-6 Years' }, { name: '5-10 Years' }]" />
          </div>
          <div class="col-span-2 md:col-span-1">
            <label for="speciality" class="md:text-lg font-medium block mb-4"> Speciality </label>
            <CommonDropdown input-class="!py-3.5 !bg-n0 dark:!bg-bg4" :options="[{ name: 'Surgery' }, { name: 'Orthopedix' }, { name: 'Guinocology' }]" />
          </div>
          <div class="col-span-2 md:col-span-1">
            <label for="status" class="md:text-lg font-medium block mb-4"> Status </label>
            <CommonDropdown input-class="!py-3.5 !bg-n0 dark:!bg-bg4" :options="[{ name: 'Intern' }, { name: 'Fresher' }, { name: 'Expert' }]" />
          </div>
          <div class="col-span-2 md:col-span-1">
            <label for="status" class="md:text-lg font-medium block mb-4"> Status </label>
            <div class="w-full focus:outline-none bg-n0 dark:bg-bg4 border border-n30 dark:border-n500 rounded-3xl px-6 py-3">
              <StarRating />
            </div>
          </div>
          <div class="col-span-2">
            <label for="comments" class="md:text-lg font-medium block mb-4"> Comments </label>
            <textarea
              class="w-full text-sm focus:outline-none bg-n0 dark:bg-bg4 border border-n30 dark:border-n500 rounded-xl md:rounded-3xl px-6 py-3"
              placeholder="Write something..."
              id="comments"
              :rows="5"
              required
            ></textarea>
          </div>
        </div>
        <div class="box bg-primary/5 dark:bg-bg3 md:p-4 grid grid-cols-2 gap-4 xl:p-6 xxxl:gap-6">
          <div class="col-span-2 bb-dashed pb-6">
            <p class="font-medium mb-1">Personal Info</p>
            <span class="text-xs">Some personal Information</span>
          </div>
          <div class="col-span-2 md:col-span-1">
            <label for="street" class="md:text-lg font-medium block mb-4"> Address / Street </label>
            <div>
              <input
                type="text"
                class="w-full text-sm focus:outline-none bg-n0 dark:bg-bg4 border border-n30 dark:border-n500 rounded-3xl px-6 py-3"
                placeholder="Enter Address"
                id="street"
                required
              />
            </div>
          </div>
          <div class="col-span-2 md:col-span-1">
            <label for="city" class="md:text-lg font-medium block mb-4"> City </label>
            <input type="text" class="w-full text-sm focus:outline-none bg-n0 dark:bg-bg4 border border-n30 dark:border-n500 rounded-3xl px-6 py-3" placeholder="Enter City" id="city" required />
          </div>
          <div class="col-span-2 md:col-span-1">
            <label for="state" class="md:text-lg font-medium block mb-4"> State/Province </label>
            <input type="text" class="w-full text-sm focus:outline-none bg-n0 dark:bg-bg4 border border-n30 dark:border-n500 rounded-3xl px-6 py-3" placeholder="Ex: CA" id="state" required />
          </div>
          <div class="col-span-2 md:col-span-1">
            <label for="zip" class="md:text-lg font-medium block mb-4"> Zip Code </label>
            <input type="text" class="w-full text-sm focus:outline-none bg-n0 dark:bg-bg4 border border-n30 dark:border-n500 rounded-3xl px-6 py-3" placeholder="Ex: 56251" id="zip" required />
          </div>
        </div>
        <div class="mt-6">
          <Checkbox label="This record is private" />
          <div class="flex gap-4 mt-7 lg:mt-10">
            <button type="submit" class="btn px-4 hover:shadow-none">Submit</button>
            <button type="reset" class="btn-outline px-4 shadow-none">Cancel</button>
          </div>
        </div>
      </div>
    </form>
    <div class="col-span-12 lg:col-span-5 xl:col-span-4">
      <div class="box xl:p-6">
        <div class="bg-primary/5 p-8 dark:bg-bg3 flex flex-col items-center justify-center rounded-2xl h-full">
          <div class="p-3 bg-n0 dark:bg-bg4 rounded-full relative">
            <img :width="120" :height="120" class="rounded-full" src="/images/user-big-1.png" alt="img" />
            <div class="p-1 absolute right-2 bottom-10 bg-primary rounded-full text-n0">
              <IconCheck :size="18" />
            </div>
          </div>
          <h4 class="mt-6 lg:mt-8 h4 mb-3">Dr Jenny Wilson</h4>
          <div class="flex justify-center bb-dashed pb-6 mb-6 w-full">
            <SocialLinks />
          </div>
          <div class="flex justify-center bb-dashed pb-6 mb-6 w-full">
            <div class="flex flex-wrap gap-3 justify-center text-center md:divide-x rtl:md:divide-x-reverse divide-primary/30">
              <div class="px-3">
                <p class="text-lg text-primary font-semibold mb-1">N/A</p>
                <p class="text-sm">Role Status</p>
              </div>
              <div class="px-3">
                <p class="text-lg text-primary font-semibold mb-1">0 - 5</p>
                <p class="text-sm">Years of exp.</p>
              </div>
              <div class="px-3">
                <p class="text-lg text-primary font-semibold mb-1">Lvl. n/a</p>
                <p class="text-sm">Global rating</p>
              </div>
            </div>
          </div>

          <div class="flex gap-3 justify-center">
            <RouterLink to="#" class="btn">
              <IconCirclePlus />
              Follow
            </RouterLink>
            <RouterLink to="#" class="btn-outline">
              <IconMessage />
              Message
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
