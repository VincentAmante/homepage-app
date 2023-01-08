<script setup lang="ts">
    import { computed } from 'vue'

interface Props {
    emailModel: string,
    errors?: string[],
    styleMain?: string[],
    styleText?: string[]
}
// Includes default values
const props = withDefaults(defineProps<Props>(), {
    styleMain: () => [],
    styleText: () => []
})

// Chooses the icon and placeholder based on the name type

    // Allows parent component to make use of the password data
const emit = defineEmits(['update:emailModel'])
const email = computed({
    get(){
        return props.emailModel
    },
    set(value){
        emit('update:emailModel', value)
    }
})
</script>

<template>
    <div class="flex flex-col">
        <div class="flex items-center border-b-2 border-primary text-primary" :class="props.styleMain">
            <font-awesome-icon icon="fa-solid fa-at"></font-awesome-icon>
            <input required type="email" placeholder="e.g. john.smith@email.com" v-model.lazy="email" class="bg-transparent border-0 placeholder:text-primary placeholder:opacity-75 focus:ring-0 w-full" :class="props.styleText">
        </div>
        <div class="text-primary flex flex-col" :class="props.styleText">
            <small>
                Email
            </small>
            <small v-for="error in props.errors" class="font-bold">
                {{ error }}
            </small>
        </div>
    </div>
</template>