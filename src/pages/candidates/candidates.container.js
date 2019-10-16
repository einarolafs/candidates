import { connect } from 'react-redux'

import { actions } from '../../store'

import Candidates from './candidates'

const mapStateToProps = ({ candidates }) => ({
  candidates
})

const mapDispatchToProps = dispatch => ({
  filter: item => dispatch(actions.filter(item)),
  sort: item => dispatch(actions.sort(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(Candidates)
