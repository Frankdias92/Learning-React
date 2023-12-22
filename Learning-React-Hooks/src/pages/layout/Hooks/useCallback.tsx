import { useCallback, useState } from "react"

import List from "../../../components/List"



export function UseCallback() {
  const [resourceType, setResourceType] = useState('post')
  const [search, setSearch] = useState<string>('')

  
  const getItems = useCallback(async () => {
    console.log(resourceType, 'getItems is being called"')
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/${resourceType}`
    )
    const responseJSON = await response.json()
    
    console.log(search, 'search is being called')
    return responseJSON
  }, [resourceType, search])


  
  return (
    <div className="container">
      <div className="item-wrapper">
        <input className="form-field"
          placeholder="Search" 
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {/* <button onClick={() => getItems()}>Search</button> */}

        <button onClick={() => setResourceType('posts')}>Posts</button>
        <button onClick={() => setResourceType('comments')}>Comments</button>
        <button onClick={() => setResourceType('todos')}>Todos</button>
      </div>

      <div className="wrapper-effect">
        {resourceType.length > 0 ? (
          <List getItems={getItems} />
          ) : (
            <p>Nenhum resultado encontrado.</p>
          )
        }
      </div>
    </div>
  )
}