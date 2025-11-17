import { useFormContext, type SubmitHandler } from "react-hook-form"
import type { RemedioValues } from "../../screens/remedios/useRemedios"

interface RemedioFormProps {
  btnText: string
  submitForm: SubmitHandler<RemedioValues>
}

const FormInput = ({
  type,
  placeholder,
  ...props
}: {
  type?: string
  placeholder: string
}) => (
  <input
    type={type ?? "text"}
    {...props}
    placeholder={placeholder}
    required
    className="p-2 text-md w-full text-secondary outline-none border border-primary"
  />
)

const RemediosForm = ({ btnText, submitForm }: RemedioFormProps) => {
  const { register, handleSubmit } = useFormContext()

  return (
    <form
      className="flex flex-col items-start
        gap-4
        relative h-full"
      onSubmit={handleSubmit(submitForm)}
    >
      <div className="h-full w-full gap-4 flex flex-col">
        <div className="flex w-full gap-4">
          <FormInput placeholder="Nome do Remédio" {...register("nome")} />
          <FormInput placeholder="Dosagem (mg)" {...register("dosagem")} />
        </div>
        <FormInput
          placeholder="Quantidade por dose"
          {...register("quantidade")}
        />
        <div className="flex w-full gap-4">
          <FormInput placeholder="Frequência" {...register("frequencia")} />
          <FormInput placeholder="Motivo" {...register("motivo")} />
        </div>
      </div>
      <button
        type="submit"
        className="p-4 self-center w-4/5 bg-primary text-secondary-foreground transition-all duration-300 ease-in-out cursor-pointer hover:bg-primary-hover"
      >
        {btnText}
      </button>
    </form>
  )
}

export default RemediosForm
