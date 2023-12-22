import { ThemeContext } from "./ThemeContext"


export const Greeting = () => {
  return (
    <ThemeContext.Consumer>
      {(value) => (
        <div className="valueText" style={{
          backgroundColor: value.theme === 'light' ? '#eee' : '#333',
          color: value.theme === 'dark' ?  '#eee' : '#333',
          }}
        >
          <h1>Hello Word!</h1>
        </div>
      )}
    </ThemeContext.Consumer>
  )
}