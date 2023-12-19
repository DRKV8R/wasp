import { deserialize as superjsonDeserialize } from 'superjson'
import { useQuery } from 'wasp/rpc'
import api, { handleApiError } from 'wasp/api'
import { HttpMethod } from 'wasp/types'
import type { User } from './types'
import { addMetadataToQuery } from 'wasp/rpc/queries'

export const getMe = createUserGetter()

export default function useAuth(queryFnArgs?: unknown, config?: any) {
  return useQuery(getMe, queryFnArgs, config)
}

function createUserGetter() {
  const getMeRelativePath = 'auth/me'
  /* filip */ console.log('tu smo')
  const getMeRoute = { method: HttpMethod.Get, path: `/${getMeRelativePath}` }
  async function getMe(): Promise<User | null> {
    try {
      const response = await api.get(getMeRoute.path)

      /* filip */ console.log('uspio')
      return superjsonDeserialize(response.data)
    } catch (error) {
      /* filip */ console.log('failao')
      if (error.response?.status === 401) {
      } else {
        handleApiError(error)
      }
      return null
    }
  }

  addMetadataToQuery(getMe, {
    relativeQueryPath: getMeRelativePath,
    queryRoute: getMeRoute,
    entitiesUsed: ['User'],
  })

  return getMe
}