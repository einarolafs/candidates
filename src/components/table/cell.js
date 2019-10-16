import React, { useCallback } from 'react'
import PropTypes from 'prop-types'

import './table.css'

const Cell = ({ label, onClick, className }) => {
  const handleClick = useCallback(() => onClick(label))

  return <div className={className} role="button" tabIndex={0} onClick={handleClick}>{label}</div>
}

Cell.propTypes = {
  className: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onClick: PropTypes.func
}

export default Cell
