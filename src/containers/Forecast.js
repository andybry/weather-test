import { connect } from 'react-redux'
import Forecast from '../components/Forecast'

const mapStateToProps = state => ({
  isLoading: state.isLoading
})

const ForecastContainer = connect(mapStateToProps)(Forecast)

export default ForecastContainer
