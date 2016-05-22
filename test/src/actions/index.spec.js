import * as actions from '../../../src/actions'
import * as actionTypes from '../../../src/constants/actionTypes'
import expect from 'expect'

describe('src/actions/index', () => {
  describe('forecastResponse', () => {
    it('should return a FORECAST_RESPONSE action with data', () => {
      expect(actions.forecastResponse('data'))
        .toEqual({
          type: actionTypes.FORECAST_RESPONSE,
          data: 'data'
        })
    })
  })
})
