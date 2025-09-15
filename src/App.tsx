import Container from "./layout/container/Container"
import { Navbar } from "./layout/navbar/Navbar"
import { HomePage } from "./screens/home/HomePage"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Idosos } from "./screens/idosos/Idosos"

export const App = () => {
  return (
    <>
      <Router>
        <Container>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/idosos" element={<Idosos />} />
          </Routes>
        </Container>
      </Router>
    </>
  )
}
