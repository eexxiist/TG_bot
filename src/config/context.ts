export interface YCContext{
    token: {
        access_token : string
    }
}

interface GlobalContext {
    context :YCContext | null
}

export const GlobalContext: GlobalContext = {context : null}