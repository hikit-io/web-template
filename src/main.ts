import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import {createRouter, createWebHistory} from "vue-router";
import '@varlet/touch-emulator'
import Graphql from "@/graphql";

const router = createRouter({
    history: createWebHistory(),
    routes: [],
})

createApp(App)
    .use(router)
    .use(Graphql)
    .mount('#app')
