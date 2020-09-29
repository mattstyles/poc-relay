
import React, { Suspense, useState, useEffect } from 'react'
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
import { ErrorBoundary } from 'components/error'

/**
 * Uses hooks to access data
 */

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
    <Box my={2}>
      <RepoOwner owner={data.repository.owner} />
      <Text as='h1' my={2}>{data.repository.name}</Text>
    </Box>
  )
}

export const HomePage = () => {
  const data = usePreloadedQuery(query, preloadedQuery)

  return (
    <Box my={2}>
      <RepoOwner owner={data.repository.owner} />
      <Text as='h1' my={2}>{data.repository.name}</Text>
    </Box>
  )
}

export const Home = () => {
  const [veryLazy, setVeryLazy] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setVeryLazy(true)
    }, 2000)
  }, [])
  return (
    <View isPadded isFlex>
      <Suspense fallback={<Glimmer text='Home' />}>
        <HomePage />
        <Suspense fallback={<Glimmer text='Lazy' />}>
          <DisplayRepo owner='mattstyles' name='raid' />
          <DisplayRepo owner='sveltejs' name='svelte' />
          <DisplayRepo owner='substack' name='tape' />
          <ErrorBoundary>
            <DisplayRepo owner='mattstyles' name='react-basic-kits' />
          </ErrorBoundary>
          <ErrorBoundary>
            <DisplayRepo owner='mattstyles' name='match' />
            {veryLazy ? (
              <Suspense fallback={<Glimmer text='Very lazy indeed' />}>
                <DisplayRepo owner='mattstyles' name='react-basic-kitXXX' />
              </Suspense>
            ) : <Text>Very lazily loading an error</Text>}
            {veryLazy ? (
              <Suspense fallback={<Glimmer text='Also Very lazy indeed' />}>
                <ErrorBoundary>
                  <DisplayRepo owner='mattstyles' name='react-basic-kits' />
                </ErrorBoundary>
              </Suspense>
            ) : <Text>Very lazily loading a preloaded error</Text>}
          </ErrorBoundary>
        </Suspense>
      </Suspense>
    </View>
  )
}
