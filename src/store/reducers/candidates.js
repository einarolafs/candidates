const initial = { data: [], loaded: false }

const CANDIDATES = 'CANDIDATES'

const candidates = (state = initial, { type, payload }) => {
  switch (type) {
    case CANDIDATES:
      return payload
    default:
      return state
  }
}

export default candidates
export {
  CANDIDATES
}
