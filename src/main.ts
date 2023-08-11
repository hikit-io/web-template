import { createApp } from 'vue'
import './style.css'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import '@varlet/touch-emulator'
import Graphql from '@/graphql'

const router = createRouter({
  history: createWebHistory(),
  routes: [],
})

createApp(App).use(router).use(Graphql).mount('#app')
