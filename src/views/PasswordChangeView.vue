<script setup lang="ts">
    import {ref} from 'vue'
    import {getAuth, createUserWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth'
    import { useRouter } from 'vue-router'
    import { getDatabase, ref as firebaseRef, set } from '@firebase/database'
    import { getCurrentUser } from 'vuefire'
    import { useUserStore } from '@/stores/user'
    import { validateEmail, validatePassword, validatePasswordConfirm, validateName } from '@/assets/scripts/formValidation'
    import { useValidationElement } from '@/components/composables/ValidationElement'

    const router = useRouter()

    // Password
    const password = ref("")
    const passwordValidation = ref(useValidationElement())
    function passwordHandler(){
        passwordValidation.value.setErrors(validatePassword(password.value))
    }

    // Password Confirmation
    const passwordConfirm = ref("")
    const passwordConfirmValidation = ref(useValidationElement())
    function passwordConfirmHandler(){
        passwordConfirmValidation.value.setErrors(validatePasswordConfirm(password.value, passwordConfirm.value))
    }

    // Marks passwords as visible or invisible (separately)
    const passwordVisible = ref(false)
    function togglePasswordVisibility(){
        passwordVisible.value = !passwordVisible.value
    }
    const passwordConfirmVisible = ref(false)
    function toggleConfirmPasswordVisibility(){
        passwordConfirmVisible.value = !passwordConfirmVisible.value
    }
</script>

<template>
    <div class="p-6 bg-white rounded-3xl">
        <h2>Change Password</h2>
        <div class="flex flex-col">
            <div class="flex items-center border-b-2 border-primary text-primary" :class="passwordValidation.style">
                <font-awesome-icon icon="fa-solid fa-lock"></font-awesome-icon>
                <div class="w-full">
                    <input v-if="passwordVisible" required type="text" placeholder="pas5woRD" v-model="password" @change="passwordHandler" class="bg-transparent border-0 w-full placeholder:text-primary placeholder:opacity-75 focus:ring-0" :class="passwordValidation.styleText"/>
                    <input v-else required type="password" placeholder="********" v-model="password" @change="passwordHandler" class="bg-transparent border-0 w-full placeholder:text-primary placeholder:opacity-75 focus:ring-0" :class="passwordValidation.styleText"/>
                </div>
                <button @click="togglePasswordVisibility" :class="passwordValidation.styleText">
                    <font-awesome-icon v-if="passwordVisible" icon="fa-solid fa-eye" />
                    <font-awesome-icon v-else icon="fa-solid fa-eye-slash" />
                </button>
            </div>
            <div class="text-primary flex flex-col" :class="passwordValidation.styleText">
                <small>Password</small>
                <small>Minimum: 8+ Characters | 1+ Number | 1+ Uppercase</small>
                <small class="font-bold" v-for="error in passwordValidation.errors">
                    {{ error }}
                </small>
            </div>
        </div>
        <div class="flex flex-col">
            <div class="flex items-center border-b-2 border-primary text-primary" :class="passwordConfirmValidation.style">
                <font-awesome-icon icon="fa-solid fa-key"></font-awesome-icon>
                <div class="w-full">
                    <input v-if="passwordConfirmVisible" required type="text" placeholder="pas5woRD" v-model="passwordConfirm" @change="passwordConfirmHandler" class="text-primary bg-transparent border-0 w-full placeholder:text-primary placeholder:opacity-75 focus:ring-0" :class="passwordConfirmValidation.styleText"/>
                    <input v-else required type="password" placeholder="********" v-model="passwordConfirm" class="text-primary bg-transparent border-0 w-full placeholder:text-primary placeholder:opacity-75 focus:ring-0" :class="passwordConfirmValidation.styleText"/>
                </div>
                <button @click="toggleConfirmPasswordVisibility">
                    <font-awesome-icon v-if="passwordVisible" icon="fa-solid fa-eye" />
                    <font-awesome-icon v-else icon="fa-solid fa-eye-slash" />
                </button>
            </div>
            <div class="text-primary flex flex-col" :class="passwordConfirmValidation.styleText">    
                <small>Confirm Password</small>
                <small class="font-bold" v-for="error in passwordConfirmValidation.errors">
                    {{ error }}
                </small>
            </div>
        </div>
    </div>
</template>