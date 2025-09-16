import { useMutation, useQuery } from "@apollo/client/react"
import { idososQuery } from "../../utils/graphql/queries/idosoQueries"
import { cuidadoresQuery } from "../../utils/graphql/queries/cuidadorQueries"
import { FaHeart } from "react-icons/fa"
import { curtidaMutation } from "../../utils/graphql/mutations/curtidaMutations"
import { useState } from "react"

interface Idoso {
  id: string
  nome: string
}
interface Cuidador {
  id: string
  nome: string
}

interface IdososQuery {
  listarIdosos: Idoso[]
}
interface CuidadoresQuery {
  listarCuidadores: Cuidador[]
}

export const Idosos = () => {
  const [disableIdoso, setDisableIdoso] = useState(false)
  const [disableCuidador, setDisableCuidador] = useState(false)
  const { data: { listarIdosos } = {} } = useQuery<IdososQuery>(idososQuery)
  const { data: { listarCuidadores } = {} } =
    useQuery<CuidadoresQuery>(cuidadoresQuery)

  const [curtirMutation] = useMutation(curtidaMutation)

  const curtir = async ({
    idosoId,
    cuidadorId,
  }: {
    idosoId: string
    cuidadorId: string
  }) => {
    const curtidaInput = {
      cuidadorId,
      idosoId,
    }
    await curtirMutation({
      variables: { curtidaInput },
    })
  }

  return (
    <>
      <h1>Idosos</h1>
      {listarIdosos?.map((idoso) => (
        <>
          <h1>{idoso.nome}</h1>
          <button
            onClick={() => {
              curtir({ cuidadorId: "1", idosoId: "1" })
              setDisableIdoso(true)
            }}
            className="bg-black text-white p-2"
            disabled={disableIdoso}
          >
            <FaHeart />
          </button>
        </>
      ))}
      <h1>Cuidadores</h1>
      {listarCuidadores?.map((cuidador) => (
        <>
          <h1>{cuidador.nome}</h1>
          <button
            onClick={() => {
              curtir({ cuidadorId: "1", idosoId: "1" })
              setDisableCuidador(true)
            }}
            className="bg-black text-white p-2"
            disabled={disableCuidador}
          >
            <FaHeart />
          </button>
        </>
      ))}
    </>
  )
}
