const fetch = async (url) => {
  try {
    const response = await window.fetch(url)

    if (response.ok) {
      const { data, error } = await response.json()

      if (error) {
        if (error.code === 500) {
          return console.log('have to try again')
        }

        throw Error(error.message)
      }

      return data
    }
  }
  catch (error) {
    return error
  }
}

export default fetch
