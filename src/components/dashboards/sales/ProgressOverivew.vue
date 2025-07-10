<script setup lang="ts">
import CommonDropdown from '@/components/shared/CommonDropdown.vue'
import { faker } from '@faker-js/faker'
import { useTableFunctions } from '@/utils/tableFunction'
import { IconSelector } from '@tabler/icons-vue'

const projects = Array.from({ length: 4 }).map((_, i) => {
  return {
    id: i + 1,
    title: `Project ${i + 1}`,
    percent: faker.number.int({ max: 100, min: 10 }),
    name: faker.person.firstName(),
    img: `/images/user-${i + 1}.png`,
    status: faker.helpers.arrayElement(['Complete', 'Inprogress', 'Pending'])
  }
})

const { tableData, sortData } = useTableFunctions(projects)
</script>
<template>
  <div class="box col-span-12 lg:col-span-6">
    <div
      class="flex flex-wrap justify-between items-center gap-3 pb-4 lg:pb-6 mb-4 lg:mb-6 bb-dashed"
    >
      <p class="font-medium">Projects Overview</p>
      <div class="flex items-center gap-2">
        <p class="text-xs sm:text-sm">Sort By :</p>
        <CommonDropdown />
      </div>
    </div>
    <div class="w-full overflow-x-auto">
      <table class="w-full whitespace-nowrap">
        <thead>
          <tr class="bg-primary/5 dark:bg-bg3 text-n500 dark:text-n30">
            <th @click="sortData('title')" class="py-3 font-semibold px-4 text-start">
              <div class="flex items-center gap-1 cursor-pointer select-none">
                Project Name
                <IconSelector :size="18" />
              </div>
            </th>
            <th @click="sortData('name')" class="py-3 font-semibold px-4 text-start">
              <div class="flex items-center gap-1 cursor-pointer select-none">
                Project Lead
                <IconSelector :size="18" />
              </div>
            </th>
            <th @click="sortData('percent')" class="py-3 font-semibold px-4 text-start">
              <div class="flex items-center gap-1 cursor-pointer select-none">
                Progress
                <IconSelector :size="18" />
              </div>
            </th>
            <th @click="sortData('status')" class="py-3 font-semibold px-4 text-start">
              <div class="flex items-center gap-1 cursor-pointer select-none">
                Status
                <IconSelector :size="18" />
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="{ id, title, percent, name, img, status } in tableData" :key="id">
            <td class="px-4 py-2">{{ title }}</td>
            <td class="px-4 py-2">
              <span class="flex items-center gap-3">
                <img class="rounded-full" :src="img" :width="32" :height="32" alt="lead img" />
                {{ name }}
              </span>
            </td>
            <td class="px-4 py-2">
              <span class="flex items-center gap-2">
                {{ percent }}%
                <span class="block h-1 w-20 rounded-sm bg-primary/10">
                  <span
                    :style="{ width: `${percent}%` }"
                    class="block h-1 rounded-sm bg-primary"
                  ></span>
                </span>
              </span>
            </td>
            <td class="px-4 py-2">
              <span
                :class="{
                  'bg-secondary4/5 text-secondary4': status == 'Complete',
                  'bg-secondary2/5 text-secondary2': status == 'Pending',
                  'bg-secondary1/5 text-secondary1': status == 'Inprogress'
                }"
                class="block text-xs w-28 text-center rounded-[30px] dark:border-n500 border border-n30 py-2"
              >
                {{ status }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
