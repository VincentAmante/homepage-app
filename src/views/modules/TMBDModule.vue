<script setup lang="ts">
    import { ref, watchEffect, onUnmounted } from 'vue';

    import TMBDCard from '@/components/TMBDCard.vue';
    import { Swiper, SwiperSlide, useSwiper } from 'swiper/vue'

    import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
    import 'swiper/css'
    import 'swiper/css';
    import 'swiper/css/navigation';
    import 'swiper/css/pagination';
    import 'swiper/css/scrollbar';

    import { useMovieDB } from '@/stores/movieDB';
    import TMBDLogo from '@/assets/media/TMBd-logo.svg'

    import { useUserStore } from '@/stores/user'

    const mediaType = ref<'tv'|'movie'>('tv') 
    const timeFrame = ref<'day'|'week'>('day')

    interface Media {
        name: string,
        overview: string,
        backdrop_path: string,
        poster_path: string
    }
    
    const mediaData = ref<Media[]>([])
    const movieDB = useMovieDB()
    const user = useUserStore()

    // Fetches user's default TMBd settings and then uses it to request data
    await user.getTMBdDefaults().then(async (res) => {
        mediaType.value = res.mediaType
        timeFrame.value = res.timeFrame
        await movieDB.fetchTrending(mediaType.value, timeFrame.value).then((res) => {
            mediaData.value = res
        })
    })
    
    watchEffect(async () => {
        await movieDB.fetchTrending(mediaType.value, timeFrame.value).then((res) => {
            mediaData.value = res
        })
    })

    const swiperModules = [Navigation, Pagination, Scrollbar, A11y, Autoplay]
</script>

<template>
    <section class="m-8">
        <div class="flex flex-col items-stretch">
            <div class="flex flex-col w-full">
                <div class="m-2 w-full">

                    <!-- Required logo to use the TMBd database -->
                    <div class="flex gap-1 bg-primary w-fit p-2 px-4 rounded-3xl mb-8">
                        <img :src="TMBDLogo" alt="" class="w-16 drop-shadow-lg shadow-primary">
                        <h2 class="px-4 text-3xl py-4 font-bold uppercase text-white">
                            The Movie Database
                        </h2> 
                    </div>

                    <!-- Options for the API -->
                    <div class="flex justify-between pb-2 text-lg px-4 text-primary max-w-5xl mx-auto lg:items-center">
                        <div class="flex gap-2">
                            <label for="mediaType_tv" class="flex">
                                <input type="radio" id="mediaType_tv" value="tv"  v-model="mediaType" radiogroup="mediaType" class="peer hidden">
                                <p class="peer-checked:underline peer-checked:font-bold cursor-pointer">TV</p>
                            </label>
                            <label for="mediaType_movie" class="flex checked:underline">
                                <input type="radio" id="mediaType_movie" value="movie"  v-model="mediaType" radiogroup="mediaType" class="peer hidden">
                                <p class="peer-checked:underline peer-checked:font-bold cursor-pointer">Movie</p>
                            </label>
                        </div>
                        
                        <!-- TimeFrame -->
                        <div class="flex gap-2">
                            <label for="timeframe_day" class="flex">
                                <input type="radio" id="timeframe_day" value="day" v-model="timeFrame" radiogroup="timeframe" class="peer hidden">
                                <p class="peer-checked:underline peer-checked:font-bold cursor-pointer">Day</p>
                            </label>
                            <label for="timeframe_week" class="flex checked:underline">
                                <input type="radio" id="timeframe_week" value="week"  v-model="timeFrame" radiogroup="timeframe" class="peer hidden">
                                <p class="peer-checked:underline peer-checked:font-bold cursor-pointer">Week</p>
                            </label>
                        </div>
                    </div>

                    <!-- Swipe-cards from Swiper.JS displaying the TMBd Data -->
                    <Swiper
                        id="swiper"
                        :modules="swiperModules"
                        :slides-per-view="1"
                        :space-between="50"
                        navigation
                        :pagination="{ clickable: true }"
                        :scrollbar="{ draggable: true }"
                        :autoplay="true">

                        <SwiperSlide v-for="card in mediaData" class="pb-8">
                            <TMBDCard :="card"/>
                        </SwiperSlide>
                    </Swiper>

                    <!-- Disclaimer as required in order to use the TMBd API -->
                    <small class="text-primary font-medium">This product uses the TMDd API but is not endorsed or certified by TMDB</small>
                </div>
            </div>
        </div>
    </section>
</template>

<!-- Overrwrites for SwiperJS stylings -->
<style lang="postcss">
    .swiper-button-prev {
        @apply hidden md:left-10 text-primary sm:block drop-shadow-lg
    }

    .swiper-button-next {
        @apply hidden md:right-10 text-primary sm:block drop-shadow-lg
    }

    .swiper-pagination-bullet-active {
        @apply bg-primary
    }
</style>