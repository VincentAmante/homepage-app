<script setup lang="ts">
    import { ref } from 'vue';
    import WeatherBlock from '@/components/WeatherBlock.vue';
    import WeatherBlockCurrent from '@/components/WeatherBlockCurrent.vue'
    import axios from 'axios';

    let delay = 2000;
    const forecasts = ref<Forecast[]>([])
    const location = ref<object>({})
    const current = ref<object>({})

    // Defines the expected layout of a Forecast object
    interface Forecast {
        date: string,
        day: {
            maxtemp_c: number,
            mintemp_c: number,
            condition: {
                icon: string,
                text: string
            }
        },
    }
    // Allows app to wait for the geolocation API to acquire the coordinates of the user
    const getCoords = async () => {
        return new Promise(function(resolve, reject) {
            navigator.geolocation.getCurrentPosition(resolve, reject)
        })
    }
    
    // Attempts to fetch from the weather API after acquiring the user's coordinates
    const viewFailed = ref(false)
    try {
        await getCoords().then(async (res: any) => {
        const coords = res.coords
        const coordsStr = `${coords.latitude},${coords.longitude}`

        const request = `https://api.weatherapi.com/v1/forecast.json?key=${import.meta.env.VITE_WEATHER_KEY}&q=${coordsStr}&days=7&aqi=no&alerts=yes`

        await axios.get(request).then((res:any) => {
            forecasts.value = res.data.forecast.forecastday
            location.value = res.data.location
            current.value = res.data.current
            })
        })
    } catch {
        viewFailed.value = true
    }

    // This section aims to provide more information on the error if the weather failed to fetch
    // As the issue most likely stems from the permission being blocked, an appropriate message is provided
    const permissionsResult = ref('')
    navigator.permissions.query({name: 'geolocation'}).then((result) => {
        if (result.state === 'denied'){
            permissionsResult.value = 'Geolocation is blocked by your browser, please re-enable it from settings'
        } else if (result.state === 'granted') {
            permissionsResult.value = 'Geolocation is permitted but view still failed, error is likely from our end'
        } else if (result.state === 'prompt') {
            permissionsResult.value = 'Geolocation is still being prompted, unsure of the issue'
        }
    })

</script>

<template>
    <section class="m-8 mb-10 overflow-x-scroll lg:overflow-visible">
        <h2 class=" px-4 text-3xl py-2 font-bold uppercase text-primary">
            Weather
        </h2>
        
        <div v-if="!viewFailed" class="grid sm:grid-flow-col gap-8 sm:w-fit">
            <div v-for="(forecast, index) in forecasts">
                <WeatherBlockCurrent v-if="index==0" :forecastDate="forecast.date" :day="current" :forecast="forecast.day" :location="location"/>
                <WeatherBlock v-if="index>0" :forecastDate="forecast.date" :day="forecast.day" :location="location"/>
            </div>
        </div>

        <!-- Section if view failed -->
        <div v-else class="bg-white flex flex-col items-center justify-center rounded-3xl p-6 py-12 text-primary gap-6  text-center">
            <font-awesome-icon icon="fa-regular fa-face-sad-tear" class="text-6xl"/>
            <p class="text-2xl font-bold">Weather cannot be acquired</p>
            <p>{{ permissionsResult }}</p>
        </div>
    </section>
</template>