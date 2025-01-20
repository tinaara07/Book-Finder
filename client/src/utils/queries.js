import { gql } from '@apollo/client';

export const GET_ME = gql`
query GetMe {
  me {
    _id
    email
    username
    savedBooks {
      bookId
      authors
      description
      title
      image
      link
    }
    bookCount
  }
}
`