import gql from "graphql-tag"

export const usuarioFragment = gql`
  fragment usuarioFragment on Usuario {
    id
    nome
    nomeUsuario
    senha
    sexo
    localizacao
    telefone
    dataNascimento
    idade
    tipoUsuario
  }
`

export const usuarioQueryGql = gql`
  query usuarioQuery($id: ID!) {
    usuario(id: $id) {
      ...usuarioFragment
    }
  }
  ${usuarioFragment}
`

export const usuariosQueryGql = gql`
  query {
    usuarios {
      ...usuarioFragment
    }
  }
  ${usuarioFragment}
`

export const matchesByUserQueryGql = gql`
  query matchesQuery($id: ID!) {
    matchesByUser(id: $id) {
      ...usuarioFragment
    }
  }
  ${usuarioFragment}
`
