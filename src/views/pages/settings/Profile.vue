<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ref, onMounted } from "vue";
import { useAuthStore } from '@/stores/auth'
import { useUserStore } from '@/stores/user'
import type { User } from '@/stores/user'
import { useMessage } from 'naive-ui'

const message = useMessage()

const authStore = useAuthStore();
const userStore = useUserStore();
const userProfile = authStore.user;

const userForm = ref<User>({
  _id: userProfile?.data?._id,
  username: userProfile?.data?.username,
  email: userProfile?.data?.email,
  nomor: userProfile?.data?.nomor,
})

const save = async() => {
  try {
    await userStore.updateUser(userForm.value)
    message.success('updated successfully!')
    authStore.userProfile()
  } catch(error: any) {
    console.log('error saved', error)
    message.error('Failed to updated user! ' + error.response.data.message)
  }
}

const undo = () => {
  userForm.value = {
    _id: userProfile?.data?._id,
    username: userProfile?.data?.username,
    email: userProfile?.data?.email,
    nomor: userProfile?.data?.nomor,
  }
}

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
      <div class="w-full">
        <div class="flex flex-col sm:flex-row">
          <div class="flex-1 p-4">
            <div class="flex justify-between items-center">
              <div class="flex gap-3 items-center xxxl:gap-5">
                <img src="/images/user.png" class="w-20 h-20 rounded-lg" alt="img" />
                <div>
                  <p class="text-base md:text-xl">
                    {{ userProfile?.data?.username }} 
                    <o v-if="userProfile?.data?.isPremium">
                      <span class="inline-block bg-yellow-500 ms-2 text-white text-xs font-semibold rounded-md px-3 py-1"> Premium <i class="fa-solid fa-crown text-xs"></i> </span>
                    </o>
                  </p>
                </div>
              </div>
            </div>
            <div class="mt-3">
              <!-- Username -->
              <div class="mb-6">
                <label for="username" class="block text-xs">Username</label>
                <div class="flex items-center border rounded-lg mt-1 p-2">
                  <input v-model="userForm.username" type="text" id="username" class="flex-grow text-sm border-none bg-transparent px-2 focus:ring-0"/>
                </div>
              </div>

              <!-- Personal Information -->
              <div class="mb-6">
                <h2 class="text-lg font-semibold mb-4">Personal Information</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <!-- Email Address -->
                  <div>
                    <label for="first-name" class="block text-xs">Email Address</label>
                    <div class="border rounded-lg mt-1 p-2">
                      <input v-model="userForm.email" type="email" id="" class="text-sm w-full border-none px-2 bg-transparent"/>
                    </div>
                  </div>
                  <!-- Phone -->
                  <div>
                    <label for="first-name" class="block text-xs">Phone</label>
                    <div class="border rounded-lg mt-1 p-2">
                      <input v-model="userForm.nomor" type="number" id="" class="text-sm w-full border-none px-2 bg-transparent" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="p-4 mt-3">
          <button
            @click="save()"
            type="button"
            class="text-white bg-primary hover:bg-primary/80 rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
          >
            Save Change
          </button>
          <button @click="undo()" type="button" class="hover:bg-gray-100 border rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-dark-600 dark:hover:bg-dark-700 focus:outline-none dark:focus:ring-primary-800">
            Undo Change
          </button>
        </div>
        <br />
      </div>
    </div>
  </div>
  <br />
</template>
