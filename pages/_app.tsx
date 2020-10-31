import React from "react"
import type { AppProps } from 'next/app'
import NextNprogress from 'nextjs-progressbar';
// Styles
import "../styles/global.scss"

function MyApp({ Component, pageProps }: AppProps) {
  return <>
  <NextNprogress
    color=" #ffac33 "
    startPosition={0.3}
    stopDelayMs={200}
    height={3}
  />
    <Component {...pageProps} />
  </>
}

export default MyApp
