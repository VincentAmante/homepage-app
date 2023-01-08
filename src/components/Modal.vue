<script setup lang="ts">
</script>

<template>
    <div class="w-full h-screen fixed top-0 left-0 bg-black bg-opacity-75 flex flex-col justify-center items-center backdrop-blur-md">
        <div class="bg-white p-6 rounded-3xl">

            <div class="text-xl text-primary">
                <slot name="header">
                </slot>
            </div>
            <div>
                <slot name="body">
                </slot>
            </div>
            <div class="w-full flex justify-center pt-4 gap-4 font-medium">
                <slot name="buttons">

                </slot>
                <button @click="$emit('close')" class=" hover:text-gray-300 flex flex-row items-center justify-center gap-2 bg-primary rounded-3xl p-1 px-6 text-white">
                    <p>Close</p>
                    <font-awesome-icon class="text-2xl" icon="fa-solid fa-xmark" />
                </button>
            </div>
        </div>
    </div>
</template>