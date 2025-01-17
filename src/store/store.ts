import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import userReducer from './user/user.slice'
import cartReducer from './cart/cart.slice' // Adjust the path as necessary

const persistConfig = {
  key: 'amazon-v2',
  storage,
  whitelist: ['cart'] // Adjust if necessary
}

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
})

export const persistor = persistStore(store)

export type TypeRootState = ReturnType<typeof rootReducer>
