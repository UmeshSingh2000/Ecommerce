import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/cart/counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})