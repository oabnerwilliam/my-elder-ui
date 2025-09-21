import gql from "graphql-tag"

export const salvarIdosoMutation = gql`
  mutation salvarIdoso($idosoInput: UsuarioInput!) {
    salvarIdoso(idosoInput: $idosoInput) {
      id
      nome
      sexo
      localizacao
      dataNascimento
      idade
    }
  }
`
