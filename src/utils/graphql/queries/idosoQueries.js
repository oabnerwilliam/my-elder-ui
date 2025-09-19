import gql from "graphql-tag"
import { curtidaFragment } from "./curtidaQueries"

export const idososQueryGql = gql`
  query {
    listarIdosos {
      id
      nome
      sexo
      curtidas {
        ...curtidaFragment
      }
    }
  }
  ${curtidaFragment}
`
