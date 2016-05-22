import Forecast from '../../../src/components/Forecast'
import expect from 'expect'
import { mount } from 'enzyme'
import React from 'react'
import Loading from '../../../src/components/Loading'
import Content from '../../../src/components/Content'
import { Provider } from 'react-redux'
import configureStore from '../../../src/store/configureStore'
import data from '../../fixtures/forecast.json'

const setup = (isLoading) => {
  const props = {
    isLoading
  }
  const component = mount(
    <Provider store={configureStore({ forecast: data.list })}>
      <Forecast {...props} />
    </Provider>
  )
  return {
    loading: component.find(Loading),
    content: component.find(Content)
  }
}

describe('src/components/Forecast', () => {
  it('should render the loading component when data isloading', () => {
    const { loading } = setup(true)
    expect(loading.length).toBe(1)
  })

  it('should render the content component when data is loaded', () => {
    const { content } = setup(false)
    expect(content.length).toBe(1)
  })
})
