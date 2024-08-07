import { GoHeart, GoHeartFill } from 'react-icons/go'
import { FC } from 'react'
import { useProfile } from '@/hooks/useProfile'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { UserService } from '@/services/user.service'

const FavoriteButton: FC<{ productId: number }> = ({ productId }) => {
  const { profile } = useProfile()

  const queryClient = useQueryClient()

  const isExists = profile.favorites?.some(favorit => favorit.id === productId)

  const { mutate } = useMutation({
    mutationFn: () => UserService.toggleFavorite(productId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['profile'] })
    }
  })

  return (
    <div className="text-primary">
      <button
        onClick={() => {
          mutate()
        }}
      >
        {!isExists ? <GoHeart /> : <GoHeartFill />}
      </button>
    </div>
  )
}

export default FavoriteButton
