export default async function validateNumber(number) {
  const numString = number.join('')

  try {
    const URL = `http://apilayer.net/api/validate?access_key=${ process.env.REACT_APP_NUMERIFY_ACCESS_KEY }&number=${ numString }&country_code=RU&format=1`
    const data = await fetch(URL)
    const res = await data.json()

    return res
  } catch(e) {
    console.error(e)
  }
}
