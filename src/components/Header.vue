<!-- 
    Reusable header component 
-->
<script setup lang="ts">
    import SettingsButton from './buttons/SettingsButton.vue';
</script>

<template>
    <div class="absolute flex justify-end w-full top-0 p-4 z-50">
        <div class="flex flex-col gap-4 text-xl">
            <SettingsButton/>
        </div>
    </div>
</template>