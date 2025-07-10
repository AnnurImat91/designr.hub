<script setup lang="ts">
import { ref } from 'vue'
import Checkbox from '@/components/shared/Checkbox.vue'

const isModalOpen = ref(false)

const openModal = () => {
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
}
</script>

<template>
  <div>
    <!-- Desktop Menu -->
    <div class="hidden md:block w-64 p-4">
      <ul class="space-y-1">
        <li>
          <RouterLink to="/settings/profile" class="block p-2 px-4 transition text-sm rounded-lg hover:bg-gray-100" :class="{ 'text-blue-600 bg-blue-100': $route.path === '/settings/profile' }"
            >My Profile</RouterLink
          >
        </li>
        <li>
          <RouterLink
            to="/settings/account-information"
            class="block text-sm p-2 dark:hover:text-gray-700 px-4 transition rounded-lg hover:bg-gray-100"
            :class="{ 'text-blue-600 bg-blue-100': $route.path === '/settings/account-information' }"
            >Account Information</RouterLink
          >
        </li>
        <li>
          <RouterLink
            to="/settings/billing"
            :class="{ 'text-blue-600 bg-blue-100': $route.path === '/settings/billing' }"
            class="block text-sm p-2 dark:hover:text-gray-700 px-4 transition rounded-lg hover:bg-gray-100"
            >Billing</RouterLink
          >
        </li>
        <li>
          <RouterLink
            to="/settings/security"
            :class="{ 'text-blue-600 bg-blue-100': $route.path === '/settings/security' }"
            class="block text-sm p-2 dark:hover:text-gray-700 px-4 transition rounded-lg hover:bg-gray-100"
            >Security</RouterLink
          >
        </li>
        <li>
          <button @click="openModal" type="button" class="block text-sm dark:hover:text-gray-700 p-2 px-4 transition rounded-lg hover:bg-gray-100 w-full text-left">Delete Account</button>
        </li>
      </ul>
    </div>

    <!-- Mobile Menu -->
    <div class="md:hidden overflow-x-auto">
      <ul class="flex space-x-4 p-4">
        <li>
          <RouterLink
            to="/settings/profile"
            class="flex-shrink-0 text-sm p-2 px-4 transition rounded-lg hover:bg-gray-100 whitespace-nowrap"
            :class="{ 'text-blue-600 bg-blue-100': $route.path === '/settings/profile' }"
            >My Profile</RouterLink
          >
        </li>
        <li>
          <RouterLink
            to="/settings/account-information"
            class="flex-shrink-0 text-sm p-2 px-4 transition rounded-lg hover:bg-gray-100 whitespace-nowrap"
            :class="{ 'text-blue-600 bg-blue-100': $route.path === '/settings/account-information' }"
            >Account Information</RouterLink
          >
        </li>
        <li>
          <RouterLink
            to="/settings/billing"
            :class="{ 'text-blue-600 bg-blue-100': $route.path === '/settings/billing' }"
            class="flex-shrink-0 text-sm p-2 px-4 transition rounded-lg hover:bg-gray-100 whitespace-nowrap"
            >Billing</RouterLink
          >
        </li>
        <li>
          <RouterLink
            to="/settings/security"
            :class="{ 'text-blue-600 bg-blue-100': $route.path === '/settings/security' }"
            class="flex-shrink-0 text-sm p-2 px-4 transition rounded-lg hover:bg-gray-100 whitespace-nowrap"
            >Security</RouterLink
          >
        </li>
        <li>
          <button @click="openModal" type="button" class="block dark:hover:text-gray-700 text-sm p-2 px-4 transition rounded-lg hover:bg-gray-100">Delete Account</button>
        </li>
      </ul>
    </div>
  </div>

  <div v-if="isModalOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
    <div class="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg w-100 ms-2 me-2">
      <div class="">
        <div class="text-lg mb-2">Are you sure you want to delete this account?</div>
        <Checkbox label="I have read terms & condition" class="text-blue-500" style="text-decoration: underline" />
        <div class="flex justify-end mt-6">
          <button
            type="button"
            class="text-white bg-primary hover:bg-blue-600 rounded-lg text-sm px-10 py-1.5 me-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
          >
            Yes
          </button>
          <button
            type="button"
            @click="closeModal"
            class="hover:bg-gray-100 border dark:hover:text-gray-700 rounded-lg text-sm px-10 py-1.5 me-2 mb-2 dark:bg-dark-600 dark:hover:bg-dark-700 focus:outline-none dark:focus:ring-primary-800"
          >
            No
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
