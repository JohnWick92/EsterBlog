import { gql } from '@apollo/client'

export const PREVIEW_BY_LIKE = gql`
  query GetPost {
    getAllByLike {
      id
      title
      description
      createdAt
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
    }
  }
`

export const GET_POST = gql`
  query GetPost($title: String!) {
    getPost(title: $title) {
      like
      title
      id
      description
      createdAt
      authorId
      author
      article
    }
  }
`
