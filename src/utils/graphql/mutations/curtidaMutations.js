import gql from "graphql-tag"
import { curtidaFragment } from "../queries/curtidaQueries"

export const salvarCurtidaMutation = gql`
  mutation salvarCurtida($curtidaInput: CurtidaInput!) {
    salvarCurtida(curtidaInput: $curtidaInput) {
      ...curtidaFragment
    }
  }
  ${curtidaFragment}
`
