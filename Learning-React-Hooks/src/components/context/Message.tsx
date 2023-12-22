import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"


export const Message = () => {
  const {theme, toggleTheme} = useContext(ThemeContext)
  return (
    <>

      <div className="form-field" style={{
        backgroundColor: theme === 'light' ? '#eee' : '#333',
        color: theme === 'dark' ? '#eee' : '#333',
        }}
      >

        <div className="wrapper">
          <h1>
            Current theme: 
          </h1>
          <strong className="valueText">
            {theme}
          </strong>
        </div>

        <button onClick={() => toggleTheme()} >
          Toggle Theme
        </button>
      </div>

    </>
  )
}