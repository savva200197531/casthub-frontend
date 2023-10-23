import React from "react"
import { Outlet } from "react-router-dom"

const Auth: React.FC = () => {
  return (
    <div>
      Auth
      <Outlet />
    </div>
  )
}

export default Auth
