import ForecastContainer from '../../../src/containers/Forecast'
import expect from 'expect'
import React from 'react'
import { mount } from 'enzyme'
import configureStore from '../../../src/store/configureStore'
import { Provider } from 'react-redux'
import ForecastComponent from '../../../src/components/Forecast'
import data from '../../fixtures/forecast.json'

const setup = (isLoading) => {
  const store = configureStore({
    isLoading,
    forecast: data.list
  })
  const component = mount(
    <Provider store={store}>
      <ForecastContainer />
    </Provider>
  )
  return component.find(ForecastComponent)
}

describe('src/containers/Forecast', () => {
  it('should render Forecast with appropriate isLoading prop', () => {
    const component = setup(false)
    const { isLoading } = component.props()
    expect(isLoading).toBe(false)
  })
})
