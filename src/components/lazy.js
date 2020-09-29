
import React, { Suspense, lazy } from 'react'
import { View, Stack } from '@raid/kit'
import loadable from '@loadable/component'

import { Glimmer } from 'components/glimmer'

const LazySection = lazy(() => import('./lazysection'))
const LazyBit = loadable(() => import('./lazybit'))

export const Lazy = () => {
  return (
    <View isPadded isFlex sx={{ flex: 0.5, mt: 8 }}>
      <Stack>
        <Suspense fallback={<Glimmer text='lazy loading...' />}>
          <LazySection />
        </Suspense>
        <Suspense fallback={<Glimmer text='lazy loading...' />}>
          <LazyBit />
        </Suspense>
      </Stack>
    </View>
  )
}
