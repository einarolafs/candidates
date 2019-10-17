const sortCandidates = (candidates, { id, order = 'first' }) => [...candidates].sort((a, b) => {
  if (typeof a[id] === 'number') {
    return order === 'first' ? a[id] - b[id] : b[id] - a[id]
  }

  const valueA = a[id].toUpperCase()

  const valueB = b[id].toUpperCase()

  if (valueA < valueB) {
    return order === 'first' ? -1 : 1
  }
  if (valueA > valueB) {
    return order === 'first' ? 1 : -1
  }

  return 0
})

export default sortCandidates
