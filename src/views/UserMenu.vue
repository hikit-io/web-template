<script lang="ts" setup>
import { useAppBar } from '@/composable/useAppBar'
import { useAccessToken } from '@/composable/useAccessToken'

const { logout, showRight } = useAppBar()

const { name } = useAccessToken()
</script>

<template>
  <var-menu v-if="showRight" placement="bottom" trigger="hover" :same-width="true">
    <var-button text>
      {{ name }}
      <var-icon name='chevron-down' />
    </var-button>
    <template #menu>
      <var-cell :ripple='true' @click='logout'> Exit</var-cell>
    </template>
  </var-menu>
</template>
