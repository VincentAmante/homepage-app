<!-- 
    Sets user modules and settings
 -->

<script setup lang="ts">
    import { ref, computed, onMounted } from 'vue'
    import { getDatabase, ref as firebaseRef, child, get, update } from '@firebase/database'
    import SignOutButton from '@/components/buttons/SignOutButton.vue'
    import router from '@/router'
    import { useUserStore } from '@/stores/user'
    import { useModuleToggle } from '@/components/composables/ModuleToggle'
    import NameField from '@/components/NameField.vue'
    
    const db = getDatabase()

    
    // userStore contains data that persists throughout the app, in this case it stores the user's details to be utilised for database calls
    const user = useUserStore()

    // Initialises the user's settings values
    const weatherModule = ref(false)
    const weatherModuleHandler = useModuleToggle(weatherModule)
    const newsModule = ref(false)
    const newsModuleHandler = useModuleToggle(newsModule)
    const userNYTCategory = ref('')

    const tmbdModule = ref(false)
    const tmbdModuleHandler = useModuleToggle(tmbdModule)
    const tmbdDefaultMediaType = ref('')
    const tmbdDefaultTimeframe = ref('')

    const firstName = ref('')
    const lastName = ref('')

    // Array of NYT categories, for quickly iterating through
    const newYorkTimesCategories = ['arts', 'automobiles', 'books', 'business', 'fashion', 'food', 'health', 'home', 'insider', 'magazine', 'movies', 'nyregion', 'obituaries', 'opinion', 'politics', 'realestate', 'science', 'sports', 'sundayreview', 'technology', 'theater', 't-magazine', 'travel', 'upshot', 'us', 'world']

    // Fetches user preferences and details from the database
    const dbRef = firebaseRef(db)
    function getUserData(){
        get(child(dbRef, `users/${user.id}/`))
        .then((snapshot:any) => {
            if (snapshot.exists()){
                const {enabledModules, newYorkTimesCategory, name, tmbdDefaults} = snapshot.val()

                // Modules
                weatherModuleHandler.initModule(enabledModules.weather)
                newsModuleHandler.initModule(enabledModules.news)
                tmbdModuleHandler.initModule(enabledModules.tmbd)

                // Preferences
                userNYTCategory.value = newYorkTimesCategory
                tmbdDefaultMediaType.value = tmbdDefaults.mediaType
                tmbdDefaultTimeframe.value = tmbdDefaults.timeFrame

                // Account Details
                firstName.value = name.firstName
                lastName.value = name.lastName
            } else {
                console.error("no data available");
            }
        }).catch((error) => {
            console.error(error);
        });
    }

    // Saves settings to database
    function saveSettings(){

        // Guard clause to prevent invalid id calls
        if (user.id === '') {
            console.error(`No user found - id:${user.id}`)
            return
        }

        // Path to the user in the user table
        let userPath = `/users/${user.id}`

        // This section defines the different paths to the specific user's data in the firebase DB
        const updates:any = {};
        updates[`${userPath}/enabledModules`] = {
            news: newsModule.value,
            weather: weatherModule.value,
            tmbd: tmbdModule.value
        }
        updates[`${userPath}/newYorkTimesCategory`] = userNYTCategory.value
        updates[`${userPath}/name`] = {
            firstName: firstName.value,
            lastName: lastName.value
        }
        updates[`${userPath}/tmbdDefaults`] = {
            mediaType: tmbdDefaultMediaType.value,
            timeFrame: tmbdDefaultTimeframe.value
        }

        // The databse is then updated, and the user is taken back to the homepage
        update(firebaseRef(db), updates).then((res) => {
            router.push('/home')  
        })
        return 
    }

    // When this page is loaded, fetch user's data to then begin filling in the placeholders
    // This is done onMount to let the page load instantly instead of waiting for it all to load
    onMounted(() => {
        getUserData()
    })
</script>

