import '@tamagui/core/reset.css'
import '@tamagui/font-inter/css/400.css'
import '@tamagui/font-inter/css/700.css'
import 'raf/polyfill'

import { NextThemeProvider, useRootTheme } from '@tamagui/next-theme'
import { RootProvider } from 'app/src/provider/RootProvider'
import Head from 'next/head'
import React, { startTransition } from 'react'
import type { SolitoAppProps } from 'solito'

function MyApp({ Component, pageProps }: SolitoAppProps) {
  return (
    <>
      <Head>
        <title>Alchemy</title>
        <meta name="description" content="Neudesic Alchemy App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useRootTheme()

  return (
    <NextThemeProvider
      onChangeTheme={(next) => {
        startTransition(() => {
          setTheme(next)
        })
      }}
    >
      <RootProvider disableRootThemeClass defaultTheme={theme}>
        {children}
      </RootProvider>
    </NextThemeProvider>
  )
}

export default MyApp
