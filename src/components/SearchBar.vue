<!-- 
    Search Bar component
        - This component redirects the user to their search results with the search engine 
        - (likely Google)

        - It's possible that this can be expanded to include other search engines
 -->
<template>
    <form action="https://google.com/search" method="get" 
        class="p-2 flex items-center justify-center w-full group group-hover:cursor-text">
        <label class=" bg-white rounded-3xl px-4 text-primary min-w-[30vw] group-hover:cursor-text">
            <font-awesome-icon class="" icon="fa-solid fa-magnifying-glass" />
            <input required type="text" name="q" id="" placeholder="Search the web..."     
                class="bg-transparent border-0 focus:ring-0 placeholder:text-primary-light">
        </label>
    </form>
</template>