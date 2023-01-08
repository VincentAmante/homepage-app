<!-- This view loads if the Weather Module is still pending -->
<script setup lang="ts">
    import WeatherBlockSkeleton from '@/components/skeletons/WeatherBlockSkeleton.vue';
</script>

<template>
    <section class="m-8 my-10">
        <h2 class=" px-4 text-3xl py-2 font-bold uppercase text-primary">
            Weather
        </h2>
        <div class="grid sm:grid-flow-col gap-8 sm:w-fit">
            <div v-for="n in 3">
                <WeatherBlockSkeleton/>
            </div>
        </div>
    </section>
</template>