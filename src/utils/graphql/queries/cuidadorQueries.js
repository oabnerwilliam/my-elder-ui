import gql from "graphql-tag"

export const cuidadoresQuery = gql`
  query {
    listarCuidadores {
      id
      nome
    }
  }
`
