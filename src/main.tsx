import React from "react"
import ReactDOM from "react-dom/client"

import App from "./App.tsx"
import { CookiesProvider } from "react-cookie"
import { ColorModeProvider } from "./contexts/colorMode/ColorModeContext.tsx"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CookiesProvider>
      <ColorModeProvider>
        <App />
      </ColorModeProvider>
    </CookiesProvider>
  </React.StrictMode>
)
