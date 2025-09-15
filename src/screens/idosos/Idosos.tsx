import { useQuery } from "@apollo/client/react"
import { idososQuery } from "../home/data/idosoQueries"

interface Idoso {
  id: string
  nome: string
}

interface IdososQuery {
  listarIdosos: Idoso[]
}

export const Idosos = () => {
  const { data } = useQuery<IdososQuery>(idososQuery)

  return (
    <>
      {data?.listarIdosos.map((idoso) => (
        <h1>{idoso.nome}</h1>
      ))}
    </>
  )
}
