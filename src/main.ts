// This file initialises Vue

import { createApp } from 'vue'
import App from './App.vue'

// Implements Single-Page Application functionality for the app
import router from './router'

// for working with firebase
import { VueFire, VueFireAuth } from 'vuefire'

// for state management
import { createPinia } from 'pinia'

// for interaction with the firebase API
import { firebaseApp } from './libraries/firebase'

// for icons
import FontAwesomeIcon from './libraries/font-awesome'

import './assets/base.css'

const app = createApp(App)

// Sets up Single Page Application (SPA)
app.use(router)

// Allows global state management
const pinia = createPinia()
app.use(pinia)

app.component("FontAwesomeIcon", FontAwesomeIcon)

// Sets up to use the Firebase Database
app.use(VueFire, {
    firebaseApp,
    modules: [
        VueFireAuth(),
    ],
})

app.mount('#app')