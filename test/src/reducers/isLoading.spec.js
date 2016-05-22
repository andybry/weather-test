import isLoading from '../../../src/reducers/isLoading'
import expect from 'expect'
import * as actionTypes from '../../../src/constants/actionTypes'
import deepFreeze from 'deep-freeze'

describe('src/reducers/isLoading', () => {
  it('should return true as the default state', () => {
    const state = undefined
    const action = {
      type: 'ANY'
    }
    deepFreeze(action)
    expect(isLoading(state, action)).toEqual(true)
  })

  it('should return the current state by default', () => {
    const state = true
    const action = {
      type: 'ANY'
    }
    deepFreeze(action)
    expect(isLoading(state, action)).toBe(state)
  })

  it('should return false for FORECAST_RESPONSE action', () => {
    const state = true
    const action = {
      type: actionTypes.FORECAST_RESPONSE
    }
    const expectedState = false
    deepFreeze(action)
    expect(isLoading(state, action)).toEqual(expectedState)
  })
})
