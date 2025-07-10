<script setup lang="ts"></script>

<template>
  <div class="flex items-center justify-center py-10 md:py-20 lg:py-28">
    <div class="flex flex-col items-center justify-center text-center max-w-xl mx-auto">
      <img src="/images/confirm-account.png" alt="confirm illustration" class="mb-14" />
      <h2 class="h2 mb-6">Confirm your account</h2>
      <p class="mb-8 lg:mb-10">Hi Henwik, we&apos;re glad to have you on board! Please confirm your account to continue using our app.</p>
      <div class="flex gap-4">
        <RouterLink to="#" class="btn"> Confirm </RouterLink>
        <RouterLink to="#" class="btn-outline"> Cancel </RouterLink>
      </div>
    </div>
  </div>
</template>
