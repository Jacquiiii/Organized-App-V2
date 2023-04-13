// External imports
import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// Components
import SignedOut from './LoggedOut'
import SignedIn from './LoggedIn'

// Store & slices
import { logoutSuccess, setUserId } from '../../store/features/loginSlice'

// Context
import { ThemeContext } from '../../providers/ThemeProvider'

// Styles
import { HeaderWrapper, LoggedOutHeaderWrapper, Title, Button } from './styles'

const Header = () => {
  const dispatch = useDispatch()
  const isLoggedIn = useSelector(state => state.login.isLoggedIn)
  const { theme, setTheme } = useContext(ThemeContext)

  const handleLogout = () => {
    dispatch(logoutSuccess())
    dispatch(setUserId(''))
  }

  const handleThemeChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <>
      {isLoggedIn &&
        <HeaderWrapper theme={theme}>
          <Button onClick={handleThemeChange}>
            {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
          </Button>
          <Title theme={theme}>Organized</Title>
          <SignedIn onLogout={handleLogout} />
        </HeaderWrapper>
      }
      {!isLoggedIn && 
          <LoggedOutHeaderWrapper theme={theme}>
          <Button onClick={handleThemeChange}>
            {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
          </Button>
          <Title theme={theme}>Organized</Title>
          <SignedOut />
        </LoggedOutHeaderWrapper>
      }
    </>
  )
}

export default Header