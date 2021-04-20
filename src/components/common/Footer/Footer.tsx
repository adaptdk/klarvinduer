import type { Page } from '@framework/common/get-all-pages'

interface Props {
  className?: string
  children?: any
  pages?: Page[]
}

const Footer = (props: Props) => {
  return (
    <div data-testid="footer">
      <p>Footer</p>
    </div>
  )
}

export default Footer
