
import { Card, H2, P, Code, Aspect, Image, Placeholder } from '@raid/kit'

const LazySection = () => {
  return (
    <Card>
      <H2 sx={{ mt: 2 }}>Lazy</H2>
      <P>This section is loaded lazily using <Code>React.lazy</Code>.</P>
      <Aspect ratio={16 / 9}>
        <Image
          src='https://www.fillmurray.com/400/300'
          loadingComponent={() => <Placeholder size='full' />}
          transitionDuration={300}
        />
      </Aspect>
    </Card>
  )
}

export default LazySection
