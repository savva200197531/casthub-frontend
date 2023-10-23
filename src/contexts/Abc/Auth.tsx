import React, { ReactNode, useContext } from "react"

import { AuthContextProps } from "./types"

const AuthContext = React.createContext<AuthContextProps>(
  {} as AuthContextProps
)

export const useAuth = () => useContext(AuthContext)

type Props = {
  children: ReactNode
}

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const value = {}

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
