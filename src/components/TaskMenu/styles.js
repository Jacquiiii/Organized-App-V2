// External imports
import styled from 'styled-components'

const TaskWrapper = styled.section`
  display: flex;
  flex-direction: column;
  height: 70vh;
  justify-content: center;
  align-items: center;
  font-family: sans-serif;
  background-color: ${(props) => props.theme === 'light' ? '#EAEAEA' : '#232B2B'};
`

const ViewWrapper = styled.section`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  height: 70%;
  gap: 20px;
  margin-bottom: 1em;
  justify-content: flex-start;
  align-items: center;
  background-color: ${(props) => props.theme === 'light' ? '#EAEAEA' : '#232B2B'}; 
`

const Task = styled.div`
  border-radius: 0.25em;
  box-shadow: 0 0.125rem 0.25rem rgba(0,0,0,0.5);
  width: 700px;
  padding: 1.5em;
  color: #232B2B;
  background-color: whitesmoke; 
  text-align: center;
  margin: 0 2em;
`

const CreateWrapper = styled.section`
  display: flex;
  height: 30%;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme === 'light' ? '#EAEAEA' : '#232B2B'};
  color: whitesmoke;
`
const TaskForm = styled.form`
  display: flex;
  gap: 10px;
  margin-bottom: 2em;
  input {
    border: none;
    padding: 0.5em 1em;
    border-radius: 0.25em;
    box-shadow: 0 0.125rem 0.25rem rgba(0,0,0,0.5);
    width: 300px;
    outline: none;
  }
  select {
    border: none;
    padding: 0.5em 1em;
    border-radius: 0.25em;
    box-shadow: 0 0.125rem 0.25rem rgba(0,0,0,0.5);
    width: 200px;
    outline: none;
  }
  button {
    border-radius: 0.5em;
    box-shadow: 0 0.125rem 0.25rem rgba(0,0,0,0.5);
    font-size: 1em;
    color: #232B2B;
    border-style: none;
    background: linear-gradient(178deg, rgba(201, 234, 252, 0.51) 14.9%, rgba(139, 192, 216, 0.73) 80%);
    cursor: pointer;
    align-self: center;
    padding: 1em;
  }
`

export {
  TaskWrapper,
  ViewWrapper,
  Task,
  CreateWrapper,
  TaskForm,
}