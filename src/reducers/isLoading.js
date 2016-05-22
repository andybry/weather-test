import * as actionTypes from '../constants/actionTypes'

export default (state = true, action) => {
  switch (action.type) {
    case actionTypes.FORECAST_RESPONSE:
      return false
    default:
      return state
  }
}
