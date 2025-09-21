import gql from "graphql-tag"
import { curtidaFragment } from "./curtidaQueries"
import { usuarioFragment } from "./usuarioQueries"

export const idosoFragment = gql`
  fragment idosoFragment on Idoso {
    id
    nome
    nomeUsuario
    senha
    sexo
    localizacao
    dataNascimento
    idade
  }
`

export const idosoQueryGql = gql`
  query idosoQuery($id: ID!) {
    idoso(id: $id) {
      ...idosoFragment
    }
  }
  ${idosoFragment}
`

export const idososQueryGql = gql`
  query {
    idosos {
      ...idosoFragment
    }
  }
  ${idosoFragment}
`
