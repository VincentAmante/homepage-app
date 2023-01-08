<script setup lang="ts">
    import { watch } from 'vue';
    const props = defineProps<{
        name?: string,
        title?: string,
        overview: string,
        poster_path: string,
        backdrop_path: string
    }>()

    // Gets path to image based on props
    let urlImgPrefix = `https://image.tmdb.org/t/p/w500/`
    let poster = `${urlImgPrefix}${props.poster_path}`
    let backdrop = `${urlImgPrefix}${props.backdrop_path}`
    // Watches props if images change, in which case the path is re-calculated
    watch(() => props.poster_path, () => {
        poster = `${urlImgPrefix}${props.poster_path}`
    })
    watch(() => props.backdrop_path, () => {
        backdrop = `${urlImgPrefix}${props.backdrop_path}`
    })
</script>

<template>
    <div class="max-w-5xl bg-black flex justify-center rounded-3xl py-4 overflow-hidden mx-auto">
        <!-- Blurred backdrop -->
        <img :src="backdrop" alt="" class="w-full h-full absolute object-cover blur-lg opacity-40 rounded-3xl">
        <div class="grid max-w-2xl p-6 rounded-3xl grid-cols-2 sm:px-10 md:px-16">
            <!-- Poster -->
            <div class="flex justify-center rounded-l-md">
                <img :src="poster" alt="" class="rounded-l-md object-cover">
            </div>
            <!-- Name or Title (one would usually be null) -->
            <div class="text-white p-4 rounded-r-3xl flex flex-col justify-center">
                <h1 class="text-primary border-solid border-b-2 pb-2 border-b-primary sm:text-lg md:text-2xl lg:text-md text-ellipsis">
                    {{ name }}{{ title }}
                </h1>
                <!-- Summary -->
                <p class="text-sm sm:text-base line-clamp-[9] text-justify">{{ overview }}</p>
            </div>
        </div>
    </div>
</template>