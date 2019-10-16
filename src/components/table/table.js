import React from 'react'
import PropTypes from 'prop-types'

import Cell from './cell'

import './table.css'

const Table = ({ columns, content, sort, filter }) => (
  <div className="table">
    {columns.map(header => (
      <Cell
        key={header.key}
        id={header.key}
        className="header"
        onClick={header.sort && sort}
        filter={header.filter && filter}
      >
        {header.label}
      </Cell>
    ))}
    {content.map(row => (
      <React.Fragment key={row.id}>
        {columns.map(column => <Cell key={row[column.key]} className="cell">{row[column.key]}</Cell>)}
      </React.Fragment>
    ))}
  </div>
)

Table.propTypes = {
  columns: PropTypes.array,
  content: PropTypes.array,
  filter: PropTypes.func,
  sort: PropTypes.func
}

export default Table
