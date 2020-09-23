
import React, { useEffect, useState, Suspense } from 'react'
import {
  View, Placeholder, Box, Stack, Flex, Spacer,
  Text, Pre, List, ListItem, Badge,
  Image
} from '@raid/kit'
import graphql from 'babel-plugin-relay/macro'
import {
  loadQuery,
  usePreloadedQuery,
  useFragment
} from 'react-relay/hooks'

import { env } from '../env'
// import { fetchGraphQL } from 'utils/fetch'

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

const preloadedQuery = loadQuery.loadQuery(env, query, {
  owner: 'facebook',
  name: 'relay'
})

const Glimmer = () => {
  return (
    <Box width={280} height={8} my={4}>
      <Placeholder size='full' sx={{ borderRadius: 3 }} />
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
      <Suspense fallback={<Glimmer />}>
        <HomePage />
      </Suspense>
    </View>
  )

  // if (err) {
  //   return (
  //     <View isPadded>
  //       <List styleType='none'>
  //         {err.map((msg, i) => {
  //           return (
  //             <ListItem key={`err${i}`}>
  //               <Pre>{msg}</Pre>
  //             </ListItem>
  //           )
  //         })}
  //       </List>
  //     </View>
  //   )
  // }
  //
  // if (!repo) {
  //   return (
  //     <Placeholder />
  //   )
  // }
  //
  // return (
  //   <View isPadded>
  //     <Box my={4}>
  //       <Badge variant='primary'>{repo.owner}</Badge>
  //       <Text as='h1' my={2}>{repo.name}</Text>
  //     </Box>
  //   </View>
  // )
}
