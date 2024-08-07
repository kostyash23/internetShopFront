import { ICartItem } from './cart.interface'
import { IUser } from './user.interface'

export enum EnumOrderStatus {
  PANDING = 'PANDING',
  PAYED = 'PAYED',
  SHIPPED = 'SHIPPED',
  DELIERED = 'DELIVERED'
}
export interface IOrder {
  id: number
  creatAt: string
  items: ICartItem[]
  status: EnumOrderStatus
  user: IUser
}
