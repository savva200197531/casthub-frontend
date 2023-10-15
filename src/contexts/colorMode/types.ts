import { Theme } from "@mui/material"

export type ColorMode = "light" | "dark"

export type ToggleColorMode = (mode: ColorMode) => void

export type ColorModeContextProps = {
  toggleColorMode: ToggleColorMode
  mode: ColorMode
  theme: Theme
}
