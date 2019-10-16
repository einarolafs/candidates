import React from 'react'
import { PropTypes } from 'prop-types'
/* eslint-disable import/no-unassigned-import */
import 'core-js/stable'
import 'regenerator-runtime/runtime'
/* eslint-enable import/no-unassigned-import */

import { ShowError } from './components'
import { Candidates } from './pages'

import './app.css'

const App = ({ error }) => (
  <div className="app">
    <Candidates/>
    <ShowError label={error.label}/>
  </div>
)

App.propTypes = {
  error: PropTypes.object
}

export default App
