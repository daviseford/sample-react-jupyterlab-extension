/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { selectCount, countActions } from '../ducks/count'

export const CounterComponent: React.FC = () => {
  const { resetCount, incrementCount, decrementCount } = countActions
  const dispatch = useDispatch()
  const { clicked, count } = useSelector(selectCount)

  return (
    <div>
      <h2>You clicked {clicked} times!</h2>
      <h2>Current value: {count}</h2>

      <button onClick={() => dispatch(decrementCount())}>Decrement</button>
      <button onClick={() => dispatch(incrementCount())}>Increment</button>
      <button onClick={() => dispatch(resetCount())}>Reset</button>
    </div>
  )
}
