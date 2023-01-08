<!-- 
    - Defines the template for news articles.
    - Accepts only NewsArticle objects (see definition)
    - Parsing of the article happens internally in this component
 -->

<script setup lang="ts">
import { computed } from 'vue';
import imgPlaceholder from '@/assets/media/img-placeholder.png'

// Defines a News Article's contents
interface NewsArticle {
    isPastBreakpoint: boolean,
    title: string
    excerpt: string | null,
    author: string | null,
    link: string,
    media: string,
    summary?: string,
}

// Destructures the NewsArticle prop into reactive variables
const {
    isPastBreakpoint,
    title,
    excerpt,
    author,
    link,
    media,
    summary
} = defineProps<NewsArticle>()

// Ensures that the provided link is a valid URL, will throw a useful error if not
const urlImg = computed(() => {
    return media || imgPlaceholder
})
</script>

<template>
    <article class="lg:min-w-[20rem]">
        <a :href="link" v-if="isPastBreakpoint" class="relative h-full group cursor-pointer">
            <!-- This part shows if the screen width is past designated breakpoint -->
            <div class="h-full bg-white rounded-3xl">
                <img class="h-1/2 w-full object-cover rounded-t-3xl min-h-[12rem]" :src="urlImg" alt="">
                <div class="p-4">
                    <div class="line-clamp-3 text-lg text-primary font-medium group-hover:underline">{{title}}</div>
                    <p class="line-clamp-3 text-gray-600">{{ excerpt }}</p>
                </div>
            </div>
        </a>
        <a v-else :href="link" class="h-full group cursor-pointer font-bold flex text-primary">
            <!-- This part shows if screen width is behind designated breakpoint -->
            <img class="object-cover aspect-square w-1/3 rounded-md" :src="urlImg" alt="">
            <div class="pr-2 group-hover:underline text-xs pl-2 font-medium">{{title}}</div>
        </a>
    </article>
</template>
