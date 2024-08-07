import { instance } from '@/api/api.interceptor'
import { ICategory } from '@/types/category.interface'
import { IPaymentResponse } from '@/types/payment.interface'
import { IReview } from '@/types/reviews.interface'

export const PaymentService = {
  async createPayment(amount: number) {
    const { data } = await instance.post<IPaymentResponse>('payment', {
      amount
    })
    return data
  }
}
