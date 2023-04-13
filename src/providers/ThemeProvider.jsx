import React, { useState, createContext, useEffect } from "react"

export const ThemeContext = createContext();

const ThemeProvider = (props) => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme')
    return savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : 'light'
  })

  const value = { theme, setTheme }

  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={value}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
