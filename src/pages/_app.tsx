import '@assets/chrome-bug.css'
import '@assets/main.css'
import store from '@app/store'
import type { AppProps } from 'next/app'
import { FunctionComponent, useEffect } from 'react'
import { Head } from '@components/common'
import { Provider } from 'react-redux'

const Noop: FunctionComponent = ({ children }) => <>{children}</>

export default function App({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Noop

  useEffect(() => {
    document.body.classList?.remove('loading')
  }, [])

  return (
    <>
      <Head />
      <Provider store={store}>
        <Layout pageProps={pageProps}>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  )
}
