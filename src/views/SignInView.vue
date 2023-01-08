<script setup lang="ts">
    import { ref, computed } from 'vue'
    import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth'
    import { useRouter } from 'vue-router'
    import { useValidationElement } from '@/components/composables/ValidationElement'
    import Modal from '@/components/Modal.vue'
    import EmailField from '@/components/EmailField.vue'
    import PasswordField from '@/components/PasswordField.vue'

    const router = useRouter()

    const email = ref("")
    const password = ref ("")

    const signIn = () => {
        signInWithEmailAndPassword(getAuth(), email.value, password.value)
            .then((data) => {
                router.push('/home')
            })
            .catch(error => {
                console.error('Error Code' + error.code)
            })
    }

    const isModalVisible = ref(false)
    function closeModal(){
        isModalVisible.value = false
    }
    function openModal(){
        isModalVisible.value = true
    }

    const passResetResult = ref('')
    function handlePassReset(){
        console.log(email.value)
        const auth = getAuth();
        if (email.value === null || email.value === '') {
            return
        }
        console.log(auth)

        sendPasswordResetEmail(auth, email.value)
        .then(() => {
            passResetResult.value = 'Reset request sent! Please check your email (including spam)'
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            
            passResetResult.value = 'Error: Email may not exist'
            console.log(errorCode)
            console.log(errorMessage)
        });
    }
</script>

<template>
    <div class="flex flex-col p-8 px-10 max-w-lg gap-y-4 bg-white dark:bg-secondary-dark w-full rounded-3xl">
        <EmailField v-model:email-model="email"></EmailField>
        <PasswordField v-model:password-model="password">
            <button @click="openModal" class="flex text-primary hover:text-primary-cool">
                <small>Forgot Password?</small>
            </button>
        </PasswordField>
        <div class="flex flex-col">
            <button @click="signIn" class="w-fit bg-primary px-4 py-2 rounded-3xl text-white">
                Sign In
            </button>
        </div>

        <Modal v-if="isModalVisible" @close="closeModal">
            <template v-slot:header>
                Forgot Password?
            </template>
            <template v-slot:body>
                <div class="flex flex-col gap-2">
                    <p class=" max-w-xs text-primary">If the email account exist, then a password reset email will be sent</p>
                    <p class="text-primary font-bold">{{ passResetResult }}</p>
                    <EmailField v-model:email-model="email"></EmailField>
                </div>
            </template>
            <template v-slot:buttons>
                <button @click="handlePassReset" class="border-primary border-solid border-2 p-2 px-6 rounded-3xl text-primary hover:text-primary-light hover:border-primary-light">
                    Send Request
                </button>
            </template>
        </Modal>
    </div>
</template>