<script lang="ts" setup>

import {provide} from "vue";

import {AppBar, AppBarContext, useAppBarProvide} from "@/composable/useAppBar";
import {AppLoading, AppLoadingContext, useAppLoadingProvide} from "@/composable/useAppLoading";

import {useAccessToken} from "@/composable/useAccessToken";
import {useGetNameQuery} from "@/composable/useAuthService";

import UserMenu from "@/views/UserMenu.vue";


// Api Service

// App bar state manage
const appBarCtx = useAppBarProvide()
provide(AppBar, appBarCtx as AppBarContext)

// App loading
const appLoadingCtx = useAppLoadingProvide()
provide(AppLoading, appLoadingCtx as AppLoadingContext)
appLoadingCtx.on()

// Check Login
const token = useAccessToken()

const {onResult, onError} = useGetNameQuery({
  clientId: 'auth',
  fetchPolicy: 'network-only'
})

onResult(param => {
  if (param.data.profile) {
    appBarCtx.on()
    appLoadingCtx.off()
  }
})

onError(param => {
  token.del()
})

const title = import.meta.env.VITE_TITLE


</script>

<template>
  <var-app-bar>
    <router-link to="/" class="title">
      {{ title }}
    </router-link>
    <template #right>
      <user-menu></user-menu>
    </template>
  </var-app-bar>
  <router-view v-if="!appLoadingCtx.loading"></router-view>
  <div style="flex: 1;"></div>
  <div class="footer">
    <var-divider></var-divider>
    <h4>@HiKit</h4>
  </div>
  <var-skeleton fullscreen :loading="appLoadingCtx.loading.value"></var-skeleton>
</template>

<style scoped>
.footer {
  width: 100%;
  text-align: center;
}

.title {
  color: white;
  text-decoration: none;
}
</style>