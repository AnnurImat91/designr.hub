<script setup lang="ts">
import { IconSearch } from '@tabler/icons-vue'
import Pagination from '../shared/Pagination.vue'
import { useTableFunctions } from '@/utils/tableFunction'
import { flexListTwo } from '@/data/fakedata'
import { IconSelector } from '@tabler/icons-vue'
import SearchBar from '../shared/SearchBar.vue'
import TableActions from '../shared/TableActions.vue'
import CommonDropdown from '../shared/CommonDropdown.vue'

const {
  currentPage,
  deleteItem,
  endIndex,
  nextPage,
  paginate,
  paginatedData,
  prevPage,
  search,
  sortData,
  startIndex,
  tableData,
  totalData,
  totalPages
} = useTableFunctions(flexListTwo, 10)

const handleDelete = (id: number) => {
  if (confirm('Are you sure?')) {
    deleteItem(id)
  }
}
</script>

<template>
  <div class="box">
    <div class="flex flex-wrap gap-3 justify-between items-center bb-dashed mb-6 pb-6">
      <p class="font-medium">Flex List View</p>
      <div class="flex items-center gap-4 lg:gap-8 xl:gap-10">
        <SearchBar :search="search" />
        <div class="flex items-center gap-2">
          <p class="whitespace-nowrap">Sort By :</p>
          <CommonDropdown :options="[{ name: 'Name' }, { name: 'Price' }, { name: 'Rating' }]" />
        </div>
      </div>
    </div>
    <div class="overflow-x-auto p-4 lg:p-6 rounded-2xl bg-primary/5 dark:bg-bg3 mb-6">
      <div class="bg-n0 dark:bg-bg4 rounded-xl px-3 min-w-min">
        <table
          :border="0"
          :cellPadding="0"
          :cellSpacing="0"
          :style="{ borderSpacing: '0 12px' }"
          class="w-full whitespace-nowrap p-0 border-none border-separate"
        >
          <thead>
            <tr class="font-semibold">
              <td @click="sortData('id')" class="w-14">
                <div
                  class="px-3 py-5 pl-6 bg-primary/5 dark:bg-bg3 flex items-center gap-1 select-none cursor-pointer rounded-s-xl"
                >
                  Serial No <IconSelector :size="18" />
                </div>
              </td>
              <td @click="sortData('name')">
                <div
                  class="bg-primary/5 dark:bg-bg3 flex items-center gap-1 select-none cursor-pointer px-3 py-5"
                >
                  User <IconSelector :size="18" />
                </div>
              </td>
              <td @click="sortData('country')">
                <div
                  class="bg-primary/5 dark:bg-bg3 flex items-center gap-1 select-none cursor-pointer px-3 py-5"
                >
                  Location <IconSelector :size="18" />
                </div>
              </td>
              <td @click="sortData('industry')">
                <div
                  class="bg-primary/5 dark:bg-bg3 flex items-center gap-1 select-none cursor-pointer px-3 py-5"
                >
                  Industry <IconSelector :size="18" />
                </div>
              </td>
              <td @click="sortData('status')">
                <div
                  class="bg-primary/5 dark:bg-bg3 flex items-center gap-1 select-none cursor-pointer px-3 py-5"
                >
                  Status <IconSelector :size="18" />
                </div>
              </td>
              <td>
                <div class="bg-primary/5 dark:bg-bg3 px-3 py-5">Relations</div>
              </td>
              <td>
                <div class="bg-primary/5 dark:bg-bg3 px-3 py-5 text-center rounded-e-xl">
                  Action
                </div>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(
                { country, id, img, name, industry, status, designation, relations }, index
              ) in paginatedData"
              :key="id"
            >
              <td>
                <div class="py-5 pl-6 px-3 bg-primary/5 dark:bg-bg3 rounded-s-lg">
                  {{ id < 10 ? '0' + id : id }}
                </div>
              </td>
              <td>
                <div class="flex items-center py-2.5 gap-3 pr-6 px-3 bg-primary/5 dark:bg-bg3">
                  <img
                    :width="32"
                    :height="32"
                    class="rounded-full shrink-0"
                    :src="img"
                    alt="img"
                  />
                  <div class="flex flex-col">
                    <span class="font-medium inline-block mb-1">
                      {{ name }}
                    </span>
                    <span class="text-xs">{{ designation }}</span>
                  </div>
                </div>
              </td>
              <td>
                <div class="bg-primary/5 dark:bg-bg3 py-5 px-3">
                  {{ country.slice(0, 14) }}
                </div>
              </td>
              <td>
                <div class="bg-primary/5 dark:bg-bg3 py-5 px-3">
                  {{ industry }}
                </div>
              </td>
              <td>
                <div class="bg-primary/5 dark:bg-bg3 px-3 py-[13px]">
                  <span
                    class="block text-xs w-28 xxl:w-36 text-center rounded-[30px] dark:border-n500 border border-n30 py-2.5"
                    :class="{
                      'bg-primary/10 dark:bg-bg3 text-primary': status == 'Online',
                      'bg-secondary1/10 dark:bg-bg3 text-secondary1': status == 'Offline',
                      'bg-secondary2/10 dark:bg-bg3 text-secondary2': status == 'Suspended',
                      'bg-secondary3dark/10 dark:bg-bg3 text-secondary3dark': status == 'Working'
                    }"
                  >
                    {{ status }}
                  </span>
                </div>
              </td>
              <td>
                <div class="flex py-[17px] px-3 bg-primary/5 dark:bg-bg3">
                  <img
                    :key="i"
                    v-for="(img, i) in relations"
                    :src="img"
                    :width="32"
                    :height="32"
                    class="border border-n0 dark:border-n500 -mr-4 rounded-full"
                    alt="img"
                  />
                </div>
              </td>
              <td>
                <div
                  class="flex justify-center items-center py-[21px] px-3 bg-primary/5 dark:bg-bg3 rounded-e-xl"
                >
                  <TableActions
                    :from-bottom="
                      index == paginatedData.length - 1 || index == paginatedData.length - 2
                    "
                    :on-delete="() => handleDelete(id)"
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
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

    <div v-show="!tableData.length" class="text-center py-10">
      <div class="text-center mx-auto max-w-[500px] max-md:flex flex-col items-center">
        <div class="flex justify-center mb-5">
          <IconSearch :size="60" class="text-primary" />
        </div>
        <h3 class="h3 mb-3 lg:mb-6">No matching results</h3>
        <p>
          Looks like we couldn&nbsp;t find any matching results for your search terms. Try other
          search terms.
        </p>
      </div>
    </div>
  </div>
</template>
