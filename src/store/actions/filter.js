import * as types from '../reducers'

const filter = (payload) => {
  const url = `${window.location.protocol}//${window.location.host}${window.location.pathname}`

  const queryParameters = new URLSearchParams(location.search)

  queryParameters.set('filter', payload.id)
  queryParameters.set('value', payload.value)

  const newUrl = `${url}?${queryParameters.toString()}`

  window.history.pushState({ path: newUrl }, '', newUrl)

  return {
    type: types.FILTER,
    payload
  }
}

export default filter
