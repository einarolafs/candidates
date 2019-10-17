import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import * as services from '../../services'
import { Table } from '../../components'
import store, { actions } from '../../store'

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
  try {
    const data = await services.fetch('http://personio-fe-test.herokuapp.com/api/v1/candidates')

    setCandidates(data)
  }
  catch (error) {
    store.dispatch(actions.error({ id: 'candidates', label: 'Could not load candidates do to a server error, please reload the page' }))
  }
}

const Candidates = ({ candidates, setCandidates, filter, setFilter, sort, setSort, error }) => {
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search)

    if (urlParams.get('filter')) {
      const id = urlParams.get('filter')
      const value = urlParams.get('value')

      setFilter({ id, value })
    }

    if (urlParams.get('sort')) {
      const id = urlParams.get('sort')
      const order = urlParams.get('order')

      setSort({ id, order })
    }

    getData(setCandidates)
  }, [])

  return (
    <div className="wrapper">
      <Table columns={columns} skeleton={!error} setFilter={setFilter} filter={filter} sort={sort} setSort={setSort} content={candidates}/>
    </div>
  )
}

Candidates.propTypes = {
  candidates: PropTypes.array,
  error: PropTypes.bool,
  filter: PropTypes.object,
  setCandidates: PropTypes.func,
  setFilter: PropTypes.func,
  setSort: PropTypes.func,
  sort: PropTypes.object
}

export default Candidates
