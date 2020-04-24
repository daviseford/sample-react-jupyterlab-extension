import React from 'react'
import { EXTENSION_CSS_CLASSNAME } from '../enums'
import { CounterComponent } from './Counter'
import { Header } from './Header'

export const AppComponent = (): JSX.Element => {
  return (
    <div className={EXTENSION_CSS_CLASSNAME}>
      <Header />
      <CounterComponent />
    </div>
  )
}
