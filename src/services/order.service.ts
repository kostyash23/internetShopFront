import { instance } from '@/api/api.interceptor'
import { ICategory } from '@/types/category.interface'
import { IOrder } from '@/types/order.interface'
import { IReview } from '@/types/reviews.interface'

export const OrderService = {
  async getOrders() {
    return await instance<IOrder[]>({
      url: `orders`,
      method: 'GET'
    })
  }
}
