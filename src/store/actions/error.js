import * as types from '../reducers'

const error = payload => ({
  type: types.ERROR,
  payload
})

export default error
