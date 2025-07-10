<template>
  <ul class="flex gap-2 xxxl:gap-3">
    <li>
      <RouterLink to="#" aria-label="social link" class="p-1 md:p-1.5 hover:bg-primary hover:text-n0 duration-300 inline-flex text-primary rounded-full border border-primary">
        <IconBrandFacebook :size="20" />
      </RouterLink>
    </li>
    <li>
      <RouterLink to="#" aria-label="social link" class="p-1 md:p-1.5 hover:bg-primary hover:text-n0 duration-300 inline-flex text-primary rounded-full border border-primary">
        <IconBrandTwitter :size="20" />
      </RouterLink>
    </li>
    <li>
      <RouterLink to="#" aria-label="social link" class="p-1 md:p-1.5 hover:bg-primary hover:text-n0 duration-300 inline-flex text-primary rounded-full border border-primary">
        <IconBrandSkype :size="20" />
      </RouterLink>
    </li>
    <li>
      <RouterLink to="#" aria-label="social link" class="p-1 md:p-1.5 hover:bg-primary hover:text-n0 duration-300 inline-flex text-primary rounded-full border border-primary">
        <IconBrandInstagram :size="20" />
      </RouterLink>
    </li>
    <li>
      <RouterLink to="#" aria-label="social link" class="p-1 md:p-1.5 hover:bg-primary hover:text-n0 duration-300 inline-flex text-primary rounded-full border border-primary">
        <IconBrandLinkedin :size="20" />
      </RouterLink>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { IconBrandSkype } from '@tabler/icons-vue'
import { IconBrandLinkedin } from '@tabler/icons-vue'
import { IconBrandInstagram } from '@tabler/icons-vue'
import { IconBrandTwitter } from '@tabler/icons-vue'
import { IconBrandFacebook } from '@tabler/icons-vue'
</script>
