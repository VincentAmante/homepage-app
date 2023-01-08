<script setup lang="ts">
    import { getAuth, sendPasswordResetEmail } from '@firebase/auth';
    import { useUserStore } from '@/stores/user'
    import { ref } from 'vue';
    const email = ref(useUserStore().email)

    function handlePassReset(){
        const auth = getAuth();

        if (email.value === null) {
            console.error('Email had no value')
            return
        }

        sendPasswordResetEmail(auth, email.value)
        .then(() => {
            // Password reset email sent!
            // ..
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
    }
</script>
<template>
    <button @click="handlePassReset" class="w-fit bg-primary px-4 py-2 rounded-3xl text-white">
        Reset Password
    </button>
</template>