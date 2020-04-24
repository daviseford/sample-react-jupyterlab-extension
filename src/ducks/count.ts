import { createSlice } from '@reduxjs/toolkit'
import { ICountSlice, IStore } from '../types/store'

const initialState: ICountSlice = {
  clicked: 0,
  count: 0,
}

export const countSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    resetCount: (state): void => {
      state = initialState
    },
    incrementCount: (state): void => {
      state.clicked += 1
      state.count += 1
    },
    decrementCount: (state): void => {
      state.clicked += 1
      state.count -= 1
    },
  },
})

// Actions
export const countActions = countSlice.actions

// Selector
export const selectCount = (state: IStore): ICountSlice => state.counter

export default countSlice.reducer
