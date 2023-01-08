<script setup lang="ts">
    import {onMounted, ref} from 'vue'
    import {getAuth, onAuthStateChanged, signOut, type Auth} from 'firebase/auth'
    import router from '@/router';


    const isLoggedIn = ref(false)
    let auth: Auth;
    onMounted(() => {
        auth = getAuth()

        // Checks if user is null
        onAuthStateChanged(auth, (user) => {
            isLoggedIn.value = (user) ? true : false;   
        })
    })

    const handleSignout = () => {
        // Signs out and heads to auth view
        signOut(auth).then(() => {
            router.push('/')
        })
    }
</script>
<template>
    <button @click="handleSignout" v-if="isLoggedIn" class="p-4 bg-white rounded-3xl text-primary flex items-center justify-center gap-2">
        <font-awesome-icon class="group-hover:animate-pulse" icon="fa-solid fa-right-from-bracket"></font-awesome-icon>
        <p class="font-bold uppercase text-md">Log Out</p>
    </button>
</template>