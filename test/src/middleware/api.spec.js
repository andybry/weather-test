import api from '../../../src/middleware/api'
import expect from 'expect'
import nock from 'nock'

const setup = (type) => {
  const store = {
    dispatch: expect.createSpy()
  }
  const action = { type }
  const next = () => 'next action'
  return { store, next, action }
}

describe('src/middleware/api', () => {
  before(() => {
    nock('http://api.openweathermap.org')
      .get('/data/2.5/forecast?id=2643743&mode=json&appid=bda26c82e7c13ccabb4f967b2cfc4bca')
      .times(2)
      .reply(200, { list: 'value' })
  })

  it('should return the result of next by default', () => {
    const { store, next, action } = setup('ANY_ACTION')
    expect(api(store)(next)(action)).toEqual('next action')
  })

  it('should return the result of next when location changes', () => {
    const { store, next, action } = setup('@@router/LOCATION_CHANGE')
    expect(api(store)(next)(action)).toEqual('next action')
  })

  it('should dispatch a forecastResponse action with the API response', (done) => {
    const { store, next, action } = setup('@@router/LOCATION_CHANGE')
    api(store)(next)(action)
    setTimeout(() => {
      expect(store.dispatch).toHaveBeenCalled()
      done()
    }, 5)
  })

  after(() => nock.restore())
})
