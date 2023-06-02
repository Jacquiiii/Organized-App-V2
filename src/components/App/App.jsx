// External imports
import React from "react"

// Components
import Header from '../Header/Header'
import TaskMenu from "../TaskMenu/TaskMenu"

// Providers
import ThemeProvider from '../../providers/ThemeProvider'

// Styles
import { AppWrapper } from "./styles"

const App = () => {
  return (
    <>
      <ThemeProvider>
        <AppWrapper>
          <Header />
          <TaskMenu />
        </AppWrapper>
      </ThemeProvider>
    </>
  )
}

export default App
