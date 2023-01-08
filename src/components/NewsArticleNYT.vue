<!-- 
    - Defines the template for news articles.
    - Accepts only NewsArticle objects (see definition)
    - Parsing of the article happens internally in this component
 -->

 <script setup lang="ts">
    import { computed } from 'vue';
    import imgPlaceholder from '@/assets/media/img-placeholder.png'
    import type { Ref } from 'vue';
    
    // Defines a News Article's contents
    interface NewsArticle {
        isPastBreakpoint: boolean,
        title: string
        abstract: string | null,
        byline: string | null,
        url: string,
        multimedia: Media[] | null,
    }
    interface Media {
        url: string,
        type: string,
        height: number,
        width: number
    }
    
    // Destructures the NewsArticle prop into reactive variables
    const {
        isPastBreakpoint,
        title,
        abstract,
        url,
        multimedia,
        byline,
    } = defineProps<NewsArticle>()
 
    let imageLarge: Ref<string>
    let imageMedium: Ref<string>
    let imageSmall: Ref<string>
    // Ensures that the provided link is a valid URL, will throw a useful error if not
    if (multimedia != null){
        imageLarge = computed(() => multimedia[0].url || imgPlaceholder)
        imageMedium = computed(() => multimedia[1].url || imgPlaceholder)
        imageSmall = computed(() => multimedia[2].url || imgPlaceholder)
    } else {
        imageLarge = computed(() => imgPlaceholder)
        imageMedium = computed(() => imgPlaceholder)
        imageSmall = computed(() => imgPlaceholder)
    }
 </script>
 
 <!-- News Article card from New York Times -->
 <template>
     <article class="md:min-w-[20rem]">
         <a :href="url" v-if="isPastBreakpoint" class="relative h-full group cursor-pointer">
             <!-- This part shows if the screen width is past designated breakpoint -->
             <div class="h-full bg-white rounded-3xl shadow-md">

                <!-- Image based on screen-size -->
                <picture class="h-1/2 w-full object-cover rounded-t-3xl min-h-[12rem]">
                    <source media="(min-width: 1024px)" :srcset="imageLarge">
                    <img :srcset="imageMedium" class="h-1/2 w-full object-cover rounded-t-3xl min-h-[12rem]">
                </picture>

                <!-- Info about article -->
                 <div class="p-4 flex flex-col">
                    <div class="line-clamp-3 text-lg text-primary font-medium group-hover:underline">{{title}}</div>
                    <small class="text-gray-400 text-right pb-2">{{byline}}</small>
                    <p class="line-clamp-3 text-gray-600">{{ abstract }}</p>
                 </div>
             </div>
         </a>
         <a v-else :href="url" class="h-full group cursor-pointer font-bold flex text-primary rounded-3xl">
             <!-- This part shows if screen width is behind designated breakpoint -->
             <picture class="min-w-[6rem] max-w-[30%] rounded-md">
                <source media="(min-width: 384px)" :srcset="imageLarge" class="object-cover aspect-square w-full">
                <img :srcset="imageSmall" class="object-cover aspect-square w-full rounded-md">
             </picture>

             <!-- Info about article -->
             <div class="px-2">
                <div class=" group-hover:underline text-sm sm:text-base font-medium">{{title}}</div>
                <small class="text-gray-400 text-right pb-2">{{byline}}</small>
            </div>
         </a>
     </article>
 </template>
 