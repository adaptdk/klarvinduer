import React, { FC, ReactElement } from 'react'
import { queries, render, RenderOptions } from '@testing-library/react'

import * as customQueries from './custom-queries'

const AllTheProviders: FC = ({ children }) => {
  return <>{children}</>
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'queries'>
) =>
  render(ui, {
    queries: { ...queries, ...customQueries },
    wrapper: AllTheProviders,
    ...options,
  })

export * from '@testing-library/react'

export { customRender as render }
