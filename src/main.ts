import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import {createRouter, createWebHistory} from "vue-router";
import '@varlet/touch-emulator'
import {DefaultApolloClient} from "@vue/apollo-composable";
import {ApolloClient, createHttpLink, InMemoryCache, split} from "@apollo/client/core";
import {GraphQLWsLink} from "@apollo/client/link/subscriptions";
import {createClient} from "graphql-ws";
import {getMainDefinition} from "@apollo/client/utilities";

const router = createRouter({
    history: createWebHistory(),
    routes: [],
})

const httpLink = createHttpLink({
    uri: 'https://api.hikit.io/auth/',
    credentials: 'include'
})

const wsLink = new GraphQLWsLink(
    createClient({
        url: "wss://api.hikit.io/auth/ws",
    })
);

const link = split(
    // split based on operation type
    ({ query }) => {
        const definition = getMainDefinition(query)
        return (
            definition.kind === "OperationDefinition" &&
            definition.operation === "subscription"
        )
    },
    wsLink,
    httpLink
)

// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
const apolloClient = new ApolloClient({
    link: link,
    cache,
})

createApp(App)
    .use(router)
    .provide(DefaultApolloClient, apolloClient)
    .mount('#app')
