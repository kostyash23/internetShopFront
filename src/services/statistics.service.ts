import { instance } from '@/api/api.interceptor'
import { ICategory } from '@/types/category.interface'
import { IReview } from '@/types/reviews.interface'

type StatisticsResponce = {
  name: number
  value: string
}[]

export const StatisticsService = {
  async getMainStatistic() {
    return await instance<StatisticsResponce>({
      url: `statistic/main`,
      method: 'GET'
    })
  }
}
