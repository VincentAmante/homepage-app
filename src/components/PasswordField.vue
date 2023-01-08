<script setup lang="ts">
    import { ref, computed } from 'vue';

    // Expected props
    interface Props {
        passwordModel: string,
        fieldName?: string,
        fieldSubtext?: string,
        errors?: string[],
        styleMain?: string[],
        styleText?: string[]
    }
    // Includes default values
    const props = withDefaults(defineProps<Props>(), {
        fieldName: "password",
        styleMain: () => [],
        styleText: () => []
    })

    // Handles whether a password's contents can be read, or in asterisk form (***)
    const passwordVisible = ref(false)
    function togglePasswordVisibility (){
        passwordVisible.value = !passwordVisible.value
    }

    // Allows parent component to make use of the password data
    const emit = defineEmits(['update:passwordModel'])
    const password = computed({
        get(){
            return props.passwordModel
        },
        set(value){
            emit('update:passwordModel', value)
        }
    })
</script>

<template>
    <div class="flex flex-col">
        <div class="flex items-center border-b-2 border-primary text-primary"  :class="props.styleMain">
            <font-awesome-icon icon="fa-solid fa-lock" :class="props.styleText"></font-awesome-icon>
            <div class="w-full">
                <input v-if="passwordVisible" required type="text" placeholder="password" v-model.lazy="password" class="text-primary bg-transparent border-0 w-full placeholder:text-primary placeholder:opacity-75 focus:ring-0" :class="props.styleText"/>
                <input v-else required type="password" placeholder="********" v-model.lazy="password" class="text-primary bg-transparent border-0 w-full placeholder:text-primary placeholder:opacity-75 focus:ring-0" :class="props.styleText"/>
            </div>
            <button @click="togglePasswordVisibility" :class="props.styleText">
                <font-awesome-icon v-if="passwordVisible" icon="fa-solid fa-eye" />
                <font-awesome-icon v-else icon="fa-solid fa-eye-slash" />
            </button>
        </div>
        <div class="text-primary flex flex-col" :class="props.styleText">
            <small class="capitalize">{{ fieldName }}</small>
            <small v-if="(fieldSubtext != undefined)">{{ fieldSubtext }}</small>
            <small class="font-bold" v-for="error in props.errors">
                {{ error }}
            </small>
        </div>
        <slot>
            
        </slot>
    </div>
</template>