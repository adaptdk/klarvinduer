import { render } from '../../../../test/test-utils'

import Navbar from './Navbar'

describe('Navbar', () => {
  it('has test navbar', () => {
    const { getByDataTestid } = render(<Navbar />)

    expect(getByDataTestid('navbar')).toHaveTextContent('Navbar')
  })
})
