/* eslint-disable camelcase */
import { connect } from 'react-redux'

import App from './app'

const mapStateToProps = ({ error }) => ({
  error
})

export default connect(mapStateToProps)(App)
