import gql from "graphql-tag"

export const curtidaMutation = gql`
  mutation curtir($curtidaInput: CurtidaInput!) {
    curtir(curtidaInput: $curtidaInput) {
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
  }
`
