<script setup lang="ts">
import {
  IconAlarm,
  IconCalendarTime,
  IconInbox,
  IconInfoOctagon,
  IconMail,
  IconMailOpened,
  IconMenu,
  IconMessageDots,
  IconPencil,
  IconPlus,
  IconReload,
  IconSearch,
  IconSend,
  IconSettings,
  IconStar,
  IconTag,
  IconTrash
} from '@tabler/icons-vue'
import { onMounted, ref, computed } from 'vue'
import Options from './Options.vue'
import SelectOptions from './SelectOptions.vue'
import MessageRow from './MessageRow.vue'
import { inboxMessages } from '@/data/fakedata'
import Pagination from '@/components/shared/Pagination.vue'
import useWindowSize from '@/utils/useWindowSize'
const { windowSize } = useWindowSize()
const itemsPerPage = ref(16)
const currentPage = ref(1)
const tableData = ref(inboxMessages)

const paginatedData = computed(() => {
  const indexOfLastItem = currentPage.value * itemsPerPage.value
  const indexOfFirstItem = indexOfLastItem - itemsPerPage.value
  return tableData.value.slice(indexOfFirstItem, indexOfLastItem)
})

const totalPages = computed(() => Math.ceil(tableData.value.length / itemsPerPage.value))

const startIndex = computed(() => (currentPage.value - 1) * itemsPerPage.value)
const endIndex = computed(() => Math.min(startIndex.value + itemsPerPage.value - 1, tableData.value.length - 1))
const totalData = computed(() => tableData.value.length)

const paginate = (page: number) => {
  currentPage.value = page
}

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
  }
}

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--
  }
}

const sidebarLinks = [
  {
    title: 'Inbox',
    icon: IconInbox,
    url: '#'
  },
  {
    title: 'Starred',
    icon: IconStar,
    url: '#'
  },
  {
    title: 'Snoozed',
    icon: IconAlarm,
    url: '#'
  },
  {
    title: 'Sent',
    icon: IconSend,
    url: '#'
  },
  {
    title: 'Drafts',
    icon: IconMailOpened,
    url: '#'
  },
  {
    title: 'Important',
    icon: IconTag,
    url: '#'
  },
  {
    title: 'Chats',
    icon: IconMessageDots,
    url: '#'
  },
  {
    title: 'Scheduled',
    icon: IconCalendarTime,
    url: '#'
  },
  {
    title: 'All Mail',
    icon: IconMail,
    url: '#'
  },
  {
    title: 'Spam',
    icon: IconInfoOctagon,
    url: '#'
  },
  {
    title: 'Bin',
    icon: IconTrash,
    url: '#'
  },
  {
    title: 'Manage Labels',
    icon: IconSettings,
    url: '#'
  },
  {
    title: 'Create New Label',
    icon: IconPlus,
    url: '#'
  }
]

const openMenu = ref(false)
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

const handleSelect = (e: any) => {
  const { checked, name } = e.target

  if (name === 'select-all') {
    let tempData = tableData.value.map((item) => {
      return { ...item, isChecked: checked }
    })
    tableData.value = tempData
  } else {
    let tempData = tableData.value.map((item) => (item.sender.toString() == name ? { ...item, isChecked: checked } : item))
    tableData.value = tempData
  }
}

const handleSearch = (e: any) => {
  const searchTerm = e.target.value.toLowerCase()
  const searchResult = inboxMessages.filter(
    ({ title, desc, sender }) => title.toLowerCase().includes(searchTerm) || desc.toLowerCase().includes(searchTerm) || sender.toLowerCase().includes(searchTerm)
  )
  tableData.value = searchResult
  currentPage.value = 1
}
const deleleteSelected = () => {
  tableData.value = tableData.value.filter((message) => !message.isChecked)
}
</script>

