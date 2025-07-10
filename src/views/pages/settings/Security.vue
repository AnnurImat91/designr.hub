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
    <div class="flex flex-col md:flex-row lg:h-[63vh]">
      <MenuSetting />
      <div class="w-full">
        <div class="flex flex-col sm:flex-row">
          <div class="flex-1 p-4">
            <h2 class="text-lg font-semibold mb-1">Reset Password</h2>
            <div for="first-name" class="block text-xs">You can change your password for security needs</div>
            <div class="flex items-center justify-between mt-3">
              <div class="text-sm">Your current password: ry*******45</div>
              <button class="dark:bg-bg3 rounded-lg text-sm px-4 p-2 border border-n30 dark:border-n500">Change</button>
            </div>
            <!-- <div class="flex items-center justify-between mt-5">
              <div>
                <h2 class="text-lg font-semibold mb-1 mt-5">Enable 2-Factor Authentication</h2>
                <div for="first-name" class="block text-xs">You can Enable 2-Factor Authentication</div>
              </div>
              <button class="dark:bg-bg3 rounded-lg text-sm px-4 p-2 mt-4 border border-n30 dark:border-n500">Change</button>
            </div> -->
          </div>
          <!-- <div class="flex-1 p-4">
            <h2 class="text-lg font-semibold mb-1">Account Email</h2>
            <div for="first-name" class="block text-xs">change your verified account email</div>
            <div class="flex items-center justify-between mt-3">
              <div class="text-sm">Your current email: ryu24******.com</div>
              <button class="dark:bg-bg3 rounded-lg text-sm px-4 p-2 border border-n30 dark:border-n500">Change</button>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </div>
  <br />
</template>
