import UserForm from "../../layout/auth/UserForm"
import { FormProvider } from "react-hook-form"
import { useLogin } from "./useLogin"

export const LoginPage = () => {
  const { form, submitForm } = useLogin()

  return (
    <div className="h-full flex flex-col items-center justify-center gap-[2rem]">
      <FormProvider {...form}>
        <p className="text-4xl font-bold bg-primary text-white p-4">Entrar</p>
        <UserForm btnText="Entrar" type="login" submitForm={submitForm} />
      </FormProvider>
    </div>
  )
}
