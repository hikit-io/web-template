import {useCookies} from "@vueuse/integrations/useCookies";

export interface AccessTokenContext {
    set: (accessToken: string) => void
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
    return {
        set,
        get,
        del
    }
}

export {useAccessToken}