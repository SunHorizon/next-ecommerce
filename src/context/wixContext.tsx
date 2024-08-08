'use client'

import { createClient, OAuthStrategy } from "@wix/sdk";
import { products, collections } from '@wix/stores'
import { currentCart} from '@wix/ecom'
import Cookie from 'js-cookie'
import { createContext, ReactNode } from "react";

const refreshToken = JSON.parse(Cookie.get('refreshToken') || '{}') ;

const myWixClient = createClient({
    modules: {
      products,
      collections,
      currentCart
    },
    auth: OAuthStrategy({
      clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,
      tokens: {
        refreshToken,
        accessToken: {value: '', expiresAt: 0}
      }
    })
})

export type WixClient = typeof myWixClient;

export const WixClientContext = createContext<WixClient>(myWixClient);
 
export const WixClientContextProvider = ({children}:{children:ReactNode}) => {
    return <WixClientContext.Provider value={myWixClient}>{children}</WixClientContext.Provider>
}