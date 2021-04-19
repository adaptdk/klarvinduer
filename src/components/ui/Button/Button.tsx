import clsx from 'clsx'
import mergeRefs from 'react-merge-refs'
import {
  forwardRef,
  ButtonHTMLAttributes,
  JSXElementConstructor,
  useRef,
} from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string
  className?: string
  active?: boolean
  type?: 'submit' | 'reset' | 'button'
  Component?: string | JSXElementConstructor<any>
  width?: string | number
  loading?: boolean
  disabled?: boolean
}

const Button = forwardRef(
  (
    {
      className,
      children,
      active,
      width,
      loading = false,
      disabled = false,
      style = {},
      Component = 'button',
      ...rest
    }: ButtonProps,
    buttonRef
  ) => {
    const ref = useRef<typeof Component>(null)

    const rootClassName = clsx(
      'btn',
      {
        'btn-loading': loading,
        'btn-disabled': disabled,
      },
      className
    )

    return (
      <Component
        data-testid="button"
        aria-pressed={active}
        ref={mergeRefs([ref, buttonRef])}
        className={rootClassName}
        disabled={disabled}
        style={{
          width,
          ...style,
        }}
        {...rest}
      >
        {children}

        {loading && (
          <i className="pl-2 m-0 flex">
            <span>Loading..</span>
          </i>
        )}
      </Component>
    )
  }
)

export default Button
