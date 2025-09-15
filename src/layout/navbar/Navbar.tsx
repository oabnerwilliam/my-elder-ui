import { Link } from "react-router-dom"

export const Navbar = () => {
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
