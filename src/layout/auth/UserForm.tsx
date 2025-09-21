import { useState, useEffect } from "react"
import {
  useFormContext,
  type FieldValues,
  type SubmitHandler,
} from "react-hook-form"
import { FaEye } from "react-icons/fa"
import { SingleSelect } from "../../connectors/SingleSelect"
import { DatePicker } from "../../connectors/DatePicker"

interface UserFormProps {
  type: "signUp" | "login"
  btnText: string
  submitForm: SubmitHandler<FieldValues>
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

const UserForm = ({ type, btnText, submitForm }: UserFormProps) => {
  const [viewPassword, setViewPassword] = useState<boolean>(false)
  const [inputType, setInputType] = useState<"password" | "text">("password")

  const { register, handleSubmit } = useFormContext()

  const showPassword = (): void => {
    setViewPassword(!viewPassword)
  }

  useEffect(() => {
    if (viewPassword === true) {
      setInputType("text")
    } else {
      setInputType("password")
    }
  }, [viewPassword])

  return (
    <form
      className="flex flex-col items-start
        w-2/5
        gap-4
        relative"
      onSubmit={handleSubmit(submitForm)}
    >
      {type === "signUp" ? (
        <>
          <SingleSelect
            name="tipo"
            options={[
              { value: "idoso", label: "Idoso" },
              { value: "cuidador", label: "Cuidador" },
            ]}
            placeholder="Selecione um tipo de usuário"
          />
          <FormInput placeholder={"Insira seu nome"} {...register("nome")} />
          <SingleSelect
            name="sexo"
            options={[
              { value: "masculino", label: "Masculino" },
              { value: "feminino", label: "Feminino" },
            ]}
            placeholder="Selecione um sexo"
          />
          <FormInput
            placeholder={"Insira sua localização"}
            {...register("localizacao")}
          />
          <DatePicker name="dataNascimento" label="Data de nascimento:" />
        </>
      ) : null}
      <FormInput
        placeholder={"Insira seu nome de usuário"}
        {...register("nomeUsuario")}
      />
      <div className="relative w-full">
        <FormInput
          placeholder={"Insira sua senha"}
          type={inputType}
          {...register("senha")}
        />
        <FaEye
          onClick={showPassword}
          className="border-none text-xl flex justify-center absolute right-2 top-1/2 bg-transparent transform -translate-y-1/2 transition-all duration-300 ease-in-out cursor-pointer hover:fill-primary-hover fill-primary"
        />
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

export default UserForm
