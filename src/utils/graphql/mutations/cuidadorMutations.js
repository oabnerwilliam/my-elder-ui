import gql from "graphql-tag"

export const salvarCuidadorMutation = gql`
  mutation salvarCuidador($cuidadorInput: UsuarioInput!) {
    salvarCuidador(cuidadorInput: $cuidadorInput) {
      id
      nome
      sexo
      localizacao
      dataNascimento
      idade
    }
  }
`
