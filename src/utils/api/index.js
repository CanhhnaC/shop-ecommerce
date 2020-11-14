import axios from 'axios'

const URL_API = 'localhost:3001/products'

export const getData = async () => {
  const result = await axios.get(URL_API);
  console.log(result)
}