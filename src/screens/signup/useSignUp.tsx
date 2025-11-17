import { useMutation } from "@apollo/client/react"
import { salvarIdosoMutation } from "../../utils/graphql/mutations/idosoMutations"
import { salvarCuidadorMutation } from "../../utils/graphql/mutations/cuidadorMutations"
import { useForm, type SubmitHandler } from "react-hook-form"
import { format } from "date-fns"
import { useAuth } from "../../utils/contexts/AuthContext"

interface SignUpValues {
  nome: string
  nomeUsuario: string
  senha: string
  sexo: string
  localizacao: string
  telefone: string
  dataNascimento: Date
  tipo: string
}

interface SignUpInput {
  nome: string
  nomeUsuario: string
  senha: string
  sexo: string
  localizacao: string
  telefone: string
  dataNascimento: string
}

export const useSignUp = () => {
  const [salvarIdoso] = useMutation<SignUpInput>(salvarIdosoMutation)
  const [salvarCuidador] = useMutation(salvarCuidadorMutation)

  const { loginOnCreate } = useAuth()

  const form = useForm<SignUpValues>()

  const submitForm: SubmitHandler<SignUpValues> = async (data) => {
    const input: SignUpInput = {
      nome: data.nome,
      dataNascimento: format(data.dataNascimento, "yyyy-MM-dd"),
      localizacao: data.localizacao,
      telefone: data.telefone.replace(/\D/g, ""),
      nomeUsuario: data.nomeUsuario,
      senha: data.senha,
      sexo: data.sexo,
    }

    try {
      if (data.tipo === "idoso") {
        const {
          data: { salvarIdoso: idoso },
        } = await salvarIdoso({
          variables: { idosoInput: input },
        })
        const user = {
          ...idoso,
          tipoUsuario: "idoso",
          telefone: data.telefone.replace(/\D/g, ""),
        }
        loginOnCreate(user)
      } else if (data.tipo === "cuidador") {
        const {
          data: { salvarCuidador: cuidador },
        } = await salvarCuidador({
          variables: { cuidadorInput: input },
        })
        const user = {
          ...cuidador,
          tipoUsuario: "cuidador",
          telefone: data.telefone.replace(/\D/g, ""),
        }
        loginOnCreate(user)
      }
      form.reset()
    } catch (error) {
      console.log((error as Error).message)
    }
  }

  return {
    form,
    submitForm,
  }
}
