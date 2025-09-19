import Container from "./layout/container/Container"
import { Navbar } from "./layout/navbar/Navbar"
import { HomePage } from "./screens/home/HomePage"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Idosos } from "./screens/idosos/Idosos"
import { LoginPage } from "./screens/login/LoginPage"
import { SignUpPage } from "./screens/signup/SignUpPage"
import { Cuidadores } from "./screens/cuidadores/Cuidadores"
import { MatchesPage } from "./screens/matches/MatchesPage"
import { PageContainer } from "./layout/container/PageContainer"

export const App = () => {
  return (
    <>
      <Router>
        <Container>
          <Navbar />
          <PageContainer>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/idosos" element={<Idosos />} />
              <Route path="/cuidadores" element={<Cuidadores />} />
              <Route path="/matches" element={<MatchesPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/cadastro" element={<SignUpPage />} />
            </Routes>
          </PageContainer>
        </Container>
      </Router>
    </>
  )
}
