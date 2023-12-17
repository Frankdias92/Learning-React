import { useEffect, useState } from "react"
import './UseEffect.css'

export function UseEffect() {
  const [resourceType, setResourceType] = useState('posts')
  const [dados, setDados] = useState([])
  
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(json => setDados(json))
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