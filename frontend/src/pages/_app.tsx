import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { useStore } from '../store'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {

  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <Head>
        <title>Django + NextJS JWT Auth</title>
        <meta name='viewport' content='width=device-width, initial-scale=1'/>
      </Head>
      <Component {...pageProps} />
    </Provider>
    
  )
}
