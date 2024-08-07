import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'
import { IEmailPassword } from '@/store/user/user.interface'
import Button from '@/ui/button/Button'
import Heading from '@/ui/Heading'
import Meta from '@/ui/Meta'
import useAuthRedirect from './useAuthRedirect'
import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { validEmail } from './valid-email'
import Field from '@/ui/input/Field'
import Spiner from '@/ui/Spiner'

const Auth: FC = () => {
  useAuthRedirect()
  const { isLoading } = useAuth()

  const { login, register } = useActions()

  const [type, setType] = useState<'login' | 'register'>('login')

  const {
    register: formRegister,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<IEmailPassword>({
    mode: 'onChange'
  })

  const onSubmit: SubmitHandler<IEmailPassword> = data => {
    if (type === 'login') {
      login(data)
    } else {
      register(data)
    }
    reset()
  }
  return (
    <Meta title="Auth">
      <section className="flex h-screen">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="rounded-lg bg-white shadow-sm p-8 m-auto"
        >
          <Heading className="capitalize">{type}</Heading>

          {isLoading ? <Spiner /> : null}

          <Field
            {...formRegister('email', {
              required: 'email is required',
              pattern: {
                value: validEmail,
                message: 'please write valid email'
              }
            })}
            placeholder="Email"
            error={errors.email?.message}
          />
          <Field
            {...formRegister('password', {
              required: 'password is required',
              minLength: {
                value: 6,
                message: 'Min leanght shoud more 6 symbols'
              }
            })}
            className=""
            type="password"
            placeholder="Password"
            error={errors.password?.message}
          />

          <Button type="submit" variant="orange">
            Let's go!
          </Button>
          <button
            className="ml-2"
            type="button"
            onClick={() => {
              setType(type === 'login' ? 'register' : 'login')
            }}
          >
            {type === 'login' ? 'Register' : 'Login'}
          </button>
        </form>
      </section>
    </Meta>
  )
}

export default Auth
