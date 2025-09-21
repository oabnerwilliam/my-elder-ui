import { useQuery } from "@apollo/client/react"
import { useAuth } from "../../utils/contexts/AuthContext"
import { matchesByUserQueryGql } from "../../utils/graphql/queries/usuarioQueries"

export const useMatches = () => {
  const { user } = useAuth()
  const { data: { matchesByUser = [] } = {} } = useQuery(
    matchesByUserQueryGql,
    {
      variables: { id: user?.id },
    }
  )
  return { matchesByUser, hasMatches: matchesByUser.length > 0 }
}
