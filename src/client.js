import './style.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App'
import configureStore from './store/configureStore'
import { Provider } from 'react-redux'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)
const rootElement = document.getElementById('root')

// set up Redux devtools in dev
if (process.env.NODE_ENV !== 'production') {
  const DevTools = require('./containers/DevTools').default
  ReactDOM.render(
    <Provider store={store}>
      <DevTools />
    </Provider>,
    document.getElementById('debug')
  )
}

const render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <Component history={history} />
    </Provider>,
    rootElement
  )
}
render(App)

// React hot reloading
if (module.hot) {
  module.hot.accept('./containers/App', () => {
    try {
      render(require('./containers/App').default)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
    }
  })
}
