
import { Environment, Network, RecordSource, Store } from 'relay-runtime'
import { fetchGraphQL } from 'utils/fetch'

const fetchQuery = async (params, variables) => {
  console.log('fetching', params.name, 'with', variables)
  console.log(params)
  return fetchGraphQL(params.text, variables)
}

export const env = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource())
})
