<script setup lang="ts">
import { IconCircleCheck } from '@tabler/icons-vue';
import { IconAlarm } from '@tabler/icons-vue';
import { IconVideo } from '@tabler/icons-vue';

const courses = [
    {
        title: "UI/UX Design",
        img: "/images/course-1.png",
        instructor: "Theresa Webb",
        instructorImg: "/images/user.png",
        lessons: 20,
        hours: 50,
        url: "#",
        completed: 100,
    },
    {
        title: "Graphic Design",
        img: "/images/course-2.png",
        instructor: "Cathryn Murphy",
        instructorImg: "/images/user-5.png",
        lessons: 20,
        hours: 50,
        url: "#",
        completed: 90,
    },
    {
        title: "Digital Marketing",
        img: "/images/course-3.png",
        instructor: "Ronald Richards",
        instructorImg: "/images/user-6.png",
        lessons: 20,
        hours: 50,
        url: "#",
        completed: 80,
    },
    {
        title: "Software Developer",
        img: "/images/course-4.png",
        instructor: "Jenny Wilson",
        instructorImg: "/images/user-2.png",
        lessons: 20,
        hours: 50,
        url: "#",
        completed: 100,
    },
    {
        title: "Scrum Master",
        img: "/images/course-5.png",
        instructor: "Jerome Bell",
        instructorImg: "/images/user-3.png",
        lessons: 20,
        hours: 50,
        url: "#",
        completed: 90,
    },
    {
        title: "Ethical Hacker",
        img: "/images/course-6.png",
        instructor: "Robert Fox",
        instructorImg: "/images/user-4.png",
        lessons: 20,
        hours: 50,
        url: "#",
        completed: 100,
    },
    {
        title: "Software Tester",
        img: "/images/course-7.png",
        instructor: "Cody Fisher",
        instructorImg: "/images/user-5.png",
        lessons: 20,
        hours: 50,
        url: "#",
        completed: 100,
    },
    {
        title: "Data Scientist",
        img: "/images/course-8.png",
        instructor: "Jane Cooper",
        instructorImg: "/images/user-6.png",
        lessons: 20,
        hours: 50,
        url: "#",
        completed: 90,
    },
];
</script>

<template>
    <div class="grid grid-cols-12 gap-4 xxxl:gap-6">
        <RouterLink v-for="{ completed, hours, img, instructor, instructorImg, lessons, title, url } in courses"
            :key="title" :to="url"
            class="col-span-12 min-[580px]:col-span-6 lg:col-span-4 block min-[1700px]:col-span-3 box p-5 md:p-6 xl:px-8">
            <img :src="img" :width="100" :height="100" class="rounded-full mb-6" alt="course thumb" />
            <h4 class="h4 mb-4 xl:mb-7">{{ title }}</h4>
            <div class="flex gap-4 items-center mb-6">
                <img :src="instructorImg" :width="40" class="rounded-full" :height="40" alt="icon" />
                <p class="text-xl font-semibold">{{ instructor }}</p>
            </div>
            <div class="flex gap-6 pb-4 mb-4 xl:mb-6 xl:pb-6 bb-dashed">
                <div class="flex items-center gap-2">
                    <IconVideo class="text-secondary3" />
                    <span class="text-sm 4xl:text-base">{{ lessons }} Lesson</span>
                </div>
                <div class="flex items-center gap-2">
                    <IconAlarm class="text-secondary3" />
                    <span class="text-sm 4xl:text-base">{{ hours }} Hours</span>
                </div>
            </div>

            <span v-if="completed == 100" class="flex items-center gap-2">
                <span class="text-primary">
                    <IconCircleCheck :size="22" />
                </span>
                Completed
            </span>

            <div v-else class="flex items-center gap-4">
                <div class="bg-primary/10 rounded-lg w-full h-2">
                    <div :style="{ width: completed + '%' }" class="bg-primary rounded-lg h-2"></div>
                </div>
                <span class="text-primary">{{ completed }}%</span>
            </div>

        </RouterLink>
    </div>
</template>