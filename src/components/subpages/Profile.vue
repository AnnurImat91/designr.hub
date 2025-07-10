<script setup lang="ts">
import OptionsVertical from '@/components/shared/OptionsVertical.vue'
import { IconCamera } from '@tabler/icons-vue'
import { IconBrandGoogleDrive } from '@tabler/icons-vue'
import { IconMessageDots } from '@tabler/icons-vue'
import { IconSend } from '@tabler/icons-vue'
import { IconShare } from '@tabler/icons-vue'
import { IconThumbUp } from '@tabler/icons-vue'
import { IconWorld } from '@tabler/icons-vue'
import { IconPhoto } from '@tabler/icons-vue'
import { IconMoodSmile } from '@tabler/icons-vue'
import { IconPlus } from '@tabler/icons-vue'
import { comments } from '@/data/fakedata'
import CommentBox from './CommentBox.vue'
import BioData from './BioData.vue'
import Friends from './Friends.vue'
import Gallery from './Gallery.vue'

const stories = [
  {
    id: 1,
    img: '/images/story/story-1.png',
    user: '/images/user-2.png'
  },
  {
    id: 2,
    img: '/images/story/story-2.png',
    user: '/images/user-3.png'
  },
  {
    id: 3,
    img: '/images/story/story-3.png',
    user: '/images/user-4.png'
  },
  {
    id: 4,
    img: '/images/story/story-4.png',
    user: '/images/user-5.png'
  }
]
</script>

