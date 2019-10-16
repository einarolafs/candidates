/* eslint-disable camelcase */
import { connect } from 'react-redux'

import { actions } from '../../store'

import Candidates from './candidates'

const sortCandidates = (candidates, sort) => [...candidates].sort((a, b) => {
  if (typeof a[sort] === 'number') {
    return a[sort] - b[sort]
  }

  const valueA = a[sort].toUpperCase()

  const valueB = b[sort].toUpperCase()

  if (valueA < valueB) {
    return -1
  }
  if (valueA > valueB) {
    return 1
  }

  return 0
})

const mapStateToProps = ({ candidates: data, sort }) => {
  const candidates = sort ? sortCandidates(data, sort) : data

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
