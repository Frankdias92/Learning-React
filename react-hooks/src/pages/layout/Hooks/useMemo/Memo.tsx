import { useCallback, useMemo, useState } from "react"
import { Item } from "../../../../components/Item"
import './Memo.css'


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
    <div className="container">
      <div className="item-wrapper">
        <input className="form-field" type="text" 
          onChange={(e) => setNewItem(e.target.value)}
          value={newItem}
        />
        <button onClick={addItemToList} >Add</button>
      </div>
      
      <div className="list-wrapper wrapper-effect">
        
        <ul className="list-ul">
          {items.map(item => (
            <Item key={item} title={item} onAddToWishlist={addItemToWishlist}/>
          ))}
        </ul>
        
        <ul className=".list-ul">
          <div className="list-text">
            <h2 className="valueText">Whish List - {contItemsWithOne.toString()}</h2>
            {wishlist.map(wishlist => (
              <li className="li-wrapper " key={wishlist}>
                  {wishlist}
                </li> ))}
          </div>
        </ul>

      </div>
    </div>
  )
}