import { useForm, type SubmitHandler } from "react-hook-form"
import type { Idoso } from "../../layout/listpage/ListPage"
import { useMutation, useQuery } from "@apollo/client/react"
import { salvarRemedioMutation } from "../../utils/graphql/mutations/remedioMutations"
import { useAuth } from "../../utils/contexts/AuthContext"
import { remediosPorIdosoQueryGql } from "../../utils/graphql/queries/remedioQueries"

export interface Remedio {
  id: number
  idoso: Idoso
  nome: string
  dosagem: string
  quantidade: string
  frequencia: string
  motivo: string
}

export interface RemedioInput {
  remedioInput: {
    nome: string
    dosagem: string
    quantidade: string
    frequencia: string
    motivo: string
    idosoId?: number
  }
}

export interface RemedioValues {
  nome: string
  dosagem: string
  quantidade: string
  frequencia: string
  motivo: string
}

export const useRemedios = () => {
  const [salvarRemedio] = useMutation<Remedio, RemedioInput>(
    salvarRemedioMutation,
    { refetchQueries: [remediosPorIdosoQueryGql] }
  )
  const { user } = useAuth()
  const { data: { remediosPorIdoso = [] } = {}, loading } = useQuery(
    remediosPorIdosoQueryGql,
    {
      variables: { idosoId: user?.id },
    }
  )

  const form = useForm<RemedioValues>()

  const onSubmit: SubmitHandler<RemedioValues> = async (remedioInput) => {
    const remedio: RemedioInput["remedioInput"] = {
      ...remedioInput,
      idosoId: user?.id,
    }
    await salvarRemedio({
      variables: { remedioInput: remedio },
    })
    form.reset()
  }

  return {
    form,
    onSubmit,
    remediosPorIdoso,
    loading,
  }
}
