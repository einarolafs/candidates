const initial = {
  id: null,
  order: null
}
const SORT = 'SORT'

const sortData = (state, payload) => {
  if (state.id !== payload) {
    return {
      ...initial,
      id: payload
    }
  }

  return {
    id: payload,
    order: state.order === 'first' ? 'last' : 'first'
  }
}

const sort = (state = initial, { type, payload }) => {
  switch (type) {
    case SORT:
      return sortData(state, payload)
    default:
      return state
  }
}

export default sort
export {
  SORT
}
