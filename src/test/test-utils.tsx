import '@testing-library/jest-dom/extend-expect'
import store from '@app/store'
import userEvent from '@testing-library/user-event'
import { FunctionComponent, ReactElement } from 'react'
import { Provider } from 'react-redux'
import { queries, render, RenderOptions } from '@testing-library/react'

const Providers: FunctionComponent = ({ children }) => (
  <Provider store={store}>{children}</Provider>
)

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'queries'>
) =>
  render(ui, {
    queries,
    wrapper: Providers,
    ...options,
  })

// Re-export everything
export * from '@testing-library/react'

// Override render method
export { customRender as render, userEvent, store }
