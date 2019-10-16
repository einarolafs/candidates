import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import * as services from '../../services'
import { Table } from '../../components'

const columns = [
  { key: 'id', label: 'ID' },
  { key: 'name', label: 'Name', filter: true },
  { key: 'email', label: 'Email' },
  { key: 'birth_date', label: 'Birth date' },
  { key: 'year_of_experience', label: 'Years of Experience', sort: true },
  { key: 'position_applied', label: 'Position Applied', sort: true, filter: true },
  { key: 'application_date', label: 'Application date', sort: true },
  { key: 'status', label: 'Status', filter: true }
]

const getData = async (setCandidates) => {
  const data = await services.fetch('http://personio-fe-test.herokuapp.com/api/v1/candidates')

  setCandidates(data)
}

const Candidates = ({ candidates, setCandidates, filter, sort }) => {
  useEffect(() => {
    getData(setCandidates)
  }, [])

  return (
    <div className="wrapper">
      <Table columns={columns} filter={filter} sort={sort} content={candidates}/>
    </div>
  )
}

Candidates.propTypes = {
  candidates: PropTypes.array,
  filter: PropTypes.func,
  setCandidates: PropTypes.func,
  sort: PropTypes.func
}

export default Candidates
