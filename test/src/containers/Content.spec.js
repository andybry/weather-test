import ContentContainer from '../../../src/containers/Content'
import expect from 'expect'
import React from 'react'
import { mount } from 'enzyme'
import configureStore from '../../../src/store/configureStore'
import { Provider } from 'react-redux'
import ContentComponent from '../../../src/components/Content'
import data from '../../fixtures/forecast.json'

const setup = (forecast) => {
  const store = configureStore({
    forecast
  })
  store.dispatch = expect.createSpy()
  const component = mount(
    <Provider store={store}>
      <ContentContainer />
    </Provider>
  )
  const content = component.find(ContentComponent)
  return {
    props: content.props(),
    store
  }
}

describe('src/containers/Content', () => {
  it('should render Content with appropriate forecast prop', () => {
    const { forecast } = setup(data.list).props
    expect(forecast).toEqual(data.list)
  })
})
