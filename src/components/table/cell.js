import React, { useCallback } from 'react'
import PropTypes from 'prop-types'

import './table.css'

const Cell = ({ children, id, onClick, className }) => {
  const handleClick = useCallback(() => onClick && onClick(id))

  const label = children instanceof Date
    ? Intl.DateTimeFormat('en-GB').format(children)
    : children

  return <div className={`${className} ${onClick ? 'onClick' : ''}`} role="button" tabIndex={0} onClick={handleClick}>{label}</div>
}

Cell.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number, Date, PropTypes.element]),
  className: PropTypes.string,
  id: PropTypes.string,
  onClick: PropTypes.func
}

export default Cell
