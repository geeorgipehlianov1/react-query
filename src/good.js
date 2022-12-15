import { useQuery } from 'react-query'
import axios from 'axios'
import './App.css'

export const Good = () => {
  const { isLoading, error, data } = useQuery('fetchingDogs', () =>
    axios('https://random.dog/woof.json'),
  )
  console.log(data)
  if (error) return <h1>Error, {error.message}</h1>
  if (isLoading) return <h1>Loading...</h1>

  return (
    <div>
      <img src={data.data.url} alt="dog" />
    </div>
  )
}
