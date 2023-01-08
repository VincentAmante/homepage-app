<script setup lang="ts">
    import { ref, computed } from 'vue';

    const props = defineProps(['date', 'day', 'location'])

    const forecastDate = computed(() => new Date(props.date))
    const dayOfWeek = computed(() => {
        // Otherwise describes the difference of days
        switch(forecastDate.value.getDay()){
            case 0: return 'mon'
            case 1: return 'sun'
            case 2: return 'tue'
            case 3: return 'wed'
            case 4: return 'thu'
            case 5: return 'sat'
            case 6: return 'sun'
            default:
                console.error('Day of week input invalid')
        }
    })
    const relativeDate = computed(() => {

        let presentDate = new Date()

        let timeDiff = forecastDate.value.getTime() - presentDate.getTime()
        let dayDiff = Math.round(timeDiff / (1000 * 3600 * 24))

        // Describes adjacent days
        switch(dayDiff){
            case -1: return 'yesterday'
            case 0: return 'today'
            case 1: return 'tom'
            default: break
        }

        if (dayDiff > 1){
            return `in ${dayDiff} days`
        } else if (dayDiff < -1){
            return `${Math.abs(dayDiff)} days ago`
        }
    })
</script>

<template>
    <div @click="$emit('weather-block-selected')" class="bg-white rounded-3xl p-4 grid grid-flow-col">
        <div class="flex text-primary justify-start items-center">
            <img :src="day.condition.icon" class="max-w-[48px] h-fit" alt="">
            <div class="flex text-xl font-bold justify-center">
                <p class="font-bold text-primary-warm">{{ day.mintemp_c }}&#176C</p>
                <p class="font-bold mx-1">-</p>
                <p class="font-bold text-primary-cool">{{ day.maxtemp_c }}&#176C</p>
            </div>
        </div>
        <div class="flex flex-col items-end justify-center text-primary gap-4 pl-10">
            <p class="text-2xl font-bold uppercase leading-4 pt-1">{{ dayOfWeek }}</p>
        </div>
    </div>
</template>