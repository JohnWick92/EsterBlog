import { createContext, Dispatch, SetStateAction, useState } from 'react'

export interface postSearchType {
  id: string
}

export interface postType {
  getPost?: {
    id: string
    createdAt: Date
    title: string
    description: string
    authorId: string
    author: string
    like: string
    article: string
  }
}

type PostProviderType = {
  children: JSX.Element
}

type PostContextType = {
  post: postSearchType | undefined | null
  setPost: Dispatch<SetStateAction<postSearchType | undefined>>
}

export const PostContext = createContext<PostContextType>({} as PostContextType)

export const PostProvider = ({ children }: PostProviderType) => {
  const [post, setPost] = useState<postSearchType>()
  return (
    <PostContext.Provider value={{ post, setPost }}>
      {children}
    </PostContext.Provider>
  )
}
