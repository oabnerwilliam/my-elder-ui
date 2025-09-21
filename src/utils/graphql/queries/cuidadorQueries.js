import gql from "graphql-tag"
import { curtidaFragment } from "./curtidaQueries"
import { usuarioFragment } from "./usuarioQueries"

export const cuidadorFragment = gql`
  fragment cuidadorFragment on Cuidador {
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

export const cuidadorQueryGql = gql`
  query cuidadorQuery($id: ID!) {
    cuidador(id: $id) {
      ...cuidadorFragment
    }
  }
  ${cuidadorFragment}
`
export const cuidadoresQueryGql = gql`
  query {
    cuidadores {
      ...cuidadorFragment
    }
  }
  ${cuidadorFragment}
`
