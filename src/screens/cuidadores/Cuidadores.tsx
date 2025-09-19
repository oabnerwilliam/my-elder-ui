import { useMutation, useQuery } from "@apollo/client/react"
import avatarMasc from "../../assets/young-male.svg"
import avatarFem from "../../assets/young-female.svg"
import { FaHeart } from "react-icons/fa"
import { curtidaMutation } from "../../utils/graphql/mutations/curtidaMutations"
import { useState } from "react"
import { FaRegHeart } from "react-icons/fa6"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel"
import Loader from "../../layout/loader/Loader"
import { cuidadoresQueryGql } from "../../utils/graphql/queries/cuidadorQueries"
import type { Curtida } from "../idosos/Idosos"

export interface Cuidador {
  id: string
  nome: string
  sexo: string
  curtidas: Curtida[]
}

export interface CuidadoresQuery {
  listarCuidadores: Cuidador[]
}

export const Title = ({ text }: { text: string }) => (
  <p className="text-6xl text-center bg-primary p-4 text-white font-bold">
    {text}
  </p>
)

export const Cuidadores = () => {
  const [selected, setSelected] = useState(false)
  const { data: { listarCuidadores } = {}, loading } =
    useQuery<CuidadoresQuery>(cuidadoresQueryGql)

  const [curtirMutation] = useMutation(curtidaMutation, {
    refetchQueries: [{ query: cuidadoresQueryGql }],
  })

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

  if (loading) return <Loader />

  return (
    <div className="flex flex-col justify-center items-center gap-10 h-full">
      <Title text="Cuidadores" />
      <Carousel className="max-w-[40rem]">
        <CarouselContent>
          {listarCuidadores?.map((cuidador) => (
            <CarouselItem className="flex flex-col gap-8 items-center">
              {cuidador.sexo === "Masculino" ? (
                <img src={avatarMasc} className="size-[15rem]" />
              ) : (
                <img src={avatarFem} className="size-[15rem]" />
              )}
              <div className="flex flex-col items-center gap-3">
                <p className="text-5xl mb-5 font-bold">{cuidador.nome}</p>
                <p className="text-3xl">Brasília - DF</p>
                <p className="text-2xl">25 anos</p>
              </div>
              {cuidador.curtidas.some((curtida) => curtida.idoso.id === "1") ? (
                <button
                  onClick={() => {
                    curtir({ idosoId: "1", cuidadorId: cuidador.id })
                    setSelected(!selected)
                  }}
                  className="hover:text-red-500 text-4xl cursor-pointer ease-in-out duration-300 transition-all"
                  disabled
                >
                  <FaHeart className="text-red-600" />
                </button>
              ) : (
                <button
                  onClick={() => {
                    curtir({ idosoId: "1", cuidadorId: cuidador.id })
                    setSelected(!selected)
                  }}
                  className="hover:text-red-500 text-4xl cursor-pointer ease-in-out duration-300 transition-all"
                >
                  <FaRegHeart />
                </button>
              )}
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}
