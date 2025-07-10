<script setup lang="ts">
import OptionsVertical from '@/components/shared/OptionsVertical.vue'
import { useTableFunctions } from '@/utils/tableFunction'
import { IconSelector } from '@tabler/icons-vue'
import { IconArrowUpRight } from '@tabler/icons-vue'

const authors = [
  {
    id: 1,
    projects: 'UI/UX Designer',
    articles: 53,
    lead: {
      name: 'Dustin',
      img: '/images/user.png'
    },
    status: 'Complete'
  },
  {
    id: 2,
    projects: 'Software Tester',
    articles: 53,
    lead: {
      name: 'Dustin',
      img: '/images/user-2.png'
    },
    status: 'In Progress'
  },
  {
    id: 3,
    projects: 'Team Leader',
    articles: 53,
    lead: {
      name: 'Dustin',
      img: '/images/user-3.png'
    },
    status: 'Complete'
  },
  {
    id: 4,
    projects: 'Software Developer',
    articles: 53,
    lead: {
      name: 'Dustin',
      img: '/images/user-4.png'
    },
    status: 'Cancel'
  },
  {
    id: 5,
    projects: 'Scrum Master',
    articles: 53,
    lead: {
      name: 'Dustin',
      img: '/images/user-5.png'
    },
    status: 'Cancel'
  },
  {
    id: 6,
    projects: 'Project Manager',
    articles: 53,
    lead: {
      name: 'Dustin',
      img: '/images/user-6.png'
    },
    status: 'Complete'
  },
  {
    id: 7,
    projects: 'Ethical Hacker',
    articles: 53,
    lead: {
      name: 'Dwight',
      img: '/images/user-7.png'
    },
    status: 'In Progress'
  },
  {
    id: 8,
    projects: 'Web Designer',
    articles: 53,
    lead: {
      name: 'Dwight',
      img: '/images/user-2.png'
    },
    status: 'Complete'
  }
]
const { tableData, sortData } = useTableFunctions(authors)
</script>

<template>
  <div class="box mb-4 xxxl:mb-6">
    <div class="flex flex-wrap justify-between items-center gap-3 pb-4 lg:pb-6 mb-4 lg:mb-6 bb-dashed">
      <p class="font-medium">Popular Authors</p>
      <OptionsVertical />
    </div>
    <div class="w-full overflow-x-auto">
      <table class="w-full whitespace-nowrap">
        <thead>
          <tr class="bg-primary/5 dark:bg-bg3 text-n500 dark:text-n30">
            <th @click="() => sortData('name')" class="py-3 font-semibold px-4 text-start w-[20%]">
              <div class="flex items-center gap-1 cursor-pointer select-none">
                Name
                <IconSelector :size="18" />
              </div>
            </th>
            <th @click="() => sortData('articles.name')" class="py-3 font-semibold px-4 text-start w-[25%]">
              <div class="flex items-center gap-1 cursor-pointer select-none">
                Projects
                <IconSelector :size="18" />
              </div>
            </th>
            <th @click="() => sortData('articles')" class="py-3 font-semibold px-4 text-start w-[25%]">
              <div class="flex items-center gap-1 cursor-pointer select-none">
                Articles
                <IconSelector :size="18" />
              </div>
            </th>
            <th @click="() => sortData('status')" class="py-3 font-semibold px-4 text-start">
              <div class="flex items-center gap-1 cursor-pointer select-none">
                Status
                <IconSelector :size="18" />
              </div>
            </th>
            <th class="py-3 font-semibold px-4 text-start">View</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="{ lead, status, articles, projects } in tableData" :key="lead" class="even:bg-primary/5 dark:even:bg-bg3">
            <td class="px-4 py-2">
              <span class="flex items-center gap-3">
                <img class="rounded-full" :src="lead.img" :width="32" :height="32" alt="lead img" />
                {{ lead.name }}
              </span>
            </td>
            <td class="px-4 py-2">{{ projects }}</td>
            <td class="px-4 py-2">{{ articles }} articles</td>
            <td class="px-4 py-2">
              <span
                :class="{
                  'bg-secondary4/5 text-secondary4': status == 'Complete',
                  'bg-secondary2/5 text-secondary2': status == 'Cancel',
                  'bg-secondary1/5 text-secondary1': status == 'In Progress'
                }"
                class="block text-xs w-28 text-center rounded-[30px] dark:border-n500 border border-n30 py-2"
              >
                {{ status }}
              </span>
            </td>
            <td class="px-4 py-2">
              <RouterLink to="#">
                <IconArrowUpRight :size="20" />
              </RouterLink>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
