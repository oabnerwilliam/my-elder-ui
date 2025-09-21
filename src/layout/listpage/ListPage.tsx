import avatarMasc from "../../assets/young-male.svg"
import avatarFem from "../../assets/young-female.svg"
import { FaHeart } from "react-icons/fa"
import { FaRegHeart } from "react-icons/fa6"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel"
import Loader from "../../layout/loader/Loader"
import { useListPage } from "./useListPage"
import avatarMascOld from "../../assets/grandpa.png"
import avatarFemOld from "../../assets/grandmother.png"
import avatarMascYoung from "../../assets/young-male.svg"
import avatarFemYoung from "../../assets/young-female.svg"
import clsx from "clsx"

export interface Usuario {
  id: string
  nome: string
  sexo: string
  senha: string
  dataNascimento: string
  idade: number
  nomeUsuario: string
  localizacao: string
  tipo: string
}

export interface CuidadoresQuery {
  cuidadores: Usuario[]
}

export const Title = ({ text }: { text: string }) => (
  <p className="text-6xl text-center bg-primary p-4 text-white font-bold">
    {text}
  </p>
)

export interface Curtida {
  id: string
  destinatario: Usuario
  autor: Usuario
  isMatch: boolean
}
export interface Idoso extends Usuario {}

export interface IdososQuery {
  idosos: Idoso[]
}

export const ListPage = ({ type }: { type: string }) => {
  const { list, loading, curtidasPorUsuario, curtir, user, message } =
    useListPage({
      type,
    })

  if (loading) return <Loader />

  return (
    <div className="flex flex-col justify-center items-center gap-10 h-full">
      <Title text={type.charAt(0).toUpperCase() + type.slice(1)} />
      <Carousel className="max-w-[40rem]">
        <CarouselContent>
          {list?.map((item) => (
            <CarouselItem
              className="flex flex-col gap-8 items-center"
              key={item.id}
            >
              <div className="relative">
                {message ? (
                  <>
                    <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex justify-center items-center flex-col gap-4">
                      <FaHeart className="text-red-600 size-20" />
                      <p className="bg-red-600 text-white font-bold text-md p-3">
                        {message}
                      </p>
                    </div>
                  </>
                ) : null}
                <img
                  src={
                    item.sexo === "masculino"
                      ? type === "cuidadores"
                        ? avatarMascYoung
                        : avatarMascOld
                      : type === "cuidadores"
                      ? avatarFemYoung
                      : avatarFemOld
                  }
                  className={clsx("size-[15rem]", { "opacity-0": message })}
                />
              </div>
              <div className="flex flex-col items-center gap-3">
                <p className="text-5xl mb-5 font-bold">{item.nome}</p>
                <p className="text-3xl">{item.localizacao}</p>
                <p className="text-2xl">{item.idade} anos</p>
                {curtidasPorUsuario.find(
                  (curtida: Curtida) => curtida.destinatario.id === item.id
                ) ? (
                  <button
                    onClick={() => {
                      curtir({ autorId: user?.id, destinatarioId: item.id })
                    }}
                    className="hover:text-red-500 text-4xl cursor-pointer ease-in-out duration-300 transition-all"
                  >
                    <FaHeart className="text-red-600" />
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      curtir({ autorId: user?.id, destinatarioId: item.id })
                    }}
                    className="hover:text-red-500 text-4xl cursor-pointer ease-in-out duration-300 transition-all"
                  >
                    <FaRegHeart />
                  </button>
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}
