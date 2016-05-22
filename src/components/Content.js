import React, { PropTypes } from 'react'

const Content = ({ forecast }) => (
  <div className="Content">
    <pre className="Content__data">
      {JSON.stringify(forecast, null, 2)}
    </pre>
  </div>
)

Content.propTypes = {
  forecast: PropTypes.array.isRequired
}

export default Content
