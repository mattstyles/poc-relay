
import React, { useEffect, useState } from 'react'
import { View, H1, Placeholder } from '@raid/kit'

const url = 'https://api.github.com/graphql'
const token = process.env.GITHUB_TOKEN

const fetchGraphQL = async (query, variables) => {
  const res = await window.fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query,
      variables
    })
  })

  return await res.json()
}

export const Home = () => {
  const [name, setName] = useState('')
  useEffect(() => {
    let isMounted = true
    fetchGraphQL(`
      query RepoName {
        repository(
          owner: "facebook"
          name: "relay"
        ) {
          name
        }
      }
    `).then(res => {
      if (!isMounted) {
        return
      }

      setName(res.data.repository.name)
    }).catch(err => {
      console.error(err)
    })

    return () => {
      isMounted = false
    }
  }, [fetchGraphQL])

  if (!name) {
    return (
      <Placeholder />
    )
  }

  return (
    <View isPadded>
      <H1>{name}</H1>
    </View>
  )
}
