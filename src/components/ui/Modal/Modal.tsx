import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode
  open: boolean
  onClose: () => void
}

export const Modal = ({ children, open, onClose }: Props) => {
  return <div data-testid="modal">{children}</div>
}

export default Modal
