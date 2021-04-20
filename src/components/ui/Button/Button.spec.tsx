import Button from './Button'
import { fireEvent } from '@testing-library/dom'
import { render, screen } from '@test/test-utils'

describe('Button', () => {
  it('can be rendered', () => {
    render(<Button>Click me</Button>)
    const button = screen.getByRole('button', { name: /click me/i })

    expect(button).toBeInTheDocument()
  })

  it('can be disabled', () => {
    render(<Button disabled>Click me</Button>)
    const button = screen.getByRole('button', { name: /click me/i })

    expect(button).toBeDisabled()
  })

  it('can be clicked', () => {
    const handleClick = jest.fn()

    render(<Button onClick={handleClick}>Click me</Button>)
    fireEvent.click(screen.getByRole('button', { name: /click me/i }))

    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('can be in a loading state', () => {
    render(
      <Button isLoading loadingText="loading">
        Hello world
      </Button>
    )
    const button = screen.getByRole('button', { name: /loading/i })

    expect(button).toHaveAttribute('aria-busy')
  })
})
