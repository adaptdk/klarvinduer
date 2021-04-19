import { FunctionComponent } from 'react'
import { IconBaseProps } from 'react-icons'
import { RiCloseFill } from 'react-icons/ri'

const Close: FunctionComponent<IconBaseProps> = ({ ...props }) => {
  return <RiCloseFill {...props} />
}

export default Close
