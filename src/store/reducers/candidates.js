const initial = []

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
