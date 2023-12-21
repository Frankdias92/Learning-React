import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"


export const Message = () => {
  const {theme, toggleTheme} = useContext(ThemeContext)
  return (
    <>

      <div style={{
        backgroundColor: theme === 'light' ? '#eee' : '#333',
        color: theme === 'dark' ? '#eee' : '#333',
        }}
      >

        <h1>Current theme: {theme}</h1>

        <button onClick={() => toggleTheme()} >
          Toggle Theme
        </button>
      </div>

    </>
  )
}