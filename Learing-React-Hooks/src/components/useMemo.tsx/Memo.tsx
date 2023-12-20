import { useState } from "react"
import { Item } from "../Item"


export function Memo() {
  const [items, setItems] = useState<string[]>([])

  function addItemToList() {
    setItems([...items, `Items ${items.length}`])
  }
  
  return (
    <div>
      <button onClick={addItemToList} >Add</button>

      <ul>
        {items.map(item => {
          return <Item key={item} title={item}/>
        })}
      </ul>
    </div>
  )
}