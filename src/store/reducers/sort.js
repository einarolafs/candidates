const initial = {
  id: null,
  order: null
}
const SORT = 'SORT'

const sort = (state = initial, { type, payload }) => {
  switch (type) {
    case SORT:
      return payload
    default:
      return state
  }
}

export default sort
export {
  SORT
}
