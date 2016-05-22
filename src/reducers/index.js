import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import isLoading from './isLoading'
import forecast from './forecast'

export default combineReducers({
  isLoading,
  forecast,
  routing
})
