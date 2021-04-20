import { FC, ReactElement } from 'react'
import { queries, render, RenderOptions } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import * as customQueries from './custom-queries'

const Providers: FC = ({ children }) => {
  return <>{children}</>
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'queries'>
) =>
  render(ui, {
    queries: { ...queries, ...customQueries },
    wrapper: Providers,
    ...options,
  })

export * from '@testing-library/react'

export { customRender as render }
