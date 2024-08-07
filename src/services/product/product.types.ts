export type TypeProductData = {
  name: string
  price: number
  description?: string
  images: string[]
  category: number
}

export type TypeProductDataFilters = {
  sort?: EnumProductSort
  surch?: string
  page?: string | number
  perPage?: string | number
}

export enum EnumProductSort {
  HIGHT_PRICE = 'high_price',
  LOW_PRICE = 'low_price',
  NEWEST = 'newest',
  OLDEST = 'oldest'
}
