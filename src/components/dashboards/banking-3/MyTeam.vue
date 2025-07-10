<script setup lang="ts">
import OptionsVertical from '@/components/shared/OptionsVertical.vue';
import { IconPhoneCall } from '@tabler/icons-vue';

const teams = [
    {
        name: "Arlene",
        img: "/images/user.png",
        contact: "880234123412",
    },
    {
        name: "Gloria",
        img: "/images/user-2.png",
        contact: "880234123412",
    },
    {
        name: "Aubrey",
        img: "/images/user-3.png",
        contact: "880234123412",
    },
    {
        name: "Regina",
        img: "/images/user-4.png",
        contact: "880234123412",
    },
    {
        name: "Gladys",
        img: "/images/user-5.png",
        contact: "880234123412",
    },
    {
        name: "Courtney",
        img: "/images/user-6.png",
        contact: "880234123412",
    },
];
</script>

<template>
    <div class="col-span-12 lg:col-span-4 xxl:col-span-3 box">
        <div class="flex flex-wrap justify-between items-center gap-3 pb-4 lg:pb-6 mb-4 lg:mb-6 bb-dashed">
            <p class="font-medium">My Team</p>
            <OptionsVertical />
        </div>
        <div class="w-full overflow-x-auto">
            <table class="w-full whitespace-nowrap">
                <thead>
                    <tr class="bg-primary/5 dark:bg-bg3 text-n500 dark:text-n30">
                        <th class="py-3 font-semibold px-4 text-start">Name</th>
                        <th class="py-3 font-semibold px-4 text-center">Contact</th>
                    </tr>
                </thead>
                <tbody>

                    <tr v-for="{ contact, img, name } in teams" :key="name" class="even:bg-primary/5 dark:even:bg-bg3">
                        <td class="py-3 px-4">
                            <span class="flex items-center gap-2">
                                <img class="rounded-full" :src="img" :width="32" :height="32" alt="img" />
                                <p>{{ name }}</p>
                            </span>
                        </td>
                        <td class="py-3 px-4 flex justify-center">
                            <a :href="`tel:${contact}}`">
                                <IconPhoneCall />
                            </a>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    </div>
</template>