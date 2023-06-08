import '../styles/globals.css'
import React, { useState } from 'react'
import { AuthProvider } from '@propelauth/react'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false
import '@fortawesome/fontawesome-svg-core/styles.css'



import Head from 'next/head'

function MyApp({ Component, pageProps }) {

  return (
    <AuthProvider authUrl={process.env.NEXT_PUBLIC_AUTH_URL}>
      <Head>
        <title>Pairmony</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="./images/tinder.jpeg" />
      </Head>
      <Component {...pageProps} />
    </AuthProvider>
  )
}
export default MyApp