const initial = null
const FILTER = 'FILTER'

const filter = (state = initial, action) => {
  switch (action.type) {
    case FILTER:
      return state
    default:
      return state
  }
}

export default filter
export {
  FILTER
}
