//External Imports
import React from "react"

// Styles
import { SignedInWrapper, Button } from './styles'

const SignedIn = (props) => {
  return (
    <SignedInWrapper>
      <Button onClick={props.onLogout}>Log Out</Button>
    </SignedInWrapper>
  )
}

export default SignedIn