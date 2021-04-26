import { render, screen, userEvent } from '@test/test-utils'
import { Button } from '@components/ui'

describe('Button', () => {
  test('It renders correctly', () => {
    render(<Button>Click me</Button>)
    const button = screen.getByRole('button', { name: /click me/i })

    expect(button).toBeInTheDocument()
  })

  test('It can be disabled', () => {
    render(<Button disabled>Click me</Button>)
    const button = screen.getByRole('button')

    expect(button).toBeDisabled()
  })

  test('It can be clicked', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Click me</Button>)
    userEvent.click(screen.getByRole('button', { name: /click me/i }))

    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  test('It can be in a loading state', () => {
    render(
      <Button isLoading loadingText="loading">
        Hello world
      </Button>
    )
    const button = screen.getByRole('button', { name: /loading/i })

    expect(button).not.toHaveTextContent(/hello world/i)
    expect(button).toHaveAttribute('aria-busy')
  })
})
