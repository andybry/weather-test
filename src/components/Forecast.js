import React, { PropTypes } from 'react'
import Loading from './Loading'
import Content from '../containers/Content'

const Forecast = ({ isLoading }) => (
  isLoading ? <Loading /> : <Content />
)

Forecast.propTypes = {
  isLoading: PropTypes.bool.isRequired
}

export default Forecast
