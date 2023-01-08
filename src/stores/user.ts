// Contains a single instance of the user and any database request methods 

import {ref, computed} from 'vue'
import type { Ref } from 'vue'
import { defineStore } from 'pinia'
import { getDatabase, ref as firebaseRef, child, get, update } from '@firebase/database'

export const useUserStore = defineStore('user', () => {
    const userId: Ref<string|null> = ref('')
    const email: Ref<string|null> = ref('')

    const db = getDatabase()
    const dbRef = firebaseRef(db)

    // Re-usable function for acquiring data from the firebase API
    // the get request is handled by the firebase library, but parameters are defined here
    async function fetchFromFirebase(request: string = ""){
        return get(child(dbRef, `users/${userId.value}${request}`))
            .then((snapshot:any) => {
                if (snapshot.exists()){
                    return snapshot.val()
                } else {
                    console.log('no data available')
                }
            })
            .catch((err) => {
                console.error(err)
            })
    }
    
    // Acquires user's enabled modules
    async function getModules(){
        return await fetchFromFirebase('/enabledModules')
    }

    async function getUserNYTCategory(){
        return await fetchFromFirebase('/newYorkTimesCategory')
    }
    
    async function getUserName(){
        return await fetchFromFirebase('/name')
    }

    async function getTMBdDefaults(){
        return await fetchFromFirebase('/tmbdDefaults')
    }
    // Sets ID
    function setId(latestId: string){
        userId.value = latestId;
    }

    function setEmail(latestEmail: string) {
        email.value = latestEmail
    }
    // Fetches ID
    const id = computed(() => {
        if (userId.value === '' || userId.value === null){
            console.error('ID is not set')
            return null
        }
        return userId.value
    })

    return {getModules, setId, id, getUserName, getUserNYTCategory, email, setEmail, getTMBdDefaults}
})