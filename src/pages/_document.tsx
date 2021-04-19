import clsx from 'clsx'
import Document, { Head, Html, Main, NextScript } from 'next/document'

// Check if development
const isDev = process.env.NODE_ENV === 'development'

class MyDocument extends Document {
  render() {
    const bodyClass = clsx('loading', { 'debug-screens': isDev })

    return (
      <Html>
        <Head />
        <body className="loading">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
