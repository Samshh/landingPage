import { createRouter, createWebHistory } from 'vue-router'
import MainPage from './MainPage.vue'
import emailme from './components/emailme.vue'

const routes = [
  { path: '/', component: MainPage },
  { path: '/email-me', component: emailme },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router