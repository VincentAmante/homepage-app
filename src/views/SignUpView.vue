<script setup lang="ts">
    import { ref, watch } from 'vue'
    import {getAuth, createUserWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth'
    import { useRouter } from 'vue-router'
    import { getDatabase, ref as firebaseRef, set } from '@firebase/database'
    import { getCurrentUser } from 'vuefire'
    import { useUserStore } from '@/stores/user'
    import { validateEmail, validatePassword, validatePasswordConfirm, validateName } from '@/assets/scripts/formValidation'
    import { useValidationElement } from '@/components/composables/ValidationElement'
    import PasswordField from '@/components/PasswordField.vue'
    import NameField from '@/components/NameField.vue'
    import EmailField from '@/components/EmailField.vue'


    //// * The following section creates handlers for validating the form fields

    // Email
    const email = ref('')
    const handleEmail = () => emailValidation.value.setErrors(validateEmail(email.value))
    watch(email, () => handleEmail())
    const emailValidation = ref(useValidationElement())

    // Password Handlers
    const password = ref('')
    const handlePassword = () => passwordValidation.value.setErrors(validatePassword(password.value))
    watch(password, () => handlePassword())
    const passwordValidation = ref(useValidationElement())

    // Password Confirm Handlers
    const passwordConfirm = ref('')
    const handlePasswordConfirm = () => passwordConfirmValidation.value.setErrors(validatePasswordConfirm(password.value, passwordConfirm.value))
    watch(passwordConfirm, () => handlePasswordConfirm())
    const passwordConfirmValidation = ref(useValidationElement())

    // First Name
    const firstName = ref('')
    const handleFirstName = () => firstNameValidation.value.setErrors(validateName(firstName.value))
    watch(firstName, () => handleFirstName())
    const firstNameValidation = ref(useValidationElement())

    // Last Name
    const lastName = ref('')
    const handleLastName = () => lastNameValidation.value.setErrors(validateName(lastName.value))
    watch(lastName, () => handleLastName())
    const lastNameValidation = ref(useValidationElement())

    // To Handle Errors with Signups
    const signUpError = ref('')
    
    // To take user to the home-page after sign-up
    const router = useRouter()

    // Registers user and creates account
    const register = () => {
        // Runs a final check just in case
        handleEmail()
        handlePassword()
        handlePasswordConfirm()
        handleFirstName()
        handleLastName()

        // Register will not occur if an error is present
        if (emailValidation.value.hasErrors 
        || passwordValidation.value.hasErrors
        || passwordConfirmValidation.value.hasErrors
        || firstNameValidation.value.hasErrors
        || lastNameValidation.value.hasErrors){
            console.error('Log-in has errors')
            return;
        }

        // If everything is valid, a user will be generated using the email and password
        // Password security is automatically handled by Firebase
        createUserWithEmailAndPassword(getAuth(), email.value, password.value)
            .then((data) => {
                // Creates user object
                getCurrentUser().then((user:any) => {
                    const db = getDatabase()
                    useUserStore().setId(user.uid)

                    // Creates user account in database
                    set(firebaseRef(db, 'users/' + user.uid), {
                        name: {
                            firstName: firstName.value,
                            lastName: lastName.value
                        },
                        email: user.email,
                        enabledModules: {
                            weather: true,
                            news: true,
                            tmbd: false,
                        },
                        newYorkTimesCategory: 'home',
                        tmbdDefaults: {
                            mediaType: 'tv',
                            timeFrame: 'day'
                        }
                    }).then(()=>{
                        router.push('/home')
                    })
                })
            })
            .catch((error: {
                code: string, 
                message: string 
            }) => {
                if (error.code === 'auth/email-already-in-use') {
                    signUpError.value = 'Email is already being used'
                } else {
                    signUpError.value = 'Sign Up failed, please try again'
                }
            })
    }
</script>

<template>
    <div class="flex flex-col p-8 px-10 max-w-lg gap-y-4 bg-white dark:bg-secondary-dark  rounded-3xl">
        <div v-if="!(signUpError === '')" class="flex flex-col gap-2 items-center text-white bg-primary p-4 rounded-3xl">
            <font-awesome-icon icon="fa-solid fa-triangle-exclamation" class="text-xl"/>
            <p class="text-center"> {{ signUpError }}</p>   
        </div>

        <!-- Email Input -->
        <EmailField 
            v-model:email-model="email" 
            :errors="emailValidation.errors" 
            :styleMain="emailValidation.style" 
            :styleText="emailValidation.styleText">
        </EmailField>

        <!-- Initial Password Input -->
        <PasswordField 
            v-model:passwordModel="password" 
            :errors="passwordValidation.errors" 
            :styleMain="passwordValidation.style" 
            :styleText="passwordValidation.styleText" 
            fieldSubtext="Requirements: 8+ Characters | 1+ Number | 1+ Uppercase | 1+ Lowercase">
        </PasswordField>

        <!-- Field to confirm user's entered password -->
        <PasswordField 
            v-model:passwordModel="passwordConfirm" 
            :errors="passwordConfirmValidation.errors" 
            :styleMain="passwordConfirmValidation.style" 
            :styleText="passwordConfirmValidation.styleText">
        </PasswordField>

        <!-- First Name Input -->
        <NameField 
            v-model:nameModel="firstName"
            nameType="First Name"
            :errors="firstNameValidation.errors"
            :styleMain="firstNameValidation.style"
            :styleText="firstNameValidation.styleText">
        </NameField>

        <!-- Last Name Input -->
        <NameField 
            v-model:nameModel="lastName"
            nameType="Last Name"
            :errors="lastNameValidation.errors"
            :styleMain="lastNameValidation.style"
            :styleText="lastNameValidation.styleText">
        </NameField>

        <button @click="register" class="w-fit bg-primary px-4 py-2 rounded-3xl text-white  ">
            Sign Up
        </button>
    </div>
</template>