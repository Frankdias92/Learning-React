import { useCallback, useState } from "react"

import List from "../components/List"

export function UseCallback() {
  const [text, setText] = useState('')
  const [resourceType, setResourceType] = useState('post')
  
  const getItems = useCallback(async () => {
    console.log('getItems is being called"')
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/${resourceType}`
    )
    const responseJSON = await response.json()
    
    return responseJSON
  }, [resourceType])
  
  return (
    <div>
      <input placeholder="Search" value={text} onChange={(e) => setText(e.target.value)} />

      <button onClick={() => setResourceType('posts')}>Posts</button>
      <button onClick={() => setResourceType('comments')}>Comments</button>
      <button onClick={() => setResourceType('todos')}>Todos</button>
    
      <List getItems={getItems} />
    </div>
  )
}