import { useTypedSelector } from './useTypeSelected'

export const useCart = () => useTypedSelector(state => state.cart)
