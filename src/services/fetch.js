const fetch = async (url) => {
  try {
    const randomError = Math.floor(Math.random() * 6) + 1

    /* Fake a possible error from the response randomly */

    if (randomError === 6) {
      throw Error('something went wrong')
    }

    const response = await window.fetch(url)

    if (response.ok) {
      const data = await response.json()

      return data
    }
  }
  catch (error) {
    throw Error(error.message)
  }
}

export default fetch
