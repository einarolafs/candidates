const fetch = async (url) => {
  const response = await window.fetch(url)

  if (response.ok) {
    const { data, error } = await response.json()

    if (error) {
      throw Error(error.message)
    }

    return data
  }
}

export default fetch
