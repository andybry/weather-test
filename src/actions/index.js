import * as actionTypes from '../constants/actionTypes'

export const forecastResponse = (data) => ({
  type: actionTypes.FORECAST_RESPONSE, data
})
