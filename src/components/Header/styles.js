// External imports
import styled from 'styled-components'

const HeaderWrapper = styled.section`
  display: flex;
  height: 30vh;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  overflow: auto;
  padding: 1em 1em;
  background-color: ${(props) => props.theme === 'light' ? '#EAEAEA' : '#232B2B'};
  box-shadow: 0 0.125rem 0.25rem rgba(0,0,0,0.075);
  font-family: sans-serif;
`

const LoggedOutHeaderWrapper = styled.section`
  display: flex;
  height: 100vh;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  overflow: auto;
  padding: 1em 1em;
  background-color: ${(props) => props.theme === 'light' ? '#EAEAEA' : '#232B2B'};
  box-shadow: 0 0.125rem 0.25rem rgba(0,0,0,0.075);
  font-family: sans-serif;
`

const Title = styled.h1`
  display: flex;
  margin: 0;
  font-size: 5vw;
  color: ${(props) => props.theme === 'light' ? '#1C1C1C' : 'whitesmoke'};
`

const SignedOutWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  gap: 10px;
  padding: 1em;
  border-radius: 0.25em;
`

const SignedInWrapper = styled.div`
  display: flex;
  align-items: center;  
  flex-flow: column wrap;
  gap: 10px;
`

const Button = styled.button`
  border-radius: 0.5em;
  box-shadow: 0 0.125rem 0.25rem rgba(0,0,0,0.5);
  padding: 0.5em 0;
  width: 100px;
  font-size: 1em;
  color: #232B2B;
  border-style: none;
  background: linear-gradient(178deg, rgba(201, 234, 252, 0.51) 14.9%, rgba(139, 192, 216, 0.73) 80%);
  cursor: pointer;
  &:hover {
    background-color: grey;
    border-radius: 1.5em;
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.25em;
`

const Input = styled.input`
  border-radius: 0.25em;
  border-style: none;
  padding: 0.25em;
`

export { 
  HeaderWrapper,
  LoggedOutHeaderWrapper,
  Title, 
  SignedInWrapper, 
  SignedOutWrapper, 
  Button, 
  Form, 
  Input 
}