import { createBrowserRouter } from "react-router-dom"
import Error from "./pages/Error/Error.tsx"
import Auth from "./pages/Auth/Auth.tsx"
import Signin from "./pages/Auth/Signin/Signin.tsx"
import Signup from "./pages/Auth/Signup/Signup.tsx"

export const router = createBrowserRouter([
  {
    path: "*",
    Component: Error,
  },
  {
    path: "/auth",
    Component: Auth,
    children: [
      {
        path: "signin",
        Component: Signin,
      },
      {
        path: "signup",
        Component: Signup,
      },
    ],
  },
])
