
import graphql from 'babel-plugin-relay/macro'
import { QueryRenderer } from 'react-relay'
import {
  View, Flex, Stack, Spacer,
  Card, Text, H2, Image
} from '@raid/kit'

import { env } from '../env'
import { Glimmer } from './glimmer'

const query = graphql`
  query stableQuery ($name: String!) {
    user (
      login: $name
    ) {
      login
      avatarUrl
      repositories (last: 10) {
        nodes {
          name
        }
      }
    }
  }
`

const render = ({
  error,
  props
}) => {
  if (error) {
    return <Text color='critical.600'>Stable Component: Error</Text>
  }

  if (!props) {
    return <Glimmer text='Stable Component is Loading' />
  }

  console.log('Stable::QueryRenderer props', props)

  return (
    <Card>
      <Flex row sx={{ alignItems: 'center' }}>
        <Image variant='avatar' src={props.user.avatarUrl} />
        <Spacer px={2} />
        <Text>{props.user.login}</Text>
      </Flex>
      <H2>Repositories</H2>
      <Stack>
        {props.user.repositories.nodes.map(({ name }) => {
          return (
            <Text key={name}>{name}</Text>
          )
        })}
      </Stack>
    </Card>
  )
}

export const Stable = ({
  name
}) => {
  return (
    <View isPadded isFlex sx={{ flex: 0.5 }} mt={8}>
      <Text>Stable component</Text>
      <QueryRenderer
        environment={env}
        query={query}
        variables={{ name }}
        render={render}
      />
    </View>
  )
}
Stable.defaultProps = {
  name: 'mattstyles'
}
