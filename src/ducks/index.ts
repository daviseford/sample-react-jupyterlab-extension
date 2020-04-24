import { configureStore } from '@reduxjs/toolkit'
import countReducer from './count'

export default configureStore({
  reducer: {
    count: countReducer,
  },
  devTools: true,
})
