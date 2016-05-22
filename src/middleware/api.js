import fetch from 'isomorphic-fetch'
import { forecastResponse } from '../actions'
const url = 'http://api.openweathermap.org/data/2.5/forecast?id=2643743&mode=json&appid=bda26c82e7c13ccabb4f967b2cfc4bca'

export default store => next => action => {
  switch (action.type) {
    case '@@router/LOCATION_CHANGE':
      fetch(url)
        .then(response => response.json())
        .then(json => store.dispatch(forecastResponse(json.list)))
      return next(action)
    default:
      return next(action)
  }
}
