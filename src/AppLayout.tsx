import React from "react"

import { CssBaseline } from "@mui/material"

import ThemeToggleButton from "./components/ThemeToggleButton.tsx"
import { RouterProvider } from "react-router-dom"
import { router } from "./router.tsx"

const AppLayout: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <RouterProvider router={router} />
      <ThemeToggleButton />
    </>
  )
}

export default AppLayout
