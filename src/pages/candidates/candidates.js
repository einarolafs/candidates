import React from 'react'
import PropTypes from 'prop-types'

import { Table } from '../../components'

const columns = ['id', 'name', 'email', 'birth_date', 'year_of_experience', 'position_applied', 'application_date', 'status']

const Candidates = ({ candidates }) => (
  <div className="wrapper">
    <Table columns={columns} content={candidates}/>
  </div>
)

Candidates.propTypes = {
  candidates: PropTypes.array
}

export default Candidates
