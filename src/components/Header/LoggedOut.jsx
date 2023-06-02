//External Imports
import React, { useState } from "react"
import { useDispatch } from 'react-redux'
import { useDebounce } from 'use-debounce'

// Store & slices
import { loginSuccess, setUserId } from '../../store/slices/loginSlice'
import { useGetUserByEmailQuery } from '../../store/slices/usersApiSlice'

// Styles
import { SignedOutWrapper, Button, Form, Input } from './styles'

const SignedOut = () => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [debouncedEmail] = useDebounce(email, 750)

  // Queries the database to get the user by email. Debounced email used to prevent too many api calls on server side when user starts typing into input field.
  const {data} = useGetUserByEmailQuery(debouncedEmail)

  // Checks if the email entered in the form matches the database query on submit
  const handleSubmit = (stateEmail) => {
    if (data.userData && data.userData.email === stateEmail) {
      dispatch(loginSuccess())
      dispatch(setUserId(data.userData.id))
    } else {
      alert('Please enter a valid email address 🙃')
    }
  }

  return (
    <SignedOutWrapper>
      <Form autoComplete="off" onSubmit={e => e.preventDefault()} >
        <Input
          placeholder="email"
          type="text"
          name="email"
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          placeholder="****"
          type="password"
          name="password"
        />
      </Form>
      <Button onClick={() => handleSubmit(email)}>Log In</Button>
    </SignedOutWrapper>
  )
}

export default SignedOut