import React from 'react'
import { EXTENSION_CSS_CLASSNAME } from '../enums'
import { CounterComponent } from './Counter'

export const AppComponent = (): JSX.Element => {
  return (
    <div className={EXTENSION_CSS_CLASSNAME}>
      <div>This is a sample React-powered extension!</div>
      <CounterComponent />
    </div>
  )
}
