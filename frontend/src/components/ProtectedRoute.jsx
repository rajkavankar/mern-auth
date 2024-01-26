import { Navigate, Outlet } from "react-router-dom"
import { useSelector } from "react-redux"

const ProtectedRoute = () => {
  const { userInfo } = useSelector((state) => state.user)
  return userInfo ? <Outlet /> : <Navigate to='/' replace />
}

export default ProtectedRoute
