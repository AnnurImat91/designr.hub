<script setup lang="ts">
import HotelListingList from './HotelListingList.vue'
import { useTableFunctions } from '@/utils/tableFunction'
import Pagination from '../shared/Pagination.vue'
import { hotelList } from '@/data/fakedata'

const { currentPage, endIndex, nextPage, paginate, paginatedData, prevPage, startIndex, totalData, totalPages } = useTableFunctions(hotelList, 5)
</script>

<template>
  <div class="grid grid-cols-2 gap-4 xxxl:gap-6 mb-4 xxl:mb-6">
    <template v-for="{ id, favourite, img, location, price, rating, title } in paginatedData" :key="id">
      <HotelListingList :id="id" :favourite="favourite" :img="img" :location="location" :price="price" :rating="rating" :title="title" />
    </template>
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
</template>
