const initial = null
const FILTER = 'FILTER'

const filter = (state = initial, { type, payload }) => {
  switch (type) {
    case FILTER:
      return payload
    default:
      return state
  }
}

export default filter
export {
  FILTER
}
