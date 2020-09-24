
import React, { Suspense } from 'react'
import { ThemeProvider } from 'styled-components'
import { Reset, extend } from '@raid/kit'
import {
  RelayEnvironmentProvider
} from 'react-relay/hooks'

import { env } from '../env'
import { Glimmer } from 'components/glimmer'

const theme = extend()({
  colors: {
    primary: 'rebeccapurple'
  }
})

export const App = ({ state, children }) => (
  <ThemeProvider theme={theme}>
    <Reset />
    <RelayEnvironmentProvider environment={env}>
      <Suspense fallback={<Glimmer text='App' />}>
        {children}
      </Suspense>
    </RelayEnvironmentProvider>
  </ThemeProvider>
)
