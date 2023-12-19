import { useEffect, useMemo, useState } from "react"

export function UseMemo() {
  const [number, setNumber] = useState(0)
  const [dark, setDark] = useState(false)
  const doubleNumber = useMemo(() => {
    return slowFunction(number)
  }, [number])
  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? 'black' : 'white',
      color: dark ? 'white' : 'black'
    }
  }, [dark])
  useEffect(() => {
    console.log('Theme Changed')
  }, [themeStyles])
  
  return (
    <div className="container">
      <div className="useMemo">
        <input type="number" value={number} onChange={(e) => setNumber(parseInt(e.target.value))} />

        <button onClick={() => setDark(prevDark => !prevDark)} >
          Change Theme
        </button>
        <div className="doubleNumber" style={themeStyles}>{doubleNumber}</div>
      </div>
    </div>
  )
}

function slowFunction(num: number) {
  for (let i = 0; i <= 100000; i++) { 
    return num * 2
  }
}