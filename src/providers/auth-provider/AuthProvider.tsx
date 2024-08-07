import { FC, PropsWithChildren, useEffect } from 'react'
import { TypeComponentAuthFilds } from './auth-page.types'
import { useAuth } from '@/hooks/useAuth'
import { useActions } from '@/hooks/useActions'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import { getAccesToken } from '@/services/auth/auth.helpers'
import Cookies from 'js-cookie'

const DynamicCheckRole = dynamic(() => import('./CheckRole'), { ssr: false })

const AuthProvider: FC<PropsWithChildren<TypeComponentAuthFilds>> = ({
  Component: { isOnlyUser },
  children
}) => {
  const { user, isLoading } = useAuth()
  const { checkAuth, logout } = useActions()

  const { pathname } = useRouter()

  useEffect(() => {
    const accesToken = getAccesToken()
    if (accesToken) checkAuth()
  }, [])

  useEffect(() => {
    const refreshToken = Cookies.get('refreshToken')
    if (!refreshToken && user) logout()
  }, [pathname])

  return isOnlyUser ? (
    <DynamicCheckRole Component={{ isOnlyUser }} children={children} />
  ) : (
    <>{children}</>
  )
}

export default AuthProvider
