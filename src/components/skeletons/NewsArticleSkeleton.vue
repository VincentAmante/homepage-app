<script setup lang="ts">
    const props = defineProps(['isPastBreakpoint'])

    const sizes = ['1/2', '2/3', 'full', '3/4', '1/4']

    const MIN_LINES = 2
    const MAX_EXTRA_LINES = 3
    const linesCount = Math.floor(Math.random() * MAX_EXTRA_LINES) + MIN_LINES;
    
    function getRandomSize(){
        let size = sizes[Math.floor((Math.random()*sizes.length))]
        return `w-${size}`
    }
</script>

<template>
    <article class="md:min-w-[20rem] ">
        <div v-if="props.isPastBreakpoint" class="h-full min-h-[24rem] bg-white rounded-3xl">
            <div class="relative h-full group cursor-pointer">
                <div class="h-1/2 object-cover rounded-t-3xl max-h-[12rem] bg-primary animate-pulse "></div>
                <div class="p-4 flex flex-col gap-4">
                    <div v-for="n in linesCount" :class="getRandomSize()" class="w-full bg-primary h-4 rounded-3xl animate-pulse"></div>
                </div>
            </div>
        </div>
        <div v-else class="h-full flex">
            <div class="w-1/3 max-w-[1/2] rounded-md bg-primary animate-pulse aspect-square">
            </div>
            <div class="p-4 w-1/2 flex flex-col gap-4">
                <div v-for="n in 2" :class="getRandomSize()" class="w-full bg-primary h-4 rounded-3xl animate-pulse"></div>
            </div>
        </div>
    </article>
</template>
