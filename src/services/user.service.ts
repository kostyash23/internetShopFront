import { instance } from '@/api/api.interceptor'
import { ICategory } from '@/types/category.interface'
import { IReview } from '@/types/reviews.interface'
import { IFullUser, IUser } from '@/types/user.interface'

type TypeDate = {
  email: string
  password?: string
  name?: string
  avatarPath?: string
  phone?: string
}

export const UserService = {
  async getProfile() {
    return await instance<IFullUser>({
      url: `user/profile`,
      method: 'GET'
    })
  },

  async updataProfile(data: TypeDate) {
    return await instance<IUser>({
      url: `user/profile`,
      method: 'PUT',
      data
    })
  },

  async toggleFavorite(productId: number) {
    return await instance<IUser>({
      url: `user/profile/favorites/${productId}`,
      method: 'PATCH'
    })
  }
}
