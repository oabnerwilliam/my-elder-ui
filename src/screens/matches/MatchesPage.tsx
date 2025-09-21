import avatarMascOld from "../../assets/grandpa.png"
import avatarFemOld from "../../assets/grandmother.png"
import avatarMascYoung from "../../assets/young-male.svg"
import avatarFemYoung from "../../assets/young-female.svg"
import { useMatches } from "./useMatches"
import { Title, type Usuario } from "../../layout/listpage/ListPage"

export const MatchesPage = () => {
  const { matchesByUser } = useMatches()

  return (
    <div className="flex flex-col justify-start items-center gap-10 h-full pt-[3rem]">
      <Title text="Conexões" />
      <div className="w-full flex flex-col justify-between items-center">
        {matchesByUser?.map((match: Usuario) => (
          <>
            <div className="w-full flex gap-[3rem] hover:bg-gray-200 border p-[2rem] cursor-pointer rounded-3xl mb-[2rem]">
              {match.sexo === "masculino" ? (
                <>
                  {match.tipo === "cuidador" ? (
                    <img src={avatarMascYoung} className="size-[5rem]" />
                  ) : (
                    <img src={avatarMascOld} className="size-[5rem]" />
                  )}
                </>
              ) : (
                <>
                  {match.tipo === "cuidador" ? (
                    <img src={avatarFemYoung} className="size-[5rem]" />
                  ) : (
                    <img src={avatarFemOld} className="size-[5rem]" />
                  )}
                </>
              )}
              <div className="flex flex-col">
                <p className="text-3xl font-bold">{match.nome}</p>
                <p className="text-xl">{match.localizacao}</p>
                <p className="text-lg">{match.idade} anos</p>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  )
}
