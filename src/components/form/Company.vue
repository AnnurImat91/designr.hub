<script setup lang="ts">
import {
  IconBuilding,
  IconBuildingSkyscraper,
  IconCloudDownload,
  IconHome
} from '@tabler/icons-vue'
import { ref } from 'vue'
import Checkbox from '../shared/Checkbox.vue'
import CommonDropdown from '../shared/CommonDropdown.vue'
const types = [
  {
    icon: IconHome,
    type: 'Solo',
    desc: 'Small Company'
  },
  {
    icon: IconBuilding,
    type: 'LLC',
    desc: 'Medium Company'
  },
  {
    icon: IconBuildingSkyscraper,
    type: 'Corp',
    desc: 'Bigger Company'
  }
]
const stype = ref(types[0].type)
</script>

<template>
  <form class="grid grid-cols-12 box lg:divide-x rtl:lg:divide-x-reverse divide-dashed divide-primary/20 xxl:p-8">
    <div class="col-span-12 lg:col-span-6 ltr:lg:mr-10 rtl:lg:ml-10">
      <div class="box bg-primary/5 dark:bg-bg3 flex flex-col items-center py-10 lg:py-14">
        <IconCloudDownload :size="50" />
        <p class="text-xl text-center font-medium my-4">Drop files here or click to upload</p>
        <input type="file" class="hidden" name="file" id="file" />
        <label for="file" class="text-center cursor-pointer text-primary"> Browse </label>
      </div>
      <div class="mt-6 xl:mt-8 grid grid-cols-2 gap-4 xxxl:gap-6">
        <div class="col-span-2 md:col-span-1">
          <label for="name" class="md:text-lg font-medium block mb-4"> Company Name </label>
          <input type="text"
            class="w-full text-sm focus:outline-none bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-6 py-3"
            placeholder="Enter Name" id="name" required />
        </div>
        <div class="col-span-2 md:col-span-1">
          <label for="email" class="md:text-lg font-medium block mb-4"> Company Email </label>
          <input type="email"
            class="w-full text-sm focus:outline-none bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-6 py-3"
            placeholder="Enter Email" id="email" required />
        </div>
        <div class="col-span-2">
          <label for="website" class="md:text-lg font-medium block mb-4"> Company Website </label>
          <input type="text"
            class="w-full text-sm focus:outline-none bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-6 py-3"
            placeholder="Enter Website" id="website" required />
        </div>
        <div class="col-span-2">
          <label for="website" class="md:text-lg font-medium block mb-4"> Choose Type </label>
          <div class="flex justify-between flex-wrap lg:flex-nowrap gap-4 xxxl:gap-6">
            <div v-for="{ desc, icon, type } in types" :key="type" @click="stype = type"
              class="p-4 xxxl:p-6 w-full sm:w-[31%] cursor-pointer bg-primary/5 dark:bg-bg3 rounded-2xl border flex flex-col items-center justify-center"
              :class="{
                'border-primary': type == stype,
                'border-n40 dark:border-n500': type != stype
              }">
              <div class="rounded-lg p-2 mb-4" :class="{
                'bg-primary text-n0': type == stype,
                'bg-n0 dark:bg-bg4 text-primary': type != stype
              }">
                <component :is="icon"></component>
              </div>
              <span class="mb-2">{{ type }}</span>
              <span class="text-xs xl:text-sm xxxl:text-base text-center">{{ desc }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="ltr:lg:pl-10 rtl:lg:pr-10 col-span-12 lg:col-span-6">
      <div class="mt-6 xl:mt-8 grid grid-cols-2 gap-4 xxxl:gap-6">
        <div class="col-span-2 md:col-span-1">
          <label for="income" class="md:text-lg font-medium block mb-4"> Income </label>
          <input type="text"
            class="w-full text-sm focus:outline-none bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-6 py-3"
            placeholder="Enter Income" id="income" required />
        </div>
        <div class="col-span-2 md:col-span-1">
          <label for="employee" class="md:text-lg font-medium block mb-4"> Employees </label>
          <input type="text"
            class="w-full text-sm focus:outline-none bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-6 py-3"
            placeholder="Enter Employees" id="employee" required />
        </div>
        <div class="col-span-2 md:col-span-1">
          <label for="manager" class="md:text-lg font-medium block mb-4"> Manager </label>
          <input type="text"
            class="w-full text-sm focus:outline-none bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-6 py-3"
            placeholder="Enter Manager" id="manager" required />
        </div>
        <div class="col-span-2 md:col-span-1">
          <label for="employee" class="md:text-lg font-medium block mb-4"> Employees </label>
          <CommonDropdown inputClass="!py-3.5" :options="[{ name: 'Employed' }, { name: 'UnEmployed' }]" />
        </div>
        <div class="col-span-2">
          <label for="notes" class="md:text-lg font-medium block mb-4"> Company Notes </label>
          <textarea
            class="w-full text-sm focus:outline-none bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-6 py-3"
            placeholder="Write some notes..." id="notes" :rows="5" required></textarea>
        </div>
        <div class="col-span-2">
          <Checkbox label="This record is private" />
          <button class="btn mt-6 lg:mt-10">Create Company</button>
        </div>
      </div>
    </div>
  </form>
</template>
