<script setup lang="ts">
import { friends } from '@/data/friends'
import OptionsVertical from '@/components/shared/OptionsVertical.vue'
import { IconMicrophone, IconSearch } from '@tabler/icons-vue'
import { IconMoodSmile } from '@tabler/icons-vue'
import { IconCirclePlus } from '@tabler/icons-vue'
import { IconVideo } from '@tabler/icons-vue'
import { IconSend } from '@tabler/icons-vue'
import { IconPhone } from '@tabler/icons-vue'
import { IconCamera } from '@tabler/icons-vue'
import { IconPencil } from '@tabler/icons-vue'
import { IconUsers } from '@tabler/icons-vue'
import { onMounted, ref, watch } from 'vue'
import { RouterLink } from 'vue-router'
import useWindowSize from '@/utils/useWindowSize'
const { windowSize } = useWindowSize()

const currentChat = ref(1)
const allfriends = ref(friends)
const openMenu = ref(false)
const messageInput = ref('')
const search = ref('')

onMounted(() => {
  const scrollableSection = document.getElementById('chatbox')
  if (scrollableSection) {
    scrollableSection.scrollTop = scrollableSection.scrollHeight
  }
  watch(allfriends, () => {
    if (scrollableSection) {
      scrollableSection.scrollTop = scrollableSection.scrollHeight
    }
  })
})

const handleSubmit = (e: any) => {
  e.preventDefault()

  if (messageInput.value == '') return
  let currentMsg = {
    message: messageInput.value,
    person: 'you'
  }
  const updatedFriends = allfriends.value.map((friend) => {
    if (friend.id === currentChat.value) {
      return {
        ...friend,
        messages: [...friend.messages, currentMsg]
      } as {
        id: number
        name: string
        img: string
        message: string
        time: string
        badge?: number
        messages: { person: string; message: string }[]
      }
    }
    return friend
  })
  allfriends.value = updatedFriends
  messageInput.value = ''
}

onMounted(() => {
  const handleResize = () => {
    if (windowSize.value > 768) {
      openMenu.value = true
    }
    if (windowSize.value < 768) {
      openMenu.value = false
    }
  }
  window.addEventListener('resize', handleResize)
  return () => {
    document.removeEventListener('resize', handleResize)
  }
})

const searchFriend = () => {
  const result = friends.filter((friend) => friend.name.toLowerCase().includes(search.value.toLocaleLowerCase()))
  console.log(result)
}
</script>

