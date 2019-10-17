/* eslint-disable camelcase */
import { connect } from 'react-redux'

import { actions } from '../../store'

import Candidates from './candidates'

const sortCandidates = (candidates, { id, order = 'first' }) => [...candidates].sort((a, b) => {
  if (typeof a[id] === 'number') {
    return order === 'first' ? a[id] - b[id] : b[id] - a[id]
  }

  const valueA = a[id].toUpperCase()

  const valueB = b[id].toUpperCase()

  if (valueA < valueB) {
    return order === 'first' ? -1 : 1
  }
  if (valueA > valueB) {
    return order === 'first' ? 1 : -1
  }

  return 0
})

const filterCandidates = (candidates, { id, value }) => [...candidates].filter((candidate) => {
  if (value === '') {
    return true
  }

  const text = candidate[id].toLowerCase()

  return text.includes(value.toLowerCase())
})

const mapStateToProps = ({ candidates, sort, filter, error }) => {
  console.log(sort)
  const sortedCandidates = sort.id ? sortCandidates(candidates, sort) : candidates
  const filteredCandidates = filter.id ? filterCandidates(sortedCandidates, filter) : sortedCandidates

  return {
    candidates: filteredCandidates.map(({ birth_date, application_date, ...candidate }) => ({
      ...candidate,
      birth_date: new Date(birth_date),
      application_date: new Date(application_date)
    })),
    filter,
    error: error.id === 'candidates',
    sort
  }
}

const mapDispatchToProps = dispatch => ({
  setFilter: payload => dispatch(actions.filter(payload)),
  setSort: payload => dispatch(actions.sort(payload)),
  setCandidates: data => dispatch(actions.candidates(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Candidates)
