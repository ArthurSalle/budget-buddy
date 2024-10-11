import { createBrowserRouter } from "react-router-dom"
import App from "./App"
import SignInPage from "./pages/auth/SignInPage"
import SignUpPage from "./pages/auth/SignUpPage"
import DashboardPage from "./pages/Dashboard"
import DashboardLayout from "./layouts/DashboardLayout"
import RootLayout from "./layouts/RootLayout"

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <App /> },
      { path: "/sign-in/*", element: <SignInPage /> },
      { path: "/sign-up/*", element: <SignUpPage /> },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [{ path: "/dashboard", element: <DashboardPage /> }],
  },
])