<template>
  <button @click="openMenu = !openMenu" class="md:hidden flex items-center gap-2 min-w-max py-2 px-3 relative z-[3] rounded-lg bg-primary text-n0">
    <IconUsers :size="20" class="shrink-0" /> <span>Contacts</span>
  </button>
  <div @click="openMenu = false" class="absolute md:hidden md:invisible inset-0 z-[2]" :class="{ 'block visible': openMenu, 'hidden invisible': !openMenu }"></div>
  <div class="rounded-2xl bg-n0 dark:bg-bg4 shadow-3 grid grid-cols-12 relative max-md:mt-3">
    <div
      class="p-2 sm:p-4 duration-500 md:p-6 xl:p-8 max-md:w-[280px] max-md:max-h-[600px] max-md:overflow-y-auto max-md:rounded-xl max-md:absolute max-md:left-0 z-[3] max-md:bg-n0 max-md:dark:bg-bg4 max-md:top-0 md:col-span-5 xl:col-span-4 md:border-r border-n30 dark:border-n500"
      :class="{
        'max-md:translate-x-0 max-md:visible max-md:opacity-100': openMenu,
        'ltr:max-md:-translate-x-[120%] rtl:max-md:translate-x-[120%] max-md:opacity-0 max-md:invisible': !openMenu
      }"
    >
      <div class="flex items-center justify-between flex-wrap">
        <div class="w-10 h-10 md:w-14 md:h-14 rounded-full overflow-hidden shrink-0">
          <img :width="60" :height="60" src="/images/user.png" alt="image" class="w-full h-full object-fit-cover" />
        </div>
        <div class="flex gap-3 items-center justify-content-end flex-wrap">
          <button class="inline-block shrink-0 hover:text-primary">
            <IconPencil />
          </button>
          <OptionsVertical />
        </div>
      </div>
      <form class="flex items-center p-2 border border-n30 dark:border-n500 bg-primary/5 dark:bg-bg3 rounded-full my-3 xxl:my-6">
        <input v-model="search" @input="searchFriend" type="text" placeholder="Search" class="w-full focus:outline-none text-sm px-3 lg:px-6 bg-transparent border-0" />
        <button type="button" class="grid place-content-center w-8 h-8 md:w-10 md:h-10 rounded-full border-0 bg-primary text-white shrink-0">
          <IconSearch class="h-5 w-5" />
        </button>
      </form>
      <div class="max-h-[600px] overflow-y-auto scrollbar-hidden mt-5 md:mt-0">
        <ul v-if="allfriends.length != 0" class="flex flex-col gap-2">
          <li v-for="{ id, img, message, name, time, badge } in allfriends" :key="id">
            <div
              @click="currentChat = id"
              class="flex duration-300 flex-wrap items-center cursor-pointer gap-4 p-2 justify-center md:justify-start rounded-lg hover:bg-primary/10"
              :class="{ 'bg-primary/20': currentChat == id }"
            >
              <div class="md:w-11 md:h-11 w-8 h-8 relative z-[1] rounded-full shrink-0">
                <img :width="44" :height="44" :src="img" alt="image" class="w-full h-full object-fit-cover overflow-hidden rounded-full" />
                <span v-if="badge" class="inline-block w-1.5 h-1.5 rounded-full bg-secondary3dark absolute right-1 bottom-1 z-[1]"></span>
              </div>
              <div class="flex-grow flex items-center justify-between gap-4">
                <div class="flex-grow">
                  <p class="font-semibold mb-1">{{ name }}</p>
                  <span class="block text-xs">{{ message }}</span>
                </div>
                <div class="shrink-0 inline-block text-center">
                  <div v-if="badge" class="grid place-content-center w-6 h-6 rounded-full bg-primary text-white">
                    <span class="text-sm lh-1">{{ badge }}</span>
                  </div>

                  <span class="inline-block text-xs" :class="{ 'text-primary': badge }">
                    {{ time }}
                  </span>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div v-else>
          <h5>No Results Found</h5>
        </div>
      </div>
    </div>
    <div class="col-span-12 md:col-span-7 xl:col-span-8">
      <div class="chat-box__content-head p-4 md:p-6">
        <div class="flex items-center justify-between flex-wrap gap-4">
          <div class="flex items-center gap-4">
            <div class="w-10 h-10 md:w-14 md:h-14 relative z-[1] rounded-full shrink-0">
              <img :width="60" :height="60" :src="allfriends[currentChat - 1].img" alt="image" class="rounded-full" />
              <span class="inline-block w-1.5 h-1.5 rounded-full bg-secondary3dark absolute right-0.5 bottom-0.5 z-[1]"></span>
            </div>
            <h5 class="flex-grow">
              {{ allfriends[currentChat - 1].name }}
            </h5>
          </div>
          <div class="flex gap-3 items-center justify-content-end flex-wrap">
            <RouterLink to="#" class="inline-block shrink-0 hover:text-primary">
              <IconPhone class="w-6 h-6" />
            </RouterLink>
            <RouterLink to="#" class="inline-block shrink-0 hover:text-primary">
              <IconVideo class="w-6 h-6" />
            </RouterLink>
          </div>
        </div>
      </div>
      <div id="chatbox" class="max-h-[640px] md:min-h-[620px] scrollbar-hidden bg-primary/5 dark:bg-bg3 p-4 md:p-6 xl:py-8 overflow-y-auto mx-3 lg:mx-6 rounded-2xl">
        <ul class="flex flex-col justify-end">
          <li v-for="friend in allfriends" :key="friend.id">
            <div v-show="currentChat == friend.id" v-for="({ message, person }, i) in friend.messages" :key="i">
              <div class="flex flex-col items-start" :class="{ 'items-end': person == 'you', 'items-start': person == 'self' }">
                <div v-if="person == 'self'" class="w-8 h-8 md:w-12 md:h-12 md:mb-2">
                  <img :width="48" :height="48" :src="friend.img" alt="image" class="rounded-full" />
                </div>
                <div
                  class="bg-n0 dark:bg-bg4 rounded-lg py-2 md:py-3 px-3 md:px-5 md:max-w-[45%] my-2 relative"
                  :class="{
                    'md:arrow-bottom bg-primary dark:bg-primary text-n0': person == 'you',
                    'md:arrow-top': person == 'self'
                  }"
                >
                  <p class="text-sm md:text-base">{{ message }}</p>
                </div>
                <div v-if="person == 'you'" class="w-8 h-8 md:w-12 md:h-12 md:mb-2">
                  <img :width="48" :height="48" src="/images/user.png" alt="image" class="rounded-full md:my-2" />
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="p-4 flex items-center flex-wrap gap-4">
        <div class="flex items-center justify-between max-w-[150px] gap-4 shrink-0">
          <div class="shrink-0">
            <label for="file" class="inline-block hover:text-primary cursor-pointer">
              <input type="file" name="file" id="file" class="hidden" />
              <IconCirclePlus class="w-6 h-6" />
            </label>
          </div>
          <div class="shrink-0">
            <button class="inline-block hover:text-primary">
              <IconMicrophone class="w-6 h-6" />
            </button>
          </div>
          <div class="shrink-0">
            <label for="img" class="inline-block hover:text-primary">
              <input type="file" name="img" id="img" class="hidden" />
              <IconCamera class="w-6 h-6" />
            </label>
          </div>
          <div class="shrink-0">
            <button class="inline-block hover:text-primary">
              <IconMoodSmile class="w-6 h-6" />
            </button>
          </div>
        </div>
        <form :onSubmit="handleSubmit" class="flex items-center flex-grow p-2 border border-n30 dark:border-n500 bg-primary/5 dark:bg-bg3 rounded-full">
          <input type="text" placeholder="Type message..." v-model="messageInput" class="w-full bg-transparent focus:outline-none px-3 lg:px-6 border-0 flex-grow" />

          <button type="submit" class="grid place-content-center w-8 h-8 md:w-10 md:h-10 rounded-full border-0 bg-primary text-white shrink-0">
            <IconSend class="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
