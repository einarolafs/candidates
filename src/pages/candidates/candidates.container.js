/* eslint-disable camelcase */
import { connect } from 'react-redux'

import { actions } from '../../store'

import Candidates from './candidates'

const sortCandidates = (candidates, { id, order = 'first' }) => [...candidates].sort((a, b) => {
  if (typeof a[id] === 'number') {
    return order === 'first' ? a[id] - b[id] : a[id] + b[id]
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

const mapStateToProps = ({ candidates: data, sort }) => {
  const candidates = sort.id ? sortCandidates(data, sort) : data

  return {
    candidates: candidates.map(({ birth_date, application_date, ...candidate }) => ({
      ...candidate,
      birth_date: new Date(birth_date),
      application_date: new Date(application_date)
    }))
  }
}

const mapDispatchToProps = dispatch => ({
  filter: item => dispatch(actions.filter(item)),
  sort: item => dispatch(actions.sort(item)),
  setCandidates: data => dispatch(actions.candidates(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Candidates)
