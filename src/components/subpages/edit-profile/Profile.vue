<script setup lang="ts">
import {
    IconCheck,
    IconCirclePlus,
    IconEdit,
    IconMail,
    IconMapPin,
    IconMessage,
    IconPhoneCall
} from '@tabler/icons-vue'
const details = [
    {
        title: 'Name',
        value: 'Kathryn Murphy'
    },
    {
        title: 'Father Name',
        value: 'Bessie Cooper'
    },
    {
        title: 'Mother Name',
        value: 'Theresa Webb'
    },
    {
        title: 'Phone',
        value: '(629) 555-0129'
    },
    {
        title: 'Email',
        value: 'info@mail.com'
    },
    {
        title: 'Web Site',
        value: 'www.info.com'
    },
    {
        title: 'Country',
        value: 'US'
    },
    {
        title: 'Zip Code',
        value: '5163'
    },
    {
        title: 'Address',
        value: 'Toledo'
    }
]
const educations = [
    {
        title: 'Master Degree (Year)',
        value: '2014-2017'
    },
    {
        title: 'Department',
        value: 'CSE'
    },
    {
        title: 'Institute',
        value: 'Uttara University'
    },
    {
        title: 'Bachelor (Year)',
        value: '2011-2013'
    },
    {
        title: 'Department',
        value: 'CSE'
    },
    {
        title: 'Institute',
        value: 'Uttara University'
    },
    {
        title: 'School (Year)',
        value: '2009-2011'
    },
    {
        title: 'Group',
        value: 'Science'
    },
    {
        title: 'Institute',
        value: 'School of London, England'
    }
]
</script>

