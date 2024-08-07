import { useRouter } from 'next/router'
import { useAuth } from '@/hooks/useAuth'
import { useEffect } from 'react'

const useAuthRedirect = () => {
  const { user } = useAuth()
  const { replace } = useRouter()

  useEffect(() => {
    if (user) {
      replace('/')
    }
  }, [user])
}
export default useAuthRedirect
