import { connect } from 'react-redux'
import Content from '../components/Content'

const mapStateToProps = state => ({
  forecast: state.forecast
})

const ContentContainer = connect(mapStateToProps)(Content)

export default ContentContainer
