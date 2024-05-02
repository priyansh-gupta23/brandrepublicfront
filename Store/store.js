import { configureStore } from '@reduxjs/toolkit'
import queryReducer from './Reducers/queryreducer'

export const store = configureStore({
  reducer: {
    queryReducer,
  },
})