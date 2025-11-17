import clsx from "clsx"
import { Card, CardContent } from "../../components/ui/card"
import type { Remedio } from "../../screens/remedios/useRemedios"
import Loader from "../loader/Loader"
import { useQuery } from "@apollo/client/react"
import { remediosPorIdosoQueryGql } from "../../utils/graphql/queries/remedioQueries"

export const ListaRemedios = ({ idosoId }: { idosoId: string }) => {
  const { data: { remediosPorIdoso = [] } = {}, loading } = useQuery(
    remediosPorIdosoQueryGql,
    {
      variables: { idosoId },
    }
  )

  return (
    <div
      className={clsx("h-full flex flex-col items-start gap-5", {
        "overflow-y-scroll": (remediosPorIdoso ?? []).length > 3,
      })}
    >
      <p className="text-3xl bg-primary text-primary-foreground p-3 font-bold">
        Lista de Remédios
      </p>
      <div className={clsx("flex flex-col w-full gap-4")}>
        {loading ? (
          <Loader />
        ) : (
          <>
            {(remediosPorIdoso as Remedio[]).map((remedio) => (
              <Card className="flex items-center">
                <CardContent className="flex flex-col items-start justify-center h-full py-5">
                  <div className="h-full">
                    <p className="text-3xl font-bold">{remedio.nome}</p>
                    <p>
                      <span className="font-bold">Dosagem:</span>{" "}
                      {remedio.dosagem}
                    </p>
                    <p>
                      <span className="font-bold">Frequência:</span>{" "}
                      {remedio.frequencia}
                    </p>
                    <p>
                      <span className="font-bold">Motivo:</span>{" "}
                      {remedio.motivo}
                    </p>
                    <p>
                      <span className="font-bold">Quantidade por uso:</span>{" "}
                      {remedio.quantidade}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </>
        )}
      </div>
    </div>
  )
}
