import { useCallback, useMemo, useState } from "react"
import { Item } from "../../components/Item"


export function Memo() {
  const [items, setItems] = useState<string[]>([])
  const [newItem, setNewItem] = useState('')
  const [wishlist, setWishlist] = useState<string[]>([])

  function addItemToList() {
    setItems([...items, newItem])
  }

  const addItemToWishlist = useCallback((item: string) => {
    setWishlist(prev => [...prev, item])
  }, [])
  
  const contItemsWithOne = useMemo(() => {
    return wishlist.length
  }, [wishlist])


  return (
    <div>
      <input type="text" 
        onChange={(e) => setNewItem(e.target.value)}
        value={newItem}
      />
      
      <button onClick={addItemToList} >Add</button>

      <ul>
        {items.map(item => {
          return <Item key={item} onAddToWishlist={addItemToWishlist} title={item}/>
        })}
      </ul>

      <ul>
        <h2>Whis List - {contItemsWithOne.toString()}</h2>
        {wishlist.map(wishlist => {
          return <li key={wishlist}>{wishlist}</li> })}
      </ul>

    </div>
  )
}