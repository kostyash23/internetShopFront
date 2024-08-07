import { instance } from '@/api/api.interceptor'
import { ICategory } from '@/types/category.interface'

export const CategoryService = {
  async getAll() {
    return await instance<ICategory[]>({
      url: `categories`,
      method: 'GET'
    })
  },
  async getById(id: string | number) {
    return await instance<ICategory>({
      url: `categories/${id}`,
      method: 'GET'
    })
  },

  async getBySlug(slug: string) {
    return await instance<ICategory>({
      url: `categories/by-slug/${slug}`,
      method: 'GET'
    })
  },
  async create() {
    return await instance<ICategory>({
      url: `categories`,
      method: 'POST'
    })
  },
  async update(id: string | number, name: string) {
    return await instance<ICategory>({
      url: `categories/${id}`,
      method: 'PUT',
      data: { name }
    })
  },
  async delete(id: string | number) {
    return await instance<ICategory>({
      url: `categories/${id}`,
      method: 'DELETE'
    })
  }
}
