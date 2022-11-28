import { gql } from '@apollo/client'

export const PREVIEW_BY_LIKE = gql`
  query GetPost {
    getAllByLike {
      id
      title
      description
      createdAt
      category
    }
  }
`

export const PREVIEW_BY_DATE = gql`
  query GetPost {
    getAllByDate {
      id
      title
      description
      createdAt
      category
    }
  }
`

export const GET_ALL_POST_BY_DATE = gql`
  query Query {
    getAllByDate {
      title
      like
      id
      description
      createdAt
      author
      article
      authorId
      category
    }
  }
`

export const GET_ALL_POST_BY_LIKE = gql`
  query Query {
    getAllByLike {
      title
      like
      id
      description
      createdAt
      author
      article
      authorId
      category
    }
  }
`

export const GET_POST = gql`
  query GetPost($id: String!) {
    getPost(id: $id) {
      like
      title
      id
      description
      createdAt
      authorId
      author
      article
      category
    }
  }
`
