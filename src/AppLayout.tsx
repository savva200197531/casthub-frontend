import React from "react"

import { CssBaseline } from "@mui/material"

import ThemeToggleButton from "./components/ThemeToggleButton.tsx"

const AppLayout: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <ThemeToggleButton />
    </>
  )
}

export default AppLayout
