<script setup lang="ts">
    const sizes = ['1/2', '2/3', 'full', '3/4']

    const MIN_LINES = 2
    const MAX_EXTRA_LINES = 3
    const linesCount = Math.floor(Math.random() * MAX_EXTRA_LINES) + MIN_LINES;
    
    function getRandomSize(){
        let size = sizes[Math.floor((Math.random()*sizes.length))]
        return `w-${size}`
    }
</script>

<template>
     <div class="lg:min-w-[16rem] bg-white rounded-3xl">
        <div class="h-full flex justify-between p-6">
            <div class="w-1/3">
                <div class="w-2/3 rounded-md bg-primary animate-pulse aspect-square"></div>
                <div class="p-4 px-0 flex flex-col items-start gap-4 w-full">
                    <div v-for="n in 2" :class="getRandomSize()" class="w-full bg-primary h-4 rounded-3xl animate-pulse"></div>
                </div>
            </div>
            <div class="p-4 w-1/2 flex flex-col justify-end items-end gap-4">
                <div v-for="n in 2" :class="getRandomSize()" class="w-full bg-primary h-4 rounded-3xl animate-pulse"></div>
            </div>
        </div>
    </div>
</template>