import { FormProvider } from "react-hook-form"
import RemediosForm from "../../layout/form/RemediosForm"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card"
import { useRemedios, type Remedio } from "./useRemedios"
import Loader from "../../layout/loader/Loader"
import clsx from "clsx"

const RemediosPage = () => {
  const { form, onSubmit, remediosPorIdoso, loading } = useRemedios()

  return (
    <div className="h-full flex flex-col items-center justify-center w-full">
      <Tabs
        defaultValue={remediosPorIdoso.length < 1 ? "cadastro" : "lista"}
        className="w-full"
      >
        <TabsList>
          <TabsTrigger value="lista">Lista de Remédios</TabsTrigger>
          <TabsTrigger value="cadastro">Cadastrar Remédios</TabsTrigger>
        </TabsList>
        <TabsContent value="cadastro">
          <Card className="flex flex-col justify-center h-[375px]">
            <CardHeader className="flex items-start">
              <CardTitle className="text-3xl bg-primary text-primary-foreground p-3">
                Cadastrar Remédio
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col w-full">
              <FormProvider {...form}>
                <RemediosForm btnText="Cadastrar" submitForm={onSubmit} />
              </FormProvider>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="lista" className="w-full">
          <Card
            className={clsx("h-[375px]", {
              "overflow-y-scroll": (remediosPorIdoso ?? []).length > 1,
            })}
          >
            <CardHeader className="flex items-start">
              <CardTitle className="text-3xl bg-primary text-primary-foreground p-3">
                Lista de Remédios
              </CardTitle>
            </CardHeader>
            <CardContent className={clsx("flex flex-col w-full gap-4")}>
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
                            <span className="font-bold">
                              Quantidade por uso:
                            </span>{" "}
                            {remedio.quantidade}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default RemediosPage
