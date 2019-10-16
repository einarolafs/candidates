import React from 'react'
import PropTypes from 'prop-types'

import './error.css'

const ShowError = ({ label }) => (
  <div className={`error-wrapper ${label ? 'active' : ''}`}>
    {label}
  </div>
)

ShowError.propTypes = {
  label: PropTypes.string
}

export default ShowError
