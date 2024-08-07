import { createAsyncThunk } from '@reduxjs/toolkit'
import { IAuthResponse, IEmailPassword } from './user.interface'
import { AuthService } from '@/services/auth/auth.service'
import { removeFromStorage } from '@/services/auth/auth.helpers'
import { errorCatch } from '@/api/api.helpers'

// register
export const register = createAsyncThunk<IAuthResponse, IEmailPassword>(
  'auth/register',
  async (data, thunkApi) => {
    try {
      const response = await AuthService.main('register', data)
      return response
    } catch (error) {
      return thunkApi.rejectWithValue(error)
    }
  }
)

// login
export const login = createAsyncThunk<IAuthResponse, IEmailPassword>(
  'auth/login',
  async (data, thunkApi) => {
    try {
      const response = await AuthService.main('login', data)
      return response
    } catch (error) {
      return thunkApi.rejectWithValue(error)
    }
  }
)

//logout
export const logout = createAsyncThunk('auth/logout', async () => {
  removeFromStorage()
})

//checkAuth

export const checkAuth = createAsyncThunk<IAuthResponse>(
  'auth/checkAuth',
  async (_, thunkApi) => {
    try {
      const response = await AuthService.getNewTokens()
      return response.data
    } catch (error) {
      if (errorCatch(error) === 'jwt expired') {
        thunkApi.dispatch(logout())
      }
      return thunkApi.rejectWithValue(error)
    }
  }
)
