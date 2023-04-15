import '../styles/globals.css'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import React, { useState } from 'react'


import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  const [supabase] = useState(() => createBrowserSupabaseClient())


  return (
    <SessionContextProvider supabaseClient={supabase}>
      <Head>
        <title>Pairmony</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="./static/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </SessionContextProvider>
  )
}
export default MyApp
