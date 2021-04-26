import { render, screen } from '@test/test-utils'
import { Navbar } from '@components/common'

describe('Navbar', () => {
  test('There is a test navbar', () => {
    render(<Navbar />)
    const navbar = screen.getByRole('navigation')

    expect(navbar).toHaveTextContent('Navbar')
  })
})
