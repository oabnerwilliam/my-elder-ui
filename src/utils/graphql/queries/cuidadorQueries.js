import gql from "graphql-tag"
import { curtidaFragment } from "./curtidaQueries"

export const cuidadoresQueryGql = gql`
  query {
    listarCuidadores {
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
