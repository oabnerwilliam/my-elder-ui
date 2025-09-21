import gql from "graphql-tag"
import { usuarioFragment } from "./usuarioQueries"

export const curtidaFragment = gql`
  fragment curtidaFragment on Curtida {
    id
    destinatario {
      ...usuarioFragment
    }
    autor {
      ...usuarioFragment
    }
    isMatch
  }
  ${usuarioFragment}
`

export const isUserLikedQueryGql = gql`
  query isUserLikedQuery($autorId: ID!, $destinatarioId: ID!) {
    isUserLiked(autorId: $autorId, destinatarioId: $destinatarioId)
  }
`

export const curtidasPorUsuarioQueryGql = gql`
  query curtidasPorUsuarioQuery($id: ID!) {
    curtidasPorUsuario(id: $id) {
      ...curtidaFragment
    }
  }
  ${curtidaFragment}
`
