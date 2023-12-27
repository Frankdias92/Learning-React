import { useEffect, useRef, useState } from "react"

export function UseRef() {
  const [name, setName] = useState('')
  const renders = useRef(0)

  useEffect(() => {
    renders.current = renders.current + 1
  })

  const inputRef = useRef<HTMLInputElement>(null)

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  return (
    <div className="container">
      <div className="item-wrapper">
        <input className="form-field"
          type="text" 
          ref={inputRef}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Type to render"
        />
        <button onClick={focusInput}>Focus Input</button>
      </div>


      <div className="valueText list-text">
        <p>
          Hi! I'm <strong>{name}</strong>
        </p>
        
        <p>Renders: {renders.current}</p>
      </div>

    </div>
  )
}