<template>
  <div class="grid grid-cols-12 gap-3 sm:gap-4 xxxl:gap-6">
    <div @click="openMenu = false" class="absolute md:hidden md:invisible inset-0 z-[2]" :class="{ 'block visible': openMenu, 'hidden invisible': !openMenu }"></div>
    <button @click="openMenu = !openMenu" class="md:hidden flex items-center gap-2 min-w-max py-2 px-3 relative z-[3] rounded-lg bg-primary text-n0">
      <IconMenu class="shrink-0" /> <span>Menu</span>
    </button>
    <div
      class="md:col-span-4 lg:col-span-3 absolute max-md:w-[250px] max-md:top-56 md:static duration-500 z-[3]"
      :class="{
        'max-md:translate-x-0 max-md:visible max-md:opacity-100': openMenu,
        'ltr:max-md:-translate-x-[120%] rtl:max-md:translate-x-[120%] max-md:opacity-0 max-md:invisible': !openMenu
      }"
    >
      <div class="box px-2 md:p-4 xl:p-6 xxl:p-8 sticky top-20 md:top-[110px]">
        <RouterLink to="#" class="flex text-primary items-center gap-3 justify-center rounded-xl px-10 pt-5 pb-5 bg-primary/5 dark:bg-bg3"> <IconPencil :size="20" /> <span>Compose</span> </RouterLink>
        <div class="lg:mt-6 lg:pt-6 mt-4 pt-4 border-t border-primary/20 border-dashed flex flex-col gap-2">
          <RouterLink
            v-for="{ icon, title, url } in sidebarLinks"
            :to="url"
            :key="title"
            class="px-3 xl:px-6 py-2 xl:py-3 flex gap-3 rounded-lg group items-center hover:bg-primary/10 dark:hover:bg-primary/5 hover:text-primary duration-300"
          >
            <span class="text-primary shrink-0">
              <component :size="20" :is="icon"></component>
            </span>
            <span>{{ title }}</span>
          </RouterLink>
        </div>
      </div>
    </div>
    <div class="col-span-12 md:col-span-8 lg:col-span-9">
      <div class="box xl:p-8">
        <div class="flex flex-wrap justify-center min-[510px]:justify-between items-center mb-6 lg:mb-8 gap-4">
          <div class="py-2 xxl:py-3 px-6 rounded-2xl bg-primary/10 dark:bg-bg3 flex gap-6 items-center">
            <div class="flex items-center gap-1">
              <div class="flex items-center relative gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="select-all"
                  :checked="tableData.length > 1 && tableData.every((item) => item.isChecked == true)"
                  @change="handleSelect"
                  class="opacity-0 absolute h-6 w-6"
                />
                <div class="bg-n0 dark:bg-bg4 border gap-2 border-gray-200 group-hover:border-gray-400 rounded w-5 h-5 flex shrink-0 justify-center items-center focus-within:border-primary">
                  <svg class="fill-current hidden w-[10px] h-[10px] text-primary pointer-events-none" version="1.1" viewBox="0 0 17 12" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" fillRule="evenodd">
                      <g transform="translate(-9 -11)" fill="currentColor" fillRule="nonzero">
                        <path
                          d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
              <SelectOptions />
            </div>
            <button>
              <IconReload :size="20" />
            </button>
            <Options :deleteSelected="deleleteSelected" :checked="tableData.some((item) => item.isChecked)" />
          </div>
          <form
            class="bg-primary/5 dark:bg-bg3 gap-3 rounded-[30px] border border-transparent focus-within:border-primary px-6 xxl:px-8 items-center justify-between max-w-[250px] flex lg:max-w-[420px] w-full"
          >
            <input type="text" placeholder="Search" @input="handleSearch" class="bg-transparent py-2 xxl:py-3 focus:outline-none w-full" />
            <IconSearch />
          </form>
        </div>
        <div class="w-full overflow-x-auto inbox-table">
          <table class="w-full whitespace-nowrap rounded-2xl">
            <tbody>
              <template v-for="{ date, desc, id, isChecked, sender, title } in paginatedData" :key="id">
                <MessageRow :id="id" :date="date" :desc="desc" :is-checked="isChecked" :sender="sender" :title="title" :handleSelect="handleSelect" />
              </template>
            </tbody>
          </table>
        </div>
        <div class="mt-6 lg:mt-8">
          <Pagination
            :current-page="currentPage"
            :end-index="endIndex"
            :next-page="nextPage"
            :paginate="paginate"
            :prev-page="prevPage"
            :start-index="startIndex"
            :total-data="totalData"
            :total-pages="totalPages"
          />
        </div>
        <div v-show="!tableData.length" class="text-center py-10">
          <div class="text-center mx-auto max-w-[500px] max-md:flex flex-col items-center">
            <div class="flex justify-center mb-5">
              <IconSearch class="text-primary" :size="70" />
            </div>
            <h3 class="h3 mb-3 lg:mb-6">No Message Found!</h3>
            <p>Looks like we couldn&nbsp;t find any matching results for your search terms. Try other search terms.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
