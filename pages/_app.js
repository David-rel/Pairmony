import '../styles/globals.css'
import React, { useState } from 'react'
import { AuthProvider } from '@propelauth/react'


import Head from 'next/head'

function MyApp({ Component, pageProps }) {

  return (
    <AuthProvider authUrl={process.env.NEXT_PUBLIC_AUTH_URL}>
      <Head>
        <title>Pairmony</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="./static/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </AuthProvider>
  )
}
export default MyApp
