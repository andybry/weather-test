import Content from '../../../src/components/Content'
import expect from 'expect'
import { shallow } from 'enzyme'
import React from 'react'
import data from '../../fixtures/forecast.json'

const setup = () => {
  const props = {
    forecast: data.list
  }
  const component = shallow(<Content {...props} />)
  return {
    data: component.find('.Content__data')
  }
}

describe('src/components/Content', () => {
  it('should render the forecast data', () => {
    const { forecastData } = setup()
    expect(forecastData.length).toBe(1)
  })
})
