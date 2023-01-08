<script setup lang="ts"> 

    import SignInView from './SignInView.vue';
    import SignUpView from './SignUpView.vue';
    import { ref, computed} from 'vue';

    const activeTab = ref('sign-up')
    const activeTabStyle = ['bg-white', 'text-primary']
    const inactiveTabStyle = ['bg-primary', 'text-white', 'cursor-pointer']


    const signUp = computed(() => {
        if (activeTab.value == 'sign-up')
            return activeTabStyle
        else 
            return inactiveTabStyle
    })
    const signIn = computed(() => {
        if (activeTab.value == 'sign-in')
            return activeTabStyle
        else 
            return inactiveTabStyle
    })

    function setTab(tab: string){
        activeTab.value = tab
    }
</script>

<template>
    <main class="bg-secondary mb-10">
        <div class="m-8 my-10 flex justify-center items-center text-primary gap-2">
            <font-awesome-icon icon="fa-solid fa-house-chimney-window" class=" text-6xl" />
            <div class="text-2xl uppercase">
                <p class="font-bold">Home</p>
                <p>Page</p>
            </div>
        </div>
        <div class="flex flex-col m-8 rounded-3xl">
            <div class="flex justify-between max-w-xl">
                <div @click="setTab('sign-up')" :class="signUp" class="p-4 w-full rounded-tl-3xl text-center font-bold text-lg transition-all ease-in-out">
                    Sign Up
                </div>
                <div @click="setTab('sign-in')" :class="signIn" class="p-4 w-full rounded-tr-3xl text-center font-bold  text-lg">
                    Sign In
                </div>
            </div>
            <div class="w-full transition-all ease-in-out bg-white rounded-b-3xl">
                <keep-alive>
                    <SignUpView v-if="(activeTab == 'sign-up')"/>
                    <SignInView v-else/>
                </keep-alive>
            </div>
        </div>
    </main>
</template>