<script setup lang="ts">
import Checkbox from '@/components/shared/Checkbox.vue'
import Pagination from '@/components/shared/Pagination.vue'
import { useTableFunctions } from '@/utils/tableFunction'
import { faker } from '@faker-js/faker'
import { IconRotate } from '@tabler/icons-vue'
import { RouterLink } from 'vue-router'
import JobCard from './JobCard.vue'

const jobTypes = [
  {
    title: 'Local Jobs',
    total: 365,
    checked: true
  },
  {
    title: 'Featured Jobs',
    total: 4141,
    checked: true
  },
  {
    title: 'Recruiter Jobs',
    total: 255,
    checked: false
  },
  {
    title: 'Full Time Jobs',
    total: 857,
    checked: false
  },
  {
    title: 'Half Time Jobs',
    total: 125,
    checked: false
  }
]
const jobCategories = [
  {
    title: 'NLP Specialists',
    total: 1563,
    checked: true
  },
  {
    title: 'Data Scientists',
    total: 1522,
    checked: true
  },
  {
    title: 'Machine Learning',
    total: 2545,
    checked: true
  },
  {
    title: 'Deep Learning',
    total: 5526,
    checked: false
  },
  {
    title: 'Robotics Engineer',
    total: 1563,
    checked: false
  },
  {
    title: 'AI Consultants',
    total: 1563,
    checked: false
  },
  {
    title: 'Chatbot Developers',
    total: 1563,
    checked: false
  },
  {
    title: 'Data Analysts',
    total: 1563,
    checked: false
  }
]
const skills = [
  {
    title: 'OpenAI',
    checked: true
  },
  {
    title: '.NET 5.0/6',
    checked: true
  },
  {
    title: '.NET',
    checked: false
  },
  {
    title: 'PHP',
    checked: false
  },
  {
    title: 'HTML',
    checked: false
  },
  {
    title: 'Javascript',
    checked: false
  },
  {
    title: 'Python',
    checked: false
  }
]

const location = [
  {
    title: 'Australia',
    total: 1546,
    checked: true
  },
  {
    title: 'Delhi',
    total: 2546,
    checked: true
  },
  {
    title: 'Germany',
    total: 4346,
    checked: true
  },
  {
    title: 'Hamburg',
    total: 4006,
    checked: false
  },
  {
    title: 'India',
    total: 4124,
    checked: false
  },
  {
    title: 'Pakistan',
    total: 456,
    checked: false
  },
  {
    title: 'UAE',
    total: 46,
    checked: false
  },
  {
    title: 'Remote',
    total: 4522,
    checked: false
  }
]
const jobsData = Array.from({ length: 19 }).map((_, i) => {
  return {
    id: i + 1,
    title: faker.person.jobTitle(),
    salaryRange: `$${faker.number.int({
      max: 400,
      min: 300
    })} - $${faker.number.int({ max: 900, min: 800 })}`,
    tags: faker.helpers.arrayElements(['Python', 'Software Architecture', 'API Integration', 'OpenAI', 'Web Development', 'Data Structure', 'Algorithoms', 'Design'], { max: 4, min: 3 }),
    desc: faker.word.words({ count: 60 }),
    expiry: `${faker.number.int({ max: 30, min: 4 })} Days Left`,
    location: faker.helpers.arrayElement(['Remote', 'Onsite', 'New York', 'California', 'San Francisco']),
    level: faker.helpers.arrayElement(['Junior', 'Senior', 'Expert', 'Begginer']),
    proposals: faker.number.int({ max: 100, min: 10 }),
    company: {
      logo: `/images/company/company-${faker.helpers.arrayElement([1, 2, 3, 4, 5, 6, 7, 8, 9])}.png`,
      name: faker.company.name(),
      verified: true
    }
  }
})
const { currentPage, endIndex, nextPage, paginate, paginatedData, prevPage, startIndex, totalData, totalPages } = useTableFunctions(jobsData, 5)
</script>

<template>
  <div class="grid grid-cols-12 gap-4 xxxl:gap-6">
    <div class="col-span-12 md:col-span-4">
      <div class="box sticky top-24">
        <h4 class="h4 mb-6 pb-6 bb-dashed">Filter</h4>
        <p class="text-xl font-medium mb-4">Types of Jobs</p>
        <ul class="flex flex-col gap-2 mb-6 pb-6 bb-dashed">
          <li v-for="{ title, total, checked } in jobTypes" :key="title" class="flex items-center justify-between">
            <Checkbox :label="title" :checked="checked" />
            <span>{{ total }}</span>
          </li>
        </ul>
        <p class="text-xl font-medium mb-4">Types of Categories</p>
        <ul class="flex flex-col gap-2 mb-6 pb-6 bb-dashed">
          <li v-for="{ title, total, checked } in jobCategories" :key="title" class="flex items-center justify-between">
            <Checkbox :checked="checked" :label="title" />
            <span>{{ total }}</span>
          </li>
        </ul>
        <p class="mb-4">Budget</p>
        <div class="flex items-center gap-4 pb-6 mb-6 bb-dashed">
          <input type="number" placeholder="Min" class="w-full text-sm focus:outline-none border dark:border-n500 dark:bg-bg3 rounded-3xl py-2 px-3 xl:px-4" />
          <span>To</span>
          <input type="number" placeholder="Max" class="w-full text-sm focus:outline-none border dark:border-n500 dark:bg-bg3 rounded-3xl py-2 px-3 xl:px-4" />
        </div>
        <p class="text-xl font-medium mb-4">Skills</p>
        <ul class="flex flex-col gap-2 mb-6 pb-6 bb-dashed">
          <li v-for="skill in skills" :key="skill.title" class="flex items-center justify-between">
            <Checkbox :label="skill.title" :checked="skill.checked" />
          </li>
        </ul>
        <p class="text-xl font-medium mb-4">Location</p>
        <ul class="flex flex-col gap-2 mb-6 pb-6 bb-dashed">
          <li v-for="{ title, total, checked } in location" :key="title" class="flex items-center justify-between">
            <Checkbox :label="title" :checked="checked" />
            <span>{{ total }}</span>
          </li>
        </ul>
        <RouterLink to="#" class="btn-outline w-full justify-center"> <IconRotate :size="20" /> Reset Filters </RouterLink>
      </div>
    </div>
    <div class="col-span-12 md:col-span-8 flex flex-col gap-4 xxxl:gap-8">
      <JobCard
        v-for="{ title, id, salaryRange, tags, desc, expiry, location, level, proposals, company } in paginatedData"
        :key="id"
        :title="title"
        :salary-range="salaryRange"
        :tags="tags"
        :desc="desc"
        :expiry="expiry"
        :location="location"
        :level="level"
        :proposals="proposals"
        :company="company"
      />
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
  </div>
</template>
