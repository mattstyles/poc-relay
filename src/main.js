
import { render } from 'react-dom'
import { Flex } from '@raid/kit'

import { App } from 'components/app'
import { Home } from 'components/home'
import { Stable } from 'components/stable'
import { Lazy } from 'components/lazy'

const el = document.querySelector('.js-main')

render(
  <App>
    <Flex row>
      <Home />
      <Lazy />
      <Stable />
    </Flex>
  </App>,
  el
)

if (module.hot) {
  module.hot.dispose(() => {
    console.group('[HMR] dispose')
    console.log('disposing signal updates, detaching observers')
    // signal.disposeAll()
    // signal.detachAll()

    console.groupEnd('[HMR] dispose')
  })
// Enable if you're happy with HMR for your app
// module.hot.accept(() => {
//   console.group('[HMR] accept')
//   signal.emit({
//     hmr: 'accept'
//   })
//   console.groupEnd('[HMR] accept')
// })
}
