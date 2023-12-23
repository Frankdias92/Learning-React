import { useEffect, useState } from "react"
import './UseEffect.css'

type MeuTipo = {
  id: number;
  name: string;
  username: string;
  website: string;
  email: string;
  title: string;
};

export function UseEffect() {
  const [resourceType, setResourceType] = useState('posts')
  const [dados, setDados] = useState<MeuTipo[]>([])
  
  useEffect(() => {
    const fetchResourceType = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      const responseJSON = await response.json()

      setDados(responseJSON)
    }
    fetchResourceType()
  }, [resourceType])


  return (
    <div className="container">
        <div className="wrapper">
          <button onClick={() => setResourceType('posts')} >Posts</button>
          <button onClick={() => setResourceType('users')} >Users</button>
          <button onClick={() => setResourceType('comments')} >Comments</button>
        </div>
        <span className="resourceType">{ resourceType }</span>

      <div className="wrapper-effect">
        <ul className="list-ul">
          {dados.map((item) => (
            <li key={item.id} className="li-wrapper">
              <div className="">
                <span>{item.id}</span>
                <h2>{item.name}</h2>
                <h2>{item.username}</h2>
                <p>{item.website}</p>
                <p>{item.email}</p>
                <h2>{item.title}</h2>
                 {/* <p>{JSON.stringify(item)}</p> */}
              </div>
            </li>
          ))}
        </ul>
      </div>


    </div>
  )
}