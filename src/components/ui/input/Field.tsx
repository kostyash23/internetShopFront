import { forwardRef } from 'react'
import { IFild } from './fild.interface'
import cn from 'clsx'

const Field = forwardRef<HTMLInputElement, IFild>(
  (
    { placeholder, className, error, type = 'text', Icon, style, ...rest },
    ref
  ) => {
    return (
      <div className={cn('mb-3', className)} style={style}>
        <label>
          <span className="block mb-1">
            {Icon && <Icon className="mr-3" />}
            {placeholder}
          </span>
          <input
            className={cn(
              'px-4 py-2 outline-none border border-gray w-full border-solid focus:border-primary transition-all placeholder:font-light rounded-lg',
              {
                'border-red-500': !!error
              }
            )}
            placeholder={placeholder}
            ref={ref}
            type={type}
            {...rest}
          />
        </label>
        {error && <div className="text-red-500 text-sm"> {error}</div>}
      </div>
    )
  }
)

Field.displayName = 'Field'

export default Field
