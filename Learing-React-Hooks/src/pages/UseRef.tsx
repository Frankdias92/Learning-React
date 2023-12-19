import { useEffect, useRef, useState } from "react"

export function UseRef() {
  const [name, setName] = useState('')
  const renders = useRef(0)

  useEffect(() => {
    renders.current = renders.current + 1
  })

  return (
    <div className="useRef">
      <input
        type="text" 
        onChange={(e) => setName(e.target.value)}
        placeholder="Whats your name?"
      />
      <p>Hi! I'm {name}</p>
      <p>Renders: {renders.current}</p>
    </div>
  )
}