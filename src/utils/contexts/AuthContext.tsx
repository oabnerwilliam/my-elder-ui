import {
  type ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react"
import type { Usuario } from "../../screens/cuidadores/Cuidadores"
import { useQuery } from "@apollo/client/react"
import { usuariosQueryGql } from "../graphql/queries/usuarioQueries"
import Loader from "../../layout/loader/Loader"
import { useLocation, useNavigate } from "react-router-dom"

export interface LoginData {
  nomeUsuario: string
  senha: string
}

type AuthContextType = {
  user: Usuario | null
  login: (userData: LoginData) => void
  logout: () => void
  loginOnCreate: (user: Usuario) => void
  userType: string
  setUserType: React.Dispatch<React.SetStateAction<string>>
}

type AuthProviderProps = {
  children: ReactNode
}

const AuthContext = createContext<AuthContextType | null>(null)

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<Usuario | null>(null)
  const [userType, setUserType] = useState<string>("")
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const loggedUser = localStorage.getItem("loggedUser")
    if (loggedUser) {
      setUser(JSON.parse(loggedUser))
    }
  }, [])

  const { data: { usuarios } = {}, loading } = useQuery(usuariosQueryGql)

  const login = (userData: LoginData) => {
    const userExists = usuarios.some(
      (usuario: Usuario) => usuario.nomeUsuario === userData.nomeUsuario
    )

    const correctPassword = usuarios.some(
      (usuario: Usuario) => usuario.senha === userData.senha
    )

    if (userExists && correctPassword) {
      setUser(
        usuarios.find(
          (usuario: Usuario) => usuario.nomeUsuario === userData.nomeUsuario
        )
      )
    } else {
      throw new Error("Usuário Inválido")
    }
  }
  useEffect(() => {
    if (user) {
      localStorage.setItem("loggedUser", JSON.stringify(user))
    }
  }, [user])

  const loginOnCreate = (user: Usuario) => {
    setUser(user)
    navigate("/")
  }

  const logout = () => {
    setUser(null)
    if (location.pathname !== "/") {
      navigate("/")
    }
    localStorage.setItem("loggedUser", "")
  }

  if (loading) return <Loader fullScreen />

  return (
    <AuthContext.Provider
      value={{ user, login, logout, loginOnCreate, userType, setUserType }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider")
  }

  return context
}
