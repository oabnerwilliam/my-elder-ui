import { useMutation, useQuery } from "@apollo/client/react"
import { useAuth } from "../../utils/contexts/AuthContext"
import { cuidadoresQueryGql } from "../../utils/graphql/queries/cuidadorQueries"
import type { CuidadoresQuery, IdososQuery } from "./ListPage"
import { salvarCurtidaMutation } from "../../utils/graphql/mutations/curtidaMutations"
import { curtidasPorUsuarioQueryGql } from "../../utils/graphql/queries/curtidaQueries"
import { matchesByUserQueryGql } from "../../utils/graphql/queries/usuarioQueries"
import { idososQueryGql } from "../../utils/graphql/queries/idosoQueries"
import { useState } from "react"

export const useListPage = ({ type }) => {
  const [message, setMessage] = useState<string>("")
  const { user } = useAuth()
  const { data: { cuidadores } = {}, loading: loadingCuidadores } =
    useQuery<CuidadoresQuery>(cuidadoresQueryGql)

  const { data: { idosos } = {}, loading: loadingIdosos } =
    useQuery<IdososQuery>(idososQueryGql)

  const [curtirMutation] = useMutation(salvarCurtidaMutation, {
    refetchQueries: [{ query: cuidadoresQueryGql }],
  })

  const { data: { curtidasPorUsuario = [] } = {} } = useQuery(
    curtidasPorUsuarioQueryGql,
    {
      variables: { id: user?.id },
    }
  )

  const curtir = async ({
    destinatarioId,
    autorId,
  }: {
    destinatarioId: string
    autorId: string
  }) => {
    const curtidaInput = {
      destinatarioId,
      autorId,
    }
    const { data } = await curtirMutation({
      variables: { curtidaInput },
      refetchQueries: [
        { query: curtidasPorUsuarioQueryGql, variables: { id: user?.id } },
        { query: matchesByUserQueryGql, variables: { id: user?.id } },
      ],
    })
    const { salvarCurtida } = data
    if (salvarCurtida.isMatch) {
      setMessage("Conexão!")
      setTimeout(() => setMessage(""), 2000)
    }
  }

  return {
    user,
    list: type === "idosos" ? idosos : cuidadores,
    loading: type === "idosos" ? loadingIdosos : loadingCuidadores,
    curtidasPorUsuario,
    curtir,
    message,
    hasIdosos: idosos?.length > 0,
    hasCuidadores: cuidadores?.length > 0,
  }
}
