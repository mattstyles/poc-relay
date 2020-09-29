
import React, { Suspense, lazy } from 'react'
import { View } from '@raid/kit'

import { Glimmer } from 'components/glimmer'

const LazySection = lazy(() => import('./lazysection.js'))

export const Lazy = () => {
  return (
    <View isPadded isFlex sx={{ flex: 0.5, mt: 8 }}>
      <Suspense fallback={<Glimmer text='lazy loading...' />}>
        <LazySection />
      </Suspense>
    </View>
  )
}
