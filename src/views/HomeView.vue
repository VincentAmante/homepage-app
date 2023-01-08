<!-- 
    Main view of the Home Page app
 -->

<script setup lang="ts">

// Imports

import SearchBar from '@/components/SearchBar.vue'
import Header from '@/components/Header.vue'

import NewYorkTimesModule from './modules/NewYorkTimesModule.vue'
import NewsViewSkeleton from '@/views/skeletonViews/NewsViewSkeleton.vue'

import WeatherModule from './modules/WeatherModule.vue'
import WeatherViewSkeleton from './skeletonViews/WeatherViewSkeleton.vue'

import TMBDModule from './modules/TMBDModule.vue'
import TMBDSkeleton from './skeletonViews/TMBDSkeleton.vue';

import { ref, onMounted} from 'vue'

// userStore contains data that persists throughout the app, in this case it stores the user's details to be utilised for databasr calls
import {useUserStore} from '@/stores/user'
const user = useUserStore()

const firstName = ref('')

// Modules are disabled by default to prevent unnecessary calls
const weatherEnabled = ref(false)  
const newsEnabled = ref(false)
const tmbdEnabled = ref(false)

// Initialises the home page after loading
onMounted(async () => {
    user.getUserName().then(res => {
        firstName.value = res.firstName
    })

    user.getModules().then((res: {
        weather: boolean,
        news: boolean,
        tmbd: boolean
    }) => {
        weatherEnabled.value = res.weather
        newsEnabled.value = res.news
        tmbdEnabled.value = res.tmbd
    })
})
</script>

<template>
    <Header></Header>
    <main>
        <section>
            <div class="flex flex-col items-center justify-center h-[48vh] mt-8">
                <div class="m-8 my-2 flex justify-center items-center text-primary gap-2">
                    <font-awesome-icon icon="fa-solid fa-house-chimney-window" class=" text-6xl" />
                    <div class="text-2xl uppercase">
                        <p class="font-bold">Welcome Home</p>
                        <p>{{ firstName }}</p>
                    </div>
                </div>

                <!-- Takes user to Google when searched -->
                <SearchBar/>
            </div>
        </section>

        <!-- Modules are displayed here, each one has a skeleton view that displays while waiting for the API requests to finish -->
        <div class="flex flex-col gap-2">
            <Suspense v-if="weatherEnabled">
                <WeatherModule></WeatherModule>
                <template #fallback>
                    <WeatherViewSkeleton/>
                </template>
            </Suspense>

            <Suspense v-if="newsEnabled">
                <NewYorkTimesModule></NewYorkTimesModule>
                <template #fallback>
                    <NewsViewSkeleton/>
                </template>
            </Suspense>
            
            <Suspense v-if="tmbdEnabled">
                <TMBDModule ></TMBDModule>
                <template #fallback>
                    <TMBDSkeleton/>
                </template>
            </Suspense>
        </div>
    </main>
</template>