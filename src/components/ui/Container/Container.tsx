import clsx from 'clsx'
import React, { ComponentType } from 'react'

interface Props {
  className?: string
  children?: any
  el?: string
  clean?: boolean
}

const Container = ({ children, className, el = 'div', clean }: Props) => {
  const rootClassName = clsx(className, 'content-box', {
    'mx-auto max-w-screen-xl px-6': !clean,
  })

  let Component: ComponentType<React.HTMLAttributes<HTMLDivElement>> = el as any

  return <Component className={rootClassName}>{children}</Component>
}

export default Container
