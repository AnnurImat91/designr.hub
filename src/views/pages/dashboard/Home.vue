<script setup lang="ts">
import ActivityLogComponent from '@/views/pages/dashboard/components/ActivityLog.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<template>
  <h2 class="mb-3">Dashboard</h2>
  <div class="text-sm mb-3">Your account information details</div>
  <div class="grid grid-cols-12 gap-4">
    <div class="col-span-12 lg:col-span-6">
      <div class="box">
        <div class="flex items-center">
          <div>
            <div class="text-xs mb-3">Your package</div>
            <div class="text-4xl">Premium</div>
            <div class="text-1xl mt-2">Your premium package active untill 2 January 2040</div>
            <div class="text-xs mt-4 mb-5">
              Your premium account is now active! Enjoy all the exclusive features we've unlocked for you. Get started
              now and make the most of your premium experience!
            </div>
          </div>
          <img src="/public/images/crown straight.png" class="w-[150px] ms-3" alt="" />
        </div>
        <a href="/packages" type="button"
          class="text-white bg-primary hover:bg-primary/80 focus:ring-primary-300 rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
          <i class="fa-solid fa-cart-shopping me-2 text-sm"></i>Buy more package
        </a>
      </div>
      <div class="box mt-3 mb-3">
        <div class="mb-4">
          <div class="flex flex-wrap justify-between items-center">
            <p class="font-medium"><i class="fa fa-download me-2"></i> Download extension</p>
            <div class="flex items-center gap-2">
              <RouterLink to="/extention-download" class="text-blue-500 text-xs">See More</RouterLink>
            </div>
          </div>
          <div class="text-xs mt-1">
            Don't miss out on the latest tools and features from our extension <br />
            for the best experience.
          </div>
        </div>
        <div class="flex items-center justify-between">
          <div>
            <div class="text-2xl">Let's Get Started!</div>
            <div class="text-xs mt-2 mb-5">Only premium users can access the extension.</div>
          </div>
          <img src="/public/images/space rocket.png" class="w-[100px] ms-3 me-12" alt="" />
        </div>
        <br />
        <button
          class="text-white bg-primary hover:bg-primary/80 rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
          <i class="fa-solid fa-file-arrow-down me-2 text-sm"></i>Extension Download
        </button>
        <button @click="router.push('/installation-guide')"
          class="hover:bg-gray-100 border rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-dark-600 dark:hover:bg-dark-700 focus:outline-none dark:focus:ring-primary-800">
          <i class="fa-solid fa-book me-2 text-sm"></i>User installation guide
        </button>
      </div>
    </div>
    <div class="col-span-12 lg:col-span-6">
      <ActivityLogComponent />
      <div class="box mt-3 mb-3">
        <div class="mb-4">
          <div class="flex flex-wrap justify-between items-center">
            <p class="font-medium">Upgrade your package now</p>
            <div class="flex items-center gap-2">
              <RouterLink to="" class="text-blue-500 text-xs">Recomended <i class="fa-solid fa-thumbs-up ms-2"></i>
              </RouterLink>
            </div>
          </div>
        </div>
        <div class="">
          <div>
            <div class="text-xs">For just $.., you can unlock exclusive features and enjoy enhanced benefits tailored to
              improve your experience. Upgrade now and make the most of what we offer!</div>
          </div>
          <div class="flex justify-end mt-2">
            <a href="" type="button"
              class="text-white bg-primary hover:bg-primary/80 rounded-lg text-xs px-5 py-2.5 me-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
              <i class="fa-solid fa-plus me-2 text-xs"></i>Upgrade my plan
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
