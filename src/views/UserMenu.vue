<script lang="ts" setup>
import {useAppBar} from "../composable/useAppBar";
import {ref, watch} from "vue";

const {showRight, toggleRight, onProfile, logout} = useAppBar()


const account = ref('account')

watch(showRight, (value) => {
  if (value) {

  }
})

</script>

<template>
  <var-menu v-if="showRight" placement="bottom" trigger="hover" :same-width="true">
    <var-button text>
      {{ account }}
      <var-icon name="chevron-down"></var-icon>
    </var-button>
    <template #menu>
      <var-cell @click="onProfile" :ripple="true">Profile</var-cell>
      <var-cell @click="logout" :ripple="true">Exit</var-cell>
    </template>
  </var-menu>
</template>

<style scoped>

</style>