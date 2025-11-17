import gql from "graphql-tag"
import { remedioFragment } from "../queries/remedioQueries"

export const salvarRemedioMutation = gql`
  mutation salvarRemedio($remedioInput: RemedioInput!) {
    salvarRemedio(remedioInput: $remedioInput) {
      ...remedioFragment
    }
  }
  ${remedioFragment}
`
