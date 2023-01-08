<script setup lang="ts">
    import { computed } from 'vue'

    interface Props {
        nameModel: string,
        nameType: 'First Name' | 'Last Name'
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
    const decorations = () => {
        switch(props.nameType){
            case 'First Name':
                return {
                    placeholder: 'Johanne',
                    icon: 'fa-solid fa-f'
                }
            case 'Last Name':
                return {
                    placeholder: 'Smith',
                    icon: 'fa-solid fa-l'
                }
        }
    }

    // Allows parent component to make use of the password data
    const emit = defineEmits(['update:nameModel'])
    const name = computed({
        get(){
            return props.nameModel
        },
        set(value){
            emit('update:nameModel', value)
        }
    })
</script>
<template>
    <div class="flex flex-col">
        <div class="flex items-center border-b-2 border-primary text-primary" :class="props.styleMain">
            <font-awesome-icon :icon="decorations().icon"></font-awesome-icon>
            <input required type="text" :placeholder="decorations().placeholder" v-model.lazy="name" class="text-primary bg-transparent border-0 w-full placeholder:text-primary placeholder:opacity-75 focus:ring-0"  :class="props.styleText">
        </div>
        <div class="text-primary flex flex-col" :class="props.styleText">    
            <small>{{ nameType }}</small>
            <small class="font-bold" v-for="error in props.errors">
                {{ error }}
            </small>
        </div>
    </div>
</template>