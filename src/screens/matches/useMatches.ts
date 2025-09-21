import { useQuery } from "@apollo/client/react"
import { useAuth } from "../../utils/contexts/AuthContext"
import { matchesByUserQueryGql } from "../../utils/graphql/queries/usuarioQueries"

export const useMatches = () => {
  const { user } = useAuth()
  console.log(user)
  const { data: { matchesByUser = [] } = {} } = useQuery(
    matchesByUserQueryGql,
    {
      variables: { id: user?.id },
      fetchPolicy: "network-only",
    }
  )
  console.log(matchesByUser)
  return { matchesByUser, hasMatches: matchesByUser.length > 0 }
}
