import * as types from '../reducers'

const sort = (payload) => {
  const url = `${window.location.protocol}//${window.location.host}${window.location.pathname}`

  console.log(url)

  const queryParameters = new URLSearchParams(location.search)

  queryParameters.set('sort', payload)

  const newUrl = `${url}?${queryParameters.toString()}`

  window.history.pushState({ path: newUrl }, '', newUrl)

  return {
    type: types.SORT,
    payload
  }
}

export default sort
