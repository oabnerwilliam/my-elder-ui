import gql from "graphql-tag"
import { idosoFragment } from "./idosoQueries"

export const remedioFragment = gql`
  fragment remedioFragment on Remedio {
    id
    idoso {
      ...idosoFragment
    }
    nome
    dosagem
    quantidade
    frequencia
    motivo
  }
  ${idosoFragment}
`

export const remediosPorIdosoQueryGql = gql`
  query remediosPorIdosoQuery($idosoId: ID!) {
    remediosPorIdoso(idosoId: $idosoId) {
      ...remedioFragment
    }
  }
  ${remedioFragment}
`
