import { Link, useNavigate } from "react-router-dom"

export const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div>
      <ul className="flex flex-col gap-5">
        <li>
          <Link to={"/"}>Início</Link>
        </li>
        <li>
          <Link to={"/idosos"}>Idosos</Link>
        </li>
      </ul>
    </div>
  )
}
