
<script setup lang="ts">

import Stops from './Stops.vue';
import Calender from './Calender.vue';
import DepartureTime from './DepartureTime.vue';
import AirlineTypes from './AirlineTypes.vue';

</script>
<template>
    <div class="col-span-12 xl:col-span-4 grid xl:flex xl:flex-col grid-cols-2 gap-4 xxxl:gap-6">
        <div class="col-span-2 md:col-span-1">
            <Calender />
        </div>
        <div class="col-span-2 md:col-span-1">
            <Stops />
        </div>
        <div class="col-span-2 md:col-span-1">
            <DepartureTime />
        </div>
        <div class="col-span-2 md:col-span-1">
            <AirlineTypes />
        </div>
    </div>
</template>