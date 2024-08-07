import { instance } from '@/api/api.interceptor'
import { TypeProductData, TypeProductDataFilters } from './product.types'
import { IProduct, TypePaginationProducts } from '@/types/product.interface'

export const ProductService = {
  async getAll(queryData = {} as TypeProductDataFilters) {
    const { data } = await instance<TypePaginationProducts>({
      url: `products`,
      method: 'GET',
      params: queryData
    })
    return data
  },

  async getSimilar(productId: string | number) {
    return await instance<IProduct[]>({
      url: `products/similar/${productId}`,
      method: 'GET'
    })
  },

  async getBySlug(productId: string) {
    return await instance<IProduct>({
      url: `products/by-slug/${productId}`,
      method: 'GET'
    })
  },

  async getByCategory(categorySlug: string) {
    return await instance<IProduct>({
      url: `products/by-category/${categorySlug}`,
      method: 'GET'
    })
  },

  async getById(id: string | number) {
    return await instance<IProduct>({
      url: `products/${id}`,
      method: 'GET'
    })
  },
  async create() {
    return await instance<IProduct>({
      url: `products`,
      method: 'POST'
    })
  },
  async update(id: string | number, data: TypeProductData) {
    return await instance<IProduct>({
      url: `products/${id}`,
      method: 'PUT',
      data
    })
  },
  async delete(id: string | number) {
    return await instance<IProduct>({
      url: `products/${id}`,
      method: 'DELETE'
    })
  }
}
