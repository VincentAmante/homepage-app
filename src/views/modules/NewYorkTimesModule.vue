<script setup lang="ts">
    import { ref } from 'vue';
    import NewsArticle from '@/components/NewsArticleNYT.vue';
    import axios from 'axios';
    import { useUserStore } from '@/stores/user';

    import { useScreenWatcher } from '@/components/composables/ScreenWatcher';

    const user = useUserStore();
    const category = ref('')

    // Acquires user's preferred NYT category from the database before making the API call to the NYT API
    await user.getUserNYTCategory().then(res => { 
        category.value = res
        axios.get(`https://api.nytimes.com/svc/topstories/v2/${category.value}.json?api-key=${import.meta.env.VITE_NYT_KEY}`)
        .then((res:any) => {
            articles.value = res.data.results
        })
    })
    const articles = ref()

    // This variable stores a reactive boolean that checks if the user's screen size is greater than the intended breakpoint
    //  The value is then used to decide which content to display and in which HTML format
    const isPastBreakpoint = useScreenWatcher()
</script>

<template>
    <section class="m-8">
        <h2 class="px-4 text-3xl py-2 font-bold uppercase text-primary">
            New York Times - {{ category }}
        </h2>
        <div class="min-h-56 min-h-32 flex flex-col pb-8 pt-4 gap-8 md:flex-row overflow-y-scroll md:overflow-y-hidden md:overflow-x-scroll max-h-96 md:max-h-screen md:items-stretch bg-white p-4 rounded-3xl md:bg-transparent">
            <!-- Creates a NewsArticle component for every article inside -->
            <NewsArticle v-for="article in articles" :="article" :is-past-breakpoint="isPastBreakpoint"/>
        </div>
    </section>
</template>