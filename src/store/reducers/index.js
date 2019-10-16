import { combineReducers } from 'redux'

import candidates, { CANDIDATES } from './candidates'
import sort, { SORT } from './sort'
import filter, { FILTER } from './filter'

export default combineReducers({ candidates, sort, filter })
export {
  CANDIDATES,
  SORT,
  FILTER
}
