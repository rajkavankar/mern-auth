import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "bootstrap/dist/css/bootstrap.min.css"
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom"
import { Provider } from "react-redux"
import { store } from "./app/store.jsx"
import LoginPage from "./pages/LoginPage.jsx"
import Dashboard from "./pages/Dashboard.jsx"
import ErrorPage from "./pages/ErrorPage.jsx"
import ProtectedRoute from "./components/ProtectedRoute.jsx"
import { GoogleOAuthProvider } from "@react-oauth/google"
import ConfirmOtpPage from "./pages/ConfirmOtpPage.jsx"
import CreateUserPage from "./pages/CreateUserPage.jsx"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<App />}>
        <Route path='' element={<LoginPage />} />
        <Route path='/verifyotp' element={<ConfirmOtpPage />} />
        <Route path='/createuser' element={<CreateUserPage />} />

        <Route path='' element={<ProtectedRoute />}>
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>
      </Route>
      <Route path='*' element={<ErrorPage />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
        <RouterProvider router={router} />
      </GoogleOAuthProvider>
    </React.StrictMode>
  </Provider>
)
