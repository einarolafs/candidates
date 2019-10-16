import React from 'react'
import { PropTypes } from 'prop-types'

const Filter = ({ selected }) => (
  <svg viewBox="0 0 24 24" fill={selected ? 'red' : ''}><path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
)

Filter.propTypes = {
  selected: PropTypes.bool
}

export default Filter
