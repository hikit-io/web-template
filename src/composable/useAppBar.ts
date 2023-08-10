import {inject, Ref} from "vue";
import {useToggle} from "@vueuse/core";
import {useRouter} from "vue-router";
import {useAccessToken} from "./useAccessToken";


const AppBar = Symbol()

interface AppBarContext {
    showRight: Ref<boolean>

    toggleRight: (value?: (boolean | undefined)) => boolean

    on: () => void
    off: () => void

    logout: () => void

    onProfile: () => void
}

const useAppBarProvide = (): AppBarContext => {
    const {push} = useRouter()
    const token = useAccessToken()

    const [showRight, toggleRight] = useToggle(false)

    const on = () => {
        toggleRight(true)
    }
    const off = () => {
        toggleRight(false)
    }

    const logout = () => {
        token.del()
        toggleRight(false)
        push('/').then(r => {

        })
    }
    const onProfile = () => {
        push('/profile').then(r => {
        })
    }
    return {
        showRight,
        toggleRight,
        on,
        off,
        logout,
        onProfile
    }
}

const useAppBar = (): AppBarContext => {
    const ctx = inject<AppBarContext>(AppBar)
    return <AppBarContext>ctx
}

export {useAppBarProvide, useAppBar, AppBar};
export type {AppBarContext};
