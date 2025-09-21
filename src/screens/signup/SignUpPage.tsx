import UserForm from "../../layout/auth/UserForm"
import { FormProvider } from "react-hook-form"
import { useSignUp } from "./useSignUp"

export const SignUpPage = () => {
  const { form, submitForm } = useSignUp()

  return (
    <div className="h-full flex flex-col items-center justify-center gap-[2rem]">
      <FormProvider {...form}>
        <p className="text-4xl font-bold bg-primary text-white p-4">
          Criar Conta
        </p>
        <UserForm btnText="Criar Conta" type="signUp" submitForm={submitForm} />
      </FormProvider>
    </div>
  )
}
