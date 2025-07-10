<script setup lang="ts">
import OptionsVertical from '@/components/shared/OptionsVertical.vue';

const matchesData = [
    {
        time: "04:15 pm",
        match: {
            team1: {
                icon: "/images/barcelona.png",
                name: "FC Barcelona",
            },
            team2: {
                icon: "/images/atletico.png",
                name: "Atletico Madrid",
            },
            result: "2 : 4",
        },
        venue: "Maracana",
    },
    {
        time: "10:32 pm",
        match: {
            team1: {
                icon: "/images/real-madrid.png",
                name: "Real Madrid",
            },
            team2: {
                icon: "/images/barcelona.png",
                name: "FC Barcelona",
            },
            result: "1 : 5",
        },
        venue: "Celtic Park",
    },
    {
        time: "01:55 pm",
        match: {
            team1: {
                icon: "/images/atletico.png",
                name: "Atletico Madrid",
            },
            team2: {
                icon: "/images/real-madrid.png",
                name: "Real Madrid",
            },
            result: "3 : 2",
        },
        venue: "Mestella",
    },
    {
        time: "12:01 pm",
        match: {
            team1: {
                icon: "/images/liverpool.png",
                name: "Liverpool",
            },
            team2: {
                icon: "/images/ac-milan.png",
                name: "AC Milan",
            },
            result: "5 : 2",
        },
        venue: "Old Trafford",
    },
    {
        time: "07:59 pm",
        match: {
            team1: {
                icon: "/images/manchester.png",
                name: "Manchester City",
            },
            team2: {
                icon: "/images/juventus.png",
                name: "AC Milan",
            },
            result: "3 : 2",
        },
        venue: "Anfield",
    },
    {
        time: "02:34 pm",
        match: {
            team1: {
                icon: "/images/manchester-united.png",
                name: "Manchester United",
            },
            team2: {
                icon: "/images/dortmund.png",
                name: "Borussia Dortmund",
            },
            result: "0 : 2",
        },
        venue: "Anfield",
    },
    {
        time: "01:08 pm",
        match: {
            team1: {
                icon: "/images/bayern.png",
                name: "Beyern Munich",
            },
            team2: {
                icon: "/images/chelsea.png",
                name: "Chelsea",
            },
            result: "3 : 2",
        },
        venue: "Anfield",
    },
    {
        time: "11:49 pm",
        match: {
            team1: {
                icon: "/images/dortmund.png",
                name: "Borussia Dortmund",
            },
            team2: {
                icon: "/images/manchester-united.png",
                name: "Manchester Unitd",
            },
            result: "1 : 5",
        },
        venue: "Camp Nou",
    },
    {
        time: "07:38 pm",
        match: {
            team1: {
                icon: "/images/leipzig.png",
                name: "RP Leipzig",
            },
            team2: {
                icon: "/images/manchester.png",
                name: "Manchester City",
            },
            result: "3 : 2",
        },
        venue: "Mestalla",
    },
    {
        time: "07:13 pm",
        match: {
            team1: {
                icon: "/images/juventus.png",
                name: "Juventus",
            },
            team2: {
                icon: "/images/leipzig.png",
                name: "RP Leipzig",
            },
            result: "1 : 5",
        },
        venue: "San Siro",
    },
    {
        time: "01:09 pm",
        match: {
            team1: {
                icon: "/images/ac-milan.png",
                name: "AC Milan",
            },
            team2: {
                icon: "/images/liverpool.png",
                name: "Liverpool",
            },
            result: "3 : 2",
        },
        venue: "Camp Nou",
    },
    {
        time: "05:49 pm",
        match: {
            team1: {
                icon: "/images/chelsea.png",
                name: "Chelsea",
            },
            team2: {
                icon: "/images/bayern.png",
                name: "Bayern Munich",
            },
            result: "4 : 1",
        },
        venue: "San Siro",
    },
    {
        time: "10:41 pm",
        match: {
            team1: {
                icon: "/images/arsenal.png",
                name: "Arsenal",
            },
            team2: {
                icon: "/images/sevilla.png",
                name: "Sevilla",
            },
            result: "1 : 2",
        },
        venue: "Anfield",
    },

    {
        time: "12:23 pm",
        match: {
            team1: {
                icon: "/images/sevilla.png",
                name: "Sevilla",
            },
            team2: {
                icon: "/images/arsenal.png",
                name: "Arsenal",
            },
            result: "1 : 5",
        },
        venue: "San Siro",
    },

];
</script>

<template>
    <div class="overflow-x-auto w-full">
        <table class="w-full whitespace-nowrap">
            <thead>
                <tr class="bg-primary/5 dark:bg-bg3">
                    <th class="py-3 px-5 text-start">Time</th>
                    <th></th>
                    <th class="py-3 px-2 text-center">Match</th>
                    <th></th>
                    <th class="py-3 px-2 text-start">Venue</th>
                    <th class="py-3 px-2 text-center">Details</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="({ match, time, venue }, index) in matchesData" :key="time"
                    class="even:bg-primary/5 dark:even:bg-bg3">
                    <td class="py-3 px-5">
                        <span class="flex items-center gap-3">
                            <span class="text-secondary2">•</span>
                            <span>{{ time }}</span>
                        </span>
                    </td>
                    <td class="py-3 px-2">
                        <span class="flex text-end justify-end gap-2 items-center">
                            <span>{{ match.team1.name }}</span>
                            <img :src="match.team1.icon" :width="32" :height="32" alt="icon" />
                        </span>
                    </td>
                    <td class="py-3 px-12 text-center">
                        <span>{{ match.result }}</span>
                    </td>
                    <td class="py-3 px-2">
                        <span class="flex text-end justify-start gap-2 items-center">
                            <img :src="match.team2.icon" :width="32" :height="32" alt="icon" />
                            <span>{{ match.team2.name }}</span>
                        </span>
                    </td>
                    <td class="py-3 px-2">{{ venue }}</td>
                    <td class="py-3 px-2">
                        <div class=" flex justify-center">
                            <OptionsVertical :from-bottom="index == matchesData.length - 1 || index == matchesData.length - 2
                                " />
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>