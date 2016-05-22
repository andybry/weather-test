import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers'
import api from '../middleware/api'

export default function configureStore(initialState) {
  const enhancers = []

  // set up Redux devtools in dev
  if (process.env.NODE_ENV !== 'production') {
    const DevTools = require('../containers/DevTools').default
    enhancers.unshift(DevTools.instrument())
  }

  // add application middleware
  enhancers.unshift(applyMiddleware(api))

  const store = createStore(
    rootReducer, initialState, compose(...enhancers)
  )

  // Redux hot reloading
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      try {
        const nextReducer = require('../reducers').default
        store.replaceReducer(nextReducer)
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e)
      }
    })
  }

  return store
}
