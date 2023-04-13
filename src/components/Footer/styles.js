// External imports
import styled from 'styled-components'

const FooterWrapper = styled.section`
  display: flex;
  justify-content: space-around;
  height: 10%;
  align-items: center;
  padding: 2em 1em;
  background: linear-gradient(99.6deg, rgb(112, 128, 152) 10.6%, rgb(242, 227, 234) 32.9%, rgb(234, 202, 213) 52.7%, rgb(220, 227, 239) 72.8%, rgb(185, 205, 227) 81.1%, rgb(154, 180, 212) 102.4%);
`

const Box = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  border-radius: 0.25em;
  padding: 1em 1em;
  font-weight: bold;
`

const LikesButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`

export { FooterWrapper, Box, LikesButton }