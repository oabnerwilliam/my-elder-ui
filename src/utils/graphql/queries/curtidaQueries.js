import gql from "graphql-tag"

export const curtidaFragment = gql`
  fragment curtidaFragment on Curtida {
    id
    cuidador {
      id
      nome
    }
    idoso {
      id
      nome
    }
    isMatch
  }
`

export const curtidasQuery = gql`
  query {
    listarCurtidas {
      ...curtidaFragment
    }
  }
  ${curtidaFragment}
`
