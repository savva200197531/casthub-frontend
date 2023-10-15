import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { CookiesProvider } from "react-cookie"

import App from "./App.tsx"
import { ColorModeProvider } from "./contexts/colorMode/ColorModeContext.tsx"

const router = createBrowserRouter([
  {
    path: "*",
    element: <App />,
  },
  {
    path: "/test",
    element: <div>321</div>,
  },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CookiesProvider>
      <ColorModeProvider>
        <RouterProvider router={router} />
      </ColorModeProvider>
    </CookiesProvider>
  </React.StrictMode>
)
