/* eslint-disable camelcase */
import { connect } from 'react-redux'

import { actions } from '../../store'
import selectors from '../selectors'

import Candidates from './candidates'

const mapStateToProps = ({ candidates: { data, loaded }, sort, filter, error }) => {
  const sortedCandidates = sort.id ? selectors.sortCandidates(data, sort) : data
  const filteredCandidates = filter.id ? selectors.filterCandidates(sortedCandidates, filter) : sortedCandidates

  return {
    candidates: filteredCandidates.map(({ birth_date, application_date, ...candidate }) => ({
      ...candidate,
      birth_date: new Date(birth_date),
      application_date: new Date(application_date)
    })),
    filter,
    sort,
    loaded: error.id === 'candidates' || loaded
  }
}

const mapDispatchToProps = dispatch => ({
  setFilter: payload => dispatch(actions.filter(payload)),
  setSort: payload => dispatch(actions.sort(payload)),
  setCandidates: data => dispatch(actions.candidates(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Candidates)
