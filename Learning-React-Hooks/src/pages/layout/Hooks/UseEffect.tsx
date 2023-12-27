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
  const [searchData, setSearchData] = useState('')

   // --> Executa todas as vezes que um estado é alterado.
   useEffect(() => {
    console.log('executa sempre')
  })

  // --> Executa somente na primeira vez que a página é carregada.
  useEffect(() => {
    console.log('executa na primeira vez que a página carrega')
  }, [])

  // --> Executa sempre que um estado específico é alterado (Array de dependência).
  useEffect(() => {
    console.log(`executa sempre que um estado específico é alterado: ${resourceType}`)
  }, [resourceType])

  // --> Utilizando o Clean Up.
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log(`Pesquisa executado e atualisa a 1s: ${searchData}`)
    }, 1000)

    return () => {
      clearTimeout(timer)
    }
  }, [searchData])

  // Exemplo prático - Request API
  // useEffect(() => {
  //   fetch('https://api.github.com/users/Frankdias92')
  //     .then((res) => res.json())
  //     .then((data) => setData(data))
  // }, [])
 
  
  useEffect(() => {
    const fetchResourceType = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      const responseJSON = await response.json()

      setDados(responseJSON)
    }
    fetchResourceType()
  }, [resourceType])

  
  const filteredData = dados.filter(item => 
    item.title || item.name 
    && item.name.toLowerCase().includes(searchData.toLowerCase())
    )
    
    if (!dados) {
      return <p>loading</p>
    }

  return (
    <div className="container">
        <div className="wrapper">
          <button onClick={() => setResourceType('posts')} >Posts</button>
          <button onClick={() => setResourceType('users')} >Users</button>
          <button onClick={() => setResourceType('comments')} >Comments</button>
        </div>
        <span className="resourceType">{ resourceType }</span>

        
        <input type="text" className="form-field"
          placeholder="Search for user"
          value={searchData}
          onChange={(e) => setSearchData(e.target.value)}

          style={
            {marginLeft: 25, width: 250}
          }
        />

      <div className="wrapper-effect">
        
        
        <ul className="list-ul">
          {filteredData.map((item) => (
            <li key={item.id} className="li-wrapper">
              <div className="">
                <span>{item.id}</span>
                <h1>{item.name}</h1>
                <h1>{item.username}</h1>
                <p>{item.website}</p>
                <p>{item.email}</p>
                <h1>{item.title}</h1>
                 {/* <p>{JSON.stringify(item)}</p> */}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}