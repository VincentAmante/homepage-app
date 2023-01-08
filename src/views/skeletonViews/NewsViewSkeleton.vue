<!-- This view loads if the News Module is still pending -->
<script setup lang="ts">
    import NewsArticleSkeleton from '@/components/skeletons/NewsArticleSkeleton.vue';
    import { useScreenWatcher } from '@/components/composables/ScreenWatcher';

    const isPastBreakpoint = useScreenWatcher()
</script>

<template>
    <section class="m-8">
        <h2 class=" px-4 text-3xl py-2 font-bold uppercase text-primary">
            New York Times
        </h2>
        <div class="w-ful min-h-56 flex flex-col pb-8 pt-4 gap-8 md:flex-row overflow-y-scroll bg-white p-4 rounded-3xl md:overflow-y-hidden md:overflow-x-scroll max-h-96 md:max-h-screen md:items-stretch md:bg-transparent">
            <NewsArticleSkeleton :is-past-breakpoint="isPastBreakpoint" v-for="n in 7"/>
            Hello
        </div>
    </section>
</template>