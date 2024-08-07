import { useTypedSelector } from './useTypeSelected'

export const useAuth = () => useTypedSelector(state => state.user)