<template>
    <main class="flex flex-col justify-center m-8 px-6">

        <!-- Header -->
        <div class="flex items-center text-4xl gap-2 text-primary my-3">
            <font-awesome-icon icon="fa-solid fa-cog" class="hover:animate-spin"></font-awesome-icon>
            <h1 class="uppercase font-bold">Settings</h1>
        </div>

        <!-- Button to return back to home page -->
        <router-link to="/home" class="flex items-center text-xl gap-2 text-primary cursor-pointer">
            <font-awesome-icon icon="fa-solid fa-arrow-left" />
            <h1 class="uppercase font-bold">Cancel & Return</h1> 
        </router-link>

        <!-- Settings to set Modules + specify options if possible -->
        <div class="max-w-xl">
            <h2 class="text-3xl text-primary font-bold my-4">Modules</h2>
            <div class="bg-white p-4 rounded-3xl transition-all ease-in-out">

                <!-- Weather Module -->
                <div class="flex flex-col text-primary">
                    <div class="flex justify-between items-center py-4">
                        <div>
                            <p class="text-2xl font-medium">Weather Module</p>
                            <p>See your current weather and upcoming forecasts, right here!</p>
                        </div>
                        <label class=" text-4xl cursor-pointer" for="weatherModuleCheck" @click="weatherModuleHandler.toggleModule">
                            <font-awesome-icon icon="fa-solid fa-plus"  :class="weatherModuleHandler.style.value" class=" transition-all ease-in-out"></font-awesome-icon>
                            <input type="checkbox" name="weatherModuleCheck" id="" v-model="weatherModule" class="invisible">
                        </label>
                    </div>

                    <!-- Simply adds a notification informing the user that the module has been added -->
                    <div v-if="weatherModule" class="w-full flex justify-between py-4 border-t-2 border-solid border-primary">
                        <p class="text-lg">Weather Module Added</p>
                    </div>
                </div>
            </div>

            <!-- New York Times Module -->
            <div class="bg-white p-4 rounded-3xl my-4">
                <div class="flex flex-col text-primary transition-all ease-in-out">
                    <div class="flex justify-between items-center py-4">
                        <div>
                            <p class="text-2xl font-medium">New York Times Module</p>
                            <p>Get the front page of the New York Times!</p>
                        </div>
                        <label class=" text-4xl cursor-pointer" for="newsModuleCheck" @click="newsModuleHandler.toggleModule">
                            <font-awesome-icon icon="fa-solid fa-plus"  :class="newsModuleHandler.style.value" class="transition-all ease-in-out"></font-awesome-icon>
                            <input type="checkbox" name="newsModuleCheck" id="" v-model="newsModule" class="invisible">
                        </label>
                    </div>
                    
                    <!-- Specifies user's desired category from the NYT Module -->
                    <div v-if="newsModule" class="w-full py-4 border-t-2 border-solid border-primary">
                        <p class="text-lg pb-3">News Module Added</p>
                        <div class="flex justify-between">
                            <label for="" class="text-xl font-medium">Category</label>
                            <select v-model="userNYTCategory" class="rounded-3xl bg-white text-primary appearance-none ring-0 capitalize" >
                                <option v-for="category in newYorkTimesCategories" :value="category" class="bg-primary text-white capitalize">
                                    {{ category }} 
                                </option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-white p-4 rounded-3xl my-4">
                <div class="flex flex-col text-primary transition-all ease-in-out">
                    <div class="flex justify-between items-center py-4">
                        <div>
                            <p class="text-2xl font-medium">The Movie Database - Trending Page</p>
                            <p>Showcases recent trending shows and tv</p>
                            <small class="font-medium">This product uses the TMDd API but is not endorsed or certified by TMDB</small>
                        </div>
                        <label class=" text-4xl cursor-pointer" for="newsModuleCheck" @click="tmbdModuleHandler.toggleModule">
                            <font-awesome-icon icon="fa-solid fa-plus"  :class="tmbdModuleHandler.style.value" class="transition-all ease-in-out"></font-awesome-icon>
                            <input type="checkbox" name="newsModuleCheck" id="" v-model="tmbdModule" class="invisible">
                        </label>
                    </div>
                    
                    <!-- Specifies user's desired category from the NYT Module -->
                    <div v-if="tmbdModule" class="w-full py-4 border-t-2 border-solid border-primary flex flex-col gap-2">
                        <p class="text-lg">TMBd Module Added</p>
                        <p>Set default choices for this module</p>
                        <div class="flex justify-between">
                            <label for="" class="text-lg font-medium">Media Type</label>
                            <select v-model="tmbdDefaultMediaType" class="rounded-3xl bg-white text-primary appearance-none ring-0 capitalize" >
                                <option value="tv" class="bg-primary text-white capitalize">TV </option>
                                <option value="movie" class="bg-primary text-white capitalize">Movie </option>
                            </select>
                        </div>
                        <div class="flex justify-between">
                            <label for="" class="text-lg font-medium">Time Frame</label>
                            <select v-model="tmbdDefaultTimeframe" class="rounded-3xl bg-white text-primary appearance-none ring-0 capitalize" >
                                <option value="day" class="bg-primary text-white capitalize">Day</option>
                                <option value="week" class="bg-primary text-white capitalize">Week</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Account Settings -->
        <div class="max-w-xl mb-4">
            <h2 class="text-3xl text-primary font-bold my-4">Account Settings</h2>

            <!-- Allows user to change their name -->
            <div class="bg-white p-4 py-8 rounded-3xl text-primary gap-4 flex flex-col">
                <div class="gap-2">
                    <h3 class="text-2xl font-medium">Name</h3>
                    <NameField v-model:name-model="firstName" name-type="First Name">
                    </NameField>
                    <NameField v-model:name-model="lastName" name-type="Last Name"></NameField>
                </div>
            </div>
        </div>
        
        <!-- Account Actions -->
        <div class="flex flex-col gap-6 max-w-sm">

            <!-- Saves user's settings -->
            <button @click="saveSettings" class="p-4 bg-primary rounded-3xl text-white uppercase flex justify-center gap-2 items-center">
                <font-awesome-icon icon="fa-solid fa-check"></font-awesome-icon>
                <p class="font-bold uppercase text-md">Save</p>
            </button>

            <!-- Signs out of account -->
            <SignOutButton/>
        </div>
    </main>
</template>