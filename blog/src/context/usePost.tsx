import { useContext } from 'react'
import { PostContext } from './Post'

export function usePost() {
  const context = useContext(PostContext)
  return context
}
