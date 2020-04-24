import { createSlice } from '@reduxjs/toolkit'

const initialState = 0

export const countSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    resetCount: state => initialState,
    incrementCount: state => state + 1,
    decrementCount: state => state - 1,
  },
})

// Actions
export const countActions = countSlice.actions

// Selector
export const getCount = state => state.counter

export default countSlice.reducer
