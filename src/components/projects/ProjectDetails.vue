<script setup lang="ts">
import { IconDownload } from '@tabler/icons-vue'
import LatestComments from '../dashboards/writer/LatestComments.vue'
import { RouterLink } from 'vue-router'
import ProgressBarSingle from '../shared/ProgressBarSingle.vue'
import SocialLinks from '../shared/SocialLinks.vue'
import PopularCoins from '../dashboards/banking-3/PopularCoins.vue'
import { tileTwoData } from '@/data/fakedata'
import ProjectStack from './ProjectStack.vue'
import ProjectTools from './ProjectTools.vue'
</script>

<template>
  <div class="grid grid-cols-12 gap-4 xxxl:gap-6">
    <div class="col-span-12 lg:col-span-7 xl:col-span-8">
      <div class="box mb-6 xxl:p-8">
        <div
          class="bb-dashed mb-4 pb-4 md:mb-6 md:pb-6 lg:pb-8 lg:mb-8 flex flex-col sm:items-center min-[800px]:flex-row lg:flex-col xl:flex-row gap-4 xxl:gap-6 4xl:gap-8">
          <img src="/images/projectgrid/project-1.png" :width="347" :height="260" class="rounded-2xl w-full" alt="img" />
          <div>
            <h2 class="h2 mb-4">Key Aspects of Web Design</h2>
            <p class="bb-dashed text-sm mb-6 pb-6">Web • Development</p>
            <p class="text-sm">
              Web Design refers to the process of planning, conceptualizing, and creating the visual
              and interactive elements of a website. It involves a combination of artistic design,
              user experience (UX) considerations, and technical skills to produce a website that is
              visually appealing, functional, and user-friendly.
            </p>
          </div>
        </div>
        <div class="bb-dashed mb-4 pb-4 md:mb-6 md:pb-6 lg:pb-8 lg:mb-8">
          <h3 class="h3 mb-4">Visual Hierarchy</h3>
          <p class="text-sm">
            Designers use visual hierarchy techniques to guide users attention to the most important
            content and actions on a web page. This typically involves using size, color,
            typography, and placement to emphasize key elements.
          </p>
        </div>
        <div class="bb-dashed mb-4 pb-4 md:mb-6 md:pb-6 lg:pb-8 lg:mb-8">
          <h4 class="h4 mb-4">User-Centered Design</h4>
          <p class="text-sm">
            Web designers focus on creating websites with the user in mind. They consider user
            behavior, preferences, and expectations to design interfaces that are intuitive and easy
            to navigate. User-centered design aims to provide a positive and efficient user
            experience.
          </p>
        </div>
        <div class="bb-dashed mb-4 pb-4 md:mb-6 md:pb-6 lg:pb-8 lg:mb-8">
          <h5 class="h5 mb-4 md:font-semibold">Responsive Web Design</h5>
          <p class="text-sm">
            With the increasing use of mobile devices, responsive web design is crucial. It involves
            designing websites to adapt and look great on various screen sizes and resolutions. This
            ensures that users can access and interact with the site seamlessly on smartphones,
            tablets, and desktops.
          </p>
        </div>
        <div>
          <h6 class="h6 mb-4 md:font-semibold">Collaboration</h6>
          <p class="text-sm">
            Web designers often work closely with developers, content creators, and stakeholders to
            ensure that the design aligns with project goals and requirements. Successful web design
            balances aesthetics with functionality and user experience to create websites that
            engage visitors and achieve their intended objectives, whether that&apos;s conveying
            information, promoting products, or providing services.
          </p>
        </div>
      </div>
      <div class="box mb-6 p-3 xxxl:p-6 grid grid-cols-2 gap-4 xxxl:gap-6">
        <div :key="id" v-for="{ id, img, name, size, version } in tileTwoData.slice(0, 12)"
          class="col-span-2 md:col-span-1 lg:col-span-2 xl:col-span-1 box p-3 xxxl:p-6 flex justify-between items-center">
          <RouterLink to="#" class="flex gap-3 xxxl:gap-5 items-center">
            <img :src="img" :width="60" :height="60" class="rounded-lg lg:rounded-2xl w-10 h-10 lg:w-14 lg:h-14"
              alt="img" />
            <div>
              <p class="font-medium text-base md:text-lg xxxl:text-xl mb-2">{{ name }}</p>
              <span class="flex text-sm items-center gap-2">
                <span>{{ size }}</span>
                <span class="text-xs">•</span>
                <span>{{ version }}</span>
              </span>
            </div>
          </RouterLink>
          <button class="bg-primary/5 rounded-full p-2 md:p-3 border border-n30 dark:border-n500">
            <IconDownload />
          </button>
        </div>
      </div>
      <LatestComments />
    </div>
    <div class="col-span-12 lg:col-span-5 xl:col-span-4">
      <div class="col-span-2 lg:col-span-1 box xxl:p-8 mb-6">
        <div class="bb-dashed mb-4 pb-4 md:mb-6 md:pb-6 flex flex-wrap justify-between items-center gap-3">
          <div class="flex items-center gap-4">
            <img src="/images/user-big-2.png" :width="60" :height="60" class="rounded-full" alt="user img" />
            <div>
              <p class="text-xl font-medium mb-2">Darrell Steward</p>
              <span class="text-sm">Software Tester</span>
            </div>
          </div>
          <RouterLink to="#" class="btn-outline lg:py-3 lg:px-6"> View Profile </RouterLink>
        </div>
        <div class="flex max-[480px]:flex-wrap justify-between items-center gap-3">
          <div class="w-full">
            <div class="flex justify-between items-center mb-4">
              <span>Progress</span>
              <span class="text-primary">65%</span>
            </div>
            <ProgressBarSingle bg="bg-primary" :width="65" height="h-1" />
          </div>
          <SocialLinks />
        </div>
      </div>
      <ProjectTools />
      <ProjectStack />
      <PopularCoins />
    </div>
  </div>
</template>
