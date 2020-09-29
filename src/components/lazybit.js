
import { Card, H2, P, Aspect, Image, Placeholder, Code } from '@raid/kit'

const LazyBit = () => {
  return (
    <Card>
      <H2 sx={{ mt: 2 }}>Lazy</H2>
      <P>This section is loaded lazily using <Code>@loadable/component</Code>.</P>
      <Aspect ratio={16 / 9}>
        <Image
          src='https://www.fillmurray.com/500/400'
          loadingComponent={() => <Placeholder size='full' />}
          transitionDuration={300}
        />
      </Aspect>
    </Card>
  )
}

export default LazyBit
