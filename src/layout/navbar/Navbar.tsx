import type { ReactNode } from "react"
import { FaPersonCane } from "react-icons/fa6"
import {
  TbBandage,
  TbCane,
  TbCross,
  TbHeart,
  TbHelp,
  TbHome,
} from "react-icons/tb"
import { Link } from "react-router-dom"
import { Button } from "../../components/ui/button"

interface NavProps {
  icon?: ReactNode
  text: string
  to?: string
}

const NavButton = ({ text, to }: NavProps) => (
  <Link to={to}>
    <Button
      variant="secondary"
      className="rounded-3xl font-bold text-xl py-6 px-8 bg-primary text-white hover:bg-primary-hover transition-all ease-in-out duration-300 cursor-pointer"
    >
      {text}
    </Button>
  </Link>
)

const NavItem = ({ icon, text, to }: NavProps) => (
  <Link
    to={to}
    className="hover:bg-primary hover:text-white px-10 py-3 pl-5 rounded-3xl w-full transition-all ease-in-out duration-300 flex gap-3 justify-start items-center"
  >
    <div className="w-[2rem]">{icon}</div>
    {text}
  </Link>
)

export const Navbar = () => {
  return (
    <div className="flex items-start justify-between w-[17rem] fixed left-[3rem] shadow-nav">
      <div className="flex flex-col items-center justify-between gap-6 h-full py-18 w-[15rem] fixed left-[3rem]">
        <div className="flex flex-col gap-7">
          <Link to={"/"}>
            <FaPersonCane className="text-[4rem] pl-3 hover:text-primary cursor-pointer ease-in-out duration-300 transition-all" />
          </Link>
          <ul className="flex flex-col gap-2 text-2xl font-bold">
            <li>
              <NavItem icon={<TbHome />} text="Início" to="/" />
            </li>
            <li>
              <NavItem icon={<TbCane />} text="Idosos" to="/idosos" />
            </li>
            <li>
              <NavItem
                icon={<TbBandage />}
                text="Cuidadores"
                to="/cuidadores"
              />
            </li>
            <li>
              <NavItem icon={<TbHeart />} text="Conexões" to="/matches" />
            </li>
          </ul>
        </div>
        <div className="flex flex-col ml-2 gap-4 items-center">
          <NavButton text="Entrar" to="/login" />
          <NavButton text="Criar Conta" to="/cadastro" />
        </div>
      </div>
      <div className="h-[100vh]">
        <hr className="h-full bg-gray-300 w-[1px] absolute right-0" />
      </div>
    </div>
  )
}
