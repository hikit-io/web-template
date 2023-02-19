<script lang="ts" setup>
import {defineProps} from 'vue'

const props = defineProps<{ loading?: boolean }>()

</script>

<template>
  <div class="loading">
    <var-loading :loading="props.loading ?? false" type="wave" description="Loading" size="large"></var-loading>
  </div>
</template>

<style scoped>
.loading {
  min-width: 300px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>