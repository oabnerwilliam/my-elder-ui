import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import { App } from "./App.tsx"
import { ApolloClient, InMemoryCache } from "@apollo/client"
import { ApolloProvider } from "@apollo/client/react"
import { HttpLink } from "@apollo/client"
import { PrimeReactProvider } from "primereact/api"

const client = new ApolloClient({
  link: new HttpLink({
    uri: "http://localhost:8080/graphql",
  }),
  cache: new InMemoryCache(),
})

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <PrimeReactProvider>
        <App />
      </PrimeReactProvider>
    </ApolloProvider>
  </StrictMode>
)
