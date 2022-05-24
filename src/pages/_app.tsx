import type { AppProps } from 'next/app'

import '@/app/presentation/styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
