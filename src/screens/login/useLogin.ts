import { useForm, type SubmitHandler } from "react-hook-form"
import { useAuth, type LoginData } from "../../utils/contexts/AuthContext"
import { useNavigate } from "react-router-dom"

export const useLogin = () => {
  const navigate = useNavigate()
  const { login } = useAuth()
  const form = useForm<LoginData>()
  const submitForm: SubmitHandler<LoginData> = (data) => {
    try {
      login(data)
      navigate("/")
    } catch (error) {
      console.log((error as Error).message)
    }
  }
  return { form, submitForm }
}
