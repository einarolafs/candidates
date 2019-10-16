import React from 'react'
import PropTypes from 'prop-types'

import { Table } from '../../components'

const columns = [
  { key: 'id', label: 'ID' },
  { key: 'name', label: 'Name' },
  { key: 'email', label: 'Email' },
  { key: 'birth_date', label: 'Birth date' },
  { key: 'year_of_experience', label: 'Years of Experience' },
  { key: 'position_applied', label: 'Position Applied' },
  { key: 'application_date', label: 'Application date' },
  { key: 'status', label: 'Status' }
]

const Candidates = ({ candidates, filter, sort }) => (
  <div className="wrapper">
    <Table columns={columns} filter={filter} sort={sort} content={candidates}/>
  </div>
)

Candidates.propTypes = {
  candidates: PropTypes.array,
  filter: PropTypes.func,
  sort: PropTypes.func
}

export default Candidates
