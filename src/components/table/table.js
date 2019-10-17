import React from 'react'
import PropTypes from 'prop-types'

import Cell from './cell'

import './table.css'

const LoadingSkeleton = ({ columns }) => new Array(3).fill('')
  .map(() => new Array(columns.length).fill('')
    .map(index => <Cell key={index} className="pulls"/>))

const Table = ({ columns, content, setSort, sort, setFilter, filter, skeleton }) => (
  <div className="table">
    {columns.map(header => (
      <Cell
        key={header.key}
        id={header.key}
        className="header"
        onClick={header.sort && setSort}
        setFilter={header.filter && setFilter}
        filter={filter}
        sort={sort}
      >
        {header.label}
      </Cell>
    ))}
    {skeleton && <LoadingSkeleton columns={columns}/>}
    {content.length > 0 && content.map(row => (
      <React.Fragment key={row.id}>
        {columns.map(column => <Cell key={row[column.key]} className="cell">{row[column.key]}</Cell>)}
      </React.Fragment>
    ))}
  </div>
)

Table.propTypes = {
  columns: PropTypes.array,
  content: PropTypes.array,
  filter: PropTypes.object,
  setFilter: PropTypes.func,
  setSort: PropTypes.func,
  skeleton: PropTypes.bool,
  sort: PropTypes.object
}

export default Table
