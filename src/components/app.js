
import React, { Suspense } from 'react'
import { ThemeProvider } from 'styled-components'
import { Reset, extend, Placeholder, Box } from '@raid/kit'
import {
  RelayEnvironmentProvider
} from 'react-relay/hooks'

import { env } from '../env'

const theme = extend()({
  colors: {
    primary: 'rebeccapurple'
  }
})

const Suspending = () => {
  return (
    <Box width={280} height={8} m={4}>
      <Placeholder size='full' sx={{ borderRadius: 'rounded' }} />
    </Box>
  )
}

export const App = ({ state, children }) => (
  <ThemeProvider theme={theme}>
    <Reset />
    <RelayEnvironmentProvider environment={env}>
      <Placeholder size='full' />
      <Suspense fallback={<Suspending />}>
        {children}
      </Suspense>
    </RelayEnvironmentProvider>
  </ThemeProvider>
)
