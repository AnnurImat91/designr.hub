<script setup lang="ts"></script>

<template>
  <div class="col-span-12 md:col-span-6 xl:col-span-4 box p-3">
    <div class="rounded-2xl flex justify-center px-3 pt-10">
      <img :width="405" :height="263" src="/images/achivement-3.png" alt="img" />
    </div>
    <div
      class="pb-5 pt-8 flex flex-col px-4 md:px-8 xl:px-14 justify-center items-center text-center"
    >
      <h4 class="h4 mb-4">You&apos;ve unlocked 2 new Achievements</h4>
      <p class="mb-6 lg:mb-8">Congrats, your efforts have been rewarded. Keep up like this!</p>
      <RouterLink to="#" class="btn"> View More </RouterLink>
    </div>
  </div>
</template>
