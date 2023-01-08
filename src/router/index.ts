/**
 * The router allows the web app to work as a single-page application
 * The different routes/pages are defined here
 *    - Most of them are lazy loaded to improve loading times
 */

import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import AuthView from '@/views/AuthView.vue'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useUserStore } from '@/stores/user'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'authentication',
      component: AuthView,
      meta: {
        // Page should re-direct to home-page if already logged in
        redirectIfAuth: true
      }
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
      meta: {
        // Defines page as requiring authentication
        requiresAuth: true
      },
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('@/views/SettingsView.vue'),
      meta: {
        // Defines page as requiring authentication
        requiresAuth: true
      }
    },
  ]
})

// Checks if a user is logged in
const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener()
        resolve(user)
      },
      reject
    )
  })
}

// Ensures that some pages cannot be accessed if user is not logged in
router.beforeEach(async (to, from, next) => {
  const appUser = useUserStore()

  // Sets id if it exists on the user store, to be used globally throughout the app
  const currentUser = await getCurrentUser()
    .then((res:any) => {
      appUser.setEmail(res.email)
      appUser.setId(res.uid)
      return res
    })
    .catch(err => {
      
    })

  // Prevents accessing pages if user does not have authentication
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser()){
      next()
    } else {
      next("/")
    }
  } else if (to.matched.some((record) => record.meta.redirectIfAuth)) {
    if (await getCurrentUser()){
      next("/home")
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router