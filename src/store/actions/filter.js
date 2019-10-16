import * as types from '../reducers'

const filter = payload => ({
  type: types.FILTER,
  payload
})

export default filter
