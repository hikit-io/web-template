import {useCookies} from "@vueuse/integrations/useCookies";
import {computed, Ref} from "vue";

export interface AccessTokenContext {
    name: Ref<string>,
    // set: (accessToken: string) => void
    get: () => string
    del: () => void
}

const useAccessToken = (): AccessTokenContext => {
    const cookies = useCookies()
    const set = (accessToken: string) => {
        cookies.set('HIKIT', accessToken, {
            domain: '.hikit.io'
        })
    }
    const get = () => {
        const cookie = cookies.get<string>('HIKIT')
        console.log(cookie)
        return cookie
    }
    const del = () => {
        cookies.remove('HIKIT', {
            path: '/',
            domain: '.hikit.io'
        })
        cookies.remove('HIKIT', {
            path: '/',
        })
    }
    const name = computed(() => cookies.get<string>("HIKIT_NAME"))
    return {
        name,
        get,
        del
    }
}

export {useAccessToken}