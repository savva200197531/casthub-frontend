import React, { ReactNode } from "react"

import { ThemeProvider } from "@mui/material"

import { useColorMode } from "./contexts/ColorMode/ColorModeContext.tsx"

type Props = {
  children: ReactNode
}

const AppProviders: React.FC<Props> = ({ children }) => {
  const { theme } = useColorMode()

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default AppProviders
