import * as types from '../reducers'

const sort = ({ id, order }) => {
  const url = `${window.location.protocol}//${window.location.host}${window.location.pathname}`

  const queryParameters = new URLSearchParams(location.search)

  queryParameters.set('sort', id)

  if (order !== null) {
    queryParameters.set('order', order)
  }

  const newUrl = `${url}?${queryParameters.toString()}`

  window.history.pushState({ path: newUrl }, '', newUrl)

  return {
    type: types.SORT,
    payload: { id, order }
  }
}

export default sort
