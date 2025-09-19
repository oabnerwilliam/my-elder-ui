import { useQuery } from "@apollo/client/react"
import { Title } from "../cuidadores/Cuidadores"
import { idososQueryGql } from "../../utils/graphql/queries/idosoQueries"
import type { IdososQuery } from "../idosos/Idosos"
import avatarMasc from "../../assets/grandpa.png"
import avatarFem from "../../assets/grandmother.png"

export const MatchesPage = () => {
  const { data: { listarIdosos } = {} } = useQuery<IdososQuery>(idososQueryGql)

  return (
    <div className="flex flex-col justify-start items-center gap-10 h-full pt-[3rem]">
      <Title text="Conexões" />
      <div className="w-full flex flex-col justify-between items-center">
        {listarIdosos?.map((idoso) => (
          <>
            <div className="w-full flex gap-[3rem] hover:bg-gray-200 border p-[2rem] cursor-pointer rounded-3xl mb-[2rem]">
              {idoso.sexo === "Masculino" ? (
                <img src={avatarMasc} className="size-[5rem]" />
              ) : (
                <img src={avatarFem} className="size-[5rem]" />
              )}
              <div className="flex flex-col">
                <p className="text-3xl font-bold">{idoso.nome}</p>
                <p className="text-xl">Brasília - DF</p>
                <p className="text-lg">70 anos</p>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  )
}