<template>
    <div class="grid grid-cols-12 gap-4 xxxl:gap-6">
        <div class="col-span-12 lg:col-span-5 xl:col-span-4">
            <div class="box p-2 sm:p-3 sticky top-28">
                <div
                    class="bg-primary/5 p-3 sm:p-5 xxxl:p-8 dark:bg-bg3 flex flex-col items-center justify-center rounded-2xl h-full">
                    <div class="p-3 bg-n0 dark:bg-bg4 rounded-full relative">
                        <img :width="120" :height="120" class="rounded-full" src="/images/user-big-2.png" alt="img" />
                        <div class="p-1 absolute right-2 bottom-10 bg-primary rounded-full text-n0">
                            <IconCheck :size="18" />
                        </div>
                    </div>
                    <h4 class="mt-6 lg:mt-8 h4 mb-3">Diana Prince</h4>
                    <p class="mb-4 lg:mb-6">UI/UX Designer</p>

                    <div class="flex justify-center bb-dashed pb-6 mb-6 w-full">
                        <div class="flex text-center md:divide-x rtl:md:divide-x-reverse divide-dashed divide-primary/20">
                            <div class="px-1 md:px-3 lg:px-4 xxl:px-6">
                                <p class="text-lg font-semibold mb-1">N/A</p>
                                <p class="text-sm">Role Status</p>
                            </div>
                            <div class="px-1 md:px-3 lg:px-4 xxl:px-6">
                                <p class="text-lg font-semibold mb-1">0 - 5</p>
                                <p class="text-sm">Years of exp.</p>
                            </div>
                            <div class="px-1 md:px-3 lg:px-4 xxl:px-6">
                                <p class="text-lg font-semibold mb-1">Lvl. n/a</p>
                                <p class="text-sm">Global rating</p>
                            </div>
                        </div>
                    </div>

                    <div class="flex gap-3 justify-center">
                        <RouterLink to="#" class="btn px-4 xxxl:px-6">
                            <IconCirclePlus :size="20" />
                            Follow
                        </RouterLink>
                        <RouterLink to="#" class="btn-outline px-4 xxxl:px-6">
                            <IconMessage :size="20" />
                            Message
                        </RouterLink>
                    </div>
                    <div class="flex flex-col gap-2 md:gap-4 mt-7 lg:mt-10 self-start">
                        <div class="flex items-center gap-1.5 md:gap-3 w-full">
                            <div class="rounded-full text-primary">
                                <IconPhoneCall :size="20" />
                            </div>
                            <span class="text-sm md:text-base"> (302) 555-0107, (302) 555-0108 </span>
                        </div>
                        <div class="flex items-center gap-1.5 md:gap-3 w-full">
                            <div class="rounded-full text-primary">
                                <IconMail :size="20" />
                            </div>
                            <span class="text-sm md:text-base"> georgia.young@example.com </span>
                        </div>
                        <div class="flex items-center gap-1.5 md:gap-3 w-full">
                            <div class="rounded-full text-primary">
                                <IconMapPin :size="20" />
                            </div>
                            <span class="text-sm md:text-base"> 775 Rolling Green Rd. </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-span-12 lg:col-span-7 xl:col-span-8">
            <div class="box p-3">
                <div class="box bg-primary/5 dark:bg-bg3 xxxl:p-8">
                    <p class="mb-6 font-medium pb-6 bb-dashed">Profile Info</p>
                    <div class="box border-none xxl:p-8 mb-4 lg:mb-6">
                        <div class="bb-dashed pb-4 mb-4 md:mb-6 md:pb-6 flex justify-between items-center">
                            <h5 class="h5">About Me</h5>
                            <button class="btn-outline">
                                <IconEdit />
                                Edit
                            </button>
                        </div>
                        <p>
                            Hello, I&apos;m Darrel Steward, a passionate Creative Graphic Designer & User
                            Experience Designer. With a strong background in visual communication and a deep
                            understanding of user-centric design principles, I specialize in creating compelling
                            digital experiences.
                        </p>
                    </div>
                    <div class="box border-none xxl:p-8 mb-4 lg:mb-6">
                        <div class="bb-dashed pb-4 mb-4 md:mb-6 md:pb-6 flex justify-between items-center">
                            <h5 class="h5">Personal Details</h5>
                            <button class="btn-outline">
                                <IconEdit />
                                Edit
                            </button>
                        </div>
                        <div class="grid grid-cols-3 gap-6">
                            <div v-for="{ title, value } in details" :key="title"
                                class="col-span-3 sm:col-span-2 md:col-span-1">
                                <p class="text-xs sm:text-sm font-medium mb-1">{{ title }}</p>
                                <p class="text-base md:text-lg font-medium">{{ value }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="box border-none xxl:p-8 mb-4 lg:mb-6">
                        <div class="bb-dashed pb-4 mb-4 md:mb-6 md:pb-6 flex justify-between items-center">
                            <h5 class="h5">Education</h5>
                            <button class="btn-outline">
                                <IconEdit />
                                Edit
                            </button>
                        </div>
                        <div class="grid grid-cols-3 gap-6">
                            <div v-for="{ title, value } in educations" :key="title"
                                class="col-span-3 sm:col-span-2 md:col-span-1">
                                <p class="text-xs sm:text-sm font-medium mb-1">
                                    {{ title }}
                                </p>
                                <p class="text-base md:text-lg font-medium">{{ value }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="box border-none xxl:p-8">
                        <div class="bb-dashed pb-4 mb-4 md:mb-6 md:pb-6 flex justify-between items-center">
                            <h5 class="h5">Employment</h5>
                            <button class="btn-outline">
                                <IconEdit />
                                Edit
                            </button>
                        </div>
                        <div class="grid grid-cols-12 gap-4 sm:gap-6">
                            <div class="col-span-12 sm:col-span-4">
                                <p class="text-xs sm:text-sm font-medium mb-1">senior</p>
                                <p class="text-base md:text-lg font-medium">Senior UI/UX designer</p>
                            </div>
                            <div class="col-span-12 sm:col-span-8">
                                <p class="text-xs sm:text-sm font-medium mb-1">Job Responsibility</p>
                                <p class="text-base md:text-lg font-medium">
                                    Perform task related to project with the 100+ team under my observation. Team
                                    management is key role in this company.
                                </p>
                            </div>
                            <div class="col-span-12 sm:col-span-4">
                                <p class="text-xs sm:text-sm font-medium mb-1">Trainee cum Project Manager</p>
                                <p class="text-base md:text-lg font-medium">2017-2019</p>
                            </div>
                            <div class="col-span-12 sm:col-span-8">
                                <p class="text-xs sm:text-sm font-medium mb-1">Job Responsibility</p>
                                <p class="text-base md:text-lg font-medium">
                                    Team management is key role in this company.
                                </p>
                            </div>
                            <div class="col-span-12 sm:col-span-4">
                                <p class="text-xs sm:text-sm font-medium mb-1">School (Year)</p>
                                <p class="text-base md:text-lg font-medium">2009-2011</p>
                            </div>
                            <div class="col-span-12 sm:col-span-8">
                                <p class="text-xs sm:text-sm font-medium mb-1">Job Responsibility</p>
                                <p class="text-base md:text-lg font-medium">School of London, England</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
