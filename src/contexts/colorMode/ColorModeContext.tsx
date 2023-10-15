import React, { ReactNode, useCallback, useContext, useEffect } from "react"
import { useCookies } from "react-cookie"

import { createTheme } from "@mui/material"

import { getDesignTokens } from "./theme"
import { ColorMode, ColorModeContextProps, ToggleColorMode } from "./types"

const ColorModeContext = React.createContext<ColorModeContextProps>({
  mode: "dark",
  theme: createTheme(),
  toggleColorMode: () => {},
} as ColorModeContextProps)

export const useColorMode = () => useContext(ColorModeContext)

type Props = {
  children: ReactNode
}

export const ColorModeProvider: React.FC<Props> = ({ children }) => {
  const [cookies, setCookie] = useCookies(["theme"])

  const toggleColorMode: ToggleColorMode = useCallback(
    theme => {
      setCookie("theme", theme)
    },
    [setCookie]
  )

  const detectDeviceTheme = useCallback(() => {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)")

    darkThemeMq.addEventListener("change", event => {
      const newColorScheme: ColorMode = event.matches ? "dark" : "light"

      setCookie("theme", newColorScheme)
    })

    if (darkThemeMq.matches) {
      setCookie("theme", "dark")
    } else {
      setCookie("theme", "light")
    }
  }, [setCookie])

  const modifiedTheme = React.useMemo(
    () => createTheme(getDesignTokens(cookies.theme)),
    [cookies.theme]
  )

  useEffect(() => {
    if (!cookies.theme) {
      detectDeviceTheme()
    }
  }, [cookies.theme, detectDeviceTheme])

  const value = {
    toggleColorMode,
    mode: cookies.theme,
    theme: modifiedTheme,
  }

  return (
    <ColorModeContext.Provider value={value}>
      {children}
    </ColorModeContext.Provider>
  )
}
