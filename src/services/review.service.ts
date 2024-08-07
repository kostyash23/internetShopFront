import { instance } from '@/api/api.interceptor'
import { ICategory } from '@/types/category.interface'
import { IReview } from '@/types/reviews.interface'

type TypeDate = {
  rating: number
  text: string
}

export const ReviewService = {
  async getAll() {
    return await instance<IReview[]>({
      url: `reviews`,
      method: 'GET'
    })
  },
  async getAveregeByproduct(productId: number) {
    return await instance<any>({
      url: `reviews/averege-by-product/${productId}`,
      method: 'GET'
    })
  },

  async leave(productId: string | number, data: TypeDate) {
    return await instance<ICategory>({
      url: `reviews/leave/${productId}`,
      method: 'POST',
      data
    })
  }
}
