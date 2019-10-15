import { connect } from 'react-redux'

import Candidates from './candidates'

const mapStateToProps = ({ candidates }) => ({
  candidates
})

export default connect(mapStateToProps)(Candidates)
