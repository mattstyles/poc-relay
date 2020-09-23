
const url = 'https://api.github.com/graphql'
const token = process.env.GITHUB_TOKEN

// const delay = (ms = 500) => new Promise(resolve => setTimeout(resolve, ms))

export const fetchGraphQL = async (query, variables) => {
  // console.log('delaying')
  // await delay(2000)
  // console.log('resuming')
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
