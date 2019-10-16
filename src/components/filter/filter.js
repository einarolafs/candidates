import React, { useCallback, useState, useRef } from 'react'
import PropTypes from 'prop-types'

import { Filter as FilterIcon } from '../icons'

import './filter.css'

const Filter = ({ onChange, className, value, selected }) => {
  const inputRef = useRef(null)
  const [showFilter, toggleFilter] = useState(false)

  const handleInput = useCallback(event => onChange(event.target.value))

  const handleFilterClick = useCallback(() => {
    toggleFilter(!showFilter)

    if (showFilter) {
      inputRef.current.focus()
    }
  })

  return (
    <div className={`filter-wrapper ${className}`}>
      {<button onClick={handleFilterClick} className="filter-button"><FilterIcon selected={selected}/></button>}
      {showFilter && <input ref={inputRef} defaultValue={value} className="filter-input" onKeyUp={handleInput} type="text"/>}
    </div>
  )
}

Filter.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func,
  selected: PropTypes.bool,
  value: PropTypes.string
}

export default Filter
