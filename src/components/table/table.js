import React from 'react'
import PropTypes from 'prop-types'

import Cell from './cell'

import './table.css'

const Table = ({ columns, content, filter, sort }) => (
  <div className="table">
    {columns.map(header => <Cell key={header.key} className="header" onClick={filter} label={header.label}/>)}
    {content.map(row => (
      <React.Fragment key={row.id}>
        {columns.map(column => <Cell key={row[column.key]} className="cell" onClick={sort} label={row[column.key]}/>)}
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
