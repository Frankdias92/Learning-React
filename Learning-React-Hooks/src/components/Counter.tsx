import { useState } from "react"

export function Counter() {
  const [count, setCount] = useState(0)

  function changeCount(amount: number) {
    setCount(prevCount => prevCount + amount)
  }

  function resetCount() {
    setCount(0)
  }

  return (
    <li className="wrapper">
        <button onClick={() => changeCount(-1)}>-</button>
        <span className="valueText">{count}</span>
        <button onClick={() => changeCount(1)}>+</button>
      <button onClick={() => resetCount()} >Reset</button>
    </li>
  )
}