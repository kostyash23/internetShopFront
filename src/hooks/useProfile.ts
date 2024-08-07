import { UserService } from '@/services/user.service'
import { IFullUser, IUser } from '@/types/user.interface'
import { useQuery } from '@tanstack/react-query'

export const useProfile = () => {
  const { data } = useQuery({
    queryKey: ['profile'],
    queryFn: UserService.getProfile,
    select: data => data.data
  })
  return { profile: data || ({} as IFullUser) }
}
