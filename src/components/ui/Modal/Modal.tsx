import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  onClose: () => void
  open: boolean
}

export const Modal = ({ children, open, onClose }: Props) => {
  return <div data-testid="modal">{children}</div>
}

export default Modal
