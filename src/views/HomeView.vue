<script setup lang="ts">
import AppSetup from '@/components/home/AppSetup.vue';
import DevFriendly from '@/components/home/DevFriendly.vue';
import Faqs from '@/components/home/Faqs.vue';
import ForDev from '@/components/home/ForDev.vue';
import HardRock from '@/components/home/HardRock.vue';
import Hero from '@/components/home/Hero.vue';
import MultipleLayout from '@/components/home/MultipleLayout.vue';
import PrebuiltPages from '@/components/home/PrebuiltPages.vue';
import ReadytoDive from '@/components/home/ReadytoDive.vue';
import Satisfaction from '@/components/home/Satisfaction.vue';
import SmartUI from '@/components/home/SmartUI.vue';
import Footer from '@/components/home/Footer.vue';

</script>

<template>
  <main>
    <Hero />
    <AppSetup />
    <SmartUI />
    <PrebuiltPages />
    <ForDev />
    <MultipleLayout />
    <DevFriendly />
    <Satisfaction />
    <ReadytoDive />
    <HardRock />
    <Faqs />
    <Footer />
  </main>
</template>
