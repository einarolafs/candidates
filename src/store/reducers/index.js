import { combineReducers } from 'redux'

import candidates, { CANDIDATES } from './candidates'
import sort, { SHORT } from './sort'
import filter, { FILTER } from './filter'

export default combineReducers({ candidates, sort, filter })
export {
  CANDIDATES,
  SHORT,
  FILTER
}
