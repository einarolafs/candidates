import { combineReducers } from 'redux'

import candidates, { CANDIDATES } from './candidates'
import sort, { SORT } from './sort'
import filter, { FILTER } from './filter'
import error, { ERROR } from './error'

export default combineReducers({ candidates, sort, filter, error })
export {
  CANDIDATES,
  SORT,
  FILTER,
  ERROR
}
