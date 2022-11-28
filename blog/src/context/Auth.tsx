import { createContext, Dispatch, SetStateAction, useState } from 'react'

export interface userAuthType {
  id: string
  name: string
  token: string
  email: string
}

export type AuthContextType = {
  logout: () => void
  user: userAuthType | null | undefined
  setUser: Dispatch<SetStateAction<userAuthType | undefined>>
}

type AuthProviderType = {
  children: JSX.Element
}

export const AuthContext = createContext<AuthContextType>({} as AuthContextType)

export const AuthProvider = ({ children }: AuthProviderType) => {
  const [user, setUser] = useState<userAuthType>()

  function logout() {
    const logoutUser = {
      id: '',
      name: '',
      token: '',
      email: '',
    }
    setUser(logoutUser)
    localStorage.removeItem('token')
  }
  return (
    <AuthContext.Provider value={{ user, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
