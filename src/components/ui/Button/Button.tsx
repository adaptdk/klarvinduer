import clsx from 'clsx'
import mergeRefs from 'react-merge-refs'
import {
  ButtonHTMLAttributes,
  forwardRef,
  JSXElementConstructor,
  useRef,
} from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean
  className?: string
  Component?: string | JSXElementConstructor<any>
  href?: string
  isDisabled?: boolean
  isLoading?: boolean
  loadingText?: string
  type?: 'submit' | 'reset' | 'button'
  variant?: 'primary' | 'secondary'
}

const Button = forwardRef(
  (
    {
      active,
      children,
      className,
      Component = 'button',
      isDisabled = false,
      isLoading = false,
      loadingText,
      variant = 'primary',
      ...rest
    }: ButtonProps,
    buttonRef
  ) => {
    const ref = useRef<typeof Component>(null)

    const rootClassName = clsx(
      'btn',
      {
        'btn-primary': variant === 'primary',
        'btn-secondary': variant === 'secondary',
        'btn-loading': isLoading,
        'btn-disabled': isDisabled,
      },
      className
    )

    return (
      <Component
        aria-busy={isLoading}
        aria-pressed={active}
        className={rootClassName}
        disabled={isDisabled || isLoading}
        ref={mergeRefs([ref, buttonRef])}
        {...rest}
      >
        {isLoading ? (
          <div className="flex items-center space-x-2">
            <span>Spinner here</span>
            {loadingText ? <span>{loadingText}</span> : null}
          </div>
        ) : (
          children
        )}
      </Component>
    )
  }
)

export default Button
