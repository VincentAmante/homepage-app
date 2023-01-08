<script setup lang="ts">
    import { ref, computed } from 'vue';
    import {useDayHandler} from '@/components/composables/DayHandler'

    const props = defineProps(['forecastDate', 'day', 'location', 'forecast'])

    const forecastDate = useDayHandler(new Date(props.forecastDate))
</script>

<template>
    <div @click="$emit('weather-block-selected')" class="bg-white rounded-3xl p-4 grid grid-flow-col shadow-md">
        <div class="flex flex-col text-primary">
            <img :src="day.condition.icon" class=" max-w-[48px]" alt="">
            <p class=" text-sm font-bold">{{ day.condition.text }}</p>
           
            <p class="text-6xl flex">
                {{ day.temp_c }}
                <small class=" text-xl">&#176c </small>
            </p>
        </div>
        <div class="flex flex-col items-end text-primary gap-4 pl-10">
            <div class="flex flex-col items-end">
                <p class="text-2xl font-bold uppercase leading-4 pt-1">{{ forecastDate.dayOfWeek.value }}</p>
                <p class="font-bold capitalize">{{ forecastDate.relativeDay.value }}</p>
            </div>
            <div class="flex flex-col items-end justify-center">
                <p>{{ location.name }}</p>
                <div class="flex flex-col text-xs">
                    <div class="pr-1 flex flex-row-reverse items-center gap-2 text-primary-warm">
                        <font-awesome-icon icon="fa-solid fa-temperature-high" />
                        <p class="font-bold">{{ forecast.maxtemp_c }}&#176C</p>
                    </div>
                    <div class="pr-1 flex flex-row-reverse items-center gap-2 text-primary-cool">
                        <font-awesome-icon icon="fa-solid fa-temperature-low" />
                        <p class="font-bold">{{ forecast.mintemp_c }}&#176C</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>