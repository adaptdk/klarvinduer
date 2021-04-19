import '@assets/chrome-bug.css'
import '@assets/main.css'
import 'focus-visible'
import NProgress from 'nprogress'
import store from '@app/store'
import type { AppProps } from 'next/app'
import { FunctionComponent, useEffect } from 'react'
import { Head } from '@components/common'
import { Provider } from 'react-redux'
import { Router } from 'next/router'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

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
