import { inject, Ref } from 'vue'
import { useToggle } from '@vueuse/core'

const AppLoading = Symbol()

interface AppLoadingContext {
  loading: Ref<boolean>
  toggleLoading: (value?: boolean | undefined) => void
  on: () => void
  off: () => void
}

const useAppLoadingProvide = (): AppLoadingContext => {
  const [loading, toggleLoading] = useToggle(false)
  const on = () => {
    loading.value = true
  }
  const off = () => {
    loading.value = false
  }
  return {
    loading,
    toggleLoading,
    on,
    off,
  }
}

const useAppLoading = (): AppLoadingContext => {
  const ctx = inject<AppLoadingContext>(AppLoading)
  return <AppLoadingContext>ctx
}

export { useAppLoadingProvide, useAppLoading, AppLoading }
export type { AppLoadingContext }
