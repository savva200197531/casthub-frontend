import React from "react"

import { IconButton } from "@mui/material"
import Brightness4Icon from "@mui/icons-material/Brightness4"
import Brightness7Icon from "@mui/icons-material/Brightness7"

import { useColorMode } from "../contexts/ColorMode/ColorModeContext.tsx"

const ThemeToggleButton: React.FC = () => {
  const { mode, toggleColorMode } = useColorMode()

  return (
    <IconButton
      sx={{ ml: 1 }}
      onClick={() => toggleColorMode(mode === "dark" ? "light" : "dark")}
      color="inherit"
    >
      {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  )
}

export default ThemeToggleButton
