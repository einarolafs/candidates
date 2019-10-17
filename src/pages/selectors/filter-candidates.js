const filterCandidates = (candidates, { id, value }) => [...candidates].filter((candidate) => {
  if (value === '') {
    return true
  }

  const text = candidate[id].toLowerCase()

  return text.includes(value.toLowerCase())
})

export default filterCandidates
