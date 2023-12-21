import { useEffect, useState } from "react"
import './UseEffect.css'

export function UseEffect() {
  const [resourceType, setResourceType] = useState('posts')
  const [dados, setDados] = useState([])
  
  useEffect(() => {
    const fetchResourceType = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      const responseJSON = await response.json()

      setDados(responseJSON)
    }
    fetchResourceType()
  }, [resourceType])


  return (
    <div className="wrapperEffect">
      <div className="btnEffect">
        <button onClick={() => setResourceType('posts')} >Posts</button>
        <button onClick={() => setResourceType('users')} >Users</button>
        <button onClick={() => setResourceType('comments')} >Comments</button>
      </div>
      { resourceType }

      <div className="dadosPosition">
        {dados.map((item) => (
           <p>{JSON.stringify(item)}</p>
        ))}
      </div>
    </div>
  )
}