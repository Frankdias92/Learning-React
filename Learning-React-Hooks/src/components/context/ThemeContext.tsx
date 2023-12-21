import { useState, createContext, ReactNode } from "react"


export const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {}
})

type ThemeContextProviderProps = {
  children: ReactNode;
}

export const ThemeContextProvider = ({ children }:ThemeContextProviderProps ) => {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    if (theme === 'light') {
      return setTheme('dark')
    }

    return setTheme('light')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }} >
      {children}
    </ThemeContext.Provider>
  )
}
