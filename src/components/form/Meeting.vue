<script setup lang="ts">
import {
  IconCalendarEvent,
  IconCirclePlus,
  IconCloudDownload,
  IconMapPin,
  IconPlus,
  IconPointFilled,
  IconVideo
} from '@tabler/icons-vue'
import { ref } from 'vue'
import Checkbox from '../shared/Checkbox.vue'

const users = [
  '/images/user-2.png',
  '/images/user-3.png',
  '/images/user-4.png',
  '/images/user-5.png',
  '/images/user-6.png',
  '/images/user-7.png',
  '/images/user-8.png',
  '/images/user-9.png',
  '/images/user-10.png',
  '/images/user-11.png',
  '/images/user-12.png'
]
const colors = [
  {
    title: '1',
    text: 'text-primary',
    border: 'border-primary'
  },
  {
    title: '2',
    text: 'text-secondary1',
    border: 'border-secondary1'
  },
  {
    title: '3',
    text: 'text-secondary2',
    border: 'border-secondary2'
  },
  {
    title: '4',
    text: 'text-secondary3',
    border: 'border-secondary3'
  },
  {
    title: '5',
    text: 'text-secondary3dark',
    border: 'border-secondary3dark'
  }
]
const color = ref(colors[0].text)
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
    <div class="col-span-12 lg:col-span-6">
      <form class="box">
        <div class="flex flex-wrap gap-3 justify-between items-center bb-dashed mb-6 pb-6">
          <div>
            <p class="font-medium mb-2">Meeting details</p>
            <span class="text-sm">Add some meeting details</span>
          </div>
          <RouterLink to="#" class="btn lg:px-6">
            <IconCirclePlus />
            <span>Add People</span>
          </RouterLink>
        </div>
        <p class="text-lg font-medium mb-3">Participants</p>
        <div class="flex">
          <img v-for="user in users" :key="user" :src="user" :width="32" :height="32"
            class="border border-n0 dark:border-n500 -mr-3 rounded-full" alt="img" />
          <div
            class="border flex items-center justify-center text-n0 border-n0 dark:border-n500 rounded-full bg-primary w-8 h-8">
            <IconPlus :size="22" />
          </div>
        </div>
        <div class="flex flex-col gap-4 lg:gap-6 mt-6">
          <div>
            <label for="location" class="md:text-lg font-medium block mb-3">
              Meeting Location
            </label>
            <div
              class="bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl flex items-center px-4 gap-1">
              <IconMapPin class="text-n100" :size="18" />
              <input type="text" class="w-full text-sm focus:outline-none bg-transparent py-3"
                placeholder="Enter Location" id="location" required />
            </div>
          </div>
          <div>
            <label for="url" class="md:text-lg font-medium block mb-3"> Meeting URL </label>
            <div
              class="bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl flex items-center px-4 gap-1">
              <IconVideo class="text-n100" :size="18" />
              <input type="text" class="w-full text-sm focus:outline-none bg-transparent py-3"
                placeholder="Ex: https://zoom.us/m/55626526554" id="url" required />
            </div>
          </div>
          <div>
            <label for="calender" class="md:text-lg font-medium block mb-3"> Calender </label>
            <div
              class="bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl flex items-center px-4 gap-1">
              <IconCalendarEvent class="text-n100" :size="18" />
              <input type="date" @focus="handleFocus"
                class="w-full text-sm focus:outline-none bg-transparent py-3 appearance-none" id="calender" required />
            </div>
          </div>
          <div>
            <label for="desc" class="md:text-lg font-medium block mb-3"> Description </label>
            <textarea
              class="w-full text-sm focus:outline-none bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-6 py-3"
              placeholder="Write description..." id="desc" :rows="5" required></textarea>
          </div>
          <div>
            <label for="attachment" class="md:text-lg font-medium block mb-3"> Attachments </label>
            <div class="box bg-primary/5 dark:bg-bg3 flex flex-col items-center py-10 lg:py-14">
              <IconCloudDownload :size="50" />
              <p class="text-base lg:text-xl text-center font-medium my-4">Drop files here or click to upload</p>
              <input type="file" class="hidden" name="file" id="file" />
              <label for="file" class="text-center cursor-pointer text-primary"> Browse </label>
            </div>
          </div>
          <div>
            <label for="color" class="md:text-lg font-medium block mb-3"> Color code </label>
            <div class="flex gap-6">
              <span v-for="{ border, text, title } in colors" @click="color = text" :key="title"
                class="border-2 cursor-pointer rounded-full" :class="[border, text]">
                <IconPointFilled :class="{ 'text-n0 dark:text-bg4': text != color, text: text == color }" />
              </span>
            </div>
          </div>
          <div>
            <label for="notification" class="md:text-lg font-medium block mb-3">
              Notifications
            </label>
            <div class="grid grid-cols-2 gap-6">
              <div class="col-span-2 sm:col-span-1">
                <Checkbox label="General Notifications" />
              </div>
              <div class="col-span-2 sm:col-span-1">
                <Checkbox label="Tem Notifications" />
              </div>
              <div class="col-span-2 sm:col-span-1">
                <Checkbox label="Auto Reminders" />
              </div>
              <div class="col-span-2 sm:col-span-1">
                <Checkbox label="Modifications" />
              </div>
            </div>
          </div>
        </div>
        <div class="flex gap-4 md:gap-6 mt-6 lg:mt-10">
          <button class="btn">Save</button>
          <button class="btn-outline">Reset</button>
        </div>
      </form>
    </div>
    <div class="col-span-12 lg:col-span-6">
      <form class="box">
        <div class="bb-dashed mb-6 pb-6">
          <p class="font-medium mb-2">Meeting details</p>
          <span class="text-sm">Add some meeting details</span>
        </div>
        <label for="about" class="md:text-lg font-medium block mb-4">
          What is this meeting about?
        </label>
        <input type="text"
          class="w-full text-sm focus:outline-none bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-6 py-3 mb-6"
          placeholder="Short desc..." id="about" required />
        <div class="grid grid-cols-4 gap-3 xxl:gap-4">
          <div class="col-span-4 lg:col-span-2 xxl:col-span-1">
            <label for="startDate" class="md:text-lg font-medium block mb-3"> Start Date </label>
            <div
              class="bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl flex items-center px-3 gap-1">
              <IconCalendarEvent class="text-n100 shrink-0" :size="22" />
              <input type="date" @click="handleFocus"
                class="w-full appearance-none text-sm focus:outline-none bg-transparent py-3" id="startDate" required />
            </div>
          </div>
          <div class="col-span-4 lg:col-span-2 xxl:col-span-1">
            <label for="endDate" class="md:text-lg font-medium block mb-3"> End Date </label>
            <div
              class="bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl flex items-center px-3 gap-1">
              <IconCalendarEvent class="text-n100 shrink-0" :size="22" />
              <input type="date" @click="handleFocus"
                class="w-full appearance-none text-sm focus:outline-none bg-transparent py-3" id="endDate" required />
            </div>
          </div>
          <div class="col-span-4 lg:col-span-2 xxl:col-span-1">
            <label for="startTime" class="md:text-lg font-medium block mb-3"> Start Time </label>
            <div
              class="bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl flex items-center px-3 gap-1">
              <IconCalendarEvent class="text-n100 shrink-0" :size="22" />
              <input type="time" @click="handleFocus"
                class="w-full appearance-none text-sm focus:outline-none bg-transparent py-3" id="startTime" required />
            </div>
          </div>
          <div class="col-span-4 lg:col-span-2 xxl:col-span-1">
            <label for="endTime" class="md:text-lg font-medium block mb-3"> End Time </label>
            <div
              class="bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl flex items-center px-3 gap-1">
              <IconCalendarEvent class="text-n100 shrink-0" :size="22" />
              <input type="time" @click="handleFocus"
                class="w-full appearance-none text-sm focus:outline-none bg-transparent py-3" id="endTime" required />
            </div>
          </div>
        </div>
        <div class="mt-6">
          <label for="freq" class="md:text-lg font-medium block mb-4"> Meeting frequency </label>
          <div class="flex gap-4">
            <label for="all" class="flex items-center gap-2 cursor-pointer">
              <input type="radio" id="all" :checked="true" name="freq" class="accent-primary scale-125" />All Day
            </label>
            <label for="week" class="flex items-center gap-2 cursor-pointer">
              <input type="radio" id="week" name="freq" class="accent-primary scale-125" />
              Repeat every week
            </label>
          </div>
        </div>
        <div class="flex gap-4 md:gap-6 mt-6 lg:mt-10">
          <button class="btn">Save</button>
          <button class="btn-outline">Cancel</button>
        </div>
      </form>
    </div>
  </div>
</template>
