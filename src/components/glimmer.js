
import { Box, Placeholder, Text } from '@raid/kit'

export const Glimmer = ({ text }) => {
  return (
    <Box width={280} height={8} my={4}>
      {text && <Text>{text}</Text>}
      <Placeholder size='full' sx={{ borderRadius: 3 }} />
    </Box>
  )
}
Glimmer.defaultProps = {
  text: ''
}
