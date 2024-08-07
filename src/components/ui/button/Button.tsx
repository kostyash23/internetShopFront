import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'
import cn from 'clsx'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'orange' | 'light'
}

const Button: FC<PropsWithChildren<IButton>> = ({
  children,
  className,
  variant,
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={cn('rounded-xl font-medium px-10 py-2 shadow-md', {
        'text-secondary bg-primary': variant === 'orange',
        'text-primary bg-white': variant === 'light'
      })}
    >
      {children}
    </button>
  )
}

export default Button
