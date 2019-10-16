const initial = {
  id: null,
  label: null
}

const ERROR = 'ERROR'

const error = (state = initial, { type, payload }) => {
  switch (type) {
    case ERROR:
      return payload
    default:
      return state
  }
}

export default error
export {
  ERROR
}
