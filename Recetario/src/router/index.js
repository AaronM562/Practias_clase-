import { createRouter, createWebHistory } from 'vue-router'
import WelcomePage from '../views/WelcomePage.vue'
import HomePage from '../views/HomePage.vue'
import RecipePage from '../views/RecipePage.vue'
import Login from '../views/LoginPage.vue'
import SignIn from '../views/SignInPage.vue'

const routes = [
  { path: '/', name: 'Welcome', component: WelcomePage },
  { path: '/Home', name: 'Home', component: HomePage },
  { path: '/Recipe', name: 'Recipe', component: RecipePage },
  { path: '/Login', name: 'Login', component: Login, props: true },
  { path: '/SignIn', name: 'SignIn', component: SignIn },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
