import { useContext } from 'react'
import { AuthContext } from './Auth'

export function useAuth() {
  const context = useContext(AuthContext)
  return context
}
