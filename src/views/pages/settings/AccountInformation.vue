<script setup lang="ts">
import { RouterLink } from 'vue-router'
import MenuSetting from './components/MenuSetting.vue'
</script>
<template>
  <h2 class="mb-3">Settings</h2>
  <div class="text-sm mb-3">Update your profile details to reflect your latest information and preferences.</div>
  <div class="box">
    <div class="gap-3 pb-4 lg:pb-6">
      <div class="flex flex-wrap justify-between items-center">
        <p class="font-medium"><i class="fa fa-gear me-2"></i>Settings</p>
      </div>
    </div>
    <div class="flex flex-col md:flex-row">
      <MenuSetting />
      <div class="w-full p-4">
        <div class="text-center">
          <div class="text-sm">Your current subscription is</div>
          <h1 class="text-4xl">
            1 Year <span class="bg-gradient-to-r text-4xl from-blue-600 to-cyan-500 inline-block text-transparent bg-clip-text"> Premium </span> <i class="fa-solid fa-crown text-yellow-400"></i>
          </h1>
          <p class="text-xs mt-2">This package includes the following applications available for you</p>

          <div class="flex items-center justify-center">
            <div class="w-[700px]">
              <div class="grid grid-cols-8 gap-4 mt-8">
                <div class="w-16 h-16 bg-gray-200 rounded-md flex items-center justify-center">App</div>
                <div class="w-16 h-16 bg-gray-200 rounded-md flex items-center justify-center">App</div>
                <div class="w-16 h-16 bg-gray-200 rounded-md flex items-center justify-center">App</div>
                <div class="w-16 h-16 bg-gray-200 rounded-md flex items-center justify-center">App</div>
                <div class="w-16 h-16 bg-gray-200 rounded-md flex items-center justify-center">App</div>
                <div class="w-16 h-16 bg-gray-200 rounded-md flex items-center justify-center">App</div>
                <div class="w-16 h-16 bg-gray-200 rounded-md flex items-center justify-center">App</div>
                <div class="w-16 h-16 bg-gray-200 rounded-md flex items-center justify-center">App</div>
                <div class="w-16 h-16 bg-gray-200 rounded-md flex items-center justify-center">App</div>
                <div class="w-16 h-16 bg-gray-200 rounded-md flex items-center justify-center">App</div>
                <div class="w-16 h-16 bg-gray-200 rounded-md flex items-center justify-center">App</div>
                <div class="w-16 h-16 bg-gray-200 rounded-md flex items-center justify-center">App</div>
                <div class="w-16 h-16 bg-gray-200 rounded-md flex items-center justify-center">App</div>
                <div class="w-16 h-16 bg-gray-200 rounded-md flex items-center justify-center">App</div>
                <div class="w-16 h-16 bg-gray-200 rounded-md flex items-center justify-center">App</div>
                <div class="w-16 h-16 bg-gray-200 rounded-md flex items-center justify-center">App</div>
                <div class="w-16 h-16 bg-gray-200 rounded-md flex items-center justify-center">App</div>
                <div class="w-16 h-16 bg-gray-200 rounded-md flex items-center justify-center">App</div>
                <div class="w-16 h-16 bg-gray-200 rounded-md flex items-center justify-center">App</div>
                <div class="w-16 h-16 bg-gray-200 rounded-md flex items-center justify-center">App</div>
                <div class="w-16 h-16 bg-gray-200 rounded-md flex items-center justify-center">App</div>
                <div class="w-16 h-16 bg-gray-200 rounded-md flex items-center justify-center">App</div>
                <div class="w-16 h-16 bg-gray-200 rounded-md flex items-center justify-center">App</div>
                <div class="w-16 h-16 bg-gray-200 rounded-md flex items-center justify-center">App</div>
                <div class="w-16 h-16 bg-gray-200 rounded-md flex items-center justify-center">App</div>
                <div class="w-16 h-16 bg-gray-200 rounded-md flex items-center justify-center">App</div>
                <div class="w-16 h-16 bg-gray-200 rounded-md flex items-center justify-center">App</div>
                <div class="w-16 h-16 bg-gray-200 rounded-md flex items-center justify-center">App</div>
                <div class="w-16 h-16 bg-gray-200 rounded-md flex items-center justify-center">App</div>
                <div class="w-16 h-16 bg-gray-200 rounded-md flex items-center justify-center">App</div>
                <div class="w-16 h-16 bg-gray-200 rounded-md flex items-center justify-center">App</div>
                <div class="w-16 h-16 bg-gray-200 rounded-md flex items-center justify-center">App</div>
                <div class="w-16 h-16 bg-gray-200 rounded-md flex items-center justify-center">App</div>
                <div class="w-16 h-16 bg-gray-200 rounded-md flex items-center justify-center">App</div>
                <div class="w-16 h-16 bg-gray-200 rounded-md flex items-center justify-center">App</div>
                <div class="w-16 h-16 bg-gray-200 rounded-md flex items-center justify-center">App</div>
                <div class="w-16 h-16 bg-gray-200 rounded-md flex items-center justify-center">App</div>
                <div class="w-16 h-16 bg-gray-200 rounded-md flex items-center justify-center">App</div>
                <div class="w-16 h-16 bg-gray-200 rounded-md flex items-center justify-center">App</div>
                <div class="w-16 h-16 bg-gray-200 rounded-md flex items-center justify-center">App</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
