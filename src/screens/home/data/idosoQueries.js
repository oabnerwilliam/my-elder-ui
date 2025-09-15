import gql from "graphql-tag"

export const idososQuery = gql`
  query {
    listarIdosos {
      id
      nome
    }
  }
`
