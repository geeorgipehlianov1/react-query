import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

export const Bad = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [data, setData] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false)
      setIsLoading(true)

      try {
        const response = await axios('https://random.dog/woof.json')
        setData(response.data)
      } catch (err) {
        setIsError(true)
      }
      setIsLoading(false)
    }
    fetchData()
  }, [])

  if (isError) return <h1>Error, try again</h1>
  if (isLoading) return <h1>Loading...</h1>

  return (
    <div>
      <img src={data.url} alt="dog" />
    </div>
  )
}
