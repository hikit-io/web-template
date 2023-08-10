<script lang="ts" setup>

import {provide} from "vue";
import {AppBar, AppBarContext, useAppBarProvide} from "@/composable/useAppBar";
import {useAccessToken} from "@/composable/useAccessToken";
import UserMenu from "@/views/UserMenu.vue";
import {useGetNameQuery} from "@/composable/useAuthService";
import {useToggle} from "@vueuse/core";


// Api Service

// App bar state manage
const appBarContext = useAppBarProvide()
provide(AppBar, appBarContext as AppBarContext)

// Check Login
const token = useAccessToken()

const [loading, loadingToggle] = useToggle(true)

const {onResult, onError} = useGetNameQuery({
  clientId: 'auth',
  fetchPolicy: 'network-only'
})

onResult(param => {
  if (param.data.profile) {
    appBarContext.toggleRight(true)
    loadingToggle()
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
  <router-view v-if="!loading"></router-view>
  <div style="flex: 1;"></div>
  <div class="footer">
    <var-divider></var-divider>
    <h4>@HiKit</h4>
  </div>
  <var-skeleton fullscreen :loading="loading"></var-skeleton>
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