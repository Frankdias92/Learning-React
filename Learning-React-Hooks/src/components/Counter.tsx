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
    <div className="counter">
      <div className="counterState">
        <button onClick={() => changeCount(-1)}>-</button>
        <span>{count}</span>
        <button onClick={() => changeCount(1)}>+</button>
      </div>
      <button onClick={() => resetCount()} >Reset</button>
    </div>
  )
}