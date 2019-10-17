import * as types from '../reducers'

const candidates = payload => ({
  type: types.CANDIDATES,
  payload: { data: payload, loaded: true }
})

export default candidates
