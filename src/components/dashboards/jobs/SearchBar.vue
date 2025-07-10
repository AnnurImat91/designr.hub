<script setup lang="ts">
import CommonDropdown from '@/components/shared/CommonDropdown.vue';
import { IconMapPin } from '@tabler/icons-vue';
import { IconSearch } from '@tabler/icons-vue';


</script>

<template>
    <div class="box mb-4 xxxl:mb-6">
        <form class="grid grid-cols-10 gap-4">
            <div class="col-span-10 md:col-span-5 xl:col-span-2">
                <div
                    class="py-3 px-6 flex gap-3 items-center justify-between rounded-[30px] bg-primary/5 dark:bg-bg3 border focus-within:border-primary focus:outline-none border-n40 dark:border-n500">
                    <input type="text" placeholder="Job Keywords"
                        class="w-full text-sm focus:outline-none bg-transparent" />
                    <IconSearch :size="20" />
                </div>
            </div>
            <div class="col-span-10 md:col-span-5 xl:col-span-2">
                <div
                    class="py-3 px-6 flex gap-3 items-center justify-between rounded-[30px] bg-primary/5 dark:bg-bg3 border focus-within:border-primary focus:outline-none border-n40 dark:border-n500">
                    <input type="text" placeholder="Location" class="w-full text-sm focus:outline-none bg-transparent" />
                    <IconMapPin :size="20" />
                </div>
            </div>
            <div class="col-span-10 md:col-span-5 xl:col-span-2">
                <CommonDropdown :options="[{ name: 'Full Time' }, { name: 'Part Time' }, { name: 'Contract' }]"
                    inputClass="!py-3.5 " />
            </div>
            <div class="col-span-10 md:col-span-5 xl:col-span-2">
                <div
                    class="py-3 px-6 flex items-center justify-between rounded-[30px] bg-primary/5 dark:bg-bg3 border focus-within:border-primary focus:outline-none border-n40 dark:border-n500">
                    <input type="number" placeholder="Salary"
                        class="w-full text-sm focus:outline-none bg-transparent [-moz-appearance:_textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none" />
                </div>
            </div>
            <div class="col-span-10 md:col-span-5 xl:col-span-2">
                <button class="btn w-full flex justify-center py-2.5">
                    Search
                </button>
            </div>
        </form>
    </div>
</template>