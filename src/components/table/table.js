import React from 'react'
import PropTypes from 'prop-types'

import './table.css'

const Table = ({ columns, content }) => (
  <div className="table">
    {columns.map(header => <div key={header.key} className="header">{header.label}</div>)}
    {content.map(row => (
      <React.Fragment key={row.id}>
        {columns.map(column => <div key={row.id} className="cell">{row[column.key]}</div>)}
      </React.Fragment>
    ))}
  </div>
)

Table.propTypes = {
  columns: PropTypes.array,
  content: PropTypes.array
}

export default Table
