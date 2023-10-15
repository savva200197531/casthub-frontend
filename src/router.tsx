import { createBrowserRouter } from "react-router-dom"

export const router = createBrowserRouter([
  {
    path: "*",
    element: <div>404</div>,
  },
  {
    path: "/test",
    element: <div>321</div>,
  },
])
