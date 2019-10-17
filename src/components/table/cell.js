import React, { useCallback } from 'react'
import PropTypes from 'prop-types'

import { Filter } from '../../components'

import './cell.css'

const Cell = ({ children, id, onClick, className, filter, setFilter, sort }) => {
  const handleClick = useCallback(() => {
    const { order } = sort

    const newOrder = order === null || order === 'last' ? 'first' : 'last'

    if (onClick) {
      onClick({ id, order: newOrder })
    }
  })

  const handleFilter = useCallback(value => setFilter({ id, value }))

  const label = children instanceof Date
    ? new Intl.DateTimeFormat('en-GB').format(children)
    : children

  return (
    <div
      className={`cell ${className}`}
    >
      <span role="button" className={`cell-label ${onClick ? 'clickable' : ''}`} tabIndex={0} onClick={handleClick}>{label}</span>
      {setFilter && <Filter className="cell-filter" selected={filter.id === id} value={filter.value} onChange={handleFilter}/>}
    </div>
  )
}

Cell.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number, Date, PropTypes.element]),
  className: PropTypes.string,
  filter: PropTypes.object,
  id: PropTypes.string,
  onClick: PropTypes.func,
  setFilter: PropTypes.func,
  sort: PropTypes.object
}

Cell.defaultProps = {
  filter: { id: null, value: null }
}

export default Cell
