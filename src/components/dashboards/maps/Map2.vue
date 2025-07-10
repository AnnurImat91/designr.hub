<script setup lang="ts">
import OptionsVertical from '@/components/shared/OptionsVertical.vue'
</script>

<template>
  <div class="col-span-12 lg:col-span-7 xl:col-span-8 order-1 lg:order-2">
    <div class="box lg:h-full overflow-hidden">
      <div class="flex justify-between items-center bb-dashed pb-6 mb-6">
        <p class="font-medium">Map</p>
        <OptionsVertical />
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29187.066104104135!2d90.39537697415763!3d23.876024493151107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m3!3e0!4m0!4m0!5e0!3m2!1sen!2sbd!4v1699267521891!5m2!1sen!2sbd"
        width="100%" :style="{ border: 0, borderRadius: '16px', minHeight: '350px' }" :allowFullScreen="true"
        loading="lazy" class="h-[95%] lg:h-[96.5%]" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </div>
</template>