<template>
  <div
    class="bg-[url(/images/profile-bg.png)] bg-contain bg-top bg-no-repeat -mx-3 sm:-mx-4 xxxl:-mx-6 mb-6 overflow-x-hidden">
    <div class="pt-10 min-[450px]:pt-14 sm:pt-24 md:pt-32 lg:pt-44 xl:pt-52 4xl:pt-[280px] px-3 lg:px-4 xxxl:px-6">
      <div class="box p-2 sm:p-3 xxxl:p-5">
        <div
          class="box p-2 bg-primary/5 4xl:px-12 xxl:py-8 flex flex-wrap xl:flex-nowrap lg:divide-x divide-dashed divide-primary/20 gap-5">
          <div class="flex flex-wrap xl:flex-nowrap items-center gap-3 4xl:gap-5 4xl:pr-8">
            <div
              class="p-1 sm:p-1.5 shrink-0 rounded-2xl max-[465px]:w-full bg-n0 dark:bg-bg3 lg:-mt-32 shadow-[0px_4px_40px_0px_rgba(0,0,0,0.16)]">
              <img src="/images/profile-img.png" :width="220" :height="280" class="rounded-xl max-[465px]:w-full"
                alt="img" />
            </div>
            <div class="max-[465px]:flex flex-col items-center max-[465px]:w-full">
              <h4 class="h4 mb-3">Török Melinda</h4>
              <span>UI/UX Designer</span>
              <div class="flex gap-2 mt-4 xxl:mt-7">
                <RouterLink to="#" class="btn px-3 py-2 xxxl:px-5"> Follow </RouterLink>
                <RouterLink to="#" class="btn-outline px-3 py-2 xxxl:px-5"> Message </RouterLink>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-2 sm:grid-cols-7 gap-4 max-xl:w-full xl:px-3 xxxl:px-5 xxxl:gap-10 4xl:px-16">
            <div class="col-span-2 min-[400px]:col-span-1 sm:col-span-3 md:col-span-2 flex flex-col gap-5">
              <div>
                <p class="mb-1 font-semibold">Email</p>
                <span>info@example.com</span>
              </div>
              <div>
                <p class="mb-1 font-semibold">Phone</p>
                <span>+1 (070) 123–4576</span>
              </div>
            </div>
            <div class="col-span-2 min-[400px]:col-span-1 sm:col-span-3 md:col-span-2 flex flex-col gap-5">
              <div>
                <p class="mb-1 font-semibold">Birthday</p>
                <span>17 March, 1995</span>
              </div>
              <div>
                <p class="mb-1 font-semibold">Location</p>
                <span>New York, NY</span>
              </div>
            </div>
            <div class="col-span-2 sm:col-span-7 md:col-span-3 flex flex-col gap-5">
              <div>
                <p class="mb-1 font-semibold">School</p>
                <span>El Camino High School & Collage</span>
              </div>
              <div>
                <p class="mb-1 font-semibold">University</p>
                <span>Oxford University, Storbritanien</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="grid grid-cols-12 gap-4 xxxl:gap-6">
    <div class="col-span-12 md:col-span-6 lg:col-span-7 xl:col-span-8">
      <div class="mb-4 xxxl:mb-6">
        <div class="box xxl:p-8 w-full overflow-x-auto">
          <div class="min-w-[800px] flex gap-5">
            <div class="rounded-2xl relative">
              <img src="/images/story/story-5.png" :width="174" :height="200" class="rounded-2xl" alt="img" />
              <div class="absolute bottom-4 flex flex-col items-center justify-center w-full text-center">
                <button class="mb-2 rounded-full bg-n0 text-primary p-1">
                  <IconPlus />
                </button>
                <span class="font-semibold text-xs text-n0"> Add Story </span>
              </div>
            </div>
            <div v-for="{ id, img, user } in stories" :key="id" class="relative rounded-2xl">
              <img :width="174" :height="200" class="rounded-2xl" :src="img" alt="img" />
              <div class="absolute top-3 left-3 rounded-full border border-n0">
                <img :src="user" :width="32" :height="32" class="rounded-full" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="box mb-4 xxxl:mb-6 xxl:p-8">
        <h4 class="h4 mb-6">Add New Post</h4>
        <form>
          <textarea :rows="5" class="rounded-2xl bg-primary/5 dark:bg-bg3 p-4 w-full mb-6"
            placeholder="Write a new post... "></textarea>
          <div class="flex justify-between items-center">
            <div class="flex divide-x divide-primary/20 divide-dashed">
              <button class="px-2">
                <IconMoodSmile :size="20" />
              </button>
              <span class="px-2">
                <input type="file" id="camera" class="hidden" />
                <label class="cursor-pointer" for="camera">
                  <IconCamera :size="20" />
                </label>
              </span>
              <span class="px-2">
                <input type="file" id="photo" class="hidden" />
                <label class="cursor-pointer" for="photo">
                  <IconPhoto :size="20" />
                </label>
              </span>

              <button class="px-2">
                <IconBrandGoogleDrive :size="20" />
              </button>
            </div>
            <button class="btn px-5">Post</button>
          </div>
        </form>
      </div>
      <div class="box xxl:p-8">
        <div class="flex justify-between items-center mb-6">
          <div class="flex items-center gap-4">
            <img src="/images/user-big-2.png" alt="profile img" :width="48" :height="48" class="rounded-full" />
            <div>
              <p class="text-xl mb-1">Jerome Bell</p>
              <span class="text-sm flex items-center gap-1">
                36 Minutes
                <IconWorld class="text-n400 dark:text-n30" :size="18" />
              </span>
            </div>
          </div>
          <OptionsVertical />
        </div>
        <p class="text-sm mb-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer
          took a galley of type and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
          Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </p>
        <div class="grid grid-cols-2 gap-4 mb-6">
          <div class="max-[450px]:col-span-2 col-span-1">
            <img src="/images/post-1.png" :width="468" :height="416" class="rounded-2xl" alt="post img" />
          </div>
          <div class="max-[450px]:col-span-2 col-span-1">
            <img src="/images/post-2.png" :width="468" :height="416" class="rounded-2xl" alt="post img" />
          </div>
        </div>
        <div class="flex justify-between flex-wrap items-center mb-7 gap-3 lg:mb-10">
          <div class="flex gap-6">
            <div class="flex items-center gap-2">
              <button class="text-primary">
                <IconThumbUp />
              </button>
              <span class="font-medium">24k</span>
            </div>
            <div class="flex items-center gap-2">
              <button class="text-primary">
                <IconMessageDots />
              </button>
              <span class="font-medium">245</span>
            </div>
            <div class="flex items-center gap-2">
              <button class="text-primary">
                <IconShare />
              </button>
              <span class="font-medium">200</span>
            </div>
          </div>
          <span class="font-medium">100+ Views</span>
        </div>
        <div class="flex gap-4 items-center mb-6 xl:mb-8">
          <img src="/images/user-big-4.png" :width="48" :height="48" class="rounded-full" alt="img" />
          <div class="flex bg-primary/5 dark:bg-bg3 rounded-[30px] justify-between grow items-center p-2">
            <input type="text" class="w-full bg-transparent px-3" placeholder="Add a comment" />
            <button class="p-2 rounded-full bg-primary text-n0">
              <IconSend />
            </button>
          </div>
        </div>
        <template v-for="{ comment, commenter, commenterImg, replierImg, time } in comments" :key="comment.id">
          <CommentBox :comment="comment" :commenter="commenter" :commenter-img="commenterImg" :replier-img="replierImg"
            :time="time" singleComment="{comment}" />
        </template>

        <div class="flex max-lg:justify-center pt-4 md:pt-2">
          <RouterLink to="#" class="btn-outline px-5"> See All </RouterLink>
        </div>
      </div>
    </div>
    <div class="col-span-12 md:col-span-6 lg:col-span-5 xl:col-span-4">
      <BioData />
      <Friends />
      <Gallery />
    </div>
  </div>
</template>