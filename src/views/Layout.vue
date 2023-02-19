<script lang="ts" setup>

import {onMounted, provide} from "vue";
import {AppBar, useAppBarProvide, AppBarContext} from "../composable/useAppBar";
import {useAccessToken} from "../composable/useAccessToken";
import {useRoute, useRouter} from "vue-router";
import UserMenu from "./UserMenu.vue";


// Api Service


// App bar state manage
const appBarContext = useAppBarProvide()
provide(AppBar, appBarContext as AppBarContext)

// Check Login
const router = useRouter()
const token = useAccessToken()
const {push} = useRouter()

router.beforeResolve((to, from) => {
  console.log('checkLogin')

  if (token.get()) {

  } else if (to.path === '/login'||to.path === '/') {

  } else {
    push('/')
  }
})
const title = import.meta.env.VITE_TITLE


</script>

<template>
  <var-app-bar>
    {{title}}
    <template #right>
      <user-menu></user-menu>
    </template>
  </var-app-bar>
  <router-view></router-view>
  <div style="flex: 1;"></div>
  <div class="footer" >
    <var-divider></var-divider>
    <h4>@HiKit</h4>
  </div>
</template>

<style scoped>
.footer{
  width: 100%;
  text-align: center;
}
</style>