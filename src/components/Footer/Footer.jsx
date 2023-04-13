// External imports
import React, { useState } from 'react'

// Styles
import { FooterWrapper, Box, LikesButton } from './styles'

const Footer = () => {
  const [likes, setLikes] = useState(0)

  const handleLikes = () => {
    setLikes(likes => likes + 1)
  }

  return (
    <FooterWrapper>
      <Box>
        <LikesButton onClick={handleLikes}>Please like our site! 👍 </LikesButton>
        Likes: {likes}
      </Box>
    </FooterWrapper>
  )
}

export default Footer