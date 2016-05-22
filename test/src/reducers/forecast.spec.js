import forecast from '../../../src/reducers/forecast'
import expect from 'expect'
import * as actionTypes from '../../../src/constants/actionTypes'
import deepFreeze from 'deep-freeze'

describe('src/reducers/forecast', () => {
  it('should return {} as the default state', () => {
    const state = undefined
    const action = {
      type: 'ANY'
    }
    deepFreeze(action)
    expect(forecast(state, action)).toEqual({})
  })

  it('should return the current state by default', () => {
    const state = {}
    const action = {
      type: 'ANY'
    }
    deepFreeze(state)
    deepFreeze(action)
    expect(forecast(state, action)).toBe(state)
  })

  it('should extract data for FORECAST_RESPONSE action', () => {
    const state = {}
    const action = {
      type: actionTypes.FORECAST_RESPONSE,
      data: 'data'
    }
    const expectedState = 'data'
    deepFreeze(state)
    deepFreeze(action)
    expect(forecast(state, action)).toEqual(expectedState)
  })
})
