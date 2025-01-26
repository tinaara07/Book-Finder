import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
  }
}
`

export const ADD_USER = gql`
mutation AddUser($username: String!, $email: String!, $password: String!) {
  addUser(username: $username, email: $email, password: $password) {
    token
  }
}
`

export const SAVE_BOOK = gql`
mutation SaveBook($bookInput: BookInput!) {
  saveBook(bookInput: $bookInput) {
    _id
    bookCount
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
  }
}
`

export const REMOVE_BOOK = gql`
mutation removeBook($bookId: ID!) {
  removeBook(bookId: $bookId) {
    _id
    username
    email
    bookCount
    savedBooks {
      bookId
      authors
      description
      title
      image
      link
    }
  }
}
`
