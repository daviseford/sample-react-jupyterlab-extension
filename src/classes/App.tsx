import React from 'react'
import { ReactWidget } from '@jupyterlab/apputils'
import { Provider } from 'react-redux'
import { AppComponent } from '../components/AppComponent'
import { EXTENSION_CSS_CLASSNAME } from '../enums'
import store from '../ducks'

export class ReactAppWidget extends ReactWidget {
  constructor() {
    super()
    this.addClass(EXTENSION_CSS_CLASSNAME)
  }

  render(): JSX.Element {
    return (
      <Provider store={store}>
        <AppComponent />
      </Provider>
    )
  }
}
