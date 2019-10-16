import React, { useCallback } from 'react'
import PropTypes from 'prop-types'

import { Filter } from '../../components'

import './cell.css'

const Cell = ({ children, id, onClick, className, filter }) => {
  const handleClick = useCallback(() => onClick && onClick(id))
  const handleFilter = useCallback(value => filter({ id, value }))

  const label = children instanceof Date
    ? new Intl.DateTimeFormat('en-GB').format(children)
    : children

  return (
    <div
      className={`cell ${className}`}
    >
      <span role="button" className={`cell-label ${onClick ? 'clickable' : ''}`} tabIndex={0} onClick={handleClick}>{label}</span>
      {filter && <Filter className="cell-filter" onChange={handleFilter}/>}
    </div>
  )
}

Cell.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number, Date, PropTypes.element]),
  className: PropTypes.string,
  filter: PropTypes.func,
  id: PropTypes.string,
  onClick: PropTypes.func
}

export default Cell
