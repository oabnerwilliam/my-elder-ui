import { useForm, type SubmitHandler } from "react-hook-form"
import { useAuth, type LoginData } from "../../utils/contexts/AuthContext"
import { useNavigate } from "react-router-dom"

export const useLogin = () => {
  const navigate = useNavigate()
  const { login } = useAuth()
  const form = useForm<LoginData>()
  const submitForm: SubmitHandler<LoginData> = (data) => {
    login(data)
    navigate("/")
  }
  return { form, submitForm }
}
