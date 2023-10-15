import React from "react"

import { Box, IconButton } from "@mui/material"
import Brightness4Icon from "@mui/icons-material/Brightness4"
import Brightness7Icon from "@mui/icons-material/Brightness7"

import { useColorMode } from "../contexts/colorMode/ColorModeContext.tsx"

const ThemeToggleButton: React.FC = () => {
  const { mode, toggleColorMode } = useColorMode()

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "background.default",
        color: "text.primary",
        borderColor: "text.primary",
        border: "1px solid",
        borderRadius: 25,
        p: 2,
      }}
    >
      {mode} mode
      <IconButton
        sx={{ ml: 1 }}
        onClick={() => toggleColorMode(mode === "dark" ? "light" : "dark")}
        color="inherit"
      >
        {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Box>
  )
}

export default ThemeToggleButton
