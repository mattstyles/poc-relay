
import React, { Suspense } from 'react'
import {
  View, Box, Flex, Spacer,
  Text, Badge,
  Image
} from '@raid/kit'
import graphql from 'babel-plugin-relay/macro'
import {
  loadQuery,
  usePreloadedQuery,
  useFragment,
  useLazyLoadQuery
} from 'react-relay/hooks'

import { env } from '../env'
import { Glimmer } from 'components/glimmer'

const ownerFragment = graphql`
  fragment homeOwner on RepositoryOwner {
    login
    avatarUrl
  }
`

const query = graphql`
  query homeRepositoryNameQuery($name: String! $owner: String!) {
    repository(
      owner: $owner
      name: $name
    ) {
      owner {
        ...homeOwner
      }
      name
    }
  }
`

const preloadedQuery = loadQuery.loadQuery(env, query, {
  owner: 'facebook',
  name: 'relay'
})

const RepoOwner = ({ owner }) => {
  const data = useFragment(ownerFragment, owner)
  console.log('owner', data)
  return (
    <Flex row sx={{ alignItems: 'center' }}>
      <Image src={data.avatarUrl} variant='avatar' />
      <Spacer px={2} />
      <Badge variant='primary' sx={{ display: 'inline-block' }}>{data.login}</Badge>
    </Flex>
  )
}

const DisplayRepo = ({
  owner,
  name
}) => {
  const data = useLazyLoadQuery(query, {
    owner,
    name
  })
  return (
    <Box my={4}>
      <RepoOwner owner={data.repository.owner} />
      <Text as='h1' my={2}>{data.repository.name}</Text>
    </Box>
  )
}

export const HomePage = () => {
  const data = usePreloadedQuery(query, preloadedQuery)

  return (
    <Box my={4}>
      <RepoOwner owner={data.repository.owner} />
      <Text as='h1' my={2}>{data.repository.name}</Text>
    </Box>
  )
}

export const Home = () => {
  return (
    <View isPadded>
      <Suspense fallback={<Glimmer text='Home' />}>
        <HomePage />
        <DisplayRepo owner='facebook' name='react' />
        <DisplayRepo owner='mattstyles' name='raid' />
      </Suspense>
    </View>
  )
}
