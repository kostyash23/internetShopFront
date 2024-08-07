import { IAuthResponse, ITokens } from '@/store/user/user.interface'
import Cookies from 'js-cookie'

export const getAccesToken = () => {
  const accesToken = Cookies.get('accesToken')

  return accesToken || null
}

export const saveTokenStorage = (data: ITokens) => {
  Cookies.set('accesToken', data.accessToken)
  Cookies.set('refreshToken', data.refreshToken)
}

export const removeFromStorage = () => {
  Cookies.remove('accesToken')
  Cookies.remove('refreshToken')
  localStorage.removeItem('user')
}

export const saveToStorage = (data: IAuthResponse) => {
  saveTokenStorage(data)
  localStorage.setItem('user', JSON.stringify(data.user))
}